---
sidebar_position: 3
---
# Data Types

Every value in Python has a data type. Data types determine what operations can be performed on the data and how the data is stored in memory. Python includes several built-in data types to handle different kinds of information. You can also perform operations on these. A operation is just a manipulation of the data (for example, addition, subtraction, etc.).

## Numeric Types

Python has three numeric types: integers, floating-point numbers, and complex numbers.

### Integers (`int`)

An integer is a whole number (positive, negative, or zero) that doesn't have a fractional or decimal part, for example `42`, `-7`, or `0`. Integers can be of any size, limited only by the available memory.

```python
# Integer examples
age = 25
temperature = -10
zero = 0
large_number = 10000000
```

**Common Mistakes with Integers**:
```python
# Bad - using a float where an int is expected
try:
    result = 5 / 2  # The result is a float. `/` represents the divison operator 5 divided by 2 is 2.5, a non-integer value (not a whole number)
except TypeError as e:
    print(f"Error: {e}")
```

### Floating-Point Numbers (`float`)

Floating-point numbers represent real numbers with a decimal point.

```python
# Float examples
pi = 3.14159
height = 1.75
negative_float = -0.5
scientific = 1.23e-4  # Scientific notation (0.000123)
```

**Floating-Point Precision Issues**:
```python
# You can perform operations on any data type; however, float has some limitations (see example)
# Be aware of floating-point precision issues
a = 0.1 + 0.2             # addition operation of two floats (0.1 and 0.2)
                          # The result is not exactly 0.3 due to how floating-point numbers are represented in memory

print(a)                  # Output: 0.30000000000000004
print(a == 0.3)           # Output: False

# Better approach for comparing floats - Using a builtin function (if you do not understand this, don't worry about it for now)
# This function checks if two floating-point numbers are close enough to be considered equal
import math
print(math.isclose(a, 0.3))  # Output: True
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

### Complex Numbers (`complex`)

Complex numbers have a real and an imaginary part, written as `a + bj` where `j` is the imaginary unit.

```python
# Complex number examples
c1 = 3 + 4j
c2 = complex(2, 5)  # Creates 2 + 5j

# Accessing parts of a complex number
real_part = c1.real  # 3.0
imag_part = c1.imag  # 4.0

# You can also perform operations on complex numbers, such as addition, subtraction, multiplication, and division (similar to other types (int and float), i will go into more detail about this in the next lesson)
```

## Boolean Type (`bool`)

Booleans represent truth values: `True` or `False`. They're used in conditional expressions and logical operations.

```python
# Boolean examples
is_active = True
has_permission = False
```

## None Type (`NoneType`)

`None` is a special constant that represents the absence of a value or a null value.

```python
# None examples
result = None
value = None

# Checking for None
if result is None:
    print("No result yet")

# Common use case - default function parameters (you can come back to this later if you do not understand it)
def greet(name=None):
    if name is None:
        name = "Guest"
    return f"Hello, {name}!"
```

**Correct Way to Check for None**:
```python
# Bad - using equality operator
if result == None:  # Works but not recommended
    print("No result")

# Good - using identity operator
if result is None:  # PEP 8 recommended way
    print("No result")
```

## Sequence Types

Python has several sequence types for storing collections of items.

### Strings (`str`)

Strings are sequences of characters, enclosed in either single or double quotes.

```python
# String examples
name = "Alice"
message = 'Hello, World!'
multiline = """This is a
multiline string."""
```

## Checking Data Types

You can check the type of any value or variable using the `type()` function:

```python
# Check the type of values
print(type(42))         # <class 'int'>
print(type(3.14))       # <class 'float'>
print(type("hello"))    # <class 'str'>
print(type(True))       # <class 'bool'>
print(type(None))       # <class 'NoneType'>
print(type([1, 2, 3]))  # <class 'list'>

# Compare types
x = 42
print(type(x) is int)   # True
print(isinstance(x, int))  # True (preferred way to check)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Type Conversion

Python provides functions to convert between different data types:

```python
# Convert to integer
int_from_float = int(10.5)                # 10 (truncates decimal part)
int_from_string = int("42")               # 42
int_from_bool = int(True)                 # 1

# Convert to float
float_from_int = float(42)                # 42.0
float_from_string = float("3.14")         # 3.14
float_from_bool = float(False)            # 0.0

# Convert to string
string_from_int = str(42)                 # "42"
string_from_float = str(3.14)             # "3.14"
string_from_bool = str(True)              # "True"

# Convert to boolean
bool_from_int = bool(0)                   # False
bool_from_float = bool(0.0)               # False
bool_from_string = bool("")               # False
bool_from_nonempty = bool("hello")        # True
```

**Common Type Conversion Mistakes**:
```python
# Bad - trying to convert a non-numeric string
try:
    x = int("hello")  # ValueError: invalid literal for int() with base 10
except ValueError as e:
    print(f"Error: {e}")

# Bad - forgetting that int() truncates floats, it does NOT round them
y = int(9.9)  # Result is 9, not 10

# Bad - trying to use + operator (we will discus this later) with different types
try:
    result = "Age: " + 25  # TypeError: can only concatenate str (not "int") to str
except TypeError as e:
    print(f"Error: {e}")

# Good - convert to the same type before operations
result = "Age: " + str(25)  # "Age: 25"
```

## Summary of Python's Basic Data Types

| Data Type | Description | Example |
|-----------|-------------|---------|
| `int` | Integer (whole number) | `42`, `-7`, `0` |
| `float` | Floating-point number | `3.14`, `-0.001`, `2.0` |
| `complex` | Complex number | `3+4j`, `2-1j` |
| `bool` | Boolean (True/False) | `True`, `False` |
| `str` | String (text) | `"hello"`, `'world'` |
| `NoneType` | Represents no value | `None` |