---
sidebar_position: 3
---

# Comprehensions

Comprehensions are concise ways to create collections like lists, dictionaries, and sets in Python. They provide a more elegant and readable alternative to using loops for creating and transforming collections.

## List Comprehensions

List comprehensions allow you to create lists in a single line of code. They combine the functionality of a for loop and a list creation into one compact expression.

### Basic Syntax

```python
new_list = [expression for item in iterable]
```

Where:
- `expression`: The operation to perform on each item
- `item`: The variable representing each element in the iterable
- `iterable`: A sequence, collection, or any object that can be iterated over

### Simple List Comprehension

```python
# Creating a list of squares using a for loop
squares_loop = []
for x in range(1, 6):
    squares_loop.append(x ** 2)
print(squares_loop)  # [1, 4, 9, 16, 25]

# The same thing using a list comprehension
squares_comp = [x ** 2 for x in range(1, 6)]
print(squares_comp)  # [1, 4, 9, 16, 25]
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

### List Comprehension with Conditional Logic

You can add an if condition to filter items:

```python
# List of even squares using a for loop
even_squares_loop = []
for x in range(1, 11):
    if x % 2 == 0:
        even_squares_loop.append(x ** 2)
print(even_squares_loop)  # [4, 16, 36, 64, 100]

# The same thing using a list comprehension
even_squares_comp = [x ** 2 for x in range(1, 11) if x % 2 == 0]
print(even_squares_comp)  # [4, 16, 36, 64, 100]
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

You can also include if-else conditions in the expression part:

```python
# Using if-else in the expression
numbers = [1, 2, 3, 4, 5]
result = ["even" if x % 2 == 0 else "odd" for x in numbers]
print(result)  # ['odd', 'even', 'odd', 'even', 'odd']
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

### Nested List Comprehensions

You can nest comprehensions for working with multi-dimensional data:

```python
# Creating a 3x3 matrix using nested list comprehensions
matrix = [[i * j for j in range(1, 4)] for i in range(1, 4)]
print(matrix)  # [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

# Flattening a 2D list into a 1D list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]
print(flattened)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Dictionary Comprehensions

Dictionary comprehensions are similar to list comprehensions but create dictionaries instead of lists.

### Basic Syntax

```python
new_dict = {key_expression: value_expression for item in iterable}
```

### Simple Dictionary Comprehension

```python
# Creating a dictionary where keys are numbers and values are their squares
squares_dict = {x: x ** 2 for x in range(1, 6)}
print(squares_dict)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

### Dictionary Comprehension with Conditional Logic

```python
# Dictionary of even number squares
even_squares_dict = {x: x ** 2 for x in range(1, 11) if x % 2 == 0}
print(even_squares_dict)  # {2: 4, 4: 16, 6: 36, 8: 64, 10: 100}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

### Dictionary Comprehension from Another Dictionary

```python
# Creating a new dictionary from an existing one
original = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
doubled = {k: v * 2 for k, v in original.items()}
print(doubled)  # {'a': 2, 'b': 4, 'c': 6, 'd': 8}

# Creating a filtered dictionary
filtered = {k: v for k, v in original.items() if v % 2 == 0}
print(filtered)  # {'b': 2, 'd': 4}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

### Swapping Keys and Values

```python
# Swapping keys and values in a dictionary
original = {'a': 1, 'b': 2, 'c': 3}
swapped = {v: k for k, v in original.items()}
print(swapped)  # {1: 'a', 2: 'b', 3: 'c'}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Set Comprehensions

Set comprehensions create sets (collections of unique elements) using a similar syntax.

### Basic Syntax

```python
new_set = {expression for item in iterable}
```

### Simple Set Comprehension

```python
# Creating a set of squares
squares_set = {x ** 2 for x in range(1, 6)}
print(squares_set)  # {1, 4, 9, 16, 25}

# Creating a set of even squares
even_squares_set = {x ** 2 for x in range(1, 11) if x % 2 == 0}
print(even_squares_set)  # {4, 16, 36, 64, 100}
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

### Eliminating Duplicates with Set Comprehension

```python
# Using set comprehension to get unique characters
text = "hello world"
unique_chars = {char for char in text if char != ' '}
print(unique_chars)  # A set of unique characters in "hello world"
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Generator Expressions

Generator expressions are similar to list comprehensions but create generators instead of lists. Generators are memory-efficient because they yield items one at a time rather than creating the entire collection at once.

### Basic Syntax

```python
generator = (expression for item in iterable)
```

Note the use of parentheses `()` instead of square brackets `[]`.

### Simple Generator Expression

```python
# Creating a generator of squares
squares_gen = (x ** 2 for x in range(1, 6))
print(squares_gen)  # <generator object <genexpr> at 0x...>

# Consuming the generator
for square in squares_gen:
    print(square)  # Prints 1, 4, 9, 16, 25
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

### Memory Efficiency of Generator Expressions

```python
import sys

# Compare memory usage of a list comprehension vs. a generator expression
list_comp = [x for x in range(10000)]
gen_exp = (x for x in range(10000))

# Show the size difference
print(f"List comprehension size: {sys.getsizeof(list_comp)} bytes")
print(f"Generator expression size: {sys.getsizeof(gen_exp)} bytes")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Performance and Best Practices

### When to Use Comprehensions

Comprehensions are ideal when:
- You want to transform or filter elements in a collection
- The operation is simple and can be expressed in a single line
- Readability is not compromised by the compact syntax

### When to Avoid Comprehensions

Avoid comprehensions when:
- The operation is complex and hard to understand in a single line
- The result would be a very large collection (use generators instead)
- Multiple operations need to be performed on each element

### Performance Considerations

```python
import time

# Measure performance: for loop vs list comprehension
start = time.time()
squares_loop = []
for i in range(1000000):
    squares_loop.append(i * i)
loop_time = time.time() - start

start = time.time()
squares_comp = [i * i for i in range(1000000)]
comp_time = time.time() - start

print(f"Loop time: {loop_time:.6f} seconds")
print(f"Comprehension time: {comp_time:.6f} seconds")
print(f"Comprehension is {loop_time/comp_time:.2f}x faster")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Summary

Comprehensions provide a powerful, concise way to create and transform collections in Python:

- **List comprehensions** create new lists: `[expr for item in iterable]`
- **Dictionary comprehensions** create new dictionaries: `{key: value for item in iterable}`
- **Set comprehensions** create new sets: `{expr for item in iterable}`
- **Generator expressions** create memory-efficient generators: `(expr for item in iterable)`

Using comprehensions can make your code more readable and often more efficient, but they should be used judiciously to maintain code clarity.

In the next lesson, we'll explore iterators and generators, which build on these concepts to create powerful data processing tools in Python. 