---
sidebar_position: 3
---
# Data Types

Every value in Python has a data type. Data types determine what operations can be performed on the data and how the data is stored in memory. Python includes several built-in data types to handle different kinds of information.

## Numeric Types

Python has three numeric types: integers, floating-point numbers, and complex numbers.

### Integers (`int`)

Integers are whole numbers without a fractional component. They can be positive, negative, or zero.

```python
# Integer examples
age = 25
temperature = -10
zero = 0
large_number = 10000000

# Integer operations
sum_result = 5 + 3        # Addition
diff_result = 10 - 7      # Subtraction
product = 4 * 6           # Multiplication
quotient = 12 // 5        # Integer division (result: 2)
remainder = 12 % 5        # Modulo (remainder) (result: 2)
power = 2 ** 3            # Exponentiation (result: 8)

# Integer conversion
string_to_int = int("42")  # Convert string to int
float_to_int = int(7.8)    # Convert float to int (truncates to 7)
bool_to_int = int(True)    # Convert boolean to int (1 for True, 0 for False)
```

**Common Mistakes with Integers**:
```python
# Bad - trying to convert a non-numeric string to int
try:
    invalid_int = int("hello")  # ValueError: invalid literal for int() with base 10
except ValueError as e:
    print(f"Error: {e}")

# Bad - expecting decimal division with //
result = 10 // 3  # Result is 3, not 3.33...
```

### Floating-Point Numbers (`float`)

Floating-point numbers represent real numbers with a decimal point.

```python
# Float examples
pi = 3.14159
height = 1.75
negative_float = -0.5
scientific = 1.23e-4  # Scientific notation (0.000123)

# Float operations
float_sum = 3.5 + 2.1
float_diff = 5.7 - 1.2
float_product = 2.5 * 3.0
float_division = 7.0 / 2.0  # Regular division (result: 3.5)

# Float conversion
string_to_float = float("3.14")  # Convert string to float
int_to_float = float(42)        # Convert integer to float
bool_to_float = float(False)    # Convert boolean to float (0.0 for False)
```

**Floating-Point Precision Issues**:
```python
# Be aware of floating-point precision issues
a = 0.1 + 0.2
print(a)                  # Output: 0.30000000000000004
print(a == 0.3)           # Output: False

# Better approach for comparing floats
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

# Complex operations
sum_c = c1 + c2      # Addition
diff_c = c1 - c2     # Subtraction
product_c = c1 * c2  # Multiplication
division_c = c1 / c2 # Division

# Accessing parts of a complex number
real_part = c1.real  # 3.0
imag_part = c1.imag  # 4.0
```

## Boolean Type (`bool`)

Booleans represent truth values: `True` or `False`. They're used in conditional expressions and logical operations.

```python
# Boolean examples
is_active = True
has_permission = False

# Boolean operations
and_result = True and False  # False
or_result = True or False    # True
not_result = not True        # False

# Comparison operations that return booleans
equal = (5 == 5)             # True
not_equal = (5 != 10)        # True
greater_than = (10 > 5)      # True
less_than = (5 < 10)         # True
greater_or_equal = (5 >= 5)  # True
less_or_equal = (5 <= 10)    # True

# Boolean conversion
zero_to_bool = bool(0)        # False (0 is falsy)
nonzero_to_bool = bool(42)    # True (non-zero is truthy)
empty_to_bool = bool("")      # False (empty string is falsy)
nonempty_to_bool = bool("hi") # True (non-empty string is truthy)
```

**Truthy and Falsy Values**:
- **Falsy values**: `False`, `None`, `0`, `0.0`, `""` (empty string), empty collections (`[]`, `()`, `{}`)
- **Truthy values**: Everything else

```python
# Don't make these mistakes with booleans
# Bad - using == for comparison with True/False
if is_active == True:  # Less pythonic
    print("Active")

# Good - use the boolean value directly
if is_active:
    print("Active")

# Bad - using == False
if has_permission == False:  # Less pythonic
    print("No permission")

# Good
if not has_permission:
    print("No permission")
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

# Common use case - default function parameters
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

# String operations
combined = "Hello" + " " + "World"  # Concatenation
repeated = "Ha" * 3                 # Repetition (HaHaHa)
length = len(name)                  # Length (5)

# String indexing (0-based)
first_char = name[0]    # 'A'
last_char = name[-1]    # 'e'

# String slicing
substring = name[1:3]   # 'li' (characters at index 1 and 2)

# String methods
uppercase = name.upper()          # 'ALICE'
lowercase = name.lower()          # 'alice'
replaced = name.replace('l', 'L') # 'ALice'
split_result = "a,b,c".split(',') # ['a', 'b', 'c']
joined = '-'.join(['a', 'b', 'c']) # 'a-b-c'
```

**String Formatting**:
```python
name = "Alice"
age = 30

# Using f-strings (Python 3.6+)
message1 = f"Hello, {name}! You are {age} years old."

# Using format() method
message2 = "Hello, {}! You are {} years old.".format(name, age)

# Using % operator (older style)
message3 = "Hello, %s! You are %d years old." % (name, age)
```

**String Immutability**:
```python
# Strings are immutable (cannot be changed)
name = "Alice"

# Bad - trying to change a character
try:
    name[0] = 'B'  # TypeError: 'str' object does not support item assignment
except TypeError as e:
    print(f"Error: {e}")

# Good - create a new string
name = 'B' + name[1:]  # 'Blice'
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

# Bad - forgetting that int() truncates floats
y = int(9.9)  # Result is 9, not 10

# Bad - trying to use + operator with different types
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

Understanding Python's data types is crucial for effective programming. Each type has its own properties and methods, and using the right type for your data will make your code more efficient and less prone to errors. In the next lesson, we'll explore more complex data structures that allow you to store and organize multiple values. 