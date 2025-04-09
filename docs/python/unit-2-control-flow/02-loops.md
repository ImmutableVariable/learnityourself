---
sidebar_position: 2
---

# Loops

Loops allow you to execute a block of code repeatedly. Python provides two main types of loops: `for` loops and `while` loops.

## For Loops

The `for` loop is used to iterate over a sequence (like a list, tuple, string) or other iterable objects. It executes a block of code once for each item in the sequence.

### Basic Syntax

```python
for item in sequence:
    # Code block to execute for each item
```

### Examples of For Loops

```python
# Iterating over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

```python
# Iterating over a string
message = "Python"
for character in message:
    print(character)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

```python
# Iterating over a range of numbers
for number in range(5):  # range(5) generates numbers from 0 to 4
    print(number)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

### The `range()` Function

The `range()` function is commonly used with `for` loops to generate a sequence of numbers:

```python
# range(stop) - Generates numbers from 0 to stop-1
for i in range(5):
    print(i)  # Outputs: 0, 1, 2, 3, 4
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

```python
# range(start, stop) - Generates numbers from start to stop-1
for i in range(2, 6):
    print(i)  # Outputs: 2, 3, 4, 5
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

```python
# range(start, stop, step) - Generates numbers from start to stop-1 with the specified step
for i in range(1, 10, 2):
    print(i)  # Outputs: 1, 3, 5, 7, 9
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

### Nested For Loops

You can place one loop inside another (nested loops):

```python
# Nested for loops to create a multiplication table
for i in range(1, 4):  # Outer loop
    for j in range(1, 4):  # Inner loop
        print(f"{i} x {j} = {i * j}")
    print("---")  # Separator between groups
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## While Loops

The `while` loop executes a block of code as long as a specified condition is `True`.

### Basic Syntax

```python
while condition:
    # Code block to execute while the condition is True
```

### Examples of While Loops

```python
# Basic while loop
count = 0
while count < 5:
    print(count)
    count += 1  # Important: increment the counter to avoid an infinite loop
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

```python
# Using while with user input
password = ""
while password != "secret":
    password = input("Enter the password: ")
    if password != "secret":
        print("Incorrect password. Try again.")
print("Access granted!")
```

### Infinite Loops

An infinite loop occurs when the condition in a `while` loop never becomes `False`. This can happen by mistake or intentionally:

```python
# Intentional infinite loop (uncomment to run)
# while True:
#     print("This will run forever unless interrupted")
#     # Use Ctrl+C to interrupt the program
```

In practice, infinite loops are often used with a `break` statement to exit the loop based on a condition inside the loop:

```python
# Infinite loop with a break statement
counter = 0
while True:
    print(counter)
    counter += 1
    if counter >= 5:
        break  # Exit the loop when counter reaches 5
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Loop Control Statements

Python provides statements to control the flow of loops:

### `break` Statement

The `break` statement immediately terminates the loop and transfers execution to the statement following the loop:

```python
# Using break in a for loop
for i in range(10):
    if i == 5:
        break  # Exit the loop when i is 5
    print(i)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

```python
# Using break in a while loop
count = 0
while True:
    print(count)
    count += 1
    if count >= 5:
        break  # Exit the loop when count reaches 5
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

### `continue` Statement

The `continue` statement skips the rest of the code inside the loop for the current iteration and moves to the next iteration:

```python
# Using continue in a for loop
for i in range(10):
    if i % 2 == 0:
        continue  # Skip even numbers
    print(i)  # This only prints odd numbers
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

```python
# Using continue in a while loop
count = 0
while count < 10:
    count += 1
    if count % 2 == 0:
        continue  # Skip even numbers
    print(count)  # This only prints odd numbers
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

### `else` Clause in Loops

Both `for` and `while` loops can have an optional `else` clause that executes when the loop completes normally (without encountering a `break` statement):

```python
# for loop with else
for i in range(5):
    print(i)
else:
    print("Loop completed normally")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

```python
# for loop with else and break
for i in range(5):
    print(i)
    if i == 2:
        break
else:
    print("This won't execute because the loop was exited with break")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

```python
# while loop with else
count = 0
while count < 5:
    print(count)
    count += 1
else:
    print("Loop completed normally")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Common Loop Patterns

### Enumerating Items

The `enumerate()` function adds a counter to an iterable and returns it as an enumerate object:

```python
# Using enumerate to get both index and value
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(f"Index {index}: {fruit}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

### Looping Through Two Lists at Once

The `zip()` function allows you to iterate through multiple iterables in parallel:

```python
# Using zip to iterate through two lists simultaneously
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
for name, age in zip(names, ages):
    print(f"{name} is {age} years old")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

### Looping with Dictionary Items

Iterating through dictionaries:

```python
# Iterating through a dictionary
person = {"name": "Alice", "age": 30, "city": "New York"}

# Iterating over keys (default)
for key in person:
    print(key)

# Iterating over values
for value in person.values():
    print(value)

# Iterating over key-value pairs
for key, value in person.items():
    print(f"{key}: {value}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Best Practices

1. **Choose the right loop**: Use `for` loops when you know the number of iterations in advance or want to iterate over a sequence; use `while` loops when the iteration continues until a condition is met.

2. **Avoid infinite loops**: Make sure the condition in a `while` loop can eventually become `False`, or include a `break` statement.

3. **Minimize work inside loops**: Move calculations outside the loop if they don't change with each iteration.

```python
# Bad practice: Doing unnecessary work inside the loop
numbers = [1, 2, 3, 4, 5]
total = 0
for num in numbers:
    total += num
    average = total / len(numbers)  # This is calculated unnecessarily in each iteration
    
# Good practice: Do the calculation once after the loop
numbers = [1, 2, 3, 4, 5]
total = 0
for num in numbers:
    total += num
average = total / len(numbers)  # Calculate once after the loop
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

4. **Use appropriate control statements**: Use `break` to exit a loop early, and `continue` to skip iterations when needed.

5. **Consider readability**: Sometimes a more verbose loop is more readable than a concise but complex one.

Loops are essential for automating repetitive tasks and processing collections of data. In the next lesson, we'll explore comprehensions, which provide a more concise way to create lists, dictionaries, and sets using loops.

#### Footnotes

- <dfn>a - An iterable is an object that can be looped over, such as a list, tuple, string, or dictionary.</dfn>
- <dfn>b - The increment operator (+=) adds a value to a variable and assigns the new value to the same variable. For example, `count += 1` is equivalent to `count = count + 1`.</dfn> 