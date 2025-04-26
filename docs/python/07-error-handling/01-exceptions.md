---
sidebar_position: 1
---

# Exceptions

In Python, exceptions are used to handle errors gracefully. Instead of allowing your program to crash when something goes wrong, Python raises an exception, signaling that an error has occurred and providing useful information to resolve it. Mastering exception handling helps you create reliable and crash-free programs.

## What Are Exceptions?

Exceptions are events that disrupt the normal flow of your program. They occur when something goes wrong, and Python raises an exception to indicate the issue, also known as an error, has occurred. When this happens, Python will pause the execution of your program (a bad thing) unless you handle the exception gracefully.

Consider this common scenario:

```python
# This will cause an error
user_input = "hello"
result = int(user_input)  # Trying to convert a string "hello" to an integer
print(result)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

When you run this code, Python raises a ValueError exception:

```bash
ValueError: invalid literal for int() with base 10: 'hello'
```

Because this exception is raised, the program halts, and the value of `result` is never printed. 

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

## Exception Hierarchy

Python exceptions are organized in a hierarchy. At the top is BaseException, with Exception being the base class for most exceptions you’ll encounter. Specific exceptions inherit from more general ones. 

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

This hierarchy is crucial for handling exceptions. For example, if you catch `OSError`, you also catch its subclasses like `FileNotFoundError`, but not the other way around.

## The Traceback

When an exception occurs, Python generates a traceback. Although it may be confusing, it's simply a list of the function calls that led to the exception.

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
    traceback.print_exc(file=sys.stdout)  # Print the traceback
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Read tracebacks from bottom to top:
1. The last line shows the exception type and message
2. The line above shows where the exception occurred
3. Each preceding line shows the function calls leading to the exception (the "call stack")

## Understanding Runtime vs. Syntax Errors

There are two main categories of errors:

### Syntax Errors

Syntax errors occur when the Python interpreter can't understand your code due to a violation of the language's rules. These errors are caught before the program runs.

```python
# Syntax error example (missing closing parenthesis)
print("Hello world"
```

### Runtime Errors

These errors actually occur during the program's execution. These errors raise exceptions at runtime and can be handled otherwise it will panic (terminate your program). 

```python
# Runtime error example
x = 10 / 0  # This is syntactically correct but fails at runtime
```