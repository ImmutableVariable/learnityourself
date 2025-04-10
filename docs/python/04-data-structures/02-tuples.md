---
sidebar_position: 2
---

# Tuples

Tuples are an immutable sequence type in Python that can hold an ordered collection of elements. Unlike lists, tuples cannot be modified after creation, making them useful for data that should not change.

> **Beginner's Note:** If you're coming from other programming languages, you can think of tuples as "read-only lists". The main difference between lists and tuples is that lists are mutable (can be changed), while tuples are immutable (cannot be changed after creation).

## Characteristics of Tuples

- **Ordered**: Elements maintain their order and can be accessed by index
- **Immutable**: Cannot be modified after creation
- **Heterogeneous**: Can contain elements of different data types
- **Hashable**: Can be used as keys in dictionaries or elements in sets (if all elements are hashable)
- **Nestable**: Can contain other tuples and collections as elements

## Creating Tuples

You can create a tuple in several ways:

```python
# Empty tuple
empty_tuple = ()

# Tuple with one element (note the comma)
single_element = (42,)  # Without the comma, it would be an integer in parentheses

# Tuple with multiple elements
numbers = (1, 2, 3, 4, 5)

# Tuple without parentheses (comma-separated values)
fruits = "apple", "banana", "cherry"

# Mixed data types
mixed = (1, "hello", 3.14, True)

# Nested tuples
nested = (1, (2, 3), (4, 5, 6))

# Create a tuple using the tuple() constructor
numbers_alt = tuple([1, 2, 3, 4, 5])

# Create a tuple from another sequence type
chars = tuple("Python")  # ('P', 'y', 't', 'h', 'o', 'n')
```

```python
# Creating and displaying tuples
empty_tuple = ()
single_element = (42,)
numbers = (1, 2, 3, 4, 5)
fruits = "apple", "banana", "cherry"  # Parentheses are optional
mixed = (1, "hello", 3.14, True)
nested = (1, (2, 3), (4, 5, 6))
chars = tuple("Python")

print(f"Empty tuple: {empty_tuple}")
print(f"Single element tuple: {single_element}")
print(f"Numbers: {numbers}")
print(f"Fruits: {fruits}")
print(f"Mixed types: {mixed}")
print(f"Nested tuple: {nested}")
print(f"Characters from 'Python': {chars}")

# Check the type
print(f"Type of numbers: {type(numbers)}")
print(f"Type of single_element: {type(single_element)}")
print(f"Type of (42) without comma: {type((42))}")  # This is an integer, not a tuple!

# Check the length
print(f"Length of fruits: {len(fruits)}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Accessing Tuple Elements

Accessing elements in a tuple works the same way as lists:

### Indexing

```python
fruits = ("apple", "banana", "cherry", "orange", "kiwi")

# Positive indexing (from the beginning)
first_fruit = fruits[0]  # "apple"
third_fruit = fruits[2]  # "cherry"

# Negative indexing (from the end)
last_fruit = fruits[-1]  # "kiwi"
second_last = fruits[-2]  # "orange"

# Accessing nested elements
nested = (1, (2, 3), (4, 5, 6))
inner_element = nested[1][0]  # 2
```

```python
fruits = ("apple", "banana", "cherry", "orange", "kiwi")
nested = (1, (2, 3), (4, 5, 6))

# Accessing elements by index
print(f"First fruit (index 0): {fruits[0]}")
print(f"Third fruit (index 2): {fruits[2]}")
print(f"Last fruit (index -1): {fruits[-1]}")
print(f"Second last fruit (index -2): {fruits[-2]}")

# Accessing nested elements
print(f"First element of nested tuple: {nested[0]}")
print(f"First element of second inner tuple: {nested[1][0]}")
print(f"Last element of last inner tuple: {nested[2][2]}")

# Demonstration of index error
try:
    print(fruits[10])  # This will cause an IndexError
