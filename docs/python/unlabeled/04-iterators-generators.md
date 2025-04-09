---
sidebar_position: 4
---

# Iterators and Generators

Iterators and generators are powerful tools in Python that allow you to work with data sequences efficiently. They provide a standardized way to access elements of a collection one at a time, without loading the entire collection into memory.

## Iterators

An iterator is an object that implements two methods: `__iter__()` and `__next__()`. These methods make up the iterator protocol in Python.

### Iterator Protocol

1. `__iter__()`: Returns the iterator object itself. This method is called when you use the `iter()` function.
2. `__next__()`: Returns the next item in the sequence. When there are no more items, it raises a `StopIteration` exception. This method is called when you use the `next()` function.

### Built-in Iterators

Python has many built-in objects that are iterators or can be converted to iterators:

```python
# Lists are iterable (can be converted to iterators)
my_list = [1, 2, 3, 4, 5]
list_iterator = iter(my_list)

# Using next() to get items one by one
print(next(list_iterator))  # 1
print(next(list_iterator))  # 2
print(next(list_iterator))  # 3
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Dictionaries are iterable (iteration gives keys by default)
my_dict = {'a': 1, 'b': 2, 'c': 3}
dict_iterator = iter(my_dict)

print(next(dict_iterator))  # 'a'
print(next(dict_iterator))  # 'b'
print(next(dict_iterator))  # 'c'

# To iterate over values or items
print(list(my_dict.values()))  # [1, 2, 3]
print(list(my_dict.items()))   # [('a', 1), ('b', 2), ('c', 3)]
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
# Strings are iterable (character by character)
my_string = "Python"
string_iterator = iter(my_string)

print(next(string_iterator))  # 'P'
print(next(string_iterator))  # 'y'
print(next(string_iterator))  # 't'
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Creating a Custom Iterator

You can create your own iterator by implementing the iterator protocol in a class:

```python
class CountDown:
    """Iterator that counts down from n to 1"""
    
    def __init__(self, n):
        self.n = n
        self.current = n
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        else:
            self.current -= 1
            return self.current + 1

# Using our custom iterator
countdown = CountDown(5)
for number in countdown:
    print(number, end=' ')  # 5 4 3 2 1
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Advantages of Iterators

1. **Memory Efficiency**: Iterators generate values on-demand, rather than storing all values in memory.
2. **Versatility**: The same iterator interface works with all iterable collections in Python.
3. **Simplicity**: You can use a standard `for` loop with any iterator without knowing its implementation details.

### Common Built-in Functions That Use Iterators

Many Python built-in functions work with iterators:

```python
numbers = [1, 2, 3, 4, 5]

# Using sum() with an iterable
print(sum(numbers))  # 15

# Using max() and min() with an iterable
print(max(numbers))  # 5
print(min(numbers))  # 1

# Using any() and all()
print(any([True, False, False]))  # True
print(all([True, False, False]))  # False
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Generators

Generators are a special type of iterator that are defined using functions with the `yield` statement. They generate values on-the-fly and don't need to implement the iterator protocol explicitly.

### Generator Functions

A generator function is defined like a normal function but uses the `yield` statement instead of `return`. When called, it returns a generator object (iterator) that can be used to execute the function body.

```python
def count_up_to(n):
    """Generate numbers from 1 to n"""
    i = 1
    while i <= n:
        yield i
        i += 1

# Using the generator
counter = count_up_to(5)
print(next(counter))  # 1
print(next(counter))  # 2
print(next(counter))  # 3

# Using a for loop with the generator
counter = count_up_to(5)
for num in counter:
    print(num, end=' ')  # 1 2 3 4 5
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Generator Expressions

Generator expressions are similar to list comprehensions but create generators instead of lists. They are more memory-efficient for large datasets.

```python
# List comprehension vs. generator expression
import sys

# List comprehension (stores all values in memory)
squares_list = [x**2 for x in range(1000)]
print(f"List size: {sys.getsizeof(squares_list)} bytes")

# Generator expression (generates values on-the-fly)
squares_gen = (x**2 for x in range(1000))
print(f"Generator size: {sys.getsizeof(squares_gen)} bytes")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### State Preservation in Generators

Generators maintain their state between calls, remembering where they left off:

```python
def fibonacci():
    """Generate an infinite sequence of Fibonacci numbers"""
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Get the first 10 Fibonacci numbers
fib = fibonacci()
for _ in range(10):
    print(next(fib), end=' ')  # 0 1 1 2 3 5 8 13 21 34
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Generator Methods: send(), throw(), and close()

Generators have special methods that allow for more sophisticated interactions:

```python
def echo_generator():
    """Echo what is sent to the generator"""
    value = yield "Ready!"
    while True:
        value = yield f"Echo: {value}"

# Create generator and advance to first yield
gen = echo_generator()
print(next(gen))  # "Ready!"

# Send values to the generator
print(gen.send("Hello"))   # "Echo: Hello"
print(gen.send("Python"))  # "Echo: Python"
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

```python
def value_generator():
    """Generate values and handle exceptions"""
    try:
        yield 1
        yield 2
        yield 3
    except ValueError:
        yield "ValueError was raised"
    finally:
        print("Generator is closing")

# Create generator and get the first value
gen = value_generator()
print(next(gen))  # 1

# Throw an exception into the generator
print(gen.throw(ValueError))  # "ValueError was raised"

# Close the generator
gen.close()  # Prints "Generator is closing"
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Yielding from Other Iterables

The `yield from` statement allows a generator to delegate part of its operations to another generator or iterable:

```python
def chain_generators(*iterables):
    """Chain multiple iterables together"""
    for iterable in iterables:
        yield from iterable

# Combine multiple iterables
result = chain_generators([1, 2, 3], ['a', 'b', 'c'], (4, 5, 6))
for item in result:
    print(item, end=' ')  # 1 2 3 a b c 4 5 6
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Practical Applications

### Data Processing Pipeline

Generators are excellent for creating data processing pipelines:

```python
def read_data(file_name):
    """Simulate reading data from a file, line by line"""
    data = [f"Line {i}" for i in range(1, 6)]
    for line in data:
        yield line

def process_data(lines):
    """Process each line of data"""
    for line in lines:
        yield line.upper()

def filter_data(processed_lines):
    """Filter the processed data"""
    for line in processed_lines:
        if '3' not in line:
            yield line

# Create the processing pipeline
raw_data = read_data("data.txt")
processed_data = process_data(raw_data)
filtered_data = filter_data(processed_data)

# Execute the pipeline
for item in filtered_data:
    print(item)  # LINE 1, LINE 2, LINE 4, LINE 5
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Working with Large Files

Generators are ideal for processing large files efficiently:

```python
def read_large_file(file_path):
    """Read a large file line by line"""
    # In a real implementation, this would open an actual file
    # For this example, we'll simulate file contents
    simulated_file = [
        "This is line 1",
        "This is line 2",
        "This is line 3",
        "This is line 4",
        "This is line 5"
    ]
    
    for line in simulated_file:
        yield line

# Process a large file without loading it all into memory
for line in read_large_file("large_file.txt"):
    # Process each line
    print(line.replace("line", "ROW"))
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Infinite Sequences

Generators can represent infinite sequences:

```python
def infinite_counter():
    """Generate an infinite sequence of counting numbers"""
    num = 0
    while True:
        yield num
        num += 1

# Get the first 5 numbers
counter = infinite_counter()
for _ in range(5):
    print(next(counter), end=' ')  # 0 1 2 3 4
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Iterator vs Generator Comparison

Here's a comparison of iterators and generators:

| Feature                   | Iterator                                  | Generator                                |
|---------------------------|-------------------------------------------|------------------------------------------|
| Definition                | Class implementing `__iter__` and `__next__` | Function with `yield` statement          |
| State preservation       | Stored in instance variables               | Automatic (function's local state)       |
| Memory usage             | Can be memory-intensive                    | Memory-efficient                          |
| Implementation complexity | More complex (requires class definition)   | Simpler (just a function with `yield`)   |
| Use case                 | Complex custom iteration logic             | Simple sequences, processing pipelines   |

## Best Practices

1. **Use generators for large datasets**: When working with large data, generators prevent memory issues.

2. **Prefer generator expressions over list comprehensions** for large sequences:

```python
# Instead of this (memory-intensive)
sum([x**2 for x in range(1000000)])

# Do this (memory-efficient)
sum(x**2 for x in range(1000000))
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

3. **Use the built-in functions that work with iterators**:

```python
# Don't do this
total = 0
for x in data:
    total += x

# Do this instead
total = sum(data)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

4. **Chain generators to create processing pipelines**: This allows for clean, modular code.

5. **Don't use the `next()` function in regular application code**: It's generally better to use `for` loops or other higher-level constructs that handle `StopIteration` automatically.

## Summary

Iterators and generators are fundamental tools in Python that enable you to work with sequences of data efficiently. Iterators provide a standardized interface for accessing elements one at a time, while generators offer a simple way to create iterators using functions with the `yield` statement.

These tools are particularly valuable when working with large datasets, as they allow you to process data one item at a time without loading everything into memory. They also facilitate the creation of clean, modular data processing pipelines.

In the next lesson, we'll explore context managers, which provide a different but equally powerful way to control the execution flow in Python.

#### Footnotes

- <dfn>a - The iterator protocol has been part of Python since version 2.2 and is a key component of the language's design.</dfn>
- <dfn>b - The term "lazy evaluation" refers to the strategy of delaying computation until the result is needed, which is a key benefit of generators.</dfn> 