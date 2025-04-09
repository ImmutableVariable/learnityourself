---
sidebar_position: 3
---

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