except IndexError as e:
    print(f"Error: {e}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Slicing

Slicing tuples works just like slicing lists:

```python
fruits = ("apple", "banana", "cherry", "orange", "kiwi", "mango")

# Get first three elements
first_three = fruits[0:3]  # ("apple", "banana", "cherry")

# Omitting start index (defaults to 0)
first_three_alt = fruits[:3]  # ("apple", "banana", "cherry")

# Get elements from index 2 to the end
from_third = fruits[2:]  # ("cherry", "orange", "kiwi", "mango")

# Get every second element
every_second = fruits[::2]  # ("apple", "cherry", "kiwi")

# Reverse a tuple
reversed_fruits = fruits[::-1]  # ("mango", "kiwi", "orange", "cherry", "banana", "apple")
```

```python
fruits = ("apple", "banana", "cherry", "orange", "kiwi", "mango")

# Slicing examples
print(f"Original tuple: {fruits}")
print(f"First three fruits [0:3]: {fruits[0:3]}")
print(f"First three fruits [:3]: {fruits[:3]}")
print(f"From third to end [2:]: {fruits[2:]}")
print(f"Every second fruit [::2]: {fruits[::2]}")
print(f"Reversed tuple [::-1]: {fruits[::-1]}")
print(f"From index 1 to 4 [1:5]: {fruits[1:5]}")

# Slicing with indices beyond tuple length is safe
print(f"Slice beyond tuple bounds [2:100]: {fruits[2:100]}")

# Note the result is also a tuple
print(f"Type of slice result: {type(fruits[2:5])}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Immutability of Tuples

Tuples are immutable, which means once they are created, you cannot change their contents.

```python
fruits = ("apple", "banana", "cherry")

# This will raise a TypeError
try:
    fruits[0] = "pear"
except TypeError as e:
    print(f"Error: {e}")

# This will also raise an error
try:
    fruits.append("orange")
except AttributeError as e:
    print(f"Error: {e}")

# The only way to "change" a tuple is to create a new one
# Converting to a list, modifying, and converting back
fruits_list = list(fruits)
fruits_list[0] = "pear"
new_fruits = tuple(fruits_list)
print(f"Original tuple: {fruits}")
print(f"New tuple: {new_fruits}")

# Concatenation creates a new tuple
more_fruits = fruits + ("orange", "kiwi")
print(f"Concatenated tuple: {more_fruits}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Changing Nested Mutable Objects

If a tuple contains mutable objects (like lists), the mutable objects can be modified:

```python
# Tuple containing a list
person = ("John", ["Python", "Java"], 30)
print(f"Original tuple: {person}")

# Can't change the name or age
try:
    person[0] = "Jane"
except TypeError as e:
    print(f"Error changing name: {e}")

# But we can modify the list of skills
person[1].append("JavaScript")
person[1][0] = "Python 3"

print(f"Modified tuple: {person}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Tuple Methods

Tuples have only two built-in methods:

```python
numbers = (3, 1, 4, 1, 5, 9, 2)

# Count occurrences of a value
count_of_1 = numbers.count(1)  # 2

# Find the index of a value (first occurrence)
index_of_5 = numbers.index(5)  # 4

# Find the index with start and end parameters
index_of_1_after_pos_1 = numbers.index(1, 2)  # 3 (finds the second '1')

try:
    # Will raise ValueError if not found
    numbers.index(42)
except ValueError as e:
    print(f"Error: {e}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Tuple methods demonstration
numbers = (3, 1, 4, 1, 5, 9, 2)
print(f"Tuple: {numbers}")

# Count occurrences
print(f"Count of 1: {numbers.count(1)}")
print(f"Count of 10: {numbers.count(10)}")  # 0 if not present

# Find index
print(f"Index of 5: {numbers.index(5)}")
print(f"Index of 1: {numbers.index(1)}")  # Returns first occurrence

# Find index with start parameter
print(f"Index of 1 after position 1: {numbers.index(1, 2)}")

try:
    print(numbers.index(10))  # Will raise ValueError
except ValueError as e:
    print(f"Error finding 10: {e}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Tuple Unpacking

One powerful feature of tuples is the ability to unpack them into multiple variables:

```python
# Basic unpacking
coordinates = (3, 4)
x, y = coordinates
print(f"x: {x}, y: {y}")

# Unpacking nested tuples
person = ("John", "Doe", (1990, 5, 20))
first_name, last_name, (birth_year, birth_month, birth_day) = person
print(f"{first_name} {last_name} was born on {birth_year}-{birth_month}-{birth_day}")

# Extended unpacking (Python 3.x)
numbers = (1, 2, 3, 4, 5)
first, second, *rest = numbers
print(f"First: {first}, Second: {second}, Rest: {rest}")

first, *middle, last = numbers
print(f"First: {first}, Middle: {middle}, Last: {last}")

*beginning, last = numbers
print(f"Beginning: {beginning}, Last: {last}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Unpacking in For Loops

```python
# Unpacking in loops
people = [
    ("John", "Doe", 30),
    ("Jane", "Smith", 25),
    ("Bob", "Johnson", 35)
]

for first_name, last_name, age in people:
    print(f"{first_name} {last_name} is {age} years old")

# Unpacking with enumerate
fruits = ("apple", "banana", "cherry")
for i, fruit in enumerate(fruits):
    print(f"Fruit {i}: {fruit}")

# Unpacking with zip
names = ("John", "Jane", "Bob")
ages = (30, 25, 35)

for name, age in zip(names, ages):
    print(f"{name} is {age} years old")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Swapping Variables

Tuple unpacking provides an elegant way to swap variables without using a temporary variable:

```python
# Swapping variables with tuple unpacking
a = 5
b = 10
print(f"Before swap: a = {a}, b = {b}")

a, b = b, a  # Swapping using tuple unpacking

print(f"After swap: a = {a}, b = {b}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Built-in Functions with Tuples

You can use many built-in Python functions with tuples:

```python
numbers = (3, 1, 4, 1, 5, 9, 2)

# Length of a tuple
length = len(numbers)  # 7

# Largest value
maximum = max(numbers)  # 9

# Smallest value
minimum = min(numbers)  # 1

# Sum of all values
total = sum(numbers)  # 25

# Sort without modifying the original (returns a list)
sorted_numbers = sorted(numbers)  # [1, 1, 2, 3, 4, 5, 9]

# Sort in reverse order
reverse_sorted = sorted(numbers, reverse=True)  # [9, 5, 4, 3, 2, 1, 1]

# Sort with custom key function
words = ("apple", "Banana", "cherry")
sorted_words = sorted(words, key=str.lower)  # ['apple', 'Banana', 'cherry']
```

```python
# Common functions with tuples
numbers = (3, 1, 4, 1, 5, 9, 2)
print(f"Tuple: {numbers}")

print(f"Length: {len(numbers)}")
print(f"Maximum: {max(numbers)}")
print(f"Minimum: {min(numbers)}")
print(f"Sum: {sum(numbers)}")
print(f"Sorted (returns a list): {sorted(numbers)}")
print(f"Reverse sorted: {sorted(numbers, reverse=True)}")

# Sort with custom key
words = ("apple", "Banana", "cherry", "Apple")
print(f"\nWords: {words}")
print(f"Case-insensitive sorted: {sorted(words, key=str.lower)}")

# Check if a value exists in the tuple
print(f"\nIs 5 in the tuple? {5 in numbers}")
print(f"Is 7 in the tuple? {7 in numbers}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Tuple vs List

Understanding when to use a tuple versus a list is important:

```python
import sys
import timeit

# Compare sizes
list_example = [1, 2, 3, 4, 5]
tuple_example = (1, 2, 3, 4, 5)

print(f"Size of list: {sys.getsizeof(list_example)} bytes")
print(f"Size of tuple: {sys.getsizeof(tuple_example)} bytes")

# Compare creation time
list_creation_time = timeit.timeit(stmt="[1, 2, 3, 4, 5]", number=1000000)
tuple_creation_time = timeit.timeit(stmt="(1, 2, 3, 4, 5)", number=1000000)

print(f"List creation time: {list_creation_time:.6f} seconds")
print(f"Tuple creation time: {tuple_creation_time:.6f} seconds")

# Compare access time
list_access_time = timeit.timeit(stmt="x[2]", setup="x = [1, 2, 3, 4, 5]", number=1000000)
tuple_access_time = timeit.timeit(stmt="x[2]", setup="x = (1, 2, 3, 4, 5)", number=1000000)

print(f"List access time: {list_access_time:.6f} seconds")
print(f"Tuple access time: {tuple_access_time:.6f} seconds")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### When to Use Tuples vs Lists

As a beginner, it can be confusing to know when to use tuples instead of lists. Here are some guidelines:

Use **tuples** when:
- You need an immutable sequence that cannot be changed
- You want to use the collection as a dictionary key (lists cannot be used as dictionary keys)
- You want to signal that the data should not change
- You're working with multiple return values from a function
- You want to protect data from accidental modification

Use **lists** when:
- You need to modify the sequence (add, remove, or change elements)
- You're working with a homogeneous collection that might grow or shrink
- You need to sort or rearrange elements

Remember, you can always convert between tuples and lists using the `tuple()` and `list()` functions when needed.

## Namedtuples

The `collections` module provides `namedtuple` for creating tuple-like objects with named fields:

```python
from collections import namedtuple

# Define a named tuple type
Person = namedtuple('Person', ['name', 'age', 'city'])

# Create instances
john = Person(name="John", age=30, city="New York")
jane = Person("Jane", 25, "Boston")  # Positional arguments work too

# Access by name
print(f"{john.name} is {john.age} years old and lives in {john.city}")

# Access by index (still a tuple)
print(f"{jane[0]} is {jane[1]} years old and lives in {jane[2]}")

# Unpack like a regular tuple
name, age, city = john
print(f"Unpacked: {name}, {age}, {city}")

# Convert to dictionary
john_dict = john._asdict()
print(f"As dictionary: {john_dict}")

# Create new instance with one field replaced
john_older = john._replace(age=31)
print(f"Original: {john}")
print(f"Modified: {john_older}")

# Fields as a tuple
print(f"Fields: {Person._fields}")

# Create from iterable
data = ["Alice", 22, "Chicago"]
alice = Person._make(data)
print(f"From iterable: {alice}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Common Tuple Patterns and Idioms

### Returning Multiple Values

```python
def get_dimensions():
    """Return width, height, and depth"""
    return 10, 20, 30

width, height, depth = get_dimensions()
print(f"Width: {width}, Height: {height}, Depth: {depth}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Dictionary Items View

```python
person = {"name": "John", "age": 30, "city": "New York"}

# dict.items() returns a view object containing tuples
items = person.items()
print(f"Dictionary items: {items}")

# Convert to a list of tuples
items_list = list(items)
print(f"Items as list: {items_list}")

# Iterate over key-value pairs (as tuples)
for key, value in person.items():
    print(f"{key}: {value}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Tuples as Keys in Dictionaries

```python
# Using tuples as dictionary keys (for composite keys)
# A point in 3D space
points = {
    (0, 0, 0): "origin",
    (1, 0, 0): "x-axis unit point",
    (0, 1, 0): "y-axis unit point",
    (0, 0, 1): "z-axis unit point"
}

# Look up a point
print(f"The point (0, 0, 0) is the {points[(0, 0, 0)]}")

# This is useful for things like grid coordinates
grid = {
    (0, 0): "empty",
    (0, 1): "wall",
    (1, 0): "player",
    (1, 1): "exit"
}

# Check if a coordinate is in the grid
position = (1, 0)
if position in grid:
    print(f"At position {position} is: {grid[position]}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Summary

Tuples are an essential data structure in Python that offer immutability and efficiency for storing ordered collections of items. While they might seem limited compared to lists due to their immutability, this characteristic actually makes them ideal for many use cases.

Key points to remember about tuples:
- Tuples are ordered, immutable collections of items
- They can contain elements of different data types
- Access elements by index, just like lists
- Use packing and unpacking for elegant variable assignment
- Tuples are more efficient than lists for fixed data
- Use namedtuples for tuple-like objects with named fields
- Tuples can be used as dictionary keys (if all elements are hashable)

In the next lesson, we'll explore dictionaries, which are unordered collections of key-value pairs that offer efficient lookups by key.

#### Footnotes

- <dfn>a - Hashable objects have a hash value that doesn't change during their lifetime, allowing them to be used as dictionary keys or in sets. All immutable built-in objects are hashable, while mutable containers like lists and dictionaries are not.</dfn>
- <dfn>b - The parentheses in tuple literals are optional in many contexts, but required for empty tuples and single-element tuples (with the trailing comma).</dfn>
- <dfn>c - Tuple packing refers to assigning multiple values to a single tuple, while unpacking refers to extracting values from a tuple into multiple variables.</dfn>