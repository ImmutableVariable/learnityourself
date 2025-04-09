---
sidebar_position: 3
---

# Dictionaries

Dictionaries are one of Python's most powerful and versatile data structures. They store data as key-value pairs, allowing for efficient lookups, insertion, and deletion. Unlike sequences (like lists or tuples), dictionaries use keys for indexing rather than numerical indices.

## Characteristics of Dictionaries

- **Key-Value Pairs**: Each value is associated with a unique key
- **Mutable**: Can be modified after creation
- **Unordered** (before Python 3.7): No guaranteed order of items
- **Ordered** (since Python 3.7): Items maintain insertion order
- **Dynamic**: Can grow or shrink as needed
- **Keys must be hashable**: Immutable types like strings, numbers, or tuples (containing only immutable objects)

## Creating Dictionaries

There are several ways to create dictionaries in Python:

```python
# Empty dictionary
empty_dict = {}
empty_dict2 = dict()

# Dictionary with initial values
student = {"name": "John", "age": 20, "courses": ["Math", "Science"]}

# Using the dict() constructor with keyword arguments
employee = dict(name="Alice", position="Developer", salary=75000)

# From a sequence of key-value pairs
items = [("apple", 0.99), ("banana", 0.59), ("orange", 1.29)]
prices = dict(items)

# Dictionary comprehension
squares = {x: x**2 for x in range(6)}

# Using the fromkeys() method to create a dictionary with default values
keys = ["a", "b", "c"]
default_dict = dict.fromkeys(keys, 0)  # All keys mapped to 0
```

```python
# Creating dictionaries demonstration
empty_dict = {}
empty_dict2 = dict()

student = {"name": "John", "age": 20, "courses": ["Math", "Science"]}

employee = dict(name="Alice", position="Developer", salary=75000)

items = [("apple", 0.99), ("banana", 0.59), ("orange", 1.29)]
prices = dict(items)

squares = {x: x**2 for x in range(6)}

keys = ["a", "b", "c"]
default_dict = dict.fromkeys(keys, 0)

# Display all dictionaries
print(f"Empty dictionary: {empty_dict}")
print(f"Student: {student}")
print(f"Employee: {employee}")
print(f"Prices: {prices}")
print(f"Squares: {squares}")
print(f"Default dict: {default_dict}")

# Check types
print(f"\nType of empty_dict: {type(empty_dict)}")
print(f"Type of student: {type(student)}")

# Check length
print(f"\nNumber of entries in student: {len(student)}")
print(f"Number of entries in squares: {len(squares)}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Accessing Dictionary Elements

### Using Keys

```python
student = {"name": "John", "age": 20, "courses": ["Math", "Science"]}

# Access a value using its key
name = student["name"]  # "John"

# Accessing a key that doesn't exist will raise a KeyError
try:
    grade = student["grade"]
except KeyError as e:
    print(f"Error: {e}")

# Using the get() method (safer, returns None if key doesn't exist)
grade = student.get("grade")  # None
print(f"Grade: {grade}")

