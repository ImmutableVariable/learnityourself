---
sidebar_position: 1
---

# Lists

Lists are one of Python's most versatile and commonly used data structures. They allow you to store collections of ordered, mutable items in a single container. Lists can contain elements of different data types and can be modified after creation.

## Characteristics of Lists

- **Ordered**: Elements maintain their order and can be accessed by index
- **Mutable**: Can be modified after creation (add, remove, or change elements)
- **Heterogeneous**: Can contain elements of different data types
- **Dynamic sizing**: Automatically resize as elements are added or removed
- **Nestable**: Can contain other lists as elements

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

# Create a list using the list() constructor
numbers_alt = list([1, 2, 3, 4, 5])

# Create a list from another sequence type
chars = list("Python")  # ['P', 'y', 't', 'h', 'o', 'n']
```

```python
# Creating and displaying lists
numbers = [1, 2, 3, 4, 5]
fruits = ["apple", "banana", "cherry"]
mixed = [42, "hello", 3.14, True]
nested = [1, [2, 3], [4, 5, 6]]
chars = list("Python")

print(f"Numbers: {numbers}")
print(f"Fruits: {fruits}")
print(f"Mixed types: {mixed}")
print(f"Nested list: {nested}")
print(f"Characters from 'Python': {chars}")

# Check the type
print(f"Type of numbers: {type(numbers)}")

