---
sidebar_position: 1
---

# File Handling

Working with files is an essential skill for any programmer. In this lesson, we'll learn how to read from and write to files in Python, which will allow you to save data between program runs, process large datasets, and work with configuration files.

## Why Use Files?

Files allow your programs to:
- Save data persistently (data remains after your program ends)
- Work with data that's too large to fit in memory all at once
- Share data with other programs or users
- Store configuration settings
- Log information for debugging or analysis

## File Basics

In Python, working with files follows a simple pattern:
1. Open the file
2. Perform operations (read or write)
3. Close the file

While you can do this manually, Python provides a better way using the `with` statement, which automatically closes the file for you when you're done:

```python
# The standard pattern for file operations
with open("filename.txt", "mode") as file:
    # Perform operations with the file
    # The file automatically closes when the block ends
```

## File Modes

When opening a file, you specify a mode that determines what operations you can perform:

| Mode | Description |
|------|-------------|
| `"r"` | Read (default) - open for reading |
| `"w"` | Write - open for writing (creates a new file or truncates an existing file) |
| `"a"` | Append - open for writing, appending to the end of the file |
| `"r+"` | Read/Write - open for both reading and writing |
| `"b"` | Binary mode (added to other modes, e.g., `"rb"`, `"wb"`) |
| `"t"` | Text mode (default, added to other modes, e.g., `"rt"`, `"wt"`) |

## Writing to Files

Let's start by creating and writing to a file:

```python
# Writing a single string to a file
with open("greeting.txt", "w") as file:
    file.write("Hello, World!")

# Check that our file was created
print("File created successfully!") # This won't work here since the file doesn't exist yet, but feel free to try it out in an IDE of your choice!
```

You can write multiple lines by:
1. Adding newline characters (`\n`)
2. Making multiple `write()` calls
3. Using `writelines()` with a list of strings

```python
# Writing multiple lines
with open("sample.txt", "w") as file:
    # Method 1: Adding newline characters
    file.write("Line 1\n")
    file.write("Line 2\n")
    
    # Method 2: Multiple write calls
    file.write("Line 3\n")
    
    # Method 3: Using writelines with a list
    lines = ["Line 4\n", "Line 5\n", "Line 6\n"]
    file.writelines(lines)

# Read the file we just created to see its contents
with open("sample.txt", "r") as file:
    content = file.read()
    print(content) # This won't work here since the file doesn't exist yet, but feel free to try it out in an IDE of your choice!
```

### Appending to Files

To add content to an existing file without overwriting it, use append mode (`"a"`):

```python
# First, let's create a file
with open("log.txt", "w") as file:
    file.write("Original entry: 2023-01-01\n")

# Now let's append to it without erasing the original content
with open("log.txt", "a") as file:
    file.write("Second entry: 2023-01-02\n")
    file.write("Third entry: 2023-01-03\n")

# Let's check what's in the file now
with open("log.txt", "r") as file:
    content = file.read()
    print(content)
```

## Reading from Files

There are several ways to read from a file:

### Reading the Entire File

```python
# First, let's create a sample file to read
with open("story.txt", "w") as file:
    file.write("Once upon a time, there was a Python programmer.\n")
    file.write("They loved working with files.\n")
    file.write("The end.")

# Now let's read the entire file at once
with open("story.txt", "r") as file:
    content = file.read()
    print("Full content:")
    print(content)
```

### Reading Line by Line

For larger files, it's often better to read line by line instead of loading the entire file into memory:

```python
# Create a file with numbered lines
with open("numbered.txt", "w") as file:
    for i in range(1, 11):
        file.write(f"Line {i}: This is line number {i}\n")

# Read line by line using a for loop
print("Reading line by line:")
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

## Error Handling

When working with files, many things can go wrong. It's important to handle these errors gracefully:

```python
# Trying to read a file that doesn't exist
try:
    with open("non_existent_file.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("The file doesn't exist!")

# Trying to write to a file without permission
try:
    # This might fail depending on your system permissions
    with open("/system/restricted/file.txt", "w") as file:
        file.write("Will this work?")
except PermissionError:
    print("You don't have permission to write to this file!")
except FileNotFoundError:
    print("The directory doesn't exist or isn't accessible!")

# General IO errors
try:
    with open("sample.txt", "r") as file:
        # Simulate some operation that might fail
        content = file.read()
        # Process the content...
except IOError as e:
    print(f"An IO error occurred: {e}")
```

## Working with File Paths

So far, we've been using simple filenames, which are relative to the current working directory. For more control, you can use the `os.path` or newer `pathlib` modules:

```python
import os
from pathlib import Path

# Current working directory
print(f"Current working directory: {os.getcwd()}")

# Using os.path to join paths (works across operating systems)
data_dir = os.path.join("data", "user_files")
user_file = os.path.join(data_dir, "config.txt")
print(f"File path using os.path: {user_file}")

# Using pathlib (more modern approach)
data_path = Path("data") / "user_files"
user_file_path = data_path / "config.txt"
print(f"File path using pathlib: {user_file_path}")

# Create directories if they don't exist
try:
    # Using os
    if not os.path.exists(data_dir):
        os.makedirs(data_dir)
        print(f"Created directory: {data_dir}")
    
    # Using pathlib
    if not data_path.exists():
        data_path.mkdir(parents=True)
        print(f"Created directory: {data_path}")
except Exception as e:
    print(f"Error creating directories: {e}")
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

## Best Practices

1. **Always use the `with` statement** to ensure files are properly closed
2. **Handle exceptions** that might occur during file operations
3. **Use appropriate file modes** (read, write, append)
4. **Be cautious with write mode** as it will overwrite existing files
5. **Close files explicitly** if not using the `with` statement
6. **Use relative paths** when possible for better portability
7. **Check if a file exists** before trying to read it
8. **Process large files line by line** rather than reading the entire file at once

## Summary

Files are a fundamental way to store and retrieve data in Python. We've covered how to open, read from, and write to files using different modes. We've also seen how to navigate file positions, handle errors, and work with file paths. This knowledge will help you create programs that can persist data, process large files, and interact with other systems through file exchange. In the next lesson, we'll explore more advanced file handling techniques and learn about working with different file formats like CSV and JSON.
