---
sidebar_position: 1
---

# Lists
A key concept in programming is Lists (similar to the well known Array). A list is a data structure that allows you to store collection of data next to each other in memory. Then, you are able to access this data by using an index. Lists are also ordered, this means that all elements of a list will maintain their order (ex: `[1, 2, 3]` . The first value here will always be the first, it will not change order). They are also mutable and can be modified by adding, removing, or changing elements.

## Some differences

Unlike some other languages, lists in python are heterogeneous. This means that lists can store multiple types together (ex: a `String` and a `Int` in the same array). Python's lists are also dynamic, this means that they automatically resize whenever new elements are added. 

*Note: You can also nest lists inside of lists!*

## Creating Lists

To create a list, simple place a square bracket `[`, then enter a comma separated set of values (ex: `1, 2, 3`), followed by a closing square bracket `]`

View this sample below!

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

# You can also create a list with a builtin.
numbers_alt = list([1, 2, 3, 4, 5])

# You can also create a list from another sequence type
chars = list("Python")  # ['P', 'y', 't', 'h', 'o', 'n']

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

Python uses zero-based indexing, meaning the first element is at index 0. If you try to access a invalid index (one that is not within the sequence), it will throw a error (show below on the last lines).

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

Python also provides us with slicing in order to get slices (sections) of a list

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

print(f"Original list: {fruits}")
print(f"First three fruits [0:3]: {fruits[0:3]}")
print(f"First three fruits [:3]: {fruits[:3]}")
print(f"From third to end [2:]: {fruits[2:]}")
print(f"From index 1 to 4 [1:5]: {fruits[1:5]}")
print(f"Every second fruit [::2]: {fruits[::2]}")
print(f"From index 1 to 5, stepping by 2 [1:6:2]: {fruits[1:6:2]}")
print(f"Reversed list [::-1]: {fruits[::-1]}")
print(f"Negative indices slice [-4:-1]: {fruits[-4:-1]}")

