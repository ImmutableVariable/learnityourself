---
sidebar_position: 3
---

# Raising Exceptions

You can also raise your own exceptions in order to signal error conditions. This helps you create more robust and maintainable code. 

## The `raise` Statement

The `raise` statement allows you to manually trigger exceptions in your code:

```python
def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("Cannot divide by zero")
    return a / b

# Try the function with valid input
print(f"10 / 2 = {divide(10, 2)}")

# Try the function with invalid input
try:
    result = divide(10, 0)
except ZeroDivisionError as e:
    print(f"Error: {e}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Raising Built-in Exceptions

Python provides many built-in exceptions that you can raise, depending on the error condition:

```python
def process_age(age):
    if not isinstance(age, int):
        raise TypeError("Age must be an integer")
    
    if age < 0:
        raise ValueError("Age cannot be negative")
    
    if age > 120:
        raise ValueError("Age unrealistically high")
    
    print(f"Processing age: {age}")
    # Process the age...

# Test with different values
try:
    print("\nTrying with age = 30:")
    process_age(30)
    
    print("\nTrying with age = -5:")
    process_age(-5)
except Exception as e:
    print(f"Error: {e}")

try:
    print("\nTrying with age = 'twenty':")
    process_age("twenty")
except Exception as e:
    print(f"Error: {e}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Common exceptions to raise include:

| Exception | When to raise it |
|-----------|------------------|
| `ValueError` | When a function receives a value of the right type but wrong value |
| `TypeError` | When a function receives a value of the wrong type |
| `KeyError` | When a dictionary key is not found |
| `IndexError` | When a sequence index is out of range |
| `FileNotFoundError` | When a file cannot be found |
| `PermissionError` | When file permissions prevent an operation |
| `RuntimeError` | General errors that don't fit other categories |

## Creating Custom Exception Classes

While there are many built-in exceptions, you may also want to create your own custom exception classes to fit your specific needs. You can do this by inheriting from `Exception` or one of its subclasses:

```python
# Inherit from `Exception`
class FileProcessingError(Exception):
    """Base class for all file processing-related errors"""
    pass

class FileNotFoundError(FileProcessingError):
    """Raised when the specified file is not found"""
    pass

class InvalidFileFormatError(FileProcessingError):
    """Raised when the file format is invalid"""
    pass

class FileReadError(FileProcessingError):
    """Raised when there is an error reading the file"""
    pass

# Simulate a function that processes a file and may raise these exceptions
def process_file(file_path):
    import random
    
   # <Simulate file processing>
    
    # Randomly simulate one of several error scenarios for demonstration
    scenario = random.choice(["success", "not_found", "invalid_format", "read_error"])
    
    if scenario == "not_found":
        raise FileNotFoundError(f"The file at {file_path} could not be found.")
    elif scenario == "invalid_format":
        raise InvalidFileFormatError(f"The file at {file_path} has an unsupported format.")
    elif scenario == "read_error":
        raise FileReadError(f"An error occurred while reading the file at {file_path}.")
    else:
        print("File processed successfully!")
        return {"status": "success", "data": "File content processed successfully."}

# Example usage with error handling
try:
    result = process_file("data.txt")
    print(f"Processing result: {result}")
except FileNotFoundError as e:
    print(f"File not found: {e}")
    print("Please check the file path and try again.")
except InvalidFileFormatError as e:
    print(f"Invalid file format: {e}")
    print("Please provide a valid file format.")
except FileReadError as e:
    print(f"File read error: {e}")
    print("There was an issue accessing the file content.")
except FileProcessingError as e:
    print(f"File processing error: {e}")
except Exception as e:
    print(f"Unexpected error: {type(e).__name__}: {e}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Custom exceptions are VERY powerful. They allow you to create specific errors for your application and make specific error handling easier.

## Adding Information to Exceptions

When you create a custom exception, you can also add more information to it in order to provide more context to the user.

```python
class ValidationError(Exception):
    """Raised when input validation fails"""
    def __init__(self, field, message):
        self.field = field
        self.message = message
        super().__init__(f"Validation error for '{field}': {message}")

def validate_user(user_data):
    if "username" not in user_data:
        raise ValidationError("username", "Username is required")
    
    if len(user_data.get("username", "")) < 3:
        raise ValidationError("username", "Username must be at least 3 characters")
    
    if "email" not in user_data:
        raise ValidationError("email", "Email is required")
    
    if "@" not in user_data.get("email", ""):
        raise ValidationError("email", "Invalid email format")
    
    if "age" in user_data and user_data["age"] < 18:
        raise ValidationError("age", "User must be 18 or older")
    
    print("User data is valid!")
    return True

# Try with different user data
try:
    # Missing username
    user1 = {
        "email": "user@example.com",
        "age": 25
    }
    validate_user(user1)
except ValidationError as e:
    print(f"Error: {e}")
    print(f"Field: {e.field}")
    print(f"Message: {e.message}")

try:
    # Invalid email
    user2 = {
        "username": "john_doe",
        "email": "invalid-email",
        "age": 30
    }
    validate_user(user2)
except ValidationError as e:
    print(f"\nError: {e}")
    print(f"Field: {e.field}")
    print(f"Message: {e.message}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Re-raising Exceptions

You may catch an exception, handle it, and then re-raise it:

```python
def process_data(data):
    try:
        result = data[0] / data[1] 
        return result
    except ZeroDivisionError:
        print("Logging: Division by zero occurred.")
        # Re-raise the original ZeroDivisionError
        raise
    except IndexError:
        print("Logging: Data list is too short!")
        # Transform the IndexError into a more meaningful exception (ValueError)
        raise ValueError("Data must contain at least two numbers. Provided data list is too short.")
    except Exception as e:
        print(f"Unexpected error: {type(e).__name__}: {e}")
        raise  # Re-raise any other unexpected exceptions

try:
    print("\nTrying with [10, 2]:")
    result = process_data([10, 2])
    print(f"Result: {result}")
    
    print("\nTrying with [10, 0]:")
    result = process_data([10, 0])
except Exception as e:
    print(f"Caught exception: {type(e).__name__}: {e}")

try:
    print("\nTrying with [5]:")
    result = process_data([5])
except Exception as e:
    print(f"Caught exception: {type(e).__name__}: {e}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Re-raising is useful for:
- Logging errors before propagation
- Performing cleanup tasks before continuing
- Converting one exception type to another
- Adding context to the original exception

## Exception Chaining

To maintain the original exception details, Python supports exception chaining:

```python
def read_config():
    try:
        with open("config.ini", "r") as file:
            return file.read()
    except FileNotFoundError as e:
        # Raise a new exception while preserving the original cause
        raise RuntimeError("Configuration system failed") from e

# Try to read the config
try:
    config = read_config()
except RuntimeError as e:
    print(f"Error: {e}")
    # The original exception is available as '__cause__'
    print(f"Original cause: {e.__cause__}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Chaining preserves the original exception's context, making debugging easier.

## The `assert` Statement

The `assert` statement helps you verify that conditions are true. If not, it raises an `AssertionError`:

```python
def calculate_average(numbers):
    # Ensure we have a non-empty list
    assert len(numbers) > 0, "Cannot calculate average of empty list"
    
    # Ensure all elements are numbers
    for num in numbers:
        assert isinstance(num, (int, float)), f"Expected number but got {type(num).__name__}"
    
    return sum(numbers) / len(numbers)

# Test with valid input
try:
    avg = calculate_average([1, 2, 3, 4, 5])
    print(f"Average: {avg}")
    
    # Test with empty list
    avg = calculate_average([])
except AssertionError as e:
    print(f"AssertionError: {e}")

# Test with invalid input
try:
    avg = calculate_average([1, 2, "three", 4, 5])
except AssertionError as e:
    print(f"AssertionError: {e}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### When to Use `assert`

- For debugging and logical checks during development.
- To verify assumptions that should always be true
- For internal consistency checks.

**Important note**: Assertions can be disabled. In optimized python, the `python -O` flag can be used to disable assertions. They should not be used for critical checks.

## Best Practices for Raising Exceptions

1. **Choose the right exception type**: Create a custom exception class if needed
2. **Provide informative error messages**: Include relevant information in the exception message
3. **Document exceptions**: You should be documenting your code, AND its exceptions. This helps debugging!!


## Example

### File Processing

```python
class ProcessingError(Exception):
    """Base class for file processing errors"""
    pass

def process_file(filename):
    try:
        # Step 1: Read the file
        print(f"Reading file: {filename}")
        # Simulate file read
    except Exception as e:
        raise ProcessingError("File read error") from e
```