---
sidebar_position: 3
---

# Comprehensions

Comprehensions provide a concise way to create lists, dictionaries, and sets in Python. They combine the functionality of loops and conditional statements into a single line of code, making your code more readable and efficient.

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

## Best Practices

1. **Readability**: Use comprehensions when they make your code more readable. If the expression becomes too complex, it might be better to use a regular loop.

```python
# Hard to read
result = [x**2 for x in [y for y in range(10) if y % 2 == 0] if x > 10]

# More readable
even_numbers = [y for y in range(10) if y % 2 == 0]
result = [x**2 for x in even_numbers if x**2 > 10]
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

2. **Memory Usage**: For large datasets, consider using generator expressions instead of list comprehensions to save memory.

3. **Appropriate Use**: Choose the right type of comprehension for your task:
   - Use list comprehensions when you need an ordered sequence of items
   - Use set comprehensions when you need unique items and don't care about order
   - Use dictionary comprehensions when you need key-value pairs
   - Use generator expressions when you're working with large datasets or streams

4. **Avoid Side Effects**: Comprehensions should primarily transform data without causing side effects.

```python
# Bad practice: side effects in comprehensions
[print(x) for x in range(5)]  # Using comprehension just for side effects

# Better practice
for x in range(5):
    print(x)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Summary

Comprehensions are a powerful feature in Python that allow you to create collections concisely. They combine looping, conditional logic, and collection creation into a single expression, resulting in more readable and often more efficient code.

By mastering comprehensions, you can write more Pythonic code that is both concise and expressive. In the next lesson, we'll explore iterators and generators in more depth, which will build on the generator expressions we've introduced here.

#### Footnotes

- <dfn>a - The term "Pythonic" refers to code that follows Python's design philosophy, emphasizing readability and using language constructs as they were intended.</dfn>

- <dfn>b - A generator function creates an iterator that yields values one at a time, rather than creating all values at once, saving memory.</dfn> 