# Check the length
print(f"Length of fruits: {len(fruits)}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Accessing List Elements

Python uses zero-based indexing, meaning the first element is at index 0:

### Indexing

```python
fruits = ["apple", "banana", "cherry", "orange", "kiwi"]

# Positive indexing (from the beginning)
first_fruit = fruits[0]  # "apple"
third_fruit = fruits[2]  # "cherry"

# Negative indexing (from the end)
last_fruit = fruits[-1]  # "kiwi"
second_last = fruits[-2]  # "orange"

# Accessing nested elements
nested = [1, [2, 3], [4, 5, 6]]
inner_element = nested[1][0]  # 2
```

```python
fruits = ["apple", "banana", "cherry", "orange", "kiwi"]
nested = [1, [2, 3], [4, 5, 6]]

# Accessing elements by index
print(f"First fruit (index 0): {fruits[0]}")
print(f"Third fruit (index 2): {fruits[2]}")
print(f"Last fruit (index -1): {fruits[-1]}")
print(f"Second last fruit (index -2): {fruits[-2]}")

# Accessing nested elements
print(f"First element of nested list: {nested[0]}")
print(f"First element of second inner list: {nested[1][0]}")
print(f"Last element of last inner list: {nested[2][2]}")

# Demonstration of index error
try:
    print(fruits[10])  # This will cause an IndexError
except IndexError as e:
    print(f"Error: {e}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Slicing

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

# Get elements from index 1 to 4 (end is exclusive)
middle = fruits[1:5]  # ["banana", "cherry", "orange", "kiwi"]

# Get every second element
every_second = fruits[::2]  # ["apple", "cherry", "kiwi"]

# Get elements from index 1 to 5, stepping by 2
stepped = fruits[1:6:2]  # ["banana", "orange", "mango"]

# Reverse a list
reversed_fruits = fruits[::-1]  # ["mango", "kiwi", "orange", "cherry", "banana", "apple"]

# Negative indices in slicing
neg_slice = fruits[-4:-1]  # ["cherry", "orange", "kiwi"]
```

```python
fruits = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]

# Slicing examples
print(f"Original list: {fruits}")
print(f"First three fruits [0:3]: {fruits[0:3]}")
print(f"First three fruits [:3]: {fruits[:3]}")
print(f"From third to end [2:]: {fruits[2:]}")
print(f"From index 1 to 4 [1:5]: {fruits[1:5]}")
print(f"Every second fruit [::2]: {fruits[::2]}")
print(f"From index 1 to 5, stepping by 2 [1:6:2]: {fruits[1:6:2]}")
print(f"Reversed list [::-1]: {fruits[::-1]}")
print(f"Negative indices slice [-4:-1]: {fruits[-4:-1]}")

# Slicing with indices beyond list length is safe
print(f"Slice beyond list bounds [2:100]: {fruits[2:100]}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Modifying Lists

Lists are mutable, meaning you can change their content after creation:

### Changing Elements

```python
fruits = ["apple", "banana", "cherry", "orange", "kiwi"]

# Change a single element
fruits[1] = "blueberry"  # ["apple", "blueberry", "cherry", "orange", "kiwi"]

# Change multiple elements with slicing
fruits[1:3] = ["blackberry", "strawberry"]  # ["apple", "blackberry", "strawberry", "orange", "kiwi"]

# Replace with a different number of elements
fruits[1:3] = ["peach", "pear", "plum"]  # ["apple", "peach", "pear", "plum", "orange", "kiwi"]
```

```python
# Modifying list elements
fruits = ["apple", "banana", "cherry", "orange", "kiwi"]
print(f"Original list: {fruits}")

# Change a single element
fruits[1] = "blueberry"
print(f"After changing element at index 1: {fruits}")

# Change multiple elements with slicing
fruits[1:3] = ["blackberry", "strawberry"]
print(f"After changing slice [1:3]: {fruits}")

# Replace with a different number of elements
fruits[1:3] = ["peach", "pear", "plum"]
print(f"After replacing with more elements: {fruits}")

# Replace with fewer elements
fruits[2:5] = ["fig"]
print(f"After replacing with fewer elements: {fruits}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Adding Elements

```python
fruits = ["apple", "banana", "cherry"]

# Add an element to the end
fruits.append("orange")  # ["apple", "banana", "cherry", "orange"]

# Insert an element at a specific position
fruits.insert(1, "mango")  # ["apple", "mango", "banana", "cherry", "orange"]

# Extend the list with another list
fruits.extend(["kiwi", "papaya"])  # ["apple", "mango", "banana", "cherry", "orange", "kiwi", "papaya"]

# Concatenate lists with + operator
more_fruits = fruits + ["melon", "pineapple"]  # creates a new list
```

```python
# Adding elements to lists
fruits = ["apple", "banana", "cherry"]
print(f"Original list: {fruits}")

# Append to the end
fruits.append("orange")
print(f"After appending 'orange': {fruits}")

# Insert at position
fruits.insert(1, "mango")
print(f"After inserting 'mango' at index 1: {fruits}")

# Extend with another list
fruits.extend(["kiwi", "papaya"])
print(f"After extending with ['kiwi', 'papaya']: {fruits}")

# Concatenate with + operator
more_fruits = fruits + ["melon", "pineapple"]
print(f"New concatenated list: {more_fruits}")
print(f"Original list (unchanged by +): {fruits}")

# Adding an element with slicing
fruits[len(fruits):] = ["grape"]
print(f"After adding with slicing: {fruits}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Removing Elements

```python
fruits = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]

# Remove an element by value (first occurrence)
fruits.remove("cherry")  # ["apple", "banana", "orange", "kiwi", "mango"]

# Remove an element by index and get its value
removed = fruits.pop(1)  # removed = "banana", fruits = ["apple", "orange", "kiwi", "mango"]

# Remove the last element if no index is specified
last = fruits.pop()  # last = "mango", fruits = ["apple", "orange", "kiwi"]

# Remove an element by index without returning it
del fruits[1]  # fruits = ["apple", "kiwi"]

# Remove a slice of elements
fruits = ["apple", "banana", "cherry", "orange", "kiwi"]
del fruits[1:3]  # fruits = ["apple", "orange", "kiwi"]

# Clear the list (remove all elements)
fruits.clear()  # fruits = []
```

```python
# Removing elements from lists
fruits = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
print(f"Original list: {fruits}")

# Remove by value
fruits.remove("cherry")
print(f"After removing 'cherry': {fruits}")

# Try to remove a non-existent value
try:
    fruits.remove("pineapple")
except ValueError as e:
    print(f"Error: {e}")

# Pop with index
removed = fruits.pop(1)
print(f"Popped element at index 1: {removed}")
print(f"List after pop(1): {fruits}")

# Pop last element
last = fruits.pop()
print(f"Popped last element: {last}")
print(f"List after pop(): {fruits}")

# Delete by index
del fruits[1]
print(f"List after del fruits[1]: {fruits}")

# Reset for next examples
fruits = ["apple", "banana", "cherry", "orange", "kiwi"]
print(f"\nReset list: {fruits}")

# Delete a slice
del fruits[1:3]
print(f"After del fruits[1:3]: {fruits}")

# Clear the list
fruits.clear()
print(f"After clear(): {fruits}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## List Methods

Python provides many useful methods for working with lists:

```python
numbers = [3, 1, 4, 1, 5, 9, 2]

# Count occurrences of a value
count_of_1 = numbers.count(1)  # 2

# Find the index of a value (first occurrence)
index_of_5 = numbers.index(5)  # 4

# Find the index with start and end parameters
index_of_1_after_pos_1 = numbers.index(1, 2)  # 3 (finds the second '1')

# Sort the list in-place
numbers_for_sorting = numbers.copy()
numbers_for_sorting.sort()  # [1, 1, 2, 3, 4, 5, 9]

# Sort with a key function
words = ["apple", "Banana", "cherry"]
words.sort(key=str.lower)  # ["apple", "Banana", "cherry"] (case-insensitive)

# Sort in reverse order
numbers_for_reverse = numbers.copy()
numbers_for_reverse.sort(reverse=True)  # [9, 5, 4, 3, 2, 1, 1]

# Reverse the list in-place (change order, not sorting)
numbers_to_reverse = numbers.copy()
numbers_to_reverse.reverse()  # [2, 9, 5, 1, 4, 1, 3]

# Copy a list
numbers_copy = numbers.copy()  # [3, 1, 4, 1, 5, 9, 2]

# Alternative ways to copy
numbers_copy2 = list(numbers)
numbers_copy3 = numbers[:]
```

```python
# List methods demonstration
numbers = [3, 1, 4, 1, 5, 9, 2]
print(f"Original list: {numbers}")

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

# Sort
numbers_for_sorting = numbers.copy()
numbers_for_sorting.sort()
print(f"Sorted list: {numbers_for_sorting}")
print(f"Original remains unchanged: {numbers}")

# Sort with key and reverse
words = ["apple", "Banana", "cherry", "Apple"]
words_copy = words.copy()
words_copy.sort()
print(f"Default sort (case-sensitive): {words_copy}")

words_copy = words.copy()
words_copy.sort(key=str.lower)
print(f"Case-insensitive sort: {words_copy}")

words_copy = words.copy()
words_copy.sort(reverse=True)
print(f"Reverse sort: {words_copy}")

# Reverse
numbers_to_reverse = numbers.copy()
numbers_to_reverse.reverse()
print(f"Reversed list: {numbers_to_reverse}")

# Copying
copy1 = numbers.copy()
copy2 = list(numbers)
copy3 = numbers[:]
print(f"Three ways to copy: {copy1}, {copy2}, {copy3}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## List Comprehensions

List comprehensions provide a concise way to create lists. They offer a more readable and often faster alternative to using loops and `append()` for list creation.

### Basic Syntax

```python
# Basic syntax: [expression for item in iterable]

# Create a list of squares from 1 to 5
squares = [x**2 for x in range(1, 6)]  # [1, 4, 9, 16, 25]

# Create a list of doubled values
doubled = [x * 2 for x in [1, 2, 3, 4]]  # [2, 4, 6, 8]

# Create a list from characters in a string
letters = [c for c in "hello"]  # ['h', 'e', 'l', 'l', 'o']
```

### Conditional List Comprehensions

```python
# With a filter condition: [expression for item in iterable if condition]

# Filter even numbers
evens = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]

# Filter strings by length
words = ["apple", "banana", "cherry", "kiwi", "pear"]
short_words = [word for word in words if len(word) < 6]  # ["apple", "kiwi", "pear"]

# Using if-else in the expression
results = ["even" if x % 2 == 0 else "odd" for x in range(5)]  # ["even", "odd", "even", "odd", "even"]
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Nested List Comprehensions

```python
# Create a matrix (nested list)
matrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]
# [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

# Flatten a nested list
nested = [[1, 2], [3, 4], [5, 6]]
flattened = [item for sublist in nested for item in sublist]
# [1, 2, 3, 4, 5, 6]

# Filter in nested structures
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
even_from_matrix = [num for row in matrix for num in row if num % 2 == 0]
# [2, 4, 6, 8]
```

```python
# List comprehensions examples
print("Basic list comprehensions:")
squares = [x**2 for x in range(1, 6)]
print(f"Squares 1-5: {squares}")

doubled = [x * 2 for x in [1, 2, 3, 4]]
print(f"Doubled values: {doubled}")

letters = [c for c in "hello"]
print(f"Characters in 'hello': {letters}")

print("\nConditional list comprehensions:")
evens = [x for x in range(10) if x % 2 == 0]
print(f"Even numbers 0-9: {evens}")

words = ["apple", "banana", "cherry", "kiwi", "pear"]
short_words = [word for word in words if len(word) < 6]
print(f"Words shorter than 6 letters: {short_words}")

results = ["even" if x % 2 == 0 else "odd" for x in range(5)]
print(f"Even or odd labels: {results}")

print("\nNested list comprehensions:")
matrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]
print("Multiplication table 3x3:")
for row in matrix:
    print(row)

nested = [[1, 2], [3, 4], [5, 6]]
flattened = [item for sublist in nested for item in sublist]
print(f"Flattened nested list: {flattened}")

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
even_from_matrix = [num for row in matrix for num in row if num % 2 == 0]
print(f"Even numbers from matrix: {even_from_matrix}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Common List Operations

Python provides several built-in functions and operators for working with lists:

### Built-in Functions

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

# Sort in reverse order
reverse_sorted = sorted(numbers, reverse=True)  # [9, 5, 4, 3, 2, 1, 1]

# Sort with custom key function
words = ["apple", "Banana", "cherry"]
sorted_words = sorted(words, key=str.lower)  # ["apple", "Banana", "cherry"]
```

### Membership and Concatenation

```python
fruits = ["apple", "banana", "cherry"]

# Check if an element is in the list
has_apple = "apple" in fruits  # True
has_mango = "mango" in fruits  # False

# Check if an element is not in the list
no_orange = "orange" not in fruits  # True

# Concatenate lists
more_fruits = ["orange", "kiwi"]
combined = fruits + more_fruits  # ["apple", "banana", "cherry", "orange", "kiwi"]

# Repeat a list
repeated = fruits * 2  # ["apple", "banana", "cherry", "apple", "banana", "cherry"]
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

# Sort with custom key
words = ["apple", "Banana", "cherry", "Apple"]
print(f"\nWords: {words}")
print(f"Case-insensitive sorted: {sorted(words, key=str.lower)}")

# Membership tests
fruits = ["apple", "banana", "cherry"]
print(f"\nFruits: {fruits}")
print(f"Is 'apple' in fruits? {'apple' in fruits}")
print(f"Is 'mango' in fruits? {'mango' in fruits}")
print(f"Is 'orange' not in fruits? {'orange' not in fruits}")

# Concatenation and repetition
more_fruits = ["orange", "kiwi"]
print(f"\nMore fruits: {more_fruits}")
combined = fruits + more_fruits
print(f"Combined lists: {combined}")

repeated = fruits * 2
print(f"Repeated list: {repeated}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## List Efficiency and Performance

Understanding the efficiency of list operations is important for writing performant code, especially when working with large datasets.

### Time Complexity

| Operation | Time Complexity | Description |
|-----------|-----------------|-------------|
| `list[i]` | O(1) | Access by index |
| `list.append(x)` | O(1) | Add to end |
| `list.pop()` | O(1) | Remove from end |
| `list.insert(i, x)` | O(n) | Insert at position |
| `list.pop(i)` | O(n) | Remove by index |
| `list.remove(x)` | O(n) | Remove by value |
| `x in list` | O(n) | Search by value |
| `list.sort()` | O(n log n) | Sort in-place |
| `sorted(list)` | O(n log n) | Return sorted copy |

### Memory Considerations

```python
import sys

# Demonstrate memory usage
small_list = [1, 2, 3, 4, 5]
large_list = list(range(1000))

print(f"Small list size: {sys.getsizeof(small_list)} bytes")
print(f"Large list size: {sys.getsizeof(large_list)} bytes")

# List vs generator expression for large sequences
import time

# Time to create a large list
start = time.time()
large_list = [x**2 for x in range(1000000)]
list_time = time.time() - start

# Time to use a generator expression 
start = time.time()
sum(x**2 for x in range(1000000))
gen_time = time.time() - start

print(f"List comprehension time: {list_time:.4f} seconds")
print(f"Generator expression time: {gen_time:.4f} seconds")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Common Patterns and Best Practices

### Copying Lists

```python
original = [1, 2, [3, 4]]

# Shallow copy (nested objects are shared)
shallow_copy = original.copy()
shallow_copy2 = list(original)
shallow_copy3 = original[:]

# Deep copy (all objects are copied)
import copy
deep_copy = copy.deepcopy(original)

# Demonstration of shallow vs deep copy
original[2][0] = 99
print(f"Original: {original}")
print(f"Shallow copy: {shallow_copy}")  # Will show [1, 2, [99, 4]]
print(f"Deep copy: {deep_copy}")        # Will show [1, 2, [3, 4]]
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Filtering and Transforming

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter numbers using list comprehension
evens = [x for x in numbers if x % 2 == 0]

# Filter using filter() function
odd_filter = filter(lambda x: x % 2 != 0, numbers)
odds = list(odd_filter)

# Transform using map() function
squared = list(map(lambda x: x**2, numbers))

print(f"Original: {numbers}")
print(f"Evens (comprehension): {evens}")
print(f"Odds (filter): {odds}")
print(f"Squared (map): {squared}")

# Combined filter and map with comprehension
odd_squares = [x**2 for x in numbers if x % 2 != 0]
print(f"Odd squares (comprehension): {odd_squares}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Working with Multiple Lists

```python
# Zip multiple lists together
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
cities = ["New York", "Boston", "Chicago"]

# Create pairs or tuples
people = list(zip(names, ages, cities))
print(f"People: {people}")

# Unpack zipped lists
unpacked_names, unpacked_ages, unpacked_cities = zip(*people)
print(f"Unpacked names: {unpacked_names}")

# Enumerate for index and value
for i, name in enumerate(names):
    print(f"Person {i}: {name}")

# Parallel iteration
for name, age, city in zip(names, ages, cities):
    print(f"{name} is {age} years old and lives in {city}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Summary

Lists are one of Python's most versatile and commonly used data structures. They offer a wide range of features for storing, accessing, and manipulating sequences of data.

Key points to remember about lists:
- Lists are ordered, mutable collections of items
- They can contain elements of different data types
- Access elements by index (`list[0]`) or slice (`list[1:3]`)
- Modify lists with methods like `append()`, `insert()`, `remove()`, and `pop()`
- Use list comprehensions for concise list creation and transformation
- Lists are efficient for most operations, but consider alternatives for specific use cases

In the next lesson, we'll explore tuples, which are similar to lists but with some important differences, particularly immutability.

#### Footnotes

- <dfn>a - Zero-based indexing means the first element is at index 0, the second at index 1, and so on. This is common in many programming languages.</dfn>
- <dfn>b - Shallow copying creates a new list but doesn't create copies of nested objects. Changes to nested objects in the original list will affect the shallow copy.</dfn>
- <dfn>c - Lists in Python are implemented as dynamic arrays, which automatically resize as elements are added or removed.</dfn>