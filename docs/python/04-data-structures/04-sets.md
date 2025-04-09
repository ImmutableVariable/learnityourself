---
sidebar_position: 4
---

# Sets

Sets are an unordered collection of unique elements in Python. They are ideal for membership testing, removing duplicates, and performing mathematical set operations like unions, intersections, and differences.

## Characteristics of Sets

- **Unordered**: Elements have no defined order
- **Unique Elements**: No duplicates allowed
- **Mutable**: The set itself can be modified (though elements must be immutable)
- **Hashable Elements**: Elements must be immutable (strings, numbers, tuples of immutable items)
- **No Indexing**: Cannot access elements by position
- **Optimized**: Highly efficient for membership testing

## Creating Sets

There are several ways to create sets in Python:

```python
# Empty set (can't use {} as that creates an empty dictionary)
empty_set = set()

# Set with initial values
colors = {"red", "green", "blue"}

# Set from an iterable (eliminates duplicates)
numbers = set([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])

# Set from a string (each character becomes an element)
unique_chars = set("mississippi")

# Set comprehension
even_squares = {x**2 for x in range(10) if x % 2 == 0}

# Frozen set (immutable version of a set)
immutable_set = frozenset([1, 2, 3])
```

```python
# Creating sets demonstration
empty_set = set()
colors = {"red", "green", "blue"}
numbers = set([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])
unique_chars = set("mississippi")
even_squares = {x**2 for x in range(10) if x % 2 == 0}
immutable_set = frozenset([1, 2, 3])

# Display all sets
print(f"Empty set: {empty_set}")
print(f"Colors: {colors}")
print(f"Numbers (note duplicates removed): {numbers}")
print(f"Unique characters in 'mississippi': {unique_chars}")
print(f"Even squares: {even_squares}")
print(f"Immutable set: {immutable_set}")

# Check types
print(f"\nType of empty_set: {type(empty_set)}")
print(f"Type of colors: {type(colors)}")
print(f"Type of immutable_set: {type(immutable_set)}")

# Check length
print(f"\nNumber of elements in colors: {len(colors)}")
print(f"Number of unique characters in 'mississippi': {len(unique_chars)}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Modifying Sets

Since sets are mutable, you can add and remove elements:

### Adding Elements

```python
colors = {"red", "green"}

# Add a single element
colors.add("blue")
print(f"After add(): {colors}")

# Add multiple elements from an iterable
colors.update(["yellow", "orange", "purple"])
print(f"After update(): {colors}")

