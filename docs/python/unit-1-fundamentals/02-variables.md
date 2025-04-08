---
sidebar_position: 2
---
# Variables

Variables are one of the most fundamental concepts in programming. They act as containers for storing data values that can be used and manipulated throughout your program.

## What is a Variable?

In Python, a variable is a named location in memory that stores a value. Unlike some programming languages, Python variables:
- Do not need to be declared with a specific type
- Can change type after they've been set
- Are created when you first assign a value to them

## Creating Variables

To create a variable, you simply assign a value to a name using the equals sign (`=`):

```python
# Creating variables
name = "Alice"
age = 25
height = 1.75
is_student = True
```

In the example above:
- `name` is a variable storing a string
- `age` is a variable storing an integer
- `height` is a variable storing a floating-point number
- `is_student` is a variable storing a boolean value

## Variable Naming Rules

Python has specific rules for variable names:

1. **Must start with a letter or underscore** (`_`)
2. **Can only contain alphanumeric characters and underscores** (`A-Z`, `a-z`, `0-9`, `_`)
3. **Cannot be Python keywords** like `if`, `for`, `while`, etc.
4. **Are case-sensitive** (`age`, `Age`, and `AGE` are three different variables)

**Good Variable Names**:
```python
name = "John"
user_age = 25
_private_variable = "Hidden"
counter1 = 0
```

**Bad Variable Names**:
```python
# Bad - starts with a number
1variable = "Invalid"

# Bad - contains a special character
user-name = "John"

# Bad - uses a Python keyword
if = "Condition"
```

## Variable Naming Conventions

While not enforced by Python, these conventions help make your code more readable:

1. **Use snake_case for variable names** (words separated by underscores, all lowercase)
2. **Use descriptive names** that explain what the variable contains
3. **Avoid single letter names** except for counters or iterators
4. **Use ALL_CAPS for constants** (values that don't change)

**Good Conventions**:
```python
# snake_case for variables
user_name = "Alice"
item_count = 10

# Constants in ALL_CAPS
MAX_RETRY_COUNT = 5
PI = 3.14159

# Iterator in a loop (single letter okay)
for i in range(5):
    print(i)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

**Bad Conventions**:
```python
# Bad - not descriptive
x = "Alice"  # What is x? Better to use user_name or name

# Bad - using camelCase (not Python convention)
userName = "Alice"  # Better to use user_name

# Bad - not descriptive enough
temp = 98.6  # Better to use body_temperature
```

## Multiple Assignment

Python allows you to assign values to multiple variables in one line:

```python
# Assign the same value to multiple variables
x = y = z = 0

# Assign different values to multiple variables
a, b, c = 1, 2, 3

# Unpack a list
coordinates = [3, 4, 5]
x, y, z = coordinates
```

## Variable Scope

The scope of a variable determines where in your code the variable can be accessed:

1. **Global variables** are defined outside of functions and can be accessed throughout the program
2. **Local variables** are defined inside a function and can only be used within that function

```python
# Global variable
global_var = "I'm accessible everywhere"

def my_function():
    # Local variable
    local_var = "I'm only accessible inside this function"
    print(global_var)  # This works (global variable)
    print(local_var)   # This works (local variable)

my_function()
print(global_var)  # This works
# print(local_var)  # This would cause an error - local_var is not defined here - try uncommenting this to see the error
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Type Checking and Conversion

Python allows you to check the type of a variable and convert between types:

```python
# Check variable type
name = "Alice"
age = 25
print(type(name))  # <class 'str'>
print(type(age))   # <class 'int'>

# Type conversion
age_str = str(age)            # Convert int to string
num_str = "42"
num_int = int(num_str)        # Convert string to int
price = float("19.99")        # Convert string to float
is_active = bool(1)           # Convert to boolean (non-zero is True)
```

## Common Mistakes with Variables

1. **Using a variable before assigning a value**:
   ```python
   # Bad
   print(x)  # NameError: name 'x' is not defined
   x = 10
   
   # Good
   x = 10
   print(x)
   ```

2. **Reassigning a built-in function or type**:
   ```python
   # Bad
   list = [1, 2, 3]  # Now you can't use list() function
   
   # Good
   my_list = [1, 2, 3]  # Doesn't override built-in function
   ```

3. **Case sensitivity confusion**:
   ```python
   # Bad
   Name = "Alice"
   print(name)  # NameError: name 'name' is not defined
   
   # Good
   name = "Alice"
   print(name)
   ```

4. **Using reserved keywords**:
   ```python
   # Bad
   class = "Python 101"  # SyntaxError: invalid syntax
   
   # Good
   course_class = "Python 101"
   ```

## Variable Best Practices

1. **Use clear, descriptive names** that indicate the variable's purpose
2. **Keep names reasonably short** but not at the expense of clarity
3. **Be consistent with your naming style** throughout your codebase
4. **Initialize variables before using them**
5. **Avoid using global variables** when possible (they can make code harder to maintain)
6. **Don't reuse variable names** in the same scope for different purposes

Variables are fundamental building blocks in Python programs. Understanding how to properly name, use, and manage variables will help you write cleaner, more maintainable code that is easier to understand and debug. 