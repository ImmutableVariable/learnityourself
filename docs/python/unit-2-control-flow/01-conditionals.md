---
sidebar_position: 1
---

# Conditional Statements

Conditional statements allow your program to make decisions based on conditions<sub>a</sub>. Python uses `if`, `elif` (else if), and `else` statements to control the flow of execution.

## if Statement

The `if` statement evaluates a condition and executes a block of code if the condition is `True`:

```python
age = 18

if age >= 18: # Check if age is greater than or equal to 18, if it is, it will run the block of code below (the indented region)
    print("You are an adult")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

## if-else Statement

When writing an `if` statement<sub>b</sub>, you may want to provide an alternative block of code to execute when the condition is `False`. This is done using the `else` statement. Imagine the else statement as a backup plan, which will run if the condition is not met.

```python
age = 16

if age >= 18: # Checking if the age is greated than or equal to 18 - (This is False because the age is 16)
    print("You are an adult")
else: # because the condition following the if statement is False, it will run the block of code below (the indented region)
    print("You are a minor")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>


## if-elif-else Statement

The `elif` statement allows you to check multiple conditions in a single `if` statement. If the first condition is `False`, it checks the next condition, and so on. If none of the conditions are `True`, it executes the `else` block. You can also not include the `else` statement; however, it is not recommended as it can lead to some issues.

```python
score = 85 

if score >= 90:   # This condition is skipped because it is False (the score is 85)
    grade = "A"
elif score >= 80: # This condition is True (the score is 85)
    grade = "B"   #this will be the block of code that is run
elif score >= 70: # Because the previous condition is True, this condition is skipped
    grade = "C"
elif score >= 60: # Because the previous condition is True, this condition is skipped
    grade = "D"
else:             # Because the previous condition(s) are True, the else block is not ran.
    grade = "F"

print(f"Your grade is {grade}")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

## Nested if Statements

You can nest conditional statements inside other conditional statements:

```python
age = 25
income = 50000

if age >= 18: # Check if age is greater than or equal to 18, if it is, it will run the block of code below (the indented region)
    # Nested if statement
    if income >= 40000: 
        print("You are eligible for a premium credit card") # This condition is True (the income is 50000)
    else:
        print("You are eligible for a standard credit card")
else:
    print("You are not eligible for a credit card")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

*Note: Nesting too deeply can make your code hard to read. Try to keep your code as flat (less indentions) as possible and use functions to break down complex logic.*

## Conditional Expressions (Ternary Operator) 

Python also provides a conditional expression (also known as a ternary operator) that allows you to write a simple `if-else` statement in a single line. This is useful for assigning values based on conditions without using multiple lines of code.

```python
age = 20
status = "adult" if age >= 18 else "minor" # The conditon is evaluated as True (the age is 20), so the value of status will be "adult"
print(status)  # "adult"
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

This is equivalent to:

```python
# Equivalent to the if-else statement above
age = 20
if age >= 18:
    status = "adult"
else:
    status = "minor"
print(status)  # "adult"
```

Here is another sample: 

```python
# Another example
x = 15
result = "Even" if x % 2 == 0 else "Odd" # The condition is evaluated as False (x is 15), so the value of result will be "Odd"
print(f"{x} is {result}")

# Can be used in assignment, return values, etc.
temperature = 28
message = "It's hot" if temperature > 25 else "It's cool" # "It's hot"
print(message)
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

## Truthy and Falsy Values

In Python, certain values are considered "truthy" or "falsy". This means that they evaluate to `True` or `False` when used in a conditional statement, even if they are not explicitly boolean values (`True` or `False`).


### Falsy Values
**Falsy values** are values that evaluate to `False` in a boolean context. They include:
- `False`
- `None`
- Zero (`0`, `0.0`, `0j`)
- Empty sequences (`''`, `[]`, `()`, `{}`, `set()`)

### Truthy Values
**Truthy values** are values that evaluate to `True` in a boolean context. They include:
- `True`
- Non-zero numbers (`1`, `-1`, `3.14`)
- Non-empty sequences (`'hello'`, `[1]`, `(1,)`, `{1: 'a'}`, `set([1])`)
- Any object that is not `None` or `False`

