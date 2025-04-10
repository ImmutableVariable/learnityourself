---
sidebar_position: 6
---

# Introduction to Decorators

In this lesson, we'll introduce the concept of decorators in Python. Decorators are a powerful feature that lets you modify the behavior of functions and methods, and they're used extensively in many Python libraries and frameworks.

## What Are Decorators?

A decorator is a special kind of function that wraps another function to extend or modify its behavior without permanently modifying the original function. Think of decorators like "wrappers" around functions.

The name "decorator" comes from the idea that they "decorate" functions with additional functionality, similar to how you might decorate a cake to enhance it without changing the cake itself.

## Why Use Decorators?

Decorators are useful when you want to:

1. Add functionality to many functions without repeating code
2. Modify the behavior of functions in a clean, reusable way
3. Separate concerns in your code (like timing, logging, or validation)
4. Transform the input or output of functions

In our OOP lessons, you'll see decorators like `@property` and `@classmethod` which modify how methods work in classes.

## Basic Decorator Syntax

In Python, decorators use the `@` symbol followed by the decorator name, placed above the function definition:

```python
@my_decorator
def my_function():
    pass
```

This is a shorthand for:

```python
def my_function():
    pass

my_function = my_decorator(my_function)
```

## A Simple Decorator Example

Let's create a simple decorator that prints a message before and after a function is called:

```python
def announce(func):
    def wrapper():
        print(f"About to run {func.__name__}")
        func()
        print(f"Finished running {func.__name__}")
    return wrapper

@announce
def hello():
    print("Hello, world!")

hello()
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

When you call `hello()`, the output shows that the `announce` decorator has wrapped the function and added behavior before and after it runs.

## Decorators with Arguments

What if our function takes arguments? We need to make sure our decorator can handle them:

```python
def announce(func):
    def wrapper(*args, **kwargs):
        print(f"About to run {func.__name__}")
        result = func(*args, **kwargs)
        print(f"Finished running {func.__name__}")
        return result
    return wrapper

@announce
def add(a, b):
    return a + b

result = add(3, 5)
print(f"Result: {result}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Here, `*args` and `**kwargs` allow our wrapper to accept any arguments and pass them to the original function.

## Common Built-in Decorators in Python

Python includes several built-in decorators that you'll encounter in the OOP lessons:

### `@property`

The `@property` decorator allows you to define methods that can be accessed like attributes, providing a cleaner interface for your classes:

```python
class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        return self._radius
    
    @radius.setter
    def radius(self, value):
        if value <= 0:
            raise ValueError("Radius must be positive")
        self._radius = value
    
    @property
    def area(self):
        return 3.14159 * self._radius * self._radius

# Create a circle and use properties
circle = Circle(5)
print(f"Radius: {circle.radius}")
print(f"Area: {circle.area}")

# Set a new radius
circle.radius = 10
print(f"New radius: {circle.radius}")
print(f"New area: {circle.area}")

# Try to set an invalid radius
try:
    circle.radius = -5
except ValueError as e:
    print(f"Error: {e}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### `@classmethod` and `@staticmethod`

These decorators define special methods in classes:

```python
class MyClass:
    class_attribute = "I belong to the class"
    
    def __init__(self, instance_attribute):
        self.instance_attribute = instance_attribute
    
    # Regular instance method (needs an instance)
    def instance_method(self):
        return f"Instance method called on {self.instance_attribute}"
    
    # Class method (works with the class itself)
    @classmethod
    def class_method(cls):
        return f"Class method called on {cls.__name__} with {cls.class_attribute}"
    
    # Static method (doesn't need instance or class)
    @staticmethod
    def static_method():
        return "Static method called"

# Create an instance
obj = MyClass("instance value")

# Call each method type
print(obj.instance_method())  # Using the instance
print(MyClass.class_method())  # Using the class directly
print(MyClass.static_method())  # Using the class directly
print(obj.static_method())     # Also works with an instance
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## When to Use Decorators

As a beginner, you'll mostly use built-in decorators like `@property` and `@classmethod`. As you advance, you might write your own decorators for:

- Logging function calls
- Measuring execution time
- Adding authentication/authorization checks
- Caching results
- Validating inputs or outputs

## Summary

Decorators are a powerful Python feature that lets you modify functions and methods without changing their code:

- Decorators wrap functions to add or modify functionality
- They use the `@decorator_name` syntax above function definitions
- Built-in decorators like `@property` and `@classmethod` are used in OOP
- Custom decorators can be created for reusable function modifications

In the OOP sections of this course, we use decorators to define special types of methods and properties. As you progress in your Python journey, you'll encounter more advanced uses of decorators.

> For a deeper dive into decorators, check out the "Advanced Decorators" lesson in the unlabeled section. There we cover more complex topics like decorator factories, stacked decorators, and maintaining metadata with `functools.wraps`. 