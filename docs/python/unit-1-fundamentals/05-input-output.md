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

# Print with end character (default is newline)
print("Hello", end=" ")
print("World")  # Output: Hello World
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

### Formatted Output

Python offers several ways to format output strings:

#### 1. Using f-strings (Recommended for Python 3.6+)

```python
name = "Alice"
age = 30
print(f"My name is {name} and I am {age} years old.")

# Formatting numbers in f-strings
pi = 3.14159
print(f"Pi rounded to 2 decimal places: {pi:.2f}")  # Output: 3.14
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

#### 2. Using `str.format()` method

```python
name = "Bob"
age = 25
print("My name is {} and I am {} years old.".format(name, age))

# With positional arguments
print("My name is {0} and I am {1} years old.".format(name, age))

# With named arguments
print("My name is {n} and I am {a} years old.".format(n=name, a=age))
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

#### 3. Old-style string formatting with `%` operator

```python
name = "Charlie"
age = 35
print("My name is %s and I am %d years old." % (name, age))
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
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
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Basic Input with `input()`

The `input()` function allows your program to receive input from users through the console.

```python
# Basic input
name = input("Enter your name: ")
print(f"Hello, {name}!")

# Note: input() always returns a string
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
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
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
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
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
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
values = input("Enter three numbers separated by spaces: ").split()
try:
    a, b, c = map(int, values)
    print(f"Sum: {a + b + c}")
except ValueError:
    print("Please enter exactly three valid numbers separated by spaces.")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## File I/O Operations

Python makes it easy to read from and write to files.

### Writing to Files

```python
# Basic file writing
with open("sample.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("This is a sample file.\n")
    
# Appending to files
with open("sample.txt", "a") as file:
    file.write("This line is appended.\n")
    
# Writing multiple lines at once
lines = ["Line 1", "Line 2", "Line 3"]
with open("multiline.txt", "w") as file:
    file.writelines(line + "\n" for line in lines)
```

### Reading from Files

```python
# Reading entire file at once
with open("sample.txt", "r") as file:
    content = file.read()
    print(content)
    
# Reading line by line
with open("sample.txt", "r") as file:
    for line in file:
        print(line.strip())  # strip() removes the newline character
        
# Reading all lines into a list
with open("sample.txt", "r") as file:
    lines = file.readlines()
    for line in lines:
        print(line.strip())
```

**Common Mistakes with File I/O**:

```python
# Bad - not using 'with' statement (file might not close properly)
file = open("data.txt", "w")
file.write("Some data")
# If an exception occurs here, the file might not be closed
file.close()

# Good - using 'with' statement (ensures file closure)
with open("data.txt", "w") as file:
    file.write("Some data")
# File is automatically closed when exiting the 'with' block

# Bad - hardcoding file paths
with open("C:/Users/username/Documents/data.txt", "r") as file:
    content = file.read()

# Good - using relative paths or configurable paths
file_path = "data.txt"  # Could be made configurable
with open(file_path, "r") as file:
    content = file.read()

# Bad - not handling file not found errors
try:
    with open("nonexistent.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("The file does not exist.")
```

## Working with CSV Files

CSV (Comma-Separated Values) files are commonly used for storing tabular data. Python's `csv` module makes it easy to work with them.

```python
import csv

# Writing to a CSV file
data = [
    ["Name", "Age", "City"],
    ["Alice", 30, "New York"],
    ["Bob", 25, "Los Angeles"],
    ["Charlie", 35, "Chicago"]
]

with open("users.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(data)

# Reading from a CSV file
with open("users.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(", ".join(row))

# Using DictReader and DictWriter
users = [
    {"Name": "David", "Age": 28, "City": "Boston"},
    {"Name": "Eve", "Age": 22, "City": "Miami"}
]

# Writing dictionaries to CSV
with open("users_dict.csv", "w", newline="") as file:
    fieldnames = ["Name", "Age", "City"]
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    
    writer.writeheader()
    writer.writerows(users)

# Reading CSV into dictionaries
with open("users_dict.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(f"{row['Name']} is {row['Age']} years old and lives in {row['City']}.")
```

## Working with JSON Files

JSON (JavaScript Object Notation) is a popular data format for configuration files and API communication. Python's `json` module provides functions for encoding and decoding JSON data.

```python
import json

# Writing Python data structure to JSON file
data = {
    "name": "Alice",
    "age": 30,
    "is_student": False,
    "courses": ["Python", "Data Science", "Machine Learning"],
    "address": {
        "city": "New York",
        "zip": "10001"
    }
}

with open("data.json", "w") as file:
    json.dump(data, file, indent=4)

# Reading JSON file into Python data structure
with open("data.json", "r") as file:
    loaded_data = json.load(file)
    print(f"Name: {loaded_data['name']}")
    print(f"Courses: {', '.join(loaded_data['courses'])}")

# Converting between Python objects and JSON strings
json_string = json.dumps(data, indent=4)
print(json_string)

# Converting JSON string back to Python object
python_obj = json.loads(json_string)
print(python_obj["address"]["city"])  # Output: New York
```

**Common Mistakes with JSON Processing**:

```python
import json

# Bad - not handling JSON decoding errors
try:
    invalid_json = '{"name": "Alice", "age": 30,'  # Missing closing brace
    data = json.loads(invalid_json)
except json.JSONDecodeError as e:
    print(f"Invalid JSON: {e}")

# Bad - trying to serialize objects that aren't JSON serializable
try:
    class Person:
        def __init__(self, name):
            self.name = name
    
    p = Person("Alice")
    json_string = json.dumps(p)  # This will fail
except TypeError as e:
    print(f"Serialization error: {e}")

# Good - using a custom encoder or converting to dict first
class Person:
    def __init__(self, name):
        self.name = name
        
    def to_dict(self):
        return {"name": self.name}

p = Person("Alice")
json_string = json.dumps(p.to_dict())
print(json_string)  # Output: {"name": "Alice"}
```

## Best Practices for Input and Output

1. **Always validate user input** before using it in your program
2. **Use f-strings** for string formatting in Python 3.6+ for better readability
3. **Handle exceptions** when converting input to other data types
4. **Always use the `with` statement** when working with files to ensure they're properly closed
5. **Provide meaningful error messages** to users when input validation fails
6. **Use appropriate file formats** for different types of data
7. **Always handle file-related exceptions** like `FileNotFoundError`
8. **Consider using libraries** for complex I/O operations (pandas for data, configparser for config files, etc.)

Input and output operations are essential for making your Python programs useful and interactive. Understanding these concepts allows you to create applications that can effectively communicate with users and work with persistent data.

In the next lesson, we'll explore string manipulation in Python, which will build on these I/O concepts. 