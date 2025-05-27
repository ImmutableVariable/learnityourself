---
sidebar_position: 5
---
# Input and Output

By now you have seen the `print()` function used to output data to the console. Python provides several ways to interact with users through input and output operations. These operations are essential for creating interactive programs that can receive data from users and display information.

## Basic Output with `print()`

The `print()` function is the most common way to output data in Python. It displays text or variable values to the console.

```python
# Basic print statement
print("Hello, World!")

# Printing multiple items
print("Python", "is", "awesome")  # Output: Python is awesome

# Print with separator
print("Python", "is", "awesome", sep="-")  # Output: Python-is-awesome

# Print with end character (default is newline typically `\n`)
print("Hello", end=" ") # Output: Hello (no newline)
print("hello", end=", ")  # Output: hello, (no newline)

# The ones above will print in the same line because it does not go to a new line (hello hello,)
print("World")  # Output: Hello World
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

### Formatted Output

Python offers several ways to format output strings:

#### 1. Using f-strings (Recommended for Python 3.6+)

The word f-string is short for formatted string. Essentially, you can embed Python expressions (variables, etc) into a string usingf this method. They are defined using the `f` prefix. (example: `f"Hello {name}"`)

```python
name = "Alice"
age = 30
print(f"My name is {name} and I am {age} years old.")

# Formatting numbers in f-strings
pi = 3.14159
print(f"Pi rounded to 2 decimal places: {pi:.2f}")  # Output: 3.14
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

#### 2. Using `str.format()` method

This is a different method, but f-strings are recommended.

```python
name = "Bob"
age = 25
print("My name is {} and I am {} years old.".format(name, age))

# With positional arguments
print("My name is {0} and I am {1} years old.".format(name, age))

# With named arguments
print("My name is {n} and I am {a} years old.".format(n=name, a=age))
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

#### 3. Old-style string formatting with `%` operator

```python
name = "Charlie"
age = 35
print("My name is %s and I am %d years old." % (name, age))
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

**Common Mistakes with Output Formatting**:

```python
# Bad - forgetting to convert non-string values in string concatenation
age = 30
# This will raise a TypeError
try:
    print("I am " + age + " years old.")
except TypeError as e:
    print(f"Error: {e}")

# Good - using str() to convert to string
print("I am " + str(age) + " years old.")

# Better - using f-strings
print(f"I am {age} years old.")

# Bad - forgetting the f in f-strings
name = "David"
print("{name} is learning Python.")  # Output: {name} is learning Python

# Good
print(f"{name} is learning Python.")  # Output: David is learning Python
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

## Basic Input with `input()`

The `input()` function allows your program to receive input from users through the console.

```python
# Basic input
name = input("Enter your name: ")
print(f"Hello, {name}!")

# Note: input() always returns a string
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

### Converting Input to Other Types

Since `input()` always returns a string, you need to convert the input to the appropriate type if you need a number or other data type.

```python
# Converting input to integer
try:
    age = int(input("Enter your age: "))
    print(f"Next year, you will be {age + 1} years old.")
except ValueError:
    print("That's not a valid age!")

# Converting input to float
try:
    height = float(input("Enter your height in meters: "))
    print(f"Your height is {height} meters.")
except ValueError:
    print("That's not a valid height!")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

**Common Mistakes with Input**:

```python
# Bad - not handling potential errors when converting input
age = int(input("Enter your age: "))  # Will crash if user enters "thirty" instead of 30

# Good - using try-except to handle conversion errors
try:
    age = int(input("Enter your age: "))
    print(f"You are {age} years old.")
except ValueError:
    print("Please enter a valid number for age.")

# Bad - not validating input range
try:
    age = int(input("Enter your age: "))
    # What if user enters -5 or 200?
    print(f"You are {age} years old.")
except ValueError:
    print("Please enter a valid number for age.")

# Good - validating input range
try:
    age = int(input("Enter your age: "))
    if 0 <= age <= 120:  # Reasonable age range
        print(f"You are {age} years old.")
    else:
        print("Please enter a reasonable age between 0 and 120.")
except ValueError:
    print("Please enter a valid number for age.")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

## Working with Multiple Inputs

Sometimes you need to collect multiple inputs from the user.

```python
# Multiple inputs on separate lines
first_name = input("Enter your first name: ")
last_name = input("Enter your last name: ")
print(f"Hello, {first_name} {last_name}!")

# Taking multiple inputs on a single line
# Split the input string by spaces
values = input("Enter three numbers separated by spaces: ").split() # for example, if a user enters "1 2 3", values will be ['1', '2', '3']
try:
    a, b, c = map(int, values) 
    # Map - it will go over the list and convert each element to int
    # Now a, b, c are integers
    # this is the same as doing:
    # a = int(values[0])
    # b = int(values[1])
    # c = int(values[2])
    print(f"Sum: {a + b + c}")
except ValueError:
    print("Please enter exactly three valid numbers separated by spaces.")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

## Best Practices for Input and Output

1. **Always validate user input** before using it in your program
2. **Use f-strings** for string formatting in Python 3.6+ for better readability
3. **Handle exceptions** when converting input to other data types
4. **Always use the `with` statement** when working with files to ensure they're properly closed
5. **Provide meaningful error messages** to users when input validation fails

Input and output operations are essential for making your Python programs useful and interactive. Understanding these concepts allows you to create applications that can effectively communicate with users and work with persistent data.
