---
sidebar_position: 1
---
# Variables and Data Types

Python makes working with data easy through its intuitive variable system and built-in data types.

## Variables

In Python, you can create variables simply by assigning values to them:

```python
# No declaration needed, just assign a value
name = "Alice"
age = 25
height = 1.75
is_student = True
```

Python is dynamically typed, meaning you don't need to declare the variable type - Python figures it out automatically.

## Basic Data Types

### Strings

Strings are sequences of characters enclosed in quotes:

```python
greeting = "Hello, World!"
name = 'Alice'
multi_line = """This is a
multi-line string"""
```

```python
name = "Python Learner"
print("Hello, " + name + "!")
print(f"Hello, {name}!")  # f-strings (Python 3.6+)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

### Numbers

Python has several numeric types:

```python
integer = 42
floating_point = 3.14159
complex_number = 3 + 4j
```

```python
# Basic arithmetic
x = 10
y = 3
print(f"Addition: {x + y}")
print(f"Subtraction: {x - y}")
print(f"Multiplication: {x * y}")
print(f"Division: {x / y}")
print(f"Integer Division: {x // y}")
print(f"Remainder: {x % y}")
print(f"Power: {x ** y}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

### Booleans

Booleans represent True or False values:

```python
is_valid = True
has_error = False
```

### None

`None` is a special value representing the absence of a value:

```python
result = None
```

## Type Conversion

You can convert between data types using built-in functions:

```python
# Converting between types
num_str = "42"
num_int = int(num_str)
print(f"String converted to integer: {num_int}")

pi = 3.14159
pi_int = int(pi)
print(f"Float truncated to integer: {pi_int}")

count = 100
count_str = str(count)
print(f"Integer converted to string: {count_str}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Checking Types

You can check a variable's type using the `type()` function:

```python
name = "Alice"
age = 25
height = 1.75
is_student = True

print(f"Type of name: {type(name)}")
print(f"Type of age: {type(age)}")
print(f"Type of height: {type(height)}")
print(f"Type of is_student: {type(is_student)}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

In the next lesson, we'll explore how to work with collections of data using Python's built-in data structures. 