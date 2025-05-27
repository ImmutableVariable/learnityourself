---
sidebar_position: 2
---

# Variables and Literals

In programming, we work with data, and two fundamental concepts for handling data are **literals** and **variables**.

## What is a literal?

A literal, also known as a literal constant, is a value that represents itself, such as a number, character, or string (these will be explained in a bit). Long story short, it's value is use literally (for example, `5` is literally `5`). It can represent multiple data types such as a string, integer, float, boolean, etc. For example:

```python
"Hello, World!"  # String literal
42              # Integer literal
3.14            # Float literal
True           # Boolean literal
```

We will build on this in the next part.

## What is a Variable?

A variable is a named storage location within the computer's memory. You can think of it as a container that is used to store data. The main reason for using variables is to allow you to reuse data without having to write it out every time. This saved developer time as well as creates a more readable program. Some key points about python variables are:
- Variables can hold different types of data (strings, integers, floats, etc.), although Python is dynamically typed (this will be explained later), meaning you don't have to declare the type of a variable when you create it.
- Variables can be reassigned to different values or types at any time.

## Creating Variables

To create a variable, you write a identifier (you can think of it as a label for the value you want to store, for example, `name`) followed by a equal sign (`=`) and then the value you want to assign to it (for example, the literal string `"Alice"`).

```python
name = "Alice"
```

In this code, name is the variable, and "Alice" is a string literal that is assigned as the variable's initial value. The variable name now holds the string "Alice", which can be accessed and used later in the program.

### Relationship between literals and variables

Although literals are often used to assign variables, they are not the same thing. The key difference is that the value of a variable can change during the program's execution, while a literal always represents the same fixed value (and can be used in other places without the use of a variable). For example:

```python
age = 25 # age is a variable that holds the integer literal 25

# HOWEVER you can also use a literal without a variable

25 + 5 # This is a literal expression that evaluates to 30 - No assignment
```

## Variable Naming Rules

Python has specific rules for variable names:

1. **Must start with a letter or underscore** (`_`)
2. **Can only contain alphanumeric characters and underscores** (`A-Z`, `a-z`, `0-9`, `_`)
3. **Cannot be Python keywords** like `if`, `for`, `while`, etc.
4. **Are case-sensitive** (`age`, `Age`, and `AGE` are three different variables)

**Good Variable Names**:
```python
name = "John"
user_age = 25
_private_variable = "Hidden"
counter1 = 0
```

**Bad Variable Names**:
```python
# Bad - starts with a number
1variable = "Invalid"

# Bad - contains a special character
user-name = "John"

# Bad - uses a Python keyword
if = "Condition"
```

## Variable Naming Conventions

While not enforced by Python, these conventions help make your code more readable:

1. **Use snake_case for variable names** (words separated by underscores, all lowercase)
2. **Use descriptive names** that explain what the variable contains
3. **Avoid single letter names** except for counters or iterators
4. **Use ALL_CAPS for constants** (values that don't change)

**Good Conventions**:
```python
# snake_case for variables
user_name = "Alice"
item_count = 10

# Constants in ALL_CAPS
MAX_RETRY_COUNT = 5
PI = 3.14159

# Iterator in a loop (single letter okay)
for i in range(5):
    print(i)
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

**BAD Examples**:
```python
# Bad - not descriptive
x = "Alice"  # x is vague at best

# Bad - using the wrong casing convention, always use snake_case for variables
userName = "Alice"  # Better to use user_name

# Bad - not descriptive enough
temp = 98.6  # What is this temperature to?
```

## Multiple Assignment

Python allows you to assign values to multiple variables in one line in order to save time. This is called multiple assignment. 

```python
# Assign the same value to multiple variables
x = y = z = 0
# x is equal to 0
# y is equal to 0
# z is equal to 0

# Assign different values to multiple variables
a, b, c = 1, 2, 3
# a is equal to 1
# b is equal to 2
# c is equal to 3
```

## Variable Scope

The scope of a variable determines where in your code the variable can be accessed. We will discuss this further in the functions module:

1. **Global variables** are defined outside of functions<sub>a</sub> and can be accessed throughout the program
2. **Local variables** are defined inside a function<sub>a</sub> and can only be used within that function

```python
# Global variable
global_var = "I'm accessible everywhere"

# This is a block, as well as a function, although you do not know what a function is, 
# a block is a section of code that is grouped together and seperate from the rest of the program
def my_function(): 
    # Local variable
    local_var = "I'm only accessible inside this block"
    print(global_var)  # This works (global variable)
    print(local_var)   # This works (local variable)

my_function()
print(global_var)  # This works
# print(local_var)  # This would cause an error - local_var is not defined here - try uncommenting this to see the error
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

**NOTE: YOU DO NOT NEED TO KNOW FUNCTIONS YET TO UNDERSTAND SCOPE** For more info, see [functions](../03-functions-modules/01-functions.md)

## Common Mistakes with Variables

1. **Using a variable before assigning a value**:
   ```python
   # Bad
   print(x)  # NameError: name 'x' is not defined
   x = 10
   
   # Good
   x = 10
   print(x) # 10
   ```

2. **Reassigning a built-in function or type**:
   ```python
   # Bad - Why?
   # In python, there is a built-in function (think of this as a reusable bit of code made by the developers) called list() that creates a list.
   # If you assign a variable with the same name, it will override the built-in function.
   list = [1, 2, 3]  
   
   # Good
   my_list = [1, 2, 3]  # Doesn't override built-in function
   ```

3. **Case sensitivity confusion**:
   ```python
   # Bad
   Name = "Alice"
   print(name)  # NameError: name 'name' is not defined
   
   # Good
   name = "Alice"
   print(name) # "Alice"
   ```

4. **Using reserved keywords**:
   ```python
   # Bad
   class = "Python 101"  # SyntaxError: invalid syntax
   
   # Good
   course_class = "Python 101"
   ```

## Variable Best Practices

1. **Use clear, descriptive names** that indicate the variable's purpose
2. **Keep names reasonably short** but not at the expense of clarity
3. **Be consistent with your naming style** throughout your codebase
4. **Initialize variables before using them**
5. **Avoid using global variables** when possible (they can make code harder to maintain)
6. **Don't reuse variable names** in the same scope for different purposes

Variables are on of the most important concepts in programming. They allow you to store and manipulate data, making your code more flexible and powerful. Understanding how to use variables effectively is crucial for writing clean and efficient code.


#### Footnotes

<dfn>a - A function is a block of code that performs a specific task and can be reused throughout your program. Functions are defined using the `def` keyword, followed by the function name and parentheses. For example: `def my_function():`.</dfn>