# Using get() with a default value
grade = student.get("grade", "N/A")  # "N/A"
print(f"Grade with default: {grade}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Accessing dictionary elements
student = {"name": "John", "age": 20, "courses": ["Math", "Science"]}

# Using square bracket notation
print(f"Name: {student['name']}")
print(f"Age: {student['age']}")
print(f"Courses: {student['courses']}")

# Accessing lists inside dictionaries
print(f"First course: {student['courses'][0]}")

# Using the get method
print(f"\nUsing get() method:")
print(f"Name: {student.get('name')}")
print(f"Grade (non-existent key): {student.get('grade')}")
print(f"Grade with default: {student.get('grade', 'N/A')}")

# Demonstrating KeyError
try:
    grade = student["grade"]
except KeyError as e:
    print(f"\nError when using ['grade']: {e}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Checking if a Key Exists

```python
student = {"name": "John", "age": 20, "courses": ["Math", "Science"]}

# Using the 'in' operator
has_name = "name" in student  # True
has_grade = "grade" in student  # False

# Checking for non-existence
no_email = "email" not in student  # True

# Conditional based on key existence
if "name" in student:
    print(f"Hello, {student['name']}!")

# This pattern avoids KeyError when the key might not exist
if "grade" in student:
    print(f"Grade: {student['grade']}")
else:
    print("No grade available")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Modifying Dictionaries

### Adding and Changing Values

```python
student = {"name": "John", "age": 20}

# Adding a new key-value pair
student["email"] = "john@example.com"

# Changing the value of an existing key
student["age"] = 21

# Adding multiple key-value pairs using update()
student.update({"phone": "555-1234", "address": "123 Main St"})

print(f"Updated student: {student}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Removing Values

```python
student = {
    "name": "John", 
    "age": 20, 
    "email": "john@example.com",
    "phone": "555-1234", 
    "address": "123 Main St"
}

# Remove a key-value pair using del
del student["email"]

# Remove and return a value using pop()
phone = student.pop("phone")
print(f"Removed phone: {phone}")

# Remove and return the last inserted key-value pair using popitem()
# In Python 3.7+ popitem() removes the last added item
last_item = student.popitem()  # Returns ('address', '123 Main St')
print(f"Last item: {last_item}")

# Remove all items
student.clear()
print(f"After clear(): {student}")  # {}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Modifying dictionaries
student = {"name": "John", "age": 20}
print(f"Original: {student}")

# Adding new key-value pairs
student["email"] = "john@example.com"
print(f"After adding email: {student}")

# Updating existing value
student["age"] = 21
print(f"After updating age: {student}")

# Using update() to add/update multiple entries
student.update({"phone": "555-1234", "address": "123 Main St", "age": 22})
print(f"After update(): {student}")

# Removing entries
del student["email"]
print(f"After deleting email: {student}")

phone = student.pop("phone")
print(f"Popped value: {phone}")
print(f"After pop(): {student}")

last_item = student.popitem()
print(f"Last item removed: {last_item}")
print(f"After popitem(): {student}")

# Clear the dictionary
student.clear()
print(f"After clear(): {student}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Dictionary Methods

Python provides several methods for working with dictionaries:

```python
student = {
    "name": "John",
    "age": 20,
    "courses": ["Math", "Science"]
}

# Get all keys
keys = student.keys()
print(f"Keys: {keys}")

# Get all values
values = student.values()
print(f"Values: {values}")

# Get all key-value pairs as tuples
items = student.items()
print(f"Items: {items}")

# Create a copy of a dictionary
student_copy = student.copy()

# setdefault() - get value if key exists, otherwise set default and return it
email = student.setdefault("email", "no-email@example.com")
print(f"Email (setdefault): {email}")
print(f"Updated student: {student}")

# Note that keys(), values(), and items() return view objects
# They dynamically reflect changes to the dictionary
student["grade"] = "A"
print(f"Updated keys view: {keys}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Dictionary methods demonstration
student = {
    "name": "John",
    "age": 20,
    "courses": ["Math", "Science"]
}
print(f"Original student: {student}")

# Get views of dictionary
keys = student.keys()
values = student.values()
items = student.items()

print(f"\nKeys: {keys}")
print(f"Values: {values}")
print(f"Items: {items}")

# Convert views to lists if needed
keys_list = list(keys)
values_list = list(values)
items_list = list(items)

print(f"\nKeys as list: {keys_list}")
print(f"Values as list: {values_list}")
print(f"Items as list: {items_list}")

# Copy the dictionary
student_copy = student.copy()
print(f"\nCopy of student: {student_copy}")

# setdefault() demonstration
email = student.setdefault("email", "no-email@example.com")
print(f"\nEmail (after setdefault): {email}")
print(f"Student after setdefault: {student}")

# Set a key that already exists
name = student.setdefault("name", "Jane")  # Won't change as key exists
print(f"Name (after setdefault): {name}")
print(f"Student (name unchanged): {student}")

# Show that views update automatically
student["grade"] = "A"
print(f"\nAfter adding grade, keys view: {keys}")
print(f"Values view: {values}")
print(f"Items view: {items}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Dictionary Comprehensions

Dictionary comprehensions create dictionaries using a similar syntax to list comprehensions.

### Basic Syntax

```python
{key_expression: value_expression for item in iterable}
```

### Simple Dictionary Comprehension Examples

```python
# Creating a dictionary of squares
squares_dict = {x: x**2 for x in range(6)}
print(squares_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Creating a dictionary from two lists
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
name_to_age = {name: age for name, age in zip(names, ages)}
print(name_to_age)  # {'Alice': 25, 'Bob': 30, 'Charlie': 35}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Conditional Dictionary Comprehensions

You can add conditions to filter items:

```python
# Dictionary comprehension with a condition
{key_expression: value_expression for item in iterable if condition}
```

```python
# Creating a dictionary of even squares
even_squares = {x: x**2 for x in range(10) if x % 2 == 0}
print(even_squares)  # {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Filtering a dictionary based on values
original_dict = {"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}
filtered_dict = {k: v for k, v in original_dict.items() if v > 2}
print(filtered_dict)  # {'c': 3, 'd': 4, 'e': 5}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Converting Dictionary Values

Dictionary comprehensions are useful for transforming the values in a dictionary:

```python
# Converting temperature values from Celsius to Fahrenheit
celsius_temps = {"Monday": 20, "Tuesday": 25, "Wednesday": 22, "Thursday": 28, "Friday": 23}
fahrenheit_temps = {day: (9/5) * temp + 32 for day, temp in celsius_temps.items()}
print(fahrenheit_temps)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Creating a dictionary with modified keys
names = {"alice": 25, "bob": 30, "charlie": 35}
capitalized_names = {name.capitalize(): age for name, age in names.items()}
print(capitalized_names)  # {'Alice': 25, 'Bob': 30, 'Charlie': 35}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Nested Dictionaries

Dictionaries can contain other dictionaries as values, creating nested structures:

```python
# Nested dictionary
employees = {
    "Alice": {
        "id": 101,
        "position": "Developer",
        "salary": 75000
    },
    "Bob": {
        "id": 102,
        "position": "Designer",
        "salary": 70000
    }
}

# Accessing values in nested dictionaries
print(f"Alice's position: {employees['Alice']['position']}")
print(f"Bob's salary: {employees['Bob']['salary']}")

# Modifying values in nested dictionaries
employees["Alice"]["salary"] = 80000

# Adding new nested dictionary
employees["Charlie"] = {
    "id": 103,
    "position": "Manager",
    "salary": 90000
}

# Iterating over a nested dictionary
for employee, details in employees.items():
    print(f"\n{employee}:")
    for key, value in details.items():
        print(f"  {key}: {value}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Dictionary Use Cases and Patterns

### Counting and Grouping

```python
# Counting occurrences
text = "mississippi"
char_count = {}

for char in text:
    if char in char_count:
        char_count[char] += 1
    else:
        char_count[char] = 1

print(f"Character counts: {char_count}")

# Alternative using get()
char_count_alt = {}
for char in text:
    char_count_alt[char] = char_count_alt.get(char, 0) + 1

print(f"Character counts (using get): {char_count_alt}")

# Grouping items by property
people = [
    {"name": "Alice", "age": 25, "city": "New York"},
    {"name": "Bob", "age": 30, "city": "Chicago"},
    {"name": "Charlie", "age": 35, "city": "New York"},
    {"name": "Diana", "age": 28, "city": "Chicago"}
]

# Group by city
by_city = {}
for person in people:
    city = person["city"]
    if city not in by_city:
        by_city[city] = []
    by_city[city].append(person["name"])

print(f"People by city: {by_city}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Using dictionaries for caching/memoization

```python
# Simple memoization using a dictionary
def fibonacci(n, memo={}):
    """Calculate Fibonacci number with memoization."""
    if n in memo:
        return memo[n]
    if n <= 1:
        result = n
    else:
        result = fibonacci(n-1, memo) + fibonacci(n-2, memo)
    memo[n] = result
    return result

# Calculate some Fibonacci numbers
for i in range(10):
    print(f"Fibonacci({i}) = {fibonacci(i)}")
    
# The results are cached for future calls
print(f"Calculated values cached: {fibonacci.__defaults__[0]}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Default values with dictionaries

```python
# Using dictionary.get() with default
scores = {"Alice": 85, "Bob": 92}
charlie_score = scores.get("Charlie", 0)  # Returns 0 if "Charlie" doesn't exist
print(f"Charlie's score: {charlie_score}")

# Alternative approach: setting default then using
if "Charlie" not in scores:
    scores["Charlie"] = 0
charlie_score = scores["Charlie"]
print(f"Charlie's score: {charlie_score}")

# Using setdefault()
david_score = scores.setdefault("David", 0)
print(f"David's score: {david_score}")
print(f"Updated scores: {scores}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Collections Module: Dictionary Variations

Python's `collections` module provides specialized dictionary variants:

### defaultdict

```python
from collections import defaultdict

# Create a defaultdict with default value 0
word_count = defaultdict(int)

text = "the quick brown fox jumps over the lazy dog"
for word in text.split():
    word_count[word] += 1  # No need to check if key exists

print(f"Word counts: {dict(word_count)}")

# defaultdict with list as default factory
grouped_words = defaultdict(list)
words = ["apple", "ant", "banana", "ball", "cat", "car"]

for word in words:
    # Group by first letter
    grouped_words[word[0]].append(word)

print(f"Words grouped by first letter: {dict(grouped_words)}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### OrderedDict

```python
from collections import OrderedDict

# In Python 3.7+, regular dictionaries maintain insertion order,
# but OrderedDict provides additional functionality

# Create an OrderedDict
ordered = OrderedDict([
    ('first', 1),
    ('second', 2),
    ('third', 3)
])

# Regular dictionary for comparison
regular = {
    'first': 1,
    'second': 2,
    'third': 3
}

print(f"OrderedDict: {ordered}")
print(f"Regular dict: {regular}")

# Move_to_end method (unique to OrderedDict)
ordered.move_to_end('first')
print(f"After move_to_end('first'): {ordered}")

# Move to beginning
ordered.move_to_end('third', last=False)
print(f"After move_to_end('third', last=False): {ordered}")

# popitem(last=False) removes in FIFO order
first_item = ordered.popitem(last=False)
print(f"First item (FIFO): {first_item}")
print(f"After popitem(last=False): {ordered}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Counter

```python
from collections import Counter

# Create a Counter from an iterable
text = "mississippi"
char_counts = Counter(text)
print(f"Character counts: {char_counts}")

# Most common elements
print(f"Most common 2 characters: {char_counts.most_common(2)}")

# Update a Counter
char_counts.update("missouri")
print(f"After update with 'missouri': {char_counts}")

# Arithmetic with Counters
counter1 = Counter(a=3, b=1, c=2)
counter2 = Counter(a=1, b=2, d=3)

# Addition
combined = counter1 + counter2
print(f"counter1 + counter2: {combined}")

# Subtraction (negative counts are removed)
subtracted = counter1 - counter2
print(f"counter1 - counter2: {subtracted}")

# Intersection (minimum of each element)
intersection = counter1 & counter2
print(f"counter1 & counter2: {intersection}")

# Union (maximum of each element)
union = counter1 | counter2
print(f"counter1 | counter2: {union}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Performance and Efficiency

Dictionaries in Python are implemented as hash tables, making them very efficient for lookups, insertions, and deletions.

```python
import timeit
import random

# Setup: Create collections of different sizes
setup = """
import random
small_list = list(range(100))
small_dict = {i: i for i in range(100)}
large_list = list(range(10000))
large_dict = {i: i for i in range(10000)}
random_value = random.randint(0, 9999)
"""

# Timing lookups in small collections
small_list_lookup = timeit.timeit("42 in small_list", setup=setup, number=100000)
small_dict_lookup = timeit.timeit("42 in small_dict", setup=setup, number=100000)
print(f"Small list lookup time: {small_list_lookup:.6f} seconds")
print(f"Small dict lookup time: {small_dict_lookup:.6f} seconds")
print(f"Dictionary lookups are {small_list_lookup/small_dict_lookup:.1f}x faster for small collections")

# Timing lookups in large collections
large_list_lookup = timeit.timeit("random_value in large_list", setup=setup, number=1000)
large_dict_lookup = timeit.timeit("random_value in large_dict", setup=setup, number=1000)
print(f"Large list lookup time: {large_list_lookup:.6f} seconds")
print(f"Large dict lookup time: {large_dict_lookup:.6f} seconds")
print(f"Dictionary lookups are {large_list_lookup/large_dict_lookup:.1f}x faster for large collections")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Time Complexity

| Operation | Average Case | Worst Case |
|-----------|--------------|------------|
| k in d | O(1) | O(n) |
| d[k] | O(1) | O(n) |
| d[k] = v | O(1) | O(n) |
| del d[k] | O(1) | O(n) |
| len(d) | O(1) | O(1) |
| d.keys() | O(1) | O(1) |
| d.values() | O(1) | O(1) |
| d.items() | O(1) | O(1) |

## Best Practices for Dictionaries

```python
# Use get() to provide defaults for missing keys
user = {'name': 'John', 'age': 30}
email = user.get('email', 'no-email')  # Safer than user['email']

# Use dictionary comprehensions for transformations
squares = {x: x**2 for x in range(10) if x % 2 == 0}

# Use update() to merge dictionaries
user.update({'email': 'john@example.com', 'phone': '555-1234'})

# Since Python 3.9, you can use the merge operator
# user = user | {'email': 'john@example.com'}  # Python 3.9+

# Use appropriate collections module variants
from collections import defaultdict, Counter

# Use defaultdict when you need default values
word_count = defaultdict(int)
for word in "the quick brown fox jumps over the lazy dog".split():
    word_count[word] += 1

# Use Counter for counting
color_count = Counter(['red', 'blue', 'red', 'green', 'blue', 'blue'])
most_common = color_count.most_common(1)[0][0]  # Most common color

print(f"Most common color: {most_common}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Summary

Dictionaries are one of Python's most powerful data structures, providing an efficient way to store and retrieve data using keys. They are essential for many programming tasks, from simple lookups to complex data transformations and algorithms.

Key points to remember about dictionaries:
- Dictionaries store data as key-value pairs
- Keys must be immutable and hashable
- Dictionaries are mutable, allowing for dynamic updates
- Since Python 3.7, dictionaries maintain insertion order
- Dictionary operations are very efficient, with most operations being O(1) on average
- Specialized variants in the collections module provide additional functionality

In the next lesson, we'll explore sets, which share many characteristics with dictionaries but are optimized for membership testing and eliminating duplicates.

#### Footnotes

- <dfn>a - A hash table is a data structure that implements an associative array, which maps keys to values. It uses a hash function to compute an index into an array of buckets, from which the desired value can be found.</dfn>
- <dfn>b - A hashable object is one that has a hash value that never changes during its lifetime. This is required for dictionary keys and set elements.</dfn>
- <dfn>c - Since Python 3.7, dictionaries maintain insertion order as an implementation detail. This behavior became an official language specification in Python 3.8.</dfn> 