# Modules

A module is simply a file containing Python code that can define functions, classes, and variables. It is usually a collection of related functions and variables that you can use in your programs. These help you organize your programs and reuse code instead of writing it from scratch every time. 

You can create your own modules, or use modules that come with Python. For example, Python has a `math` module that gives you access to mathematical functions and constants, like pi (π).

Here is a simple example of a module being used:
```python
import math
print(math.pi)  # Prints the value of pi
```
<codapi-snippet sandbox="python" init-delay="500" ></codapi-snippet>

## Using a Module

To use a module, you first need to import it. You can do this using the `import` statement. For example, to import the `math` module, you would write:

```python
# import <module_name>
import math
```

However, you can also import specific functions or variables from a module using the `from` keyword. For example, if you only want to use the `sqrt` function from the `math` module, you can do it like this:
```python
# from <module_name> import <function_name>
from math import sqrt
print(sqrt(16))  # Prints 4.0
```
<codapi-snippet sandbox="python" init-delay="500" ></codapi-snippet>

And, if you want to import all functions and variables from a module, you can use the `*` wildcard:
```python
# from <module_name> import *
from math import * # this has imported everything from the math module
print(sqrt(16))  # Prints 4.0
print(pi)  # Prints the value of pi
```
<codapi-snippet sandbox="python" init-delay="500" ></codapi-snippet>

*Note: Using `*` is not recommended because it can lead to confusion if there are functions or variables with the same name in different modules. This is also known as ["namespace pollution"](https://pybit.es/articles/why-you-should-avoid-import-in-python/).*

You can also provide an alias (or another name) for a module using the `as` keyword. This is useful if the module name is long or if you want to avoid name conflicts. For example:
```python
# import <module_name> as <alias>
import math as math_module 
print(math_module.pi)  # Prints the value of pi
```
<codapi-snippet sandbox="python" init-delay="500" ></codapi-snippet>

*Note: The alias can be any name you choose, but it's common to use a shortened version of the module name (`numpy` is often imported as `np`, for example). Or a descriptive name that indicates what the module does.*

## Creating Your Own Modules

Creating a module in python is as simple as creating a new python file and adding your functions and variables to it. The online code editor will not allow you to do this; however, you can follow along locally on your computer [(see "introduction")](../). Start by creating a file `my_module.py` and add the following code to it (otherwise, just read along):

```python
def greet(name):
    print(f"Hello, {name}!")

def add(a, b):
    return a + b
```

After creating this file, you can use it in another python file by importing it. For example:
```python
# Please note that the file name is the module name
# and it should be in the same directory as the file you are importing it into
# or in the Python path.
import my_module

my_module.greet("Alice")  # Prints "Hello, Alice!"
print(my_module.add(2, 3))  # Prints 5
```

Then, name this file `main.py` and run it with the command:
```bash
python main.py
```

and you should see the following output:
```
Hello, Alice!
5
```

Thats (mostly) it! You can now create your own modules and use them in your program. We will cover more advanced topics like packages (open source libraries online) and how to create your own packages.