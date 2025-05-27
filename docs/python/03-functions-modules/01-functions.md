---
sidebar_position: 1
---

# Functions

Functions are the building blocks of modern programming. A function is a block of code that performs a specific task and can be reused throughout your program. Functions are defined using the `def` keyword. The `def` essentially just means "define". You are defining a task (a function) that can be executed later by your program. After writing the `def` keyword, you write the name of the function. It is important to name it something descriptive so that you can reference it later. A example of a function declaration is: `def my_function():`. Functions are important because they allow you to break down complex problems into smaller, manageable pieces. This makes your code more organized, easier to read, and easier to maintain.

Creating a function is done as follows:

```python
def function_name():
    # Code block to execute
```

In the first line, you write the `def` keyword, followed by the name of the function. 

## Calling a Function

Now that we have defined a function, we can call it. Calling a function is done by simply writing the function name followed by parentheses. For example:

```python
function_name()
```

You have been calling functions without even knowing it! For example, the `print()` function is a built-in function in Python that prints text to the console. When you write `print("Hello, World!")`, you are calling the `print()` function with the argument `"Hello, World!"` (I will explain arguments later).

    
## Function Parameters and Arguments

Parameters are variables that are defined in the function signature. They allow you to pass data into the function when you call it. Arguments are the actual values that you pass to the function when you call it. This is especially important because it allows you to create functions that use multiple inputs and return a customised ouput. This rapidly increases developer productivity. 

Although functions may be confusing at first, my favorite way to relate them to real world concepts is through mathematics. Take the following equation:

```
f(x) = 2x + 3
```

In this equation, `x` is a parameter and `2x + 3` is an expression based on `x`. If you were asked, "what is f(5)", you would answer `13` because `2 * (5) + 3 = 13`. This is a type of function. This is just like the functions in computer programming languages!

Take the following example:

```python
def greet(name):  # name is a parameter
    print("Hello, " + name + "!")

greet("Alice")  # "Alice" is an argument
```
<codapi-snippet sandbox="python" init-delay="500" ></codapi-snippet>

In this example, `name` is a parameter of the `greet()` function. When we call `greet("Alice")`, we are passing the argument `"Alice"` to the function. The function then prints "Hello, Alice!". Parameters are important because they allow you to create flexible functions that allow multiple types of data. 

You can also have multiple parameters in a function. For example:

```python
def add(a, b):  # a and b are parameters
    print(a + b)

add(1, 2)  # 1 and 2 are arguments
```
<codapi-snippet sandbox="python" init-delay="500" ></codapi-snippet>

In this example, `a` and `b` are parameters of the `add()` function. When we call `add(2, 3)`, we are passing the arguments `2` and `3` to the function. The function then prints `5` because `2 + 3 = 5`.

## Return Statement

The `return` statement is used to return a value from a function. When a function returns a value, you can use that value in your code. For example:

```python
def add(a, b):  # a and b are parameters
    return a + b  # Return the sum of a and b

print(add(2, 3))  # Now that we have returned the value 5 out of the function, we can print it
```
<codapi-snippet sandbox="python" init-delay="500" ></codapi-snippet>
In this example, the `add()` function returns the sum of `a` and `b`. When we call `add(2, 3)`, it returns `5`, which is then printed to the console.

## Default Parameters

Python also provides us with something called default parameters. Default parameters are parameters that have a default value. If you do not provide a value for the parameter when you call the function, the default value will be used. For example:

```python
def greet(name="Guest"):  # name has a default value of "Guest"
    print("Hello, " + name + "!")

greet()  # No argument provided, so "Guest" is used
greet("Alice")  # "Alice" is used instead of the default value
```
<codapi-snippet sandbox="python" init-delay="500" ></codapi-snippet>

Default parameters must be defined after non-default parameters in the function signature. For example:

```python
def greet(name, greeting="Hello"):  # This is correct
    print(greeting + ", " + name + "!")

def greet(greeting="Hello", name):  # This is incorrect
    print(greeting + ", " + name + "!")
```

## Multiple Arguments

There are two primary types of arguments in Python: positional arguments and keyword arguments.

### Variable Arguments

In Python, the `*args` parameter allows a function to accept any number of positional arguments (i.e., arguments passed without specifying their names). These arguments are collected into a tuple inside the function. We have not yet covered this but it is worth mentioning. Please read the first paragraph of [tuples](../04-data-structures/03-tuples.md) article.. This is useful when you don’t know how many arguments will be passed or want to make your functions more flexible.

```python
def sum_numbers(*args):
    print("Arguments:", args)
    total = 0
    for num in args:
        total += num
    print("Sum of numbers:", total)

sum_numbers(1, 2, 3)
sum_numbers(5, 10, 15, 20)
```

<codapi-snippet sandbox="python" init-delay="500"></codapi-snippet>

`*args` collects all the positional arguments into a tuple named args.
The function then loops through this tuple to calculate the sum.

## Keyword Arguments

The `**kwargs` parameter allows a function to accept any number of keyword arguments (i.e., arguments passed with key-value pairs, like name="Alice"). These are collected into a [dictionary](../04-data-structures/04-dictionaries.md) inside the function. This is helpful when you want to pass optional named parameters or handle functions with many optional inputs.

```python
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=30, city="New York")
```

<codapi-snippet sandbox="python" init-delay="500"></codapi-snippet>

`**kwargs` collects all keyword arguments into a dictionary named kwargs.
The loop prints each key-value pair from the dictionary.

### Combining Positional and Keyword Arguments

You can also create functions that combine both positional and keyword arguments as well as traditional parameters.

```python
def print_info(name, *args, **kwargs):
    print("Name:", name)
    print("Positional arguments:", args)
    print("Keyword arguments:", kwargs)

print_info("Alice", "Hello", "World", age=30, city="New York")
```


## Lambda Functions

Lambda functions are small anonymous (unnamed) functions that can take any number of arguments but can only have one expression. They are often used for short, throwaway functions that are not going to be reused elsewhere in your code. Lambda functions are defined using the `lambda` keyword, followed by the arguments and the expression. The syntax is as follows:

```python
lambda arguments: expression
```

Example:

```python
add = lambda x, y: x + y  # This is a lambda function that adds two numbers
print(add(2, 3))  # Output: 5
```
<codapi-snippet sandbox="python" init-delay="500" ></codapi-snippet>