---
sidebar_position: 2
---

# Scopes and Lifetimes

A lifetime is the duration of time that a variable exists in memory. A scope is a region of code where a variable can be accessed. In Python, there are two main types of scopes: local and global.
Local variables are defined within a function and can only be accessed within that function. Global variables are defined outside of any function and can be accessed from anywhere in the code (python also provides a way to access global variables from within a function, but we will cover that later).

## What this really means

### Local Variables
This means that if you define a variable inside a function, it will only exist within that function. If you try to access it outside of the function, you will get an error. For example:
```python
def my_function():
    x = 10  # Local variable
    print(x)  # This works

# Attempting to access the local variable (x) outside the function
print(x)  # This will cause an error: NameError: name 'x' is not defined
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" > </codapi-snippet>

We cannot access X because it is inside the function's code block (also known as a scope). The function is a block of code that is separate from the rest of the program. This is why we get an error when we try to access it outside of the function.

### Global Variables
Global variables are defined outside of any function and can be accessed from anywhere in the code. For example:
```python
x = 10  # Global variable
def my_function():
    print(x)  # This works (global variable)

my_function()  # This works
print(x)  # This works too (global variable)
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" > </codapi-snippet>

We can access x from within the function's block (scope). This is because x is a global variable, which means it is defined outside of any function and can be accessed from anywhere in the code.

#### Global Keyword

You can also declare a global variable inside a function using the `global` statement. The primary use of the `global` keyword is to modify a global variable inside a function. In order to do so, you must declare the variable as global inside the function. For example:

```python
x = 10  # Global variable
def my_function():
    global x  # Declare x as a global variable
    x = 20  # Modify the global variable

    print(x)  # This works (global variable)

print(x)  # This works too (global variable)
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" > </codapi-snippet>

However, using global variables is generally discouraged because it can lead to code that is difficult to understand and maintain. It is better to pass variables as arguments to functions or return values from functions instead of using global variables.
```python
def my_function(x):
    x = 20  # Local variable
    print(x)  # This works (local variable)
```

