---
sidebar_position: 6
---

# File Handling

When you create a program, you often need to write to or read from files. In this lesson, I will cover some the basic concepts of working with files.


*Note: this will NOT work on the online editor. Feel free to read or follow along locally on your computer.*

## File Basics

In Python, working with files follows a simple pattern:
1. Open the file
2. Perform operations (read or write)
3. Close the file

While you can do this manually, Python provides a better way using the `with` statement, which automatically closes the file for you when you're done:

```python
# The standard pattern for file operations
with open("<filename>", "<mode>") as file:
    # Perform operations with the file
    # The file automatically closes when the block ends
```

## File Modes

When opening a file, you specify a mode that determines what operations you can perform. Note that in the previous example, `<mode>` will be replaced by one of the following:

| Mode | Description |
|------|-------------|
| `"r"` | Read (default) - open for reading |
| `"w"` | Write - open for writing (creates a new file or truncates an existing file) |
| `"a"` | Append - open for writing, appending to the end of the file |
| `"r+"` | Read/Write - open for both reading and writing |
| `"b"` | Binary mode (added to other modes, e.g., `"rb"`, `"wb"`) |
| `"t"` | Text mode (default, added to other modes, e.g., `"rt"`, `"wt"`) |

## Writing to Files

This is how you create a file and write to it:

```python
# Writing a single string to a file
with open("greeting.txt", "w") as file:
    file.write("Hello, World!")
```

You can also chain multiple write operations in order to append more lines to the file:

```python
# Writing multiple lines
with open("sample.txt", "w") as file:
    # "\n" represents a newline
    # this is equivalent to pressing the Enter key
    file.write("Line 1\n")
    file.write("Line 2\n")
    file.write("Line 3\n")
    
    # You can also write with a list
    lines = ["Line 4\n", "Line 5\n", "Line 6\n"]
    file.writelines(lines)

# read and return the new content
with open("sample.txt", "r") as file:
    content = file.read()
    print(content)
```

### Appending to Files

You can also append content to a file without erasing the original content.

```python
# Creating a sample file
with open("log.txt", "w") as file:
    file.write("Original entry: 2023-01-01\n")

# Appending to the file; the content will remain the same
with open("log.txt", "a") as file:
    file.write("Second entry: 2023-01-02\n")
    file.write("Third entry: 2023-01-03\n")

# Read the file and print its content
with open("log.txt", "r") as file:
    content = file.read()
    print(content)
```

## Reading from Files

Similarly to writing to a file, you can also read from it:

### Reading the Entire File

You can chose to read the entire file at once or read it line by line.

```python
with open("story.txt", "w") as file:
    file.write("Once upon a time, there was a Python programmer.\n")
    file.write("They loved working with files.\n")
    file.write("The end.")

# This will read the entire content and return it at once!
with open("story.txt", "r") as file:
    content = file.read()
    print(content)
```

### Reading Line by Line

It may be better to read line by line for larger files.

```python
# Create a file with numbered lines
with open("numbered.txt", "w") as file:
    for i in range(1, 11):
        file.write(f"Line {i}: This is line number {i}\n")

with open("numbered.txt", "r") as file:
    for line in file:
        # strip() removes the trailing newline character
        print(line.strip())
```

### Reading into a List of Lines

```python
# Read all lines into a list
with open("numbered.txt", "r") as file:
    lines = file.readlines()
    
print(f"The file has {len(lines)} lines")
print("First 3 lines:")
for line in lines[:3]:
    print(line.strip())
```

### Reading Specific Amount of Content

You can also chose to read a specific amount of characters to load from a file.
```python
# Create a longer file
with open("long_text.txt", "w") as file:
    for i in range(1, 101):
        file.write(f"This is sentence {i} in the long text file.\n")

# Read first 50 characters
with open("long_text.txt", "r") as file:
    beginning = file.read(50)
    print("First 50 characters:")
    print(beginning)
    
    # Continue reading the next 50 characters
    next_part = file.read(50)
    print("\nNext 50 characters:")
    print(next_part)
```

## File Positions

When reading or writing, Python keeps track of your position in the file. You can control this position using `seek()` and check it with `tell()`:

```python
# Create a simple file
with open("positions.txt", "w") as file:
    file.write("ABCDEFGHIJKLMNOPQRSTUVWXYZ")

# Demonstrate file positions
with open("positions.txt", "r") as file:
    # Read the first 5 characters
    print(file.read(5))  # ABCDE
    
    # Check our current position
    position = file.tell()
    print(f"Current position: {position}")  # 5
    
    # Read 5 more characters
    print(file.read(5))  # FGHIJ
    
    # Move back to position 0 (beginning of file)
    file.seek(0)
    print(f"After seek(0), next 5 chars: {file.read(5)}")  # ABCDE
    
    # Jump to position 20
    file.seek(20)
    print(f"After seek(20), remaining text: {file.read()}")  # UVWXYZ
```

## Working with File Paths

We have only handled files in the current directory; however, you can also use more complex paths to open files from different directories.

### Using the OS Module

The traditional way to work with file paths is to use the `os` module. You can use `os.getcwd()` to get the current working directory and `os.path.join()` to create file paths that work across different operating systems.

```python
import os

current_directory = os.getcwd()
print(f"Current working directory: {current_directory}")

# Join paths to create a file path
data_dir = os.path.join("data", "user_files") # "data/user_files"
user_file = os.path.join(data_dir, "config.txt") # "data/user_files/config.txt"
print(f"File path using os.path: {user_file}")
```

### Using the Pathlib Module

The `pathlib` module provides a more Pythonic way to work with file paths.

```python
from pathlib import Path

# Define paths using pathlib
data_path = Path("data") / "user_files" # "data/user_files" 
user_file_path = data_path / "config.txt" # "data/user_files/config.txt"
print(f"File path using pathlib: {user_file_path}")
```

## Working with Binary Files

So far, we've worked with text files. For binary files (like images), you need to use binary mode:

```python
# Let's create a simple binary file
with open("binary_data.bin", "wb") as file:  # Note the 'b' in 'wb'
    # Write some bytes
    file.write(b'\x00\x01\x02\x03\x04\xFF\xFE\xFD\xFC\xFB')

# Read from a binary file
with open("binary_data.bin", "rb") as file:  # Note the 'b' in 'rb'
    binary_data = file.read()
    print(f"Type of data: {type(binary_data)}")
    print(f"Bytes read: {binary_data}")
    print(f"Length: {len(binary_data)} bytes")
    
    # Display as hex values
    hex_values = ' '.join(f'{b:02X}' for b in binary_data)
    print(f"Hex values: {hex_values}")
```