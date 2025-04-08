---
sidebar_position: 1
---
# Conditional Statements

Conditional statements allow your program to make decisions based on conditions. Python uses `if`, `elif` (else if), and `else` statements to control the flow of execution.

## Basic if Statement

The `if` statement evaluates a condition and executes a block of code if the condition is `True`:

```python
age = 18

if age >= 18:
    print("You are an adult")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## if-else Statement

The `if-else` statement provides an alternative block of code to execute when the condition is `False`:

```python
age = 16

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>


## if-elif-else Statement

The `if-elif-else` statement allows you to check multiple conditions:

```python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade is {grade}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

```python
# if-elif-else statement
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade is {grade}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Nested if Statements

You can nest conditional statements inside other conditional statements:

```python
age = 25
income = 50000

if age >= 18:
    if income >= 40000:
        print("You are eligible for a premium credit card")
    else:
        print("You are eligible for a standard credit card")
else:
    print("You are not eligible for a credit card")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

```python
# Nested if statements
age = 25
income = 50000

if age >= 18:
    if income >= 40000:
        print("You are eligible for a premium credit card")
    else:
        print("You are eligible for a standard credit card")
else:
    print("You are not eligible for a credit card")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>
*Note: Nested `if` statements have a specific use, but using them improperly can make your code unreadable, confusing and hard to debug.*

## Conditional Expressions (Ternary Operator)

Python has a compact way to write simple if-else statements in a single line:

```python
# Syntax: value_if_true if condition else value_if_false
age = 20
status = "adult" if age >= 18 else "minor"
print(status)  # "adult"
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

```python
# Conditional expressions (ternary operator)
age = 20
status = "adult" if age >= 18 else "minor"
print(f"Status: {status}")

# Another example
x = 15
result = "Even" if x % 2 == 0 else "Odd"
print(f"{x} is {result}")

# Can be used in assignment, return values, etc.
temperature = 28
message = "It's hot" if temperature > 25 else "It's cool"
print(message)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Truthy and Falsy Values

In Python, values can be evaluated as either "truthy" or "falsy" in a boolean context:

### Falsy Values
- `False`
- `None`
- Zero (`0`, `0.0`, `0j`)
- Empty sequences (`''`, `[]`, `()`, `{}`, `set()`)

### Truthy Values
- Everything else is considered "truthy"

```python
# Truthy and falsy values
print("Falsy values:")
print(f"bool(False): {bool(False)}")
print(f"bool(None): {bool(None)}")
print(f"bool(0): {bool(0)}")
print(f"bool(''): {bool('')}")
print(f"bool([]): {bool([])}")
print(f"bool({}): {bool({})}")

print("\nTruthy values:")
print(f"bool(True): {bool(True)}")
print(f"bool(1): {bool(1)}")
print(f"bool(-1): {bool(-1)}")
print(f"bool('hello'): {bool('hello')}")
print(f"bool([0]): {bool([0])}")
print(f"bool({'key': 'value'}): {bool({'key': 'value'})}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Logical Operators in Conditionals

You can combine multiple conditions using the logical operators `and`, `or`, and `not`:

```python
age = 25
has_license = True

if age >= 18 and has_license:
    print("You can drive")
else:
    print("You cannot drive")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

```python
# Logical operators in conditionals
age = 25
has_license = True

# Using 'and' operator - both conditions must be True
if age >= 18 and has_license:
    print("You can drive")
else:
    print("You cannot drive")

# Using 'or' operator - at least one condition must be True
has_credit_card = True
has_cash = False

if has_credit_card or has_cash:
    print("You can make a purchase")
else:
    print("You cannot make a purchase")

# Using 'not' operator - inverts the boolean value
is_weekend = False
if not is_weekend:
    print("Time to work")
else:
    print("Time to relax")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Short-Circuit Evaluation

Python uses short-circuit evaluation for logical operators:
- With `and`, if the first condition is `False`, the second condition is not evaluated
- With `or`, if the first condition is `True`, the second condition is not evaluated

```python
# Short-circuit evaluation
def check_a():
    print("Evaluating A")
    return False

def check_b():
    print("Evaluating B")
    return True

# Using 'and' - since check_a() returns False,
# check_b() won't be evaluated
print("Testing 'and':")
result = check_a() and check_b()
print(f"Result: {result}")

print("\nTesting 'or':")
# Using 'or' with reversed order
# Since check_b() returns True, check_a() won't be evaluated
result = check_b() or check_a()
print(f"Result: {result}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Membership and Identity Tests

You can use `in` and `not in` operators to test for membership, and `is` and `is not` to test for identity:

```python
# Membership tests with 'in' and 'not in'
fruits = ["apple", "banana", "cherry"]

if "banana" in fruits:
    print("Yes, banana is in the list")

if "orange" not in fruits:
    print("No, orange is not in the list")

# Identity tests with 'is' and 'is not'
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(f"a == b: {a == b}")  # True - same values
print(f"a is b: {a is b}")  # False - different objects
print(f"a is c: {a is c}")  # True - same object

if a is c:
    print("a and c are the same object")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
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
# (If there is something in the list, it obviously is not empty)
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
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

Conditional statements are fundamental to creating dynamic and responsive programs. In the next lesson, we'll explore loops, which allow you to repeat code execution. 