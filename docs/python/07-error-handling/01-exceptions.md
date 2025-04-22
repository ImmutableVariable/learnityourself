---
sidebar_position: 1
---

# Exceptions

When your Python program encounters a problem it can't handle, it raises an "exception" or a "signal" that something has gone wrong. Understanding how to work with exceptions is important for writing reliable, robust/"crash free" programs that can gracefully handle errors instead of well ... crashing.

## What Are Exceptions?

Exceptions are events that occur during program execution that disrupt the normal flow of instructions. They're Python's way of saying "I can't continue with what you asked me to do, but never fear! I can tell you what went wrong and how to fix it."

Consider this common scenario:

```python
# This will cause an error
user_input = "hello"
result = int(user_input)  # Trying to convert a string "hello" to an integer
print(result)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

When you run this code, Python raises a `ValueError` exception with a message like: `ValueError: invalid literal for int() with base 10: 'hello'`

Rather than thinking of exceptions as errors to be avoided, it's better to view them as important messages that help you handle unexpected situations.

## Common Built-in Exceptions

Python has many built-in exceptions. Here are some you'll frequently encounter:

| Exception | Description | Example |
|-----------|-------------|---------|
| `SyntaxError` | Code is not grammatically correct | Missing colon, parenthesis |
| `IndentationError` | Improper indentation | Mixed tabs and spaces |
| `NameError` | Using a variable that doesn't exist | `print(undefined_variable)` |
| `TypeError` | Operation on incompatible type | `"2" + 2` |
| `ValueError` | Right type but wrong value | `int("hello")` |
| `IndexError` | Index out of range | `my_list[999]` when list is shorter |
| `KeyError` | Accessing non-existent dictionary key | `my_dict["missing_key"]` |
| `FileNotFoundError` | File not found | `open("nonexistent_file.txt")` |
| `ZeroDivisionError` | Division by zero | `5 / 0` |
| `AttributeError` | Accessing non-existent attribute | `"hello".some_function()` |
| `ImportError` | Failed import | `import nonexistent_module` |
| `IOError` | Input/Output operation failed | Failed file operations |
| `RuntimeError` | Generic error during execution | Various runtime issues |

Let's see these exceptions in action:

```python
# Let's trigger some common exceptions and see what happens

def my_function():
    # List of exception demonstrations
    demos = [
        ("NameError", lambda: undefined_variable),  # Variable doesn't exist
        ("TypeError", lambda: "2" + 2),  # String + int
        ("ValueError", lambda: int("hello")),  # Convert non-numeric string to int
        ("IndexError", lambda: [1, 2, 3][10]),  # Access beyond list end
        ("KeyError", lambda: {"a": 1}["b"]),  # Access non-existent key
        ("ZeroDivisionError", lambda: 5 / 0),  # Division by zero
        ("AttributeError", lambda: "hello".nonexistent_method()),  # Call non-existent method
        ("FileNotFoundError", lambda: open("nonexistent_file.txt"))  # Open missing file
    ]
    
    # Try each demo and catch the exception
    for name, demo_func in demos:
        try:
            print(f"\nTrying to trigger {name}:")
            result = demo_func()
            print(f"This succeeded without exception: {result}")
        except Exception as e:
            print(f"✓ Caught a {type(e).__name__}: {e}")

# Run the demonstrations
my_function()
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Exception Hierarchy

Python's exceptions form a hierarchy, with more specific exceptions inheriting from more general ones. At the top is `BaseException`, with `Exception` being the base class for most exceptions you'll work with.

Here's a simplified view of the hierarchy:

```
BaseException
 ├── SystemExit
 ├── KeyboardInterrupt
 ├── GeneratorExit
 └── Exception
      ├── StopIteration
      ├── ArithmeticError
      │    ├── FloatingPointError
      │    ├── OverflowError
      │    └── ZeroDivisionError
      ├── AssertionError
      ├── AttributeError
      ├── BufferError
      ├── EOFError
      ├── ImportError
      │    └── ModuleNotFoundError
      ├── LookupError
      │    ├── IndexError
      │    └── KeyError
      ├── NameError
      ├── OSError
      │    ├── FileNotFoundError
      │    ├── PermissionError
      │    └── more...
      ├── RuntimeError
      ├── SyntaxError
      ├── TypeError
      ├── ValueError
      └── more...
```

This hierarchy is very important when catching exceptions. For example, if you catch `OSError`, you'll also catch its subclasses like `FileNotFoundError` and `PermissionError`, but not the other way around.

## The Traceback

When an exception occurs, Python generates a "traceback" or a detailed report showing where the exception occurred and the sequence of function calls that led to it.

```python
# A function that causes an exception
def divide(a, b):
    return a / b

def calculate():
    return divide(10, 0)

# Try to run the function and see the traceback
try:
    result = calculate()
except ZeroDivisionError as e:
    import traceback
    print("An error occurred:")
    traceback.print_exc()  # Print the traceback
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Understanding tracebacks is vital for debugging. Read them from bottom to top:
1. The last line shows the exception type and message
2. The line above shows where the exception occurred
3. Each preceding line shows the function calls leading to the exception (the "call stack")

## Understanding Runtime vs. Syntax Errors

There are two main categories of errors:

1. **Syntax Errors**: Occur when Python can't understand your code because it violates the language rules. Python catches these before running your code.

```python
# Syntax error example (missing closing parenthesis)
print("Hello world"
```

2. **Runtime Errors**: Occur during program execution. These raise exceptions.

```python
# Runtime error example
x = 10 / 0  # This is syntactically correct but fails at runtime
```

Syntax errors must be fixed before your code will run at all. Runtime errors can be caught and handled with exception handling.

## Summary

Exceptions are Python's mechanism for signaling and handling errors. Understanding common exceptions, the exception hierarchy, and how to read tracebacks are essential skills for any Python programmer. In the next lesson, we'll learn how to handle these exceptions using try-except blocks, making our programs more robust and user-friendly. 