# Unlike before,
# slicing beyond the list is NOT a error
print(f"Slice beyond list bounds [2:100]: {fruits[2:100]}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Modifying Lists

Lists are mutable (changeable), meaning you can change their content after creation:

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

Here is the same sample with some print lines!

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

Along with replacing elements, you can also add them!


```python
# Adding elements to lists
fruits = ["apple", "banana", "cherry"]
print(f"Original list: {fruits}")

# Add a element to the end of the list
fruits.append("orange")
print(f"After appending 'orange': {fruits}")

# Insert a value into a specific position (index)
fruits.insert(1, "mango")
print(f"After inserting 'mango' at index 1: {fruits}")

# Extend by adding another list!
fruits.extend(["kiwi", "papaya"])
print(f"After extending with ['kiwi', 'papaya']: {fruits}")

# Concatenate two lists with + operator
more_fruits = fruits + ["melon", "pineapple"]
print(f"New concatenated list: {more_fruits}")
print(f"Original list (unchanged by +): {fruits}")

# You can also add a element with slicing!
fruits[len(fruits):] = ["grape"] 
print(f"After adding with slicing: {fruits}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Removing Elements

You can also remove elements from a list!

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

## List Comprehensions

List comprehensions are a compact way to create lists by applying an expression to each item in an iterable.

### Basic Syntax

```python
[expression for item in iterable]
```

### Simple List Comprehension Examples

```python
# Creating a list of squares using a for loop
squares_loop = []
for x in range(10):
    squares_loop.append(x ** 2)
print(squares_loop)

# Creating the same list using a list comprehension
squares_comp = [x ** 2 for x in range(10)]
print(squares_comp)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Converting a list of temperatures from Celsius to Fahrenheit
celsius = [0, 10, 20, 30, 40]
fahrenheit = [(9/5) * temp + 32 for temp in celsius]
print(fahrenheit)  # [32.0, 50.0, 68.0, 86.0, 104.0]
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Conditional List Comprehensions

You can add conditions to list comprehensions to filter items:

```python
# With a filter condition (only even numbers)
[expression for item in iterable if condition]
```

```python
# Getting even numbers from a range
even_numbers = [x for x in range(20) if x % 2 == 0]
print(even_numbers)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Filtering out strings that don't start with 'a'
words = ["apple", "banana", "cherry", "avocado", "grape"]
a_words = [word for word in words if word.startswith('a')]
print(a_words)  # ['apple', 'avocado']
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Using if-else in List Comprehensions

You can include if-else conditions in the expression part:

```python
# Syntax with if-else in the expression
[expression_if_true if condition else expression_if_false for item in iterable]
```

```python
# Label numbers as 'even' or 'odd'
numbers = [1, 2, 3, 4, 5]
labeled = ["even" if x % 2 == 0 else "odd" for x in numbers]
print(labeled)  # ['odd', 'even', 'odd', 'even', 'odd']
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Nested List Comprehensions

List comprehensions can be nested to work with multi-dimensional data:

```python
# Flattening a 2D list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]
print(flattened)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Creating a matrix of multiplication values
multiplication_table = [[i * j for j in range(1, 6)] for i in range(1, 6)]
for row in multiplication_table:
    print(row)
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

## List Methods

Python also provides many useful methods for working with lists:

```python
numbers = [3, 1, 4, 1, 5, 9, 2]

# Count occurrences of a value
count_of_1 = numbers.count(1)  # 2

# Find the index of a value (first occurrence)
index_of_5 = numbers.index(5)  # 4

# Find the index with start and end parameters
index_of_1_after_pos_1 = numbers.index(1, 2)  # 3 (finds the second '1')

# Copy a list
numbers_copy = numbers.copy()  # [3, 1, 4, 1, 5, 9, 2]

# Alternative ways to copy
numbers_copy2 = list(numbers)
numbers_copy3 = numbers[:]

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
    # Trying to get a index that is outside 
    # the range will also result in a error
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
```

## Generator Expressions

Generator expressions are similar to list comprehensions but create generators instead of lists. They use parentheses instead of square brackets and generate items one at a time, which makes them more memory-efficient for large datasets.

### Basic Syntax

```python
(expression for item in iterable)
```

### Examples of Generator Expressions

```python
# List comprehension vs generator expression
import sys

# List comprehension - creates the entire list in memory
squares_list = [x**2 for x in range(1000)]
print(f"List size: {sys.getsizeof(squares_list)} bytes")

# Generator expression - generates values on-the-fly
squares_gen = (x**2 for x in range(1000))
print(f"Generator size: {sys.getsizeof(squares_gen)} bytes")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Using a generator expression
gen = (x**2 for x in range(5))
for item in gen:
    print(item)  # Prints 0, 1, 4, 9, 16
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Converting a generator to a list
gen = (x**2 for x in range(5))
list_from_gen = list(gen)
print(list_from_gen)  # [0, 1, 4, 9, 16]
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Passing Generator Expressions to Functions

Generator expressions can be passed directly to functions that consume iterables:

```python
# Sum of squares
total = sum(x**2 for x in range(10))
print(total)  # 285

# Finding the maximum square
max_square = max(x**2 for x in range(10))
print(max_square)  # 81
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Performance Considerations

Comprehensions are not only more concise but often faster than equivalent loop constructs:

```python
import time

# Measure time for a regular loop
start_time = time.time()
squares_loop = []
for i in range(10000000):
    squares_loop.append(i * i)
loop_time = time.time() - start_time

# Measure time for a list comprehension
start_time = time.time()
squares_comp = [i * i for i in range(10000000)]
comp_time = time.time() - start_time

print(f"Loop time: {loop_time:.4f} seconds")
print(f"Comprehension time: {comp_time:.4f} seconds")
print(f"Comprehension is {loop_time/comp_time:.2f}x faster")
```

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