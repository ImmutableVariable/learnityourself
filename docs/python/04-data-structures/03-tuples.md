---
sidebar_position: 3
---

# Tuples

Another important data structure in Python is the Tuple. A tuple is a data structure that allows you to store a collection of data next to each other in memory (just like a list)! Then, you are able to access this data by using an index. Tuples are also ordered, meaning that all elements of a tuple will maintain their order. However, tuples have a minor difference from lists: they are immutable, meaning that once you create a tuple, you cannot change its contents. This makes tuples a great choice for storing data that should not be modified.

## Creating Tuples

You can create a tuple using parentheses `()` and including a comma-separated list of elements `(1, 2, 3, 4, 5)`. You can also create a tuple without any data (`()`). You can also create one-element tuples; however, a trailing comma is required for single-element tuples to differentiate them from regular parentheses used for grouping expressions (ex: `(42,)`).

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
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

## Accessing Tuple Elements

You can access the elements of a tuple just like you would with a list, using indexing. Tuples support both positive and negative indexing. Positive indexing starts from 0, while negative indexing starts from -1 (the last element).

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

print(f"First fruit: {first_fruit}")
print(f"Third fruit: {third_fruit}")
print(f"Last fruit: {last_fruit}")
print(f"Second last fruit: {second_last}")
print(f"Inner element from nested tuple: {inner_element}")
print(f"Type of first fruit: {type(first_fruit)}")
print(f"Type of fruits: {type(fruits)}")
print(f"Type of nested: {type(nested)}")

# Demonstration of index error
try:
    print(fruits[10])  # This will cause an IndexError
except IndexError as e:
    print(f"Error: {e}")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

### Slicing

Slicing also works similarly to lists

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

print(f"First three fruits: {first_three}")
print(f"First three fruits (alternative): {first_three_alt}")
print(f"Fruits from index 2: {from_third}")
print(f"Every second fruit: {every_second}")
print(f"Reversed fruits: {reversed_fruits}")
print(f"Type of first three fruits: {type(first_three)}")
print(f"Type of every second fruit: {type(every_second)}")
print(f"Type of reversed fruits: {type(reversed_fruits)}")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

## Immutability of Tuples

The key difference between tuples and lists is immutability. Once a tuple is created, its elements cannot be modified. This means you cannot change, add, or remove elements from a tuple. Attempting to do so will raise a `TypeError`.

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
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

### Changing Nested Mutable Objects

However, if a tuple contains mutable objects (like lists), you can modify those objects. This can be confusing, as the tuple itself is immutable, but the contents of the mutable objects can be changed.

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
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

## Tuple Methods

Tuples have only two built-in methods: `count()` and `index()`. These methods are useful for counting occurrences of a value and finding the index of a value, respectively.

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
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

## Tuple Unpacking

You can also unpack tuples into variables. This is particularly useful when you want to assign multiple values at once. Tuple unpacking can be done in a single line, making your code cleaner and more readable.

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
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

### Unpacking in For Loops

You can apply the same unpacking technique within loops to iterate over tuples.

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
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

### Swapping Variables

Tuple unpacking provides an elegant way to swap variables without using a temporary variable:

```python
# Swapping variables with tuple unpacking
a = 5
b = 10
print(f"Before swap: a = {a}, b = {b}")

a, b = b, a  # Swapping using tuple unpacking

# This is equivalent to:
# temp = a
# a = b
# b = temp

print(f"After swap: a = {a}, b = {b}")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

## Built-in Functions with Tuples

We also have a lot of built-in functions that work with tuples! These functions are similar to those used with lists, but they return results without modifying the original tuple.

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

print(f"Length: {length}")
print(f"Maximum: {maximum}")
print(f"Minimum: {minimum}")
print(f"Total: {total}")
print(f"Sorted: {sorted_numbers}")
print(f"Reverse Sorted: {reverse_sorted}")
print(f"Sorted Words: {sorted_words}")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

## Comparing a tuple to a list

A tuple is similar to a list, but it has some key differences. Here are some comparisons between tuples and lists:
- **Syntax**: Tuples are defined using parentheses `()` while lists are defined using square brackets `[]`.
- **Mutability**: Tuples are immutable, meaning their contents cannot be changed after creation. Lists are mutable, allowing you to modify their contents.
- **Performance**: Tuples are generally faster than lists for certain operations due to their immutability. This can lead to performance improvements in some cases.
- **Memory Usage**: Tuples typically use less memory than lists, making them more efficient for storing fixed-size collections of data.

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
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
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

Remember, you can always convert between tuples and lists using the `tuple()` and `list()` functions when needed; however, it's best to choose the right data structure for your use case from the start.

## Namedtuples

The `collections` module provides a convenient way to create tuple-like objects with named fields using `namedtuple`. This allows you to access elements by name instead of index, making your code more readable.

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
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
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
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

## Summary

Tuples are a powerful and flexible data structure in Python. They allow you to store collections of data in an ordered and immutable way. You can create tuples, access their elements, unpack them, and use them with built-in functions. Tuples are particularly useful when you want to ensure that the data remains unchanged or when you need to return multiple values from a function. Remember to choose the right data structure based on your needs. You can also consider using namedtuples for better readability and maintainability in your code.

#### Footnotes

- <dfn>a - Hashable objects have a hash value that doesn't change during their lifetime, allowing them to be used as dictionary keys or in sets. All immutable built-in objects are hashable, while mutable containers like lists and dictionaries are not.</dfn>
- <dfn>b - The parentheses in tuple literals are optional in many contexts, but required for empty tuples and single-element tuples (with the trailing comma). Also, I would generally recommend using parentheses for readability.</dfn>
- <dfn>c - Tuple packing refers to assigning multiple values to a single tuple, while unpacking refers to extracting values from a tuple into multiple variables.</dfn>