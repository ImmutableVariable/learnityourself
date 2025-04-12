---
sidebar_position: 1
---

# File Handling in Python

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