# Alternative using set union
more_colors = {"pink", "brown"}
colors |= more_colors  # Equivalent to colors.update(more_colors)
print(f"After union update: {colors}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Removing Elements

```python
colors = {"red", "green", "blue", "yellow", "orange", "purple"}

# Remove an element (raises KeyError if not found)
colors.remove("blue")
print(f"After remove('blue'): {colors}")

# Remove if present (no error if not found)
colors.discard("black")  # No error
print(f"After discard('black'): {colors}")

# Remove and return an arbitrary element
popped = colors.pop()
print(f"Popped element: {popped}")
print(f"After pop(): {colors}")

# Remove all elements
colors.clear()
print(f"After clear(): {colors}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Adding and removing elements
colors = {"red", "green"}
print(f"Original set: {colors}")

# Adding elements
colors.add("blue")
print(f"After add('blue'): {colors}")

try:
    # Adding an existing element has no effect
    colors.add("blue")
    print(f"After adding 'blue' again: {colors}")
except Exception as e:
    print(f"Error: {e}")

# Update with multiple elements
colors.update(["yellow", "orange"])
print(f"After update(): {colors}")

# Removing elements
colors.remove("green")
print(f"After remove('green'): {colors}")

try:
    # Attempting to remove a non-existent element
    colors.remove("purple")
except KeyError as e:
    print(f"Error with remove(): {e}")

# Discard (safer than remove)
colors.discard("purple")  # No error
print(f"After discard('purple'): {colors}")

# Pop (removes and returns an arbitrary element)
popped = colors.pop()
print(f"Popped element: {popped}")
print(f"After pop(): {colors}")

# Clear all elements
colors.clear()
print(f"After clear(): {colors}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Set Operations

Sets support powerful mathematical operations:

### Union, Intersection, and Difference

```python
set_a = {1, 2, 3, 4, 5}
set_b = {4, 5, 6, 7, 8}

# Union: elements in either set
union_result = set_a | set_b  # Alternative: set_a.union(set_b)
print(f"Union: {union_result}")

# Intersection: elements in both sets
intersection_result = set_a & set_b  # Alternative: set_a.intersection(set_b)
print(f"Intersection: {intersection_result}")

# Difference: elements in set_a but not in set_b
difference_result = set_a - set_b  # Alternative: set_a.difference(set_b)
print(f"Difference (A - B): {difference_result}")

# Symmetric difference: elements in either set, but not in both
symmetric_difference = set_a ^ set_b  # Alternative: set_a.symmetric_difference(set_b)
print(f"Symmetric difference: {symmetric_difference}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Updating Sets with Operations

```python
set_a = {1, 2, 3, 4, 5}
set_b = {4, 5, 6, 7, 8}
print(f"Original set_a: {set_a}")

# Update set_a with the union
set_a |= {9, 10}  # Alternative: set_a.update({9, 10})
print(f"After union update: {set_a}")

# Update set_a with the intersection
set_a &= set_b  # Alternative: set_a.intersection_update(set_b)
print(f"After intersection update: {set_a}")

# Reset set_a
set_a = {1, 2, 3, 4, 5}
print(f"Reset set_a: {set_a}")

# Update set_a with the difference
set_a -= set_b  # Alternative: set_a.difference_update(set_b)
print(f"After difference update: {set_a}")

# Reset set_a
set_a = {1, 2, 3, 4, 5}
print(f"Reset set_a: {set_a}")

# Update set_a with the symmetric difference
set_a ^= set_b  # Alternative: set_a.symmetric_difference_update(set_b)
print(f"After symmetric difference update: {set_a}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Set operations demonstration
employees = {"Alice", "Bob", "Charlie", "David"}
managers = {"Charlie", "Eve", "Frank", "David"}
contractors = {"Bob", "George", "Hannah"}

print(f"Employees: {employees}")
print(f"Managers: {managers}")
print(f"Contractors: {contractors}")

# Union (everyone in the company)
all_personnel = employees | managers | contractors
print(f"\nAll personnel: {all_personnel}")

# Intersection (employee-managers)
employee_managers = employees & managers
print(f"People who are both employees and managers: {employee_managers}")

# Difference (employees who are not managers)
non_manager_employees = employees - managers
print(f"Employees who are not managers: {non_manager_employees}")

# Symmetric difference (either employees or managers, but not both)
exclusive_roles = employees ^ managers
print(f"People who are either employees or managers (but not both): {exclusive_roles}")

# Multiple operations can be combined
special_roles = (employees & contractors) | (managers - employees)
print(f"Employees who are also contractors or managers who are not employees: {special_roles}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Set Comparison Operations

Python sets support subset, superset, and disjoint operations:

```python
set_a = {1, 2, 3, 4, 5}
set_b = {1, 2, 3}
set_c = {6, 7, 8}

# Subset: is set_b a subset of set_a?
is_subset = set_b <= set_a  # Alternative: set_b.issubset(set_a)
print(f"Is set_b a subset of set_a? {is_subset}")

# Proper subset: is set_b a proper subset of set_a? (subset but not equal)
is_proper_subset = set_b < set_a
print(f"Is set_b a proper subset of set_a? {is_proper_subset}")

# Superset: is set_a a superset of set_b?
is_superset = set_a >= set_b  # Alternative: set_a.issuperset(set_b)
print(f"Is set_a a superset of set_b? {is_superset}")

# Proper superset: is set_a a proper superset of set_b? (superset but not equal)
is_proper_superset = set_a > set_b
print(f"Is set_a a proper superset of set_b? {is_proper_superset}")

# Disjoint: do set_a and set_c have no elements in common?
is_disjoint = set_a.isdisjoint(set_c)
print(f"Are set_a and set_c disjoint? {is_disjoint}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Set comparison operations
team_a = {"Alice", "Bob", "Charlie", "David"}
team_b = {"Alice", "Bob"}
team_c = {"Eve", "Frank"}
team_d = {"Alice", "Bob", "Charlie", "David", "Grace"}

print(f"Team A: {team_a}")
print(f"Team B: {team_b}")
print(f"Team C: {team_c}")
print(f"Team D: {team_d}")

# Subset tests
print(f"\nIs Team B a subset of Team A? {team_b <= team_a}")
print(f"Is Team B a subset of Team A (using issubset)? {team_b.issubset(team_a)}")
print(f"Is Team A a subset of Team A? {team_a <= team_a}")
print(f"Is Team A a proper subset of Team A? {team_a < team_a}")  # False, equality case
print(f"Is Team B a proper subset of Team A? {team_b < team_a}")  # True, strict subset

# Superset tests
print(f"\nIs Team A a superset of Team B? {team_a >= team_b}")
print(f"Is Team A a superset of Team B (using issuperset)? {team_a.issuperset(team_b)}")
print(f"Is Team D a superset of Team A? {team_d >= team_a}")
print(f"Is Team D a proper superset of Team A? {team_d > team_a}")

# Disjoint test
print(f"\nAre Team A and Team C disjoint (no common members)? {team_a.isdisjoint(team_c)}")
print(f"Are Team B and Team C disjoint? {team_b.isdisjoint(team_c)}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Set Comprehensions

Set comprehensions create sets using a similar syntax to list comprehensions.

### Basic Syntax

```python
{expression for item in iterable}
```

### Simple Set Comprehension Examples

```python
# Creating a set of squares
squares_set = {x**2 for x in range(10)}
print(squares_set)  # Note: Order is not guaranteed in sets
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Extracting unique characters from a string
text = "hello world"
unique_chars = {char for char in text}
print(unique_chars)  # {'h', 'e', 'l', 'o', ' ', 'w', 'r', 'd'}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Conditional Set Comprehensions

Like list and dictionary comprehensions, set comprehensions can include conditions:

```python
# Set comprehension with a condition
{expression for item in iterable if condition}
```

```python
# Creating a set of even squares
even_squares_set = {x**2 for x in range(10) if x % 2 == 0}
print(even_squares_set)  # {0, 4, 16, 36, 64}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Extracting vowels from a string
text = "hello world"
vowels = {char for char in text if char.lower() in "aeiou"}
print(vowels)  # {'e', 'o'}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Frozen Sets

Python provides an immutable version of sets called `frozenset`:

```python
# Creating a frozenset
immutable = frozenset([1, 2, 3, 4, 5])
print(f"Frozenset: {immutable}")

# Frozensets can be used as elements in regular sets
set_of_sets = {frozenset([1, 2]), frozenset([3, 4])}
print(f"Set of frozensets: {set_of_sets}")

# Frozensets can also be used as dictionary keys
mappings = {
    frozenset([1, 2]): "small numbers",
    frozenset([3, 4, 5]): "medium numbers",
    frozenset([6, 7, 8, 9]): "large numbers"
}
print(f"Dictionary with frozenset keys: {mappings}")

# Frozensets support all non-modifying set operations
set_a = frozenset([1, 2, 3, 4, 5])
set_b = frozenset([4, 5, 6, 7, 8])

# Union
union_result = set_a | set_b
print(f"Union: {union_result}")

# Attempting to modify a frozenset will raise an error
try:
    immutable.add(6)  # This will fail
except AttributeError as e:
    print(f"Error: {e}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Frozen sets demonstration
regular_set = {1, 2, 3}
frozen_set = frozenset([1, 2, 3])

print(f"Regular set: {regular_set}, Type: {type(regular_set)}")
print(f"Frozen set: {frozen_set}, Type: {type(frozen_set)}")

# Regular sets can be modified
regular_set.add(4)
print(f"Modified regular set: {regular_set}")

# Frozen sets cannot be modified
try:
    frozen_set.add(4)
except AttributeError as e:
    print(f"Error modifying frozen set: {e}")

# Frozen sets can be elements in regular sets
set_of_frozen = {frozenset([1, 2]), frozenset([3, 4])}
print(f"Set containing frozen sets: {set_of_frozen}")

# Frozen sets can be dictionary keys
mapping = {
    frozenset([1, 2]): "Group A",
    frozenset([3, 4]): "Group B"
}
print(f"Dictionary with frozen set keys: {mapping}")

# Try to use regular set as a dictionary key
try:
    bad_mapping = {regular_set: "value"}
except TypeError as e:
    print(f"Error using regular set as key: {e}")

# Frozen sets support all non-modifying set operations
frozen_a = frozenset([1, 2, 3])
frozen_b = frozenset([3, 4, 5])
print(f"\nFrozen set A: {frozen_a}")
print(f"Frozen set B: {frozen_b}")
print(f"Union: {frozen_a | frozen_b}")
print(f"Intersection: {frozen_a & frozen_b}")
print(f"Difference: {frozen_a - frozen_b}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Common Use Cases for Sets

### Removing Duplicates

```python
# Remove duplicates from a list
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unique_numbers = list(set(numbers))
print(f"Original list: {numbers}")
print(f"List with duplicates removed: {unique_numbers}")

# Note: This approach loses the original order
# If order matters, you can use a dictionary to preserve order
from collections import dict
def remove_duplicates_preserve_order(seq):
    return list(dict.fromkeys(seq))

preserved_order = remove_duplicates_preserve_order(numbers)
print(f"List with duplicates removed (preserving order): {preserved_order}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Finding Unique Elements

```python
# Finding unique characters in strings
string1 = "hello"
string2 = "world"

# Characters in string1
chars1 = set(string1)
print(f"Unique characters in '{string1}': {chars1}")

# Characters in string2
chars2 = set(string2)
print(f"Unique characters in '{string2}': {chars2}")

# Characters in either string (union)
all_chars = chars1 | chars2
print(f"All unique characters: {all_chars}")

# Characters in both strings (intersection)
common_chars = chars1 & chars2
print(f"Common characters: {common_chars}")

# Characters unique to string1 (difference)
unique_to_1 = chars1 - chars2
print(f"Characters unique to '{string1}': {unique_to_1}")

# Characters unique to string2 (difference)
unique_to_2 = chars2 - chars1
print(f"Characters unique to '{string2}': {unique_to_2}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Filtering Collections

```python
def is_prime(n):
    """Very simple primality test for example purposes."""
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# Generate a set of numbers
numbers = set(range(1, 20))
print(f"Original set: {numbers}")

# Filter to get only prime numbers
primes = {num for num in numbers if is_prime(num)}
print(f"Prime numbers: {primes}")

# Filter to get only even numbers
evens = {num for num in numbers if num % 2 == 0}
print(f"Even numbers: {evens}")

# Combine filters using set operations
prime_evens = primes & evens
print(f"Numbers that are both prime and even: {prime_evens}")

# Numbers that are neither prime nor even
neither = numbers - (primes | evens)
print(f"Numbers that are neither prime nor even: {neither}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Checking for Membership

```python
# Efficient membership testing
small_set = set(range(100))
large_list = list(range(10000))

# Function to test time for a membership test
import time

def time_membership_test(collection, value):
    start = time.time()
    for _ in range(100000):
        result = value in collection
    end = time.time()
    return end - start

# Test membership in a list
list_time = time_membership_test(large_list, 9999)
print(f"Time to test membership in list: {list_time:.6f} seconds")

# Test membership in a set
set_time = time_membership_test(small_set, 99)
print(f"Time to test membership in set: {set_time:.6f} seconds")

# Compare relative speed (for similar sized operations)
small_list = list(range(100))
small_set_time = time_membership_test(small_set, 99)
small_list_time = time_membership_test(small_list, 99)
print(f"Set vs List (similar size): Set is {small_list_time/small_set_time:.1f}x faster")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Performance Considerations

Sets in Python are implemented using hash tables, which makes them very efficient for operations like membership testing, adding elements, and removing elements.

```python
import timeit

# Compare set and list operations
setup = """
import random
list_data = list(range(1000))
set_data = set(range(1000))
random_items = [random.randint(0, 2000) for _ in range(100)]
"""

# Membership testing
list_membership = timeit.timeit(
    "for item in random_items: item in list_data", 
    setup=setup, 
    number=100, 
    globals={'random_items': [random.randint(0, 2000) for _ in range(100)]}
)

set_membership = timeit.timeit(
    "for item in random_items: item in set_data", 
    setup=setup, 
    number=100, 
    globals={'random_items': [random.randint(0, 2000) for _ in range(100)]}
)

print(f"Time for membership testing in list: {list_membership:.6f} seconds")
print(f"Time for membership testing in set: {set_membership:.6f} seconds")
print(f"Set is {list_membership/set_membership:.1f}x faster for membership testing")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Time Complexity

| Operation | Average Case | Worst Case |
|-----------|--------------|------------|
| x in s | O(1) | O(n) |
| s.add(x) | O(1) | O(n) |
| s.remove(x) | O(1) | O(n) |
| s.discard(x) | O(1) | O(n) |
| s.pop() | O(1) | O(1) |
| s1 | s2 (union) | O(len(s1) + len(s2)) | O(len(s1) + len(s2)) |
| s1 & s2 (intersection) | O(min(len(s1), len(s2))) | O(len(s1) * len(s2)) |
| s1 - s2 (difference) | O(len(s1)) | O(len(s1) * len(s2)) |

## Best Practices for Sets

```python
# Use sets for membership testing when appropriate
valid_usernames = {"alice", "bob", "charlie"}
user_input = "dave"

if user_input in valid_usernames:
    print("Valid username")
else:
    print("Invalid username")

# Use sets to remove duplicates
data = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
unique_data = list(set(data))
print(f"Unique values: {unique_data}")

# Use frozenset for immutable sets
config_options = frozenset(["debug", "verbose", "log_file"])

# Use set comprehensions for filtering
numbers = range(1, 21)
odd_squares = {x**2 for x in numbers if x % 2 != 0}
print(f"Squares of odd numbers: {odd_squares}")

# Use sets for finding common elements
group1 = {"Alice", "Bob", "Charlie"}
group2 = {"Charlie", "Dave", "Eve"}
common_members = group1 & group2
print(f"Common members: {common_members}")

# Use set operations instead of loops when possible
# Less efficient:
result = []
for item in group1:
    if item in group2:
        result.append(item)
print(f"Common members (with loop): {result}")

# More efficient:
result = list(group1 & group2)
print(f"Common members (with set operation): {result}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Summary

Sets are a powerful and efficient data structure in Python that provide unique, unordered collections of elements. They're particularly useful for membership testing, removing duplicates, and performing mathematical set operations.

Key points to remember about sets:
- Sets store unique, unordered elements
- Elements must be hashable (immutable)
- Sets are mutable, but also have an immutable variant (frozenset)
- Set operations like union, intersection, and difference are efficient
- Sets are ideal for removing duplicates from collections
- Membership testing in sets is significantly faster than in lists for large collections
- Set comprehensions provide a concise way to create sets with filtering

In this unit, we've covered Python's core data structures: lists, tuples, dictionaries, and sets. Each has its own strengths and ideal use cases, and mastering them is essential for writing efficient and effective Python code.

#### Footnotes

- <dfn>a - A hash table is a data structure that maps keys to values using a hash function for efficient lookups. Sets in Python are implemented using hash tables with only keys and no values.</dfn>
- <dfn>b - Hashable objects have a hash value that doesn't change during their lifetime, allowing them to be used in hash-based collections like sets and dictionaries. All immutable built-in objects like strings, numbers, and tuples (containing only hashable elements) are hashable.</dfn>
- <dfn>c - The term "set" comes from mathematical set theory, which studies collections of distinct objects and the operations that can be performed on them.</dfn>