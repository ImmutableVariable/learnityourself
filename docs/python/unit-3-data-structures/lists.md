---
sidebar_position: 1
---
# Lists

Lists are one of Python's most versatile and commonly used data structures. They allow you to store collections of items in a single container.

## Creating Lists

You can create a list by placing comma-separated values inside square brackets:

```python
# Empty list
empty_list = []

# List of numbers
numbers = [1, 2, 3, 4, 5]

# List of strings
fruits = ["apple", "banana", "cherry"]

# Mixed data types
mixed = [1, "hello", 3.14, True]

# Nested lists
nested = [1, [2, 3], [4, 5, 6]]
```

```python
# Creating and displaying lists
numbers = [1, 2, 3, 4, 5]
fruits = ["apple", "banana", "cherry"]
mixed = [42, "hello", 3.14, True]

print(f"Numbers: {numbers}")
print(f"Fruits: {fruits}")
print(f"Mixed types: {mixed}")
print(f"A nested list: {[1, [2, 3], [4, 5, 6]]}")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

## Accessing List Elements

Python uses zero-based indexing, meaning the first element is at index 0:

```python
fruits = ["apple", "banana", "cherry", "orange", "kiwi"]

# Positive indexing (from the beginning)
first_fruit = fruits[0]  # "apple"
third_fruit = fruits[2]  # "cherry"

# Negative indexing (from the end)
last_fruit = fruits[-1]  # "kiwi"
second_last = fruits[-2]  # "orange"
```

```python
fruits = ["apple", "banana", "cherry", "orange", "kiwi"]

# Accessing elements by index
print(f"First fruit (index 0): {fruits[0]}")
print(f"Third fruit (index 2): {fruits[2]}")
print(f"Last fruit (index -1): {fruits[-1]}")
print(f"Second last fruit (index -2): {fruits[-2]}")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

## List Slicing

You can extract a portion of a list using slicing:

```python
fruits = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]

# Syntax: list[start:end:step]
# Note: end index is excluded!

# Get first three elements
first_three = fruits[0:3]  # ["apple", "banana", "cherry"]

# Omitting start index (defaults to 0)
first_three_alt = fruits[:3]  # ["apple", "banana", "cherry"]

# Get elements from index 2 to the end
from_third = fruits[2:]  # ["cherry", "orange", "kiwi", "mango"]

# Get every second element
every_second = fruits[::2]  # ["apple", "cherry", "kiwi"]

# Reverse a list
reversed_fruits = fruits[::-1]  # ["mango", "kiwi", "orange", "cherry", "banana", "apple"]
```

```python
fruits = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]

# Slicing examples
print(f"Original list: {fruits}")
print(f"First three fruits [0:3]: {fruits[0:3]}")
print(f"First three fruits [:3]: {fruits[:3]}")
print(f"From third to end [2:]: {fruits[2:]}")
print(f"Every second fruit [::2]: {fruits[::2]}")
print(f"Reversed list [::-1]: {fruits[::-1]}")
print(f"From index 1 to 4 [1:5]: {fruits[1:5]}")
```

## Modifying Lists

Lists are mutable, meaning you can change their content:

```python
fruits = ["apple", "banana", "cherry"]

# Change an element
fruits[1] = "blueberry"  # ["apple", "blueberry", "cherry"]

# Add an element to the end
fruits.append("orange")  # ["apple", "blueberry", "cherry", "orange"]

# Insert an element at a specific position
fruits.insert(1, "mango")  # ["apple", "mango", "blueberry", "cherry", "orange"]

# Remove an element by value
fruits.remove("cherry")  # ["apple", "mango", "blueberry", "orange"]

# Remove an element by index
del fruits[0]  # ["mango", "blueberry", "orange"]

# Remove and return the last element
last = fruits.pop()  # last = "orange", fruits = ["mango", "blueberry"]

# Clear the list
fruits.clear()  # []
```

