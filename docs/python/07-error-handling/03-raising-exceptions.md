---
sidebar_position: 3
---

# Raising Exceptions

In the previous lessons, we learned how to handle exceptions that occur during program execution. Now, we'll explore how to create and raise our own exceptions. This skill is essential for building robust libraries, enforcing input validation, and creating clear error messages for users of your code.

## Why Raise Exceptions?

Raising exceptions allows you to:

1. **Signal error conditions** - Indicate when something unexpected has happened
2. **Enforce constraints** - Ensure input values meet requirements
3. **Create clear APIs** - Define the error conditions of your functions
4. **Maintain control flow** - Handle exceptional conditions without complex if/else chains

## The `raise` Statement

Python's `raise` statement lets you trigger an exception:

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

Python has many built-in exceptions you can raise. Choose the one that best describes the error condition:

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

Common built-in exceptions to raise include:

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

While built-in exceptions are useful, sometimes you need custom exceptions that are specific to your application. Creating your own exception classes is easy—simply inherit from `Exception` or one of its subclasses:

```python
# Define custom exceptions
class NetworkError(Exception):
    """Base class for network-related errors"""
    pass

class ConnectionError(NetworkError):
    """Raised when a connection cannot be established"""
    pass

class TimeoutError(NetworkError):
    """Raised when a connection times out"""
    pass

class DataFormatError(NetworkError):
    """Raised when received data has an invalid format"""
    pass

# Function that might raise these custom exceptions
def fetch_data(url, timeout=30):
    import random
    
    # Simulate network operations
    print(f"Connecting to {url}...")
    
    # Randomly select an error scenario for demonstration
    scenario = random.choice(["success", "timeout", "connection", "format"])
    
    if scenario == "timeout":
        raise TimeoutError(f"Connection to {url} timed out after {timeout} seconds")
    elif scenario == "connection":
        raise ConnectionError(f"Could not connect to {url}. Server may be down.")
    elif scenario == "format":
        raise DataFormatError(f"Data received from {url} has invalid format")
    else:
        print("Connection successful!")
        return {"status": "success", "data": [1, 2, 3, 4, 5]}

# Try to fetch data with error handling
try:
    data = fetch_data("https://example.com/api/data")
    print(f"Received data: {data}")
except TimeoutError as e:
    print(f"Timeout error: {e}")
    print("Retrying with increased timeout...")
except ConnectionError as e:
    print(f"Connection problem: {e}")
    print("Please check your internet connection.")
except DataFormatError as e:
    print(f"Data format issue: {e}")
    print("Contact the API provider for assistance.")
except NetworkError as e:
    print(f"Other network error: {e}")
except Exception as e:
    print(f"Unexpected error: {type(e).__name__}: {e}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Benefits of Custom Exceptions

1. **Code organization**: Group related exceptions in a hierarchy
2. **Specific catching**: Catch only specific types of errors
3. **Clearer error messages**: Provide context-specific error information
4. **API documentation**: Clearly communicate possible failure modes

## Adding Information to Exceptions

Custom exceptions can store additional information about the error condition:

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

Sometimes you want to catch an exception, do something, and then re-raise it:

```python
def process_data(data):
    try:
        result = data[0] / data[1]
        return result
    except ZeroDivisionError:
        print("Logging division by zero...")
        # Re-raise the same exception
        raise
    except IndexError:
        print("Data list is too short!")
        # Transform into a different exception
        raise ValueError("Data must contain at least two numbers")

# Try different inputs
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

Re-raising is useful when you want to:
- Log the error before propagating it
- Add cleanup code before letting the exception continue
- Transform one type of exception into another
- Add context to the exception

## Exception Chaining

When you catch an exception and raise a new one, you might lose the original exception information. Python's exception chaining preserves this information:

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

Exception chaining provides a clear trail of what went wrong and why, which is invaluable for debugging.

## The `assert` Statement

Python's `assert` statement provides a shorthand way to verify that conditions are met, raising an `AssertionError` if they aren't:

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

- During development to catch logical errors
- For internal checks that should never fail
- To document and verify assumptions

**Important note**: Assertions can be disabled in Python (with the `-O` optimization flag), so they should only be used for debugging and development, not for enforcing conditions that must always be checked.

## Best Practices for Raising Exceptions

1. **Choose the right exception type**: Use the most specific built-in exception or create a custom one
2. **Provide informative error messages**: Include details about what went wrong and how to fix it
3. **Create exception hierarchies**: Organize related exceptions in a class hierarchy
4. **Document the exceptions**: Let users know what exceptions they should expect and handle
5. **Avoid catching and silencing exceptions**: Only catch exceptions you can properly handle
6. **Use assertions for internal checks**: Verify assumptions during development
7. **Consider performance**: Exception handling has overhead, so don't use it for normal flow control

## Real-World Examples

### Example 1: API Input Validation

```python
class APIError(Exception):
    """Base exception for API errors"""
    def __init__(self, message, status_code=400):
        self.status_code = status_code
        self.message = message
        super().__init__(message)

class InvalidInputError(APIError):
    """Raised when API input validation fails"""
    def __init__(self, message):
        super().__init__(message, status_code=400)  # Bad Request

class AuthenticationError(APIError):
    """Raised when authentication fails"""
    def __init__(self, message="Authentication required"):
        super().__init__(message, status_code=401)  # Unauthorized

class NotFoundError(APIError):
    """Raised when a requested resource doesn't exist"""
    def __init__(self, resource_type, resource_id):
        message = f"{resource_type} with ID {resource_id} not found"
        super().__init__(message, status_code=404)  # Not Found

# Simulated API request handler
def handle_request(request):
    # Check authentication
    if "api_key" not in request:
        raise AuthenticationError()
    
    # Validate input
    if "user_id" not in request:
        raise InvalidInputError("user_id is required")
    
    if not isinstance(request.get("user_id"), int):
        raise InvalidInputError("user_id must be an integer")
    
    # Check if resource exists
    user_id = request["user_id"]
    if user_id not in [1, 2, 3]:  # Simplified check
        raise NotFoundError("User", user_id)
    
    # Process the request
    print(f"Processing request for user {user_id}")
    return {"status": "success", "user_id": user_id, "data": "User data here"}

# Simulated API response function
def api_response(request):
    try:
        result = handle_request(request)
        return {
            "status": "success",
            "data": result
        }
    except APIError as e:
        return {
            "status": "error",
            "status_code": e.status_code,
            "message": e.message
        }

# Test different requests
print("\nValid request:")
response = api_response({"api_key": "12345", "user_id": 1})
print(response)

print("\nMissing API key:")
response = api_response({"user_id": 1})
print(response)

print("\nMissing user_id:")
response = api_response({"api_key": "12345"})
print(response)

print("\nInvalid user_id type:")
response = api_response({"api_key": "12345", "user_id": "one"})
print(response)

print("\nUser not found:")
response = api_response({"api_key": "12345", "user_id": 999})
print(response)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Example 2: File Processing Pipeline

```python
class ProcessingError(Exception):
    """Base exception for file processing errors"""
    pass

class FileReadError(ProcessingError):
    """Raised when a file cannot be read"""
    pass

class ValidationError(ProcessingError):
    """Raised when file content fails validation"""
    pass

class TransformationError(ProcessingError):
    """Raised when data transformation fails"""
    pass

class OutputError(ProcessingError):
    """Raised when results cannot be saved"""
    pass

def process_file(filename):
    try:
        # Step 1: Read the file
        print(f"Reading file: {filename}")
        try:
            # Simulate file reading (this would normally use open())
            if filename.endswith(".invalid"):
                raise FileNotFoundError(f"File not found: {filename}")
            
            if filename.endswith(".locked"):
                raise PermissionError(f"Permission denied: {filename}")
                
            raw_data = f"Sample data from {filename}"
            print(f"Successfully read file: {len(raw_data)} bytes")
        except (FileNotFoundError, PermissionError) as e:
            # Convert to our custom exception type
            raise FileReadError(f"Could not read file: {e}") from e
            
        # Step 2: Validate the data
        print("Validating data...")
        if "Invalid" in filename:
            raise ValidationError("File contains invalid data format")
            
        # Step 3: Transform the data
        print("Transforming data...")
        if "transform_error" in filename:
            raise TransformationError("Could not transform data: value out of range")
        
        processed_data = f"Processed: {raw_data}"
        
        # Step 4: Save the results
        output_filename = f"output_{filename}"
        print(f"Saving results to {output_filename}")
        if "output_error" in filename:
            raise OutputError(f"Could not write to {output_filename}")
            
        print(f"Successfully processed {filename}")
        return processed_data
        
    except ProcessingError as e:
        print(f"Processing failed: {e}")
        # We could log the error here
        # We might also want to clean up any temporary files
        return None

# Test with different scenarios
filenames = [
    "data.txt",                  # Should succeed
    "data.invalid",              # File not found
    "data.locked",               # Permission error
    "Invalid_data.txt",          # Validation error
    "data_transform_error.txt",  # Transformation error
    "data_output_error.txt"      # Output error
]

for filename in filenames:
    print(f"\n{'='*40}\nProcessing {filename}:")
    result = process_file(filename)
    if result:
        print(f"Final result: {result}")
    else:
        print("Processing returned no result due to errors")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Summary

Raising exceptions is a powerful technique for handling error conditions in Python. By raising built-in exceptions or creating your own custom exception classes, you can clearly signal when something goes wrong, provide detailed error information, and design more robust programs. Remember to choose the right exception type, provide informative error messages, and document the exceptions your code might raise. Combined with proper exception handling (try-except blocks), raising exceptions helps create code that is both robust and maintainable. 