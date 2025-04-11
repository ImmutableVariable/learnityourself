---
sidebar_position: 5
---

# Sets

Sets are a type of collection in Python that store unique elements. Think of a set like a bag where you can only have one of each item and no duplicates are allowed. Sets are useful when you need to work with unique items or perform operations like finding common elements between collections.

## Creating Sets

You can create a set in Python using curly braces `{}` or the `set()` function. Here's how:

```python
# Creating a set with curly braces
fruits = {"apple", "banana", "orange"}

# Creating a set with the set() function
numbers = set([1, 2, 3, 4, 5])

# Creating an empty set
empty_set = set()  # Note: empty_set = {} creates an empty dictionary, not a set
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Adding and Removing Elements

Since sets are mutable (can be changed), you can add and remove elements:

### Adding Elements

```python
fruits = {"apple", "banana"}

# Add a single element
fruits.add("orange")
print(fruits)  # {'apple', 'banana', 'orange'}

# Add multiple elements
fruits.update(["grape", "kiwi"])
print(fruits)  # {'apple', 'banana', 'orange', 'grape', 'kiwi'}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Removing Elements

```python
fruits = {"apple", "banana", "orange", "grape"}

# Remove an element (raises error if not found)
fruits.remove("banana")
print(fruits)  # {'apple', 'orange', 'grape'}

# Remove an element safely (no error if not found)
fruits.discard("kiwi")  # No error even though 'kiwi' isn't in the set
print(fruits)  # {'apple', 'orange', 'grape'}

# Remove and return a random element
removed = fruits.pop()
print(f"Removed: {removed}")
print(f"Remaining: {fruits}")

# Remove all elements
fruits.clear()
print(fruits)  # set()
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Set Operations

Sets support operations like union, intersection, and difference, which are similar to mathematical set operations.

### Union

The union of two sets contains all elements from both sets:

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Using the | operator
union = set1 | set2
print(union)  # {1, 2, 3, 4, 5}

# Using the union() method
union = set1.union(set2)
print(union)  # {1, 2, 3, 4, 5}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Intersection

The intersection contains only elements that are in both sets:

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Using the & operator
intersection = set1 & set2
print(intersection)  # {3}

# Using the intersection() method
intersection = set1.intersection(set2)
print(intersection)  # {3}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Difference

The difference contains elements that are in the first set but not in the second:

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Using the - operator
difference = set1 - set2
print(difference)  # {1, 2}

# Using the difference() method
difference = set1.difference(set2)
print(difference)  # {1, 2}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Checking Membership

You can check if an element is in a set using the `in` keyword:

```python
fruits = {"apple", "banana", "orange"}

# Check if an element is in the set
print("apple" in fruits)  # True
print("grape" in fruits)  # False
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Set Methods

Here are some useful set methods:

```python
fruits = {"apple", "banana", "orange"}

# Get the number of elements
print(len(fruits))  # 3

# Check if a set is a subset of another
small_set = {"apple", "banana"}
print(small_set.issubset(fruits))  # True

# Check if a set is a superset of another
big_set = {"apple", "banana", "orange", "grape"}
print(big_set.issuperset(fruits))  # True

# Check if two sets have no elements in common
other_set = {"grape", "kiwi"}
print(fruits.isdisjoint(other_set))  # False (they share no elements)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Frozen Sets

Python also has an immutable version of sets called `frozenset`. Once created, you cannot add or remove elements:

```python
# Create a frozen set
immutable = frozenset([1, 2, 3])
print(immutable)  # frozenset({1, 2, 3})

# Try to add an element (will raise an error)
try:
    immutable.add(4)
except AttributeError as e:
    print(f"Error: {e}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Common Use Cases

### Removing Duplicates

One of the most common uses of sets is to remove duplicates from a list:

```python
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unique_numbers = list(set(numbers))
print(unique_numbers)  # [1, 2, 3, 4]
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Finding Common Elements

Sets make it easy to find common elements between collections:

```python
students_in_math = {"Alice", "Bob", "Charlie"}
students_in_science = {"Bob", "Charlie", "David"}

# Find students taking both classes
both_classes = students_in_math & students_in_science
print(both_classes)  # {'Bob', 'Charlie'}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Summary

Sets are a powerful tool in Python for working with unique collections of elements. They're particularly useful for:
- Storing unique items
- Removing duplicates from lists
- Finding common elements between collections
- Performing mathematical set operations

Remember:
- Sets store unique, unordered elements
- Elements must be immutable (like strings, numbers, or tuples)
- Sets are mutable (can be changed) unless they're frozen sets
- Set operations like union, intersection, and difference are efficient

In the next lesson, we'll explore more advanced data structures and their uses in Python.