```python
# Modifying lists
fruits = ["apple", "banana", "cherry"]
print(f"Original list: {fruits}")

# Change an element
fruits[1] = "blueberry"
print(f"After changing element at index 1: {fruits}")

# Append to the end
fruits.append("orange")
print(f"After appending 'orange': {fruits}")

# Insert at position
fruits.insert(1, "mango")
print(f"After inserting 'mango' at index 1: {fruits}")

# Remove by value
fruits.remove("cherry")
print(f"After removing 'cherry': {fruits}")

# Remove by index
del fruits[0]
print(f"After deleting element at index 0: {fruits}")

# Pop the last element
last = fruits.pop()
print(f"Popped element: {last}")
print(f"List after pop: {fruits}")

# Clear the list
fruits.clear()
print(f"List after clear: {fruits}")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

## List Methods

Python provides many useful methods for working with lists:

```python
numbers = [3, 1, 4, 1, 5, 9, 2]

# Count occurrences of a value
count_of_1 = numbers.count(1)  # 2

# Find the index of a value (first occurrence)
index_of_5 = numbers.index(5)  # 4

# Sort the list in-place
numbers.sort()  # [1, 1, 2, 3, 4, 5, 9]

# Reverse the list in-place
numbers.reverse()  # [9, 5, 4, 3, 2, 1, 1]

# Copy a list
numbers_copy = numbers.copy()  # [9, 5, 4, 3, 2, 1, 1]

# Extend a list with another list
numbers.extend([6, 7])  # [9, 5, 4, 3, 2, 1, 1, 6, 7]
```

```python
# List methods demonstration
numbers = [3, 1, 4, 1, 5, 9, 2]
print(f"Original list: {numbers}")

# Count occurrences
print(f"Count of 1: {numbers.count(1)}")

# Find index
print(f"Index of 5: {numbers.index(5)}")

# Sort
sorted_numbers = numbers.copy()
sorted_numbers.sort()
print(f"Sorted list: {sorted_numbers}")

# Reverse
reversed_numbers = numbers.copy()
reversed_numbers.reverse()
print(f"Reversed list: {reversed_numbers}")

# Create a copy
numbers_copy = numbers.copy()
print(f"Copied list: {numbers_copy}")

# Extend
extended = numbers.copy()
extended.extend([6, 7])
print(f"Extended list: {extended}")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

## List Comprehensions

List comprehensions provide a concise way to create lists:

```python
# Create a list of squares
squares = [x**2 for x in range(1, 6)]  # [1, 4, 9, 16, 25]

# Filter even numbers
evens = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]

# Create a matrix (nested list)
matrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]
# [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
```

```python
# List comprehensions
# Create a list of squares from 1 to 5
squares = [x**2 for x in range(1, 6)]
print(f"Squares: {squares}")

# Filter even numbers from 0 to 9
evens = [x for x in range(10) if x % 2 == 0]
print(f"Even numbers: {evens}")

# Convert temperatures from Celsius to Fahrenheit
celsius = [0, 10, 20, 30, 40]
fahrenheit = [(9/5) * c + 32 for c in celsius]
print(f"Celsius: {celsius}")
print(f"Fahrenheit: {fahrenheit}")

# Create a 3x3 multiplication table
matrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]
print("3x3 multiplication table:")
for row in matrix:
    print(row)
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

## Common Operations and Functions

Python provides several built-in functions for working with lists:

```python
numbers = [3, 1, 4, 1, 5, 9, 2]

# Length of a list
length = len(numbers)  # 7

# Largest value
maximum = max(numbers)  # 9

# Smallest value
minimum = min(numbers)  # 1

# Sum of all values
total = sum(numbers)  # 25

# Sort without modifying the original
sorted_numbers = sorted(numbers)  # [1, 1, 2, 3, 4, 5, 9]

# Reverse sort
reverse_sorted = sorted(numbers, reverse=True)  # [9, 5, 4, 3, 2, 1, 1]
```

```python
# Common list operations and functions
numbers = [3, 1, 4, 1, 5, 9, 2]
print(f"List: {numbers}")

print(f"Length: {len(numbers)}")
print(f"Maximum: {max(numbers)}")
print(f"Minimum: {min(numbers)}")
print(f"Sum: {sum(numbers)}")
print(f"Sorted: {sorted(numbers)}")
print(f"Reverse sorted: {sorted(numbers, reverse=True)}")

# Check if a value exists in the list
print(f"Is 5 in the list? {5 in numbers}")
print(f"Is 7 in the list? {7 in numbers}")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

Lists are incredibly versatile and will be one of your most-used data structures when programming in Python. In the next lesson, we'll explore tuples, another type of sequence that is similar to lists but with some important differences. 