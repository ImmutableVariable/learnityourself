---
sidebar_position: 2
---

# Try-Except Blocks

In the previous lesson, we learned about exceptions and how they signal problems in our code. Now, let's explore how to handle these exceptions gracefully using try-except blocks, allowing our programs to recover from errors rather than crashing.

## The Basics of Exception Handling

Exception handling in Python uses four key keywords:
- `try`: Encloses code that might raise an exception
- `except`: Handles specific exceptions that occur in the try block
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

Let's see a simple example:

```python
# Basic try-except example
try:
    x = int(input("Enter a number: "))
    result = 10 / x
    print(f"10 divided by {x} is {result}")
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("You can't divide by zero!")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Catching Multiple Exceptions

There are several ways to handle multiple exceptions:

### 1. Multiple except blocks

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
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### 2. Handling multiple exceptions in one except block

```python
try:
    number = int(input("Enter a number: "))
    result = 100 / number
    print(f"100 / {number} = {result}")
except (ValueError, ZeroDivisionError):
    print("Invalid input: enter a non-zero number")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### 3. Catching all exceptions

You can catch all exceptions using a bare `except:` clause, but this is generally considered bad practice because it can mask unexpected errors:

```python
# Not recommended, but shown for completeness
try:
    risky_operation()  # This function doesn't exist
except:
    print("Something went wrong!")
```

A better approach is to catch `Exception`, which includes most standard exceptions but not system exit signals:

```python
try:
    # Let's simulate a function that doesn't exist
    # to demonstrate catching Exception
    nonexistent_function()
except Exception as e:
    print(f"An error occurred: {type(e).__name__}: {e}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## The `as` Keyword

The `as` keyword lets you capture the exception object itself, giving you access to details about the error:

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
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

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
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

The key benefit of using `else` is that it clearly separates the success path from the error handling path, making your code more readable. However, it's not always necessary since you can simply put the `print("Division succeeded")` in the `try` block.

*Note: My personal preference is to not use `else` blocks at all. I find that they can make the code more confusing to read and harder to understand simply because readers/reviewers may try to then find an `if` statement. Python can be very hard to read at times, so I try to avoid adding unnecessary complexity. -JT*

## The `finally` Clause

The `finally` clause runs whether an exception occurs or not. It's perfect for cleanup code like closing files or network connections:

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
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

The `finally` block is especially important when working with resources that need proper cleanup regardless of exceptions, like:
- File handles
- Database connections
- Network sockets
- Locks in multithreaded programs

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
    while True:
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
        print(f"Config file {filename} not found. Creating default configuration.")
        with open(filename, "w") as file:
            default_config = "# Default configuration\nMAX_USERS=10\nDEBUG=False\n"
            file.write(default_config)
        return default_config
    except PermissionError:
        print(f"No permission to read {filename}. Using in-memory defaults.")
        return "# In-memory defaults\nMAX_USERS=5\nDEBUG=True\n"

# Try to read a config file
config = read_config_file("app_config.ini")
print("\nFinal configuration:")
print(config)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Example 3: Network Communication

```python
def fetch_data_from_api(url):
    """Simulate fetching data from an API with potential errors"""
    import random
    error_type = random.choice(["timeout", "connection", "data", "success"])
    
    try:
        print(f"Attempting to connect to {url}...")
        
        if error_type == "timeout":
            raise TimeoutError("API request timed out after 30 seconds")
        elif error_type == "connection":
            raise ConnectionError("Could not connect to the server")
        elif error_type == "data":
            response = "Invalid data format"
            raise ValueError(f"Received invalid data: {response}")
        else:
            print("Connected successfully!")
            return {"status": "success", "data": [1, 2, 3, 4, 5]}
            
    except TimeoutError as e:
        print(f"Error: {e}")
        print("Retrying with increased timeout...")
        return {"status": "error", "message": "Timeout, using cached data", "data": [0, 0, 0]}
        
    except ConnectionError as e:
        print(f"Error: {e}")
        print("Could not reach the server")
        return {"status": "error", "message": "Connection failed, using cached data", "data": [0, 0, 0]}
        
    except ValueError as e:
        print(f"Error: {e}")
        print("Data processing error")
        return {"status": "error", "message": "Invalid data format", "data": []}
        
    except Exception as e:
        print(f"Unexpected error: {type(e).__name__}: {e}")
        return {"status": "error", "message": "Unknown error", "data": []}

# Try to fetch data from an API
result = fetch_data_from_api("https://api.example.com/data")
print("\nFinal result:")
print(result)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Exception Handling in Real Applications

In professional applications, proper exception handling is crucial:

1. **Web Applications**: Handle exceptions to prevent crashes and provide user-friendly error messages
2. **Data Processing**: Ensure partial failures don't stop entire batch processes
3. **APIs**: Return proper error codes and messages instead of exposing internal errors
4. **User Interfaces**: Present helpful error messages rather than crashing
5. **System Tools**: Log errors and continue operation where possible

## Summary

Try-except blocks are Python's way of gracefully handling errors. By properly using try, except, else, and finally clauses, you can write code that recovers from errors, provides helpful feedback, and ensures resources are properly managed. Remember to be specific about which exceptions you catch, keep your try blocks focused, and avoid suppressing exceptions unnecessarily. In the next lesson, we'll learn how to create and raise your own custom exceptions. 