```python
# Truthy and falsy values
print("Falsy values:")
print(f"bool(False): {bool(False)}") 
print(f"bool(None): {bool(None)}")
print(f"bool(0): {bool(0)}")
print(f"bool(''): {bool('')}")
print(f"bool([]): {bool([])}")
print(f"bool({{}}): {bool({})}")

print("\nTruthy values:")
print(f"bool(True): {bool(True)}")
print(f"bool(1): {bool(1)}")
print(f"bool(-1): {bool(-1)}")
print(f"bool('hello'): {bool('hello')}")
print(f"bool([0]): {bool([0])}") # List with one element (0), which is a non-empty list, you will learn about lists in the next unit
print(f"bool({{'key': 'value'}}): {bool({'key': 'value'})}") # Dictionary, which is a data structure that you will learn about in the next unit
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

This also means that you can use these values directly in conditional statements without explicitly comparing them to `True` or `False`:

```python
# Using truthy and falsy values in conditionals
x = 0

if x:  # This condition is False because x is 0 (falsy value)
    print("x is truthy")
else:
    print("x is falsy")  # This will be printed
```

## Logical Operators in Conditionals

You can also combine multiple conditions using logical operators: `and`, `or`, and `not`. These operators allow you to create more complex conditions.


| Operator | Description                      | Example                |
|----------|----------------------------------|------------------------|
| `and`    | True if both conditions are true (a AND b) | `if a and b:`         |
| `or`     | True if at least one condition is true (a OR b) | `if a or b:`          |
| `not`    | Inverts the boolean value (`True` -> `False`; `False` -> `True`)       | `if not a:`           |

```python
age = 25
has_license = True

# Using 'and' operator - both conditions must be True
if age >= 18 and has_license: #  This condition is True (age is 25 and has_license is True)
    print("You can drive")
else:
    print("You cannot drive")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

```python
# Using 'or' operator - at least one condition must be True
has_credit_card = True
has_cash = False 

if has_credit_card or has_cash: # this will run because ATLEAST one is true
    print("You can make a purchase")
else:
    print("You cannot make a purchase")

# Using 'not' operator - inverts the boolean value
is_weekend = False # This value will be flipped to True
if not is_weekend: # If is_weekend is False, this condition is True.
    print("Time to work")
else:
    print("Time to relax")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

## Membership and Identity Tests

Membership and identity tests are used to check if a value is part of a collection or if two variables point to the same object in memory.
| Operator | Description                      | Example                |
|----------|----------------------------------|------------------------|
| `in`     | True if the value is found in the collection (list, tuple, string, etc.) | `if value in collection:` |
| `is`     | True if both variables point to the same object in memory | `if a is b:`          |

```python
# Membership tests with 'in' and 'not in'
fruits = ["apple", "banana", "cherry"] 
# imagine a list as a collection of items in a box
# We are checking if this box contains a specific item (fruit) or not 
# We will cover this in more detail in the next unit; however, it is a important conecept within control flows.
if "banana" in fruits:
    print("Yes, banana is in the list")

if "orange" not in fruits: # you can also chain other operators together, in this case, not in is used to check if the value is not in the list
    print("No, orange is not in the list")

# Identity tests with 'is' and 'is not'
a = [1, 2, 3]
b = [1, 2, 3]
c = a
# a and b are two different objects with the same content, while c is a reference to the same object as a

print(f"a == b: {a == b}")  # True - same values
print(f"a is b: {a is b}")  # False - different objects in memory
print(f"a is c: {a is c}")  # True - same object in memory
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

## Best Practices

1. **Be explicit**: Make your conditions clear and easy to understand
2. **Use parentheses** when combining multiple conditions to make the logic clearer
3. **Simplify nested conditions** when possible
4. **Avoid comparing directly to True/False/None**:
   - Use `if x:` instead of `if x == True:`
   - Use `if not x:` instead of `if x == False:`
   - Use `if x is None:` instead of `if x == None:`

```python
# Best practices
x = 5
items = [1, 2, 3]

# Bad:
if x == True:
    print("x is True")

if items != []:
    print("Items is not empty")

# Good: (True is implied here)
if x:
    print("x is truthy")
if items:
    print("Items is not empty")

# Using parentheses for complex conditions and precedence
age = 25
income = 50000
has_debt = False

if (age >= 18 and income >= 40000) or (age >= 25 and not has_debt):
    print("Loan application approved")
else:
    print("Loan application denied")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500" >
</codapi-snippet>

Conditional statements are fundamental to creating dynamic and responsive programs. In the next lesson, we'll explore loops, which allow you to repeat code execution. 

#### Footnotes

<dfn>a - A condition is an expression that evaluates to either `True` or `False`. </dfn>
<dfn>b - A statement is a line of code that performs an action. </dfn>