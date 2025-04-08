---
sidebar_position: 1
---
# Python Basics

Python is a versatile, high-level programming language known for its simplicity and readability. Before diving into specific concepts, let's understand some fundamental aspects of Python.

## Python Philosophy

Python was designed with a philosophy that emphasizes code readability and simplicity. The core principles are captured in "The Zen of Python" by Tim Peters, which you can view by running:

```python
import this
```

Key principles include:
- Simple is better than complex
- Readability counts
- Explicit is better than implicit
- Flat is better than nested

## Python Versions

Python has two major versions in use today:
- **Python 3.x** (current and recommended) - All examples in this course use Python 3
- **Python 2.x** (legacy, support ended January 2020)

Always check which version you're using by running:

```python
import sys
print(sys.version)
```

## Running Python Code

There are several ways to run Python code:

1. **Interactive Mode (REPL)**: Open a terminal and type `python` to start the Python interpreter
2. **Script Mode**: Create a file with a `.py` extension and run it with `python filename.py`
3. **IDEs and Code Editors**: Tools like VS Code, PyCharm, or Jupyter Notebooks

## Comments in Python

Comments are important for documenting your code. Python uses the `#` symbol for single-line comments:

```python
# This is a comment
print("Hello, World!")  # This is an inline comment
```

For multi-line comments, you can use triple quotes (technically, these are docstrings when used at the beginning of modules, classes, or functions):

```python
"""
This is a multi-line comment.
You can write as many lines as you want.
It's useful for longer explanations.
"""
```

## Indentation Matters

Unlike many programming languages that use braces `{}` to define blocks of code, Python uses indentation:

```python
if True:
    print("Indented code belongs to the if block")
    print("This is also in the if block")
print("This is outside the if block")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

**Good Practice**:
- Use 4 spaces for each level of indentation (PEP 8 recommendation)
- Be consistent with your indentation

**Bad Practice**:
```python
if True:
  print("Using 2 spaces")
    print("Then using 4 spaces")  # This will cause an IndentationError
```

**Why it's Bad**: Inconsistent indentation will cause errors and make your code hard to read.

## Your First Python Program

The traditional first program in any language is "Hello, World!":

```python
print("Hello, World!")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

Let's analyze this simple program:
- `print()` is a built-in function that displays output
- The text inside the parentheses is a string (enclosed in quotes)

## Common Mistakes for Beginners

1. **Incorrect Indentation**:
   ```python
   # Bad
   if True:
   print("This will cause an error")
   
   # Good
   if True:
       print("Properly indented")
   ```

2. **Forgetting Colons**:
   ```python
   # Bad
   if True
       print("Missing colon after condition")
   
   # Good
   if True:
       print("Colon included")
   ```

3. **Mixing Tabs and Spaces**:
   ```python
   # Bad (mixing tabs and spaces - hard to show in text)
   if True:
       print("Indented with spaces")
   	print("Indented with a tab")
   
   # Good
   if True:
       print("Consistent indentation")
       print("Still using spaces")
   ```

4. **Case Sensitivity Issues**:
   ```python
   # Bad
   Print("Python is case-sensitive")  # 'Print' is not recognized
   
   # Good
   print("Correct function name")
   ```

Python is a beginner-friendly language, but attention to detail matters. In the next lessons, we'll explore variables, data types, and how to work with them in Python. 