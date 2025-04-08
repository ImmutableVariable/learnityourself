---
sidebar_position: 2
---
# Operators and Expressions

Python provides a rich set of operators for performing calculations, comparing values, and building logical expressions.

## Arithmetic Operators

Arithmetic operators perform mathematical operations:

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition | `5 + 3` equals `8` |
| `-` | Subtraction | `5 - 3` equals `2` |
| `*` | Multiplication | `5 * 3` equals `15` |
| `/` | Division | `5 / 3` equals `1.6666...` |
| `//` | Floor Division | `5 // 3` equals `1` |
| `%` | Modulus (Remainder) | `5 % 3` equals `2` |
| `**` | Exponentiation | `5 ** 3` equals `125` |

```python
# Arithmetic in action
a = 15
b = 4

print(f"{a} + {b} = {a + b}")
print(f"{a} - {b} = {a - b}")
print(f"{a} * {b} = {a * b}")
print(f"{a} / {b} = {a / b}")
print(f"{a} // {b} = {a // b}")
print(f"{a} % {b} = {a % b}")
print(f"{a} ** {b} = {a ** b}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Assignment Operators

Assignment operators assign values to variables:

```python
x = 10       # Basic assignment
x += 5       # Same as: x = x + 5
x -= 3       # Same as: x = x - 3
x *= 2       # Same as: x = x * 2
x /= 4       # Same as: x = x / 4
x //= 2      # Same as: x = x // 2
x %= 3       # Same as: x = x % 3
x **= 2      # Same as: x = x ** 2
```

```python
# Assignment operators in action
x = 10
print(f"Initial value: x = {x}")

x += 5
print(f"After x += 5: x = {x}")

x -= 3
print(f"After x -= 3: x = {x}")

x *= 2
print(f"After x *= 2: x = {x}")

x /= 4
print(f"After x /= 4: x = {x}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Comparison Operators

Comparison operators compare values and return boolean results:

| Operator | Description | Example |
|----------|-------------|---------|
| `==` | Equal to | `5 == 5` returns `True` |
| `!=` | Not equal to | `5 != 3` returns `True` |
| `>` | Greater than | `5 > 3` returns `True` |
| `<` | Less than | `5 < 3` returns `False` |
| `>=` | Greater than or equal to | `5 >= 5` returns `True` |
| `<=` | Less than or equal to | `5 <= 3` returns `False` |

```python
# Comparison examples
a = 10
b = 5
c = 10

print(f"{a} == {b}: {a == b}")
print(f"{a} == {c}: {a == c}")
print(f"{a} != {b}: {a != b}")
print(f"{a} > {b}: {a > b}")
print(f"{a} < {b}: {a < b}")
print(f"{a} >= {c}: {a >= c}")
print(f"{a} <= {b}: {a <= b}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Logical Operators

Logical operators combine boolean expressions:

| Operator | Description | Example |
|----------|-------------|---------|
| `and` | True if both operands are true | `True and False` returns `False` |
| `or` | True if at least one operand is true | `True or False` returns `True` |
| `not` | Inverts the boolean value | `not True` returns `False` |

```python
# Logical operators
x = 10
y = 5

# Check if x is greater than 8 AND y is less than 8
print(f"x > 8 and y < 8: {x > 8 and y < 8}")

# Check if x is greater than 12 OR y is less than 8
print(f"x > 12 or y < 8: {x > 12 or y < 8}")

# Negate a boolean condition
print(f"not(x == y): {not(x == y)}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Identity and Membership Operators

Python also provides operators to check identity and membership:

| Operator | Description | Example |
|----------|-------------|---------|
| `is` | True if both variables are the same object | `x is y` |
| `is not` | True if variables are different objects | `x is not y` |
| `in` | True if a value is found in a sequence | `3 in [1, 2, 3]` |
| `not in` | True if a value is not found in a sequence | `4 not in [1, 2, 3]` |

```python
# Identity operators
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(f"a is b: {a is b}")  # False, different objects
print(f"a is c: {a is c}")  # True, same object

# Membership operators
fruits = ["apple", "banana", "cherry"]
print(f"'banana' in fruits: {'banana' in fruits}")
print(f"'orange' in fruits: {'orange' in fruits}")
print(f"'orange' not in fruits: {'orange' not in fruits}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

## Operator Precedence

Python follows standard mathematical operator precedence:

1. Parentheses `()`
2. Exponentiation `**`
3. Unary plus/minus `+x`, `-x`
4. Multiplication, division, floor division, modulus `*`, `/`, `//`, `%`
5. Addition and subtraction `+`, `-`
6. Comparison operators `==`, `!=`, `>`, `<`, `>=`, `<=`
7. Logical operators `not`, `and`, `or`

```python
# Operator precedence examples
result1 = 10 + 5 * 2
print(f"10 + 5 * 2 = {result1}")  # Multiplication happens first

result2 = (10 + 5) * 2
print(f"(10 + 5) * 2 = {result2}")  # Parentheses change precedence

result3 = 10 + 5 * 2 ** 2
print(f"10 + 5 * 2 ** 2 = {result3}")  # Exponentiation, then multiplication, then addition

# Complex expression
result4 = 10 + 20 * 2 > 50 and 3 ** 2 >= 2 * 4
print(f"10 + 20 * 2 > 50 and 3 ** 2 >= 2 * 4 = {result4}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

Understanding operators and their precedence is crucial for writing efficient and error-free code. In the next lesson, we'll learn about control flow structures that use these expressions to make decisions. 