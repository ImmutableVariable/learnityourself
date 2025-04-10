# Advanced Decorators in Python

This guide covers more advanced aspects of Python decorators for those who have already mastered the basics. Decorators are one of Python's most powerful features, providing an elegant way to enhance, modify, or track function and method behavior.

## Preserving Metadata with `functools.wraps`

When you create a decorator, the wrapped function loses its metadata (like docstring, name, etc.). Here's how to fix that:

```python
import functools

def my_decorator(func):
    @functools.wraps(func)  # Preserves metadata of the decorated function
    def wrapper(*args, **kwargs):
        """This is the wrapper function"""
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@my_decorator
def my_function():
    """This is my original docstring"""
    print("Hello, world!")

# Without functools.wraps, this would show the wrapper's name and docstring
print(f"Function name: {my_function.__name__}")  # Correctly prints "my_function" instead of "wrapper"
print(f"Function docstring: {my_function.__doc__}")  # Correctly prints the original docstring
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Always use `@functools.wraps` in your decorators to ensure the decorated function maintains its original identity.

## Decorators with Arguments

Sometimes you want decorators that can accept arguments. This requires an additional level of nesting:

```python
def repeat(num_times):
    """Decorator that repeats the function call num_times times"""
    def decorator_repeat(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            results = []
            for _ in range(num_times):
                results.append(func(*args, **kwargs))
            return results
        return wrapper
    return decorator_repeat

# Using the decorator with arguments
@repeat(3)
def say_hello(name):
    return f"Hello, {name}!"

# This will call say_hello 3 times
print(say_hello("World"))
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Notice the three-level nesting:
1. `repeat` - Takes the decorator arguments
2. `decorator_repeat` - Takes the function to decorate
3. `wrapper` - Handles the function call logic

## Class Decorators

Decorators can be used on classes as well as functions:

```python
def add_greeting(cls):
    """Add a greeting method to the decorated class"""
    def greet(self, name):
        return f"{self.__class__.__name__} says: Hello, {name}!"
    
    cls.greet = greet
    return cls

@add_greeting
class Person:
    def __init__(self, name):
        self.name = name

# The Person class now has a greet method
person = Person("Alice")
print(person.greet("Bob"))  # Person says: Hello, Bob!
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Creating Decorators as Classes

Decorators don't have to be functions; they can be classes too:

```python
class CountCalls:
    """Class decorator that counts calls to the decorated function"""
    def __init__(self, func):
        self.func = func
        self.count = 0
        functools.update_wrapper(self, func)  # Preserve metadata
    
    def __call__(self, *args, **kwargs):
        """Called when the decorated function is called"""
        self.count += 1
        print(f"Call {self.count} of {self.func.__name__}")
        return self.func(*args, **kwargs)

@CountCalls
def say_hi():
    return "Hi!"

# Each call increments the counter
print(say_hi())
print(say_hi())
print(say_hi())
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Class-based decorators are especially useful when the decorator needs to maintain state between calls or when you want to provide additional methods.

## Stacking Decorators

You can apply multiple decorators to a single function:

```python
import functools
import time

def timer(func):
    """Print the runtime of the decorated function"""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.perf_counter()
        result = func(*args, **kwargs)
        end_time = time.perf_counter()
        print(f"{func.__name__} ran in {end_time - start_time:.6f} seconds")
        return result
    return wrapper

def debug(func):
    """Print function arguments and return value"""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        args_repr = [repr(a) for a in args]
        kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]
        signature = ", ".join(args_repr + kwargs_repr)
        print(f"Calling {func.__name__}({signature})")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result!r}")
        return result
    return wrapper

# Stacking decorators - the order matters!
@timer           # Applied second (outer)
@debug           # Applied first (inner)
def factorial(n):
    """Calculate the factorial of n"""
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# This will show both debug info and timing
factorial(5)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

When stacking decorators, they are applied from bottom to top. In this example, `debug` is applied first, then `timer` wraps the result.

## Decorators with Optional Arguments

You can create flexible decorators that work with or without arguments:

```python
import functools

def smart_decorator(func=None, *, prefix=""):
    """A decorator that can be used with or without arguments"""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            print(f"{prefix}Calling {func.__name__}")
            return func(*args, **kwargs)
        return wrapper
    
    # If the decorator was called with no arguments
    if func is not None:
        return decorator(func)
    
    # If the decorator was called with arguments
    return decorator

# Using the decorator without arguments
@smart_decorator
def hello():
    print("Hello, world!")

# Using the decorator with arguments
@smart_decorator(prefix="LOG: ")
def goodbye():
    print("Goodbye, world!")

hello()
goodbye()
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Real-World Use Cases

### Memoization (Caching Results)

```python
import functools
import time

def memoize(func):
    """Cache the results of the function for the same input arguments"""
    cache = {}
    
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # Create a key from the arguments
        key = str(args) + str(kwargs)
        if key not in cache:
            cache[key] = func(*args, **kwargs)
        return cache[key]
    
    return wrapper

# Fibonacci without memoization
def fib_slow(n):
    if n < 2:
        return n
    return fib_slow(n-1) + fib_slow(n-2)

# Fibonacci with memoization
@memoize
def fib_fast(n):
    if n < 2:
        return n
    return fib_fast(n-1) + fib_fast(n-2)

# Compare performance
start = time.perf_counter()
result1 = fib_slow(30)
time1 = time.perf_counter() - start

start = time.perf_counter()
result2 = fib_fast(30)
time2 = time.perf_counter() - start

print(f"Without memoization: {result1} in {time1:.2f} seconds")
print(f"With memoization: {result2} in {time2:.2f} seconds")
print(f"Speedup: {time1/time2:.1f}x faster")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

> Note: Python's standard library provides `@functools.lru_cache` which is a more sophisticated implementation of this pattern.

### Input Validation

```python
import functools

def validate_types(**expected_types):
    """Validate the types of function arguments"""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # Get the parameter names using the function's signature
            import inspect
            sig = inspect.signature(func)
            parameters = list(sig.parameters.keys())
            
            # Check positional arguments
            for i, arg in enumerate(args):
                if i < len(parameters):
                    param_name = parameters[i]
                    if param_name in expected_types and not isinstance(arg, expected_types[param_name]):
                        raise TypeError(f"Argument {param_name} must be of type {expected_types[param_name].__name__}")
            
            # Check keyword arguments
            for param_name, arg in kwargs.items():
                if param_name in expected_types and not isinstance(arg, expected_types[param_name]):
                    raise TypeError(f"Argument {param_name} must be of type {expected_types[param_name].__name__}")
            
            return func(*args, **kwargs)
        return wrapper
    return decorator

@validate_types(name=str, age=int)
def greet_person(name, age):
    return f"Hello {name}, you are {age} years old"

# This works
print(greet_person("Alice", 30))

# This will raise a TypeError
try:
    print(greet_person("Bob", "twenty"))
except TypeError as e:
    print(f"Error: {e}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### Measuring Performance

```python
import functools
import time

def timing_statistics(func):
    """Record timing statistics for function calls"""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # Initialize statistics on first call
        if not hasattr(wrapper, 'calls'):
            wrapper.calls = 0
            wrapper.total_time = 0
            wrapper.min_time = float('inf')
            wrapper.max_time = 0
        
        start_time = time.perf_counter()
        result = func(*args, **kwargs)
        end_time = time.perf_counter()
        execution_time = end_time - start_time
        
        # Update statistics
        wrapper.calls += 1
        wrapper.total_time += execution_time
        wrapper.min_time = min(wrapper.min_time, execution_time)
        wrapper.max_time = max(wrapper.max_time, execution_time)
        
        return result
    
    # Add methods to access statistics
    def get_stats():
        if not hasattr(wrapper, 'calls') or wrapper.calls == 0:
            return "No calls made yet"
        avg_time = wrapper.total_time / wrapper.calls
        return {
            'calls': wrapper.calls,
            'total_time': f"{wrapper.total_time:.6f}s",
            'avg_time': f"{avg_time:.6f}s",
            'min_time': f"{wrapper.min_time:.6f}s",
            'max_time': f"{wrapper.max_time:.6f}s"
        }
    
    wrapper.get_stats = get_stats
    return wrapper

@timing_statistics
def simulate_work(iterations):
    """Simulate some computational work"""
    total = 0
    for i in range(iterations):
        total += i ** 2
    return total

# Run the function several times with different parameters
simulate_work(1000)
simulate_work(10000)
simulate_work(100000)

# Get and display the statistics
stats = simulate_work.get_stats()
for key, value in stats.items():
    print(f"{key}: {value}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Conclusion

Decorators are one of Python's most elegant and powerful features. They enable you to:
- Separate cross-cutting concerns from your main business logic
- Apply consistent behavior across many functions
- Create cleaner, more maintainable code
- Implement advanced patterns like memoization and registration

As you become more comfortable with decorators, you'll find they're an indispensable tool in your Python programming toolkit.

> Remember to use `functools.wraps` when creating decorators to preserve the metadata of decorated functions, and consider using class-based decorators when you need to maintain state between function calls. 