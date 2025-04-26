---
sidebar_position: 2
---

# Try-Except Blocks

Exceptions signal problems within your code; however, they can be handled gracefully! 

## The Basics of Exception Handling

Exception handling in Python uses four key keywords:
- `try`: Encloses code that might raise an exception. Essentially, "try to run this code"
- `except`: Handles specific exceptions that occur in the try block. Now, "if an exception occurs when trying that code, run this code"
- `else`: Executes if the try block doesn't raise an exception
- `finally`: Executes regardless of whether an exception occurred

Here's the basic syntax:

```python
try:
    # Code that might cause an exception
    pass
except SomeException:
    # Code that runs if SomeException occurs
    pass
except AnotherException:
    # Code that runs if AnotherException occurs
    pass
else:
    # Code that runs if no exceptions occur
    pass
finally:
    # Code that always runs, with or without exceptions
    pass
```

Example:

```python
try:
    x = int(input("Enter a number: "))
    result = 10 / x
    print(f"10 divided by {x} is {result}")
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("You can't divide by zero!")
```

## Catching Multiple Exceptions

Sometimes the code within your "try" block might raise more than one type of exception. (see the code above)

### 1. Multiple except blocks

One option is to have multiple `except` blocks chained together.

```python
try:
    number = int(input("Enter a number: "))
    result = 100 / number
    print(f"100 / {number} = {result}")
except ValueError:
    print("That wasn't a valid number")
except ZeroDivisionError:
    print("You cannot divide by zero")
```

### 2. Handling multiple exceptions in one except block

Another option (especially if the exceptions are related) is to use a tuple of exceptions in the `except` block. This will be run if ANY of the exceptions within the tuple are raised.

```python
try:
    number = int(input("Enter a number: "))
    result = 100 / number
    print(f"100 / {number} = {result}")
except (ValueError, ZeroDivisionError):
    print("Invalid input: enter a non-zero number")
```

### 3. Catching all exceptions (not recommended):

You can also use the `except` keyword without specifying an exception type. This will catch ANY exception that occurs in the `try` block.

```python
try:
    risky_operation()  # This function doesn't exist
except:
    print("Something went wrong!")
```

A better approach is to catch `Exception`, which includes most standard exceptions but not system exit signals. And then use the `as` keyword to capture the exception object.

```python
try:
    # Let's simulate a function that doesn't exist
    # to demonstrate catching Exception
    nonexistent_function()
except Exception as e:
    print(f"An error occurred: {type(e).__name__}: {e}")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

## The `as` Keyword

The `as` keyword lets you capture and access details about the exception:

```python
try:
    with open("nonexistent_file.txt", "r") as file:
        contents = file.read()
except FileNotFoundError as e:
    print(f"Error details: {e}")
    print(f"Error type: {type(e).__name__}")
    print(f"Error args: {e.args}")
    # Create the file since it doesn't exist
    with open("nonexistent_file.txt", "w") as file:
        file.write("This file was created by the except block")
    print("Created the missing file")
```

## The `else` Clause

The `else` clause runs if no exceptions occur in the try block. This is useful for code that should run only if the try block succeeds:

```python
def safe_division(x, y):
    try:
        result = x / y
    except ZeroDivisionError:
        print("Division by zero!")
        return None
    else:
        # This only runs if no exception occurs
        print("Division succeeded")
        return result
    
# Test with valid division
print("Dividing 10 by 2:")
print(f"Result: {safe_division(10, 2)}\n")

# Test with zero division
print("Dividing 10 by 0:")
print(f"Result: {safe_division(10, 0)}")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

The key benefit of using `else` is that it clearly separates the success path from the error handling path, making your code more readable. However, you can also just put the code into the `try` block and it will run if no exceptions occur.

## The `finally` Clause

The `finally` clause runs whether an exception occurs or not. This is useful for code that should run regardless of the outcome (like closing resources):

```python
def process_file(filename):
    file = None
    try:
        file = open(filename, "r")
        content = file.read()
        print(f"File contents ({len(content)} characters):")
        print(content[:100] + "..." if len(content) > 100 else content)
        return True
    except FileNotFoundError:
        print(f"Error: The file '{filename}' does not exist")
        # Create a sample file
        with open(filename, "w") as f:
            f.write("This is a sample file created because the original wasn't found.")
        print(f"Created a sample file named '{filename}'")
        return False
    finally:
        print("Executing finally clause...")
        if file is not None:
            file.close()
            print("File closed")

# Try with a file that might not exist
process_file("sample_text.txt")
```


## Best Practices for Exception Handling

### 1. Be specific about which exceptions you catch

Instead of:
```python
try:
    # Some code
except Exception:
    # Handle all exceptions the same way
    pass
```

Prefer:
```python
try:
    # Some code
except ValueError:
    # Handle value errors
    pass
except OSError:
    # Handle OS errors
    pass
```

### 2. Keep your try blocks as small as possible

Focus only on the code that might raise the exception:

Instead of:
```python
try:
    data = get_data_from_file(filename)
    process_data(data)
    save_results(results)
except FileNotFoundError:
    print("File not found")
```

Prefer:
```python
try:
    data = get_data_from_file(filename)
except FileNotFoundError:
    print("File not found")
    return

process_data(data)
save_results(results)
```

### 3. Don't suppress exceptions without good reason

Bad:
```python
try:
    # Complex operation
except Exception:
    pass  # Ignore all errors
```

Better:
```python
try:
    # Complex operation
except Exception as e:
    log_error(e)  # At least log the error
    # Maybe also notify the user
```

### 4. Use context managers (`with` statement) when possible

Many resources in Python support context managers, which automatically handle cleanup:

```python
# Without context manager
try:
    file = open("data.txt", "r")
    content = file.read()
finally:
    file.close()

# With context manager - much cleaner!
with open("data.txt", "r") as file:
    content = file.read()
# File is automatically closed when the with block exits
```

## Real-World Exception Handling Examples

### Example 1: User Input Validation

```python
def get_age():
    try:
        age = int(input("Please enter your age: "))
        if age < 0 or age > 120:
            raise ValueError("Age must be between 0 and 120")
        return age
    except ValueError as e:
        if str(e) == "Age must be between 0 and 120":
            print(e)
        else:
            print("Please enter a valid number")

# Uncomment to try it out
# age = get_age()
# print(f"Your age is {age}")
```

### Example 2: Handling File Operations

```python
def read_config_file(filename):
    try:
        with open(filename, "r") as file:
            return file.read()
    except FileNotFoundError:
        print(f"Config file {filename} not found. Using in-memory defaults.")
        # <do something with in-memory defaults>
    except PermissionError:
        print(f"Permission denied. Using in-memory defaults.")
        # <do something with in-memory defaults>

# Try to read a config file
config = read_config_file("app_config.ini")
print("\nFinal configuration:")
print(config)
```