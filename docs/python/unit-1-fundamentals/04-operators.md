---
sidebar_position: 4
---
# Operators

Operators are special symbols that perform operations on variables and values. Python provides a rich set of operators for performing calculations, comparing values, and building logical expressions.

## Arithmetic Operators

Arithmetic operators perform mathematical operations on numeric values (floats (`float`), integers (`int`), and complex numbers (`complex`)).

| Operator | Name | Description | Example | Works with |
|----------|------|-------------|---------| ---------|
| `+` | Addition | Adds two values | `5 + 3` equals `8` | `int`, `float`, `complex` |
| `-` | Subtraction | Subtracts right operand from left | `5 - 3` equals `2` | `int`, `float`, `complex` |
| `*` | Multiplication | Multiplies two values | `5 * 3` equals `15` | `int`, `float`, `complex` |
| `/` | Division | Divides left operand by right (result is a float) | `5 / 3` equals `1.6666...` | `int`, `float`, `complex` |
| `**` | Exponentiation | Raises left operand to power of right | `5 ** 3` equals `125` | `int`, `float`, `complex` |
| `//` | Floor Division | Divides and rounds down to nearest integer | `5 // 3` equals `1` | `int`, `float` |
| `%` | Modulus | Returns the remainder of division | `5 % 3` equals `2` | `int`, `float` |

```python
# Arithmetic operators in action
a = 15
b = 4

# This is a expression, we will continue to use this in the next lesson
x = a + b; # the value within the variable a is 15 and b is 4, so x = 19
print(f"{a} + {b} = {a + b}")     # 15 + 4 = 19
print(f"{a} - {b} = {a - b}")     # 15 - 4 = 11
print(f"{a} * {b} = {a * b}")     # 15 * 4 = 60
print(f"{a} / {b} = {a / b}")     # 15 / 4 = 3.75
print(f"{a} // {b} = {a // b}")   # 15 // 4 = 3
print(f"{a} % {b} = {a % b}")     # 15 % 4 = 3
print(f"{a} ** {b} = {a ** b}")   # 15 ** 4 = 50625
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

**Common Mistakes with Arithmetic Operators**:

```python
# Bad - confusing division (/) with floor division (//)
result = 5 / 2
print(result)  # 2.5 (not 2)

# Bad - forgetting that regular division always returns a float
result = 10 / 5
print(result)  # 2.0 (not 2)
print(type(result))  # <class 'float'>

# Bad - forgetting that % is remainder, not percentage
discount = 10 % 100  # Not a 10% discount, but the remainder of 10 ÷ 100
print(discount)  # 10 (not 0.1)

# Good - calculating percentage correctly
discount_percentage = 10
price = 100
discount_amount = price * (discount_percentage / 100)
print(discount_amount)  # 10.0
```

## Assignment Operators

Assignment operators assign values to variables.

| Operator | Description | Example |
|----------|-------------|---------|
| `=` | Assigns value | `x = 10` |
| `+=` | Add and assign | `x += 5` is same as `x = x + 5` |
| `-=` | Subtract and assign | `x -= 3` is same as `x = x - 3` |
| `*=` | Multiply and assign | `x *= 2` is same as `x = x * 2` |
| `/=` | Divide and assign | `x /= 4` is same as `x = x / 4` |
| `//=` | Floor divide and assign | `x //= 2` is same as `x = x // 2` |
| `%=` | Modulus and assign | `x %= 3` is same as `x = x % 3` |
| `**=` | Exponentiate and assign | `x **= 2` is same as `x = x ** 2` |

```python
# Assignment operators in action
x = 10
print(f"Initial value: x = {x}")  # 10

x += 5
print(f"After x += 5: x = {x}")   # 15

x -= 3
print(f"After x -= 3: x = {x}")   # 12

x *= 2
print(f"After x *= 2: x = {x}")   # 24

x /= 4
print(f"After x /= 4: x = {x}")   # 6.0 (note it's now a float)

x //= 2
print(f"After x //= 2: x = {x}")  # 3.0 (still a float)

x **= 2
print(f"After x **= 2: x = {x}")  # 9.0
```

**Common Mistakes with Assignment Operators**:

```python
# Bad - confusing = (assignment) with == (equality check)
x = 5
if x = 10:  # SyntaxError: invalid syntax
    print("x is 10")

# Good
if x == 10:
    print("x is 10")

# Bad - forgetting that /= results in a float
count = 10
count /= 2 # also results in a float
print(count)  # 5.0, not 5
print(type(count))  # <class 'float'>

# Bad - chaining assignments incorrectly
x = y += 5  # SyntaxError

# Good
y += 5
x = y
```

## String Operators

You can also manipulate strings with certain operators.

```python
# String operations
combined = "Hello" + " " + "World"  # Concatenation
repeated = "Ha" * 3                 # Repetition (HaHaHa)
length = len(name)                  # Length of name (5) - `len()` is a built-in function

# String indexing (accessing characters within a string
first_char = name[0]    # 'A' - All sequence types (strings, lists, tuples) start indexing at 0 (NOT 1)
second_char = name[1]   # 'l' - This is the second character, NOT the first
last_char = name[-1]    # 'e' - this will access the last character of the string

# String slicing
substring = name[1:3]   # 'li' (characters at index 1 and 2) - a slice is a range of characters
substring2 = name[:3]  # 'Ali' (from start to index 2)
substring3 = name[2:] # 'lice' (from index 2 to end)
substring4 = name[-3:] # 'ice' (last 3 characters)

# String methods (these are functions that can be called on strings)
uppercase = name.upper()          # 'ALICE'
lowercase = name.lower()          # 'alice'
replaced = name.replace('l', 'L') # 'ALice'
split_result = "a,b,c".split(',') # ['a', 'b', 'c']
joined = '-'.join(['a', 'b', 'c']) # 'a-b-c'
```

## Comparison Operators

Comparison operators compare values and return boolean results (`True` or `False`).

| Operator | Description | Example |
|----------|-------------|---------|
| `==` | Equal to | `5 == 5` returns `True` |
| `!=` | Not equal to | `5 != 3` returns `True` |
| `>` | Greater than | `5 > 3` returns `True` |
| `<` | Less than | `5 < 3` returns `False` |
| `>=` | Greater than or equal to | `5 >= 5` returns `True` |
| `<=` | Less than or equal to | `5 <= 3` returns `False` |

```python
# Comparison operators in action
a = 10
b = 5
c = 10

print(f"{a} == {b}: {a == b}")  # 10 == 5: False
print(f"{a} == {c}: {a == c}")  # 10 == 10: True
print(f"{a} != {b}: {a != b}")  # 10 != 5: True
print(f"{a} > {b}: {a > b}")    # 10 > 5: True
print(f"{a} < {b}: {a < b}")    # 10 < 5: False
print(f"{a} >= {c}: {a >= c}")  # 10 >= 10: True
print(f"{a} <= {b}: {a <= b}")  # 10 <= 5: False
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

**Comparing Different Types**:

Python allows comparison between different types in some cases, but this can lead to unexpected results.

```python
# Integer and float comparison (works as expected)
print(5 == 5.0)  # True

# String comparisons 
print("apple" < "banana")  # True
print("10" > "2")         # False - compares lexicographically (as strings), this means it compares character by character. ('1' < '2')

# Mixed type comparisons (generally should be avoided)
try:
    print(5 < "10")  # TypeError in Python 3
except TypeError as e:
    print(f"Error: {e}")
```

**Common Mistakes with Comparison Operators**:

```python
# Bad - using = instead of == for comparison
if x = 5:  # SyntaxError: invalid syntax
    print("x is 5")

# Good
if x == 5:
    print("x is 5")

# Bad - comparing floating point numbers directly
a = 0.1 + 0.2
b = 0.3
print(a == b)  # False (due to floating-point precision)

# Good - use math.isclose for float comparisons
import math
print(math.isclose(a, b))  # True

# Bad - confusing identity (is) with equality (==)
a = [1, 2, 3]
b = [1, 2, 3]
print(a is b)  # False (different objects)
print(a == b)  # True (same values)
```

## Logical Operators

Logical operators combine boolean expressions and return boolean results.

| Operator | Description | Example |
|----------|-------------|---------|
| `and` | True if both operands are true | `True and False` returns `False` |
| `or` | True if at least one operand is true | `True or False` returns `True` |
| `not` | Inverts the boolean value | `not True` returns `False` |

```python
# Logical operators in action
x = 10
y = 5

# Using 'and' operator - both conditions must be True
print(x > 8 and y < 8)  # True

# Using 'or' operator - at least one condition must be True
print(x > 12 or y < 8)  # True

# Using 'not' operator - inverts the boolean value
print(x == y)  # False
print(not(x == y))  # True
```



**Common Mistakes with Logical Operators**:

```python
# Bad - confusing & (bitwise AND) with and (logical AND)
result = True & False  # Works but not intended for boolean logic
print(result)  # False

# Good
result = True and False
print(result)  # False

# Bad - forgetting short-circuit evaluation
x = 0
result = x != 0 and 10 / x > 2  # Safe because of short-circuit
print(result)  # False

# Could be dangerous if reversed:
try:
    result = 10 / x > 2 and x != 0  # ZeroDivisionError
except ZeroDivisionError as e:
    print(f"Error: {e}")
```

## Identity Operators

Identity operators check if two variables refer to the same object in memory.

| Operator | Description | Example |
|----------|-------------|---------|
| `is` | True if both variables are the same object | `x is y` |
| `is not` | True if variables are different objects | `x is not y` |

```python
# Identity operators
a = [1, 2, 3]
b = [1, 2, 3]  # Same values but different object
c = a          # Same object

print(f"a is b: {a is b}")    # False - different objects in memory
print(f"a is c: {a is c}")    # True - same object in memory
print(f"a == b: {a == b}")    # True - same values

# Common use with None
x = None
print(f"x is None: {x is None}")  # True
```

**Common Mistakes with Identity Operators**:

```python
# Bad - using 'is' to compare values (should use ==)
a = 5
b = 5
print(a is b)  # Might be True due to implementation details but shouldn't rely on it

# Especially problematic with larger integers
a = 1000
b = 1000
print(a is b)  # Likely False due to how Python manages integers

# Good - use 'is' for identity, '==' for equality
a = 1000
b = 1000
print(a == b)  # True - comparing values

# Good usage - checking for None, True, False
x = None
if x is None:
    print("x is None")
```

## Membership Operators

Membership operators test if a value is found in a sequence (string, list, tuple, set, or dictionary).

| Operator | Description | Example |
|----------|-------------|---------|
| `in` | True if value is found in sequence | `3 in [1, 2, 3]` |
| `not in` | True if value is not found in sequence | `4 not in [1, 2, 3]` |

```python
# Membership operators
fruits = ["apple", "banana", "cherry"]

print(f"'banana' in fruits: {'banana' in fruits}")        # True
print(f"'orange' in fruits: {'orange' in fruits}")        # False
print(f"'orange' not in fruits: {'orange' not in fruits}")  # True

# With strings
text = "Hello, World!"
print(f"'Hello' in text: {'Hello' in text}")              # True
print(f"'Python' in text: {'Python' in text}")            # False

# With dictionaries (checks keys, not values)
user = {"name": "Alice", "age": 25}
print(f"'name' in user: {'name' in user}")                # True
print(f"'Alice' in user: {'Alice' in user}")              # False
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

**Common Mistakes with Membership Operators**:

```python
# Bad - forgetting that 'in' checks keys in dictionaries, not values
user = {"name": "Alice", "age": 25}
if "Alice" in user:  # This won't work as expected
    print("Alice is in the dictionary")

# Good - checking for values properly
if "Alice" in user.values():
    print("Alice is a value in the dictionary")

# Bad - inefficient searching in large lists
large_list = list(range(10000))
# Linear search - O(n) complexity
if 9999 in large_list:
    print("Found")

# Good - use sets for faster membership testing when appropriate
large_set = set(range(10000))
# Constant time - O(1) complexity
if 9999 in large_set:
    print("Found")
```

## Bitwise Operators

Bitwise operators perform operations on the binary representations of integers.

| Operator | Description | Example |
|----------|-------------|---------|
| `&` | Bitwise AND | `5 & 3` equals `1` |
| `\|` | Bitwise OR | `5 \| 3` equals `7` |
| `^` | Bitwise XOR | `5 ^ 3` equals `6` |
| `~` | Bitwise NOT | `~5` equals `-6` |
| `<<` | Left shift | `5 << 1` equals `10` |
| `>>` | Right shift | `5 >> 1` equals `2` |

```python
# Bitwise operators
a = 5  # 0101 in binary
b = 3  # 0011 in binary

print(f"{a} & {b} = {a & b}")    # 0101 & 0011 = 0001 = 1
print(f"{a} | {b} = {a | b}")    # 0101 | 0011 = 0111 = 7
print(f"{a} ^ {b} = {a ^ b}")    # 0101 ^ 0011 = 0110 = 6
print(f"~{a} = {~a}")            # ~0101 = 1010 (with sign) = -6
print(f"{a} << 1 = {a << 1}")    # 0101 << 1 = 1010 = 10
print(f"{a} >> 1 = {a >> 1}")    # 0101 >> 1 = 0010 = 2
```
<codapi-snippet sandbox="python" editor="python" init-delay="500" >
</codapi-snippet>

**Common Mistakes with Bitwise Operators**:

```python
# Bad - confusing bitwise operators with logical operators
result = True | False  # Works but not intended for boolean logic
print(result)  # 1 (not True)

# Good - use logical operators for boolean logic
result = True or False
print(result)  # True

# Bad - not understanding operator precedence
result = 5 & 3 + 2  # Incorrectly assumes 5 & (3 + 2)
print(result)       # Actually (5 & 3) + 2 = 1 + 2 = 3

# Good - use parentheses to clarify
result = 5 & (3 + 2)  # Clear intention
print(result)         # 5 & 5 = 5
```

## Operator Precedence

Python follows a specific order when evaluating expressions with multiple operators. Here's a simplified precedence order (from highest to lowest):

1. Parentheses `()`
2. Exponentiation `**`
3. Unary operators `+x`, `-x`, `~x`
4. Multiplication, division, floor division, modulus `*`, `/`, `//`, `%`
5. Addition and subtraction `+`, `-`
6. Bitwise shifts `<<`, `>>`
7. Bitwise AND `&`
8. Bitwise XOR `^`
9. Bitwise OR `|`
10. Comparison operators `==`, `!=`, `>`, `<`, `>=`, `<=`
11. Identity operators `is`, `is not`
12. Membership operators `in`, `not in`
13. Logical operators `not`, `and`, `or`

```python
# Operator precedence examples
result1 = 10 + 5 * 2
print(f"10 + 5 * 2 = {result1}")          # 20 (multiplication before addition)

result2 = (10 + 5) * 2
print(f"(10 + 5) * 2 = {result2}")        # 30 (parentheses override precedence)

result3 = 10 + 5 * 2 ** 2
print(f"10 + 5 * 2 ** 2 = {result3}")     # 30 (exponentiation, then multiplication, then addition)

# Complex expression
result4 = 10 + 20 * 2 > 50 and 3 ** 2 >= 2 * 4
print(f"10 + 20 * 2 > 50 and 3 ** 2 >= 2 * 4 = {result4}")  # False
```

**Best Practices for Operators**:

1. **Use parentheses** to make your code more readable and to ensure operations occur in the intended order
2. **Be careful with operator precedence** in complex expressions
3. **Use `is` and `is not` only for comparing with `None`, `True`, `False`, or checking object identity**
4. **Use `==` and `!=` for value equality**
5. **Be aware of floating-point precision** issues when comparing float values
6. **Use short-circuit evaluation** to your advantage in logical expressions

Operators are fundamental building blocks in Python programming. Understanding how they work and their precedence rules will help you write correct and efficient code. In the next lesson, we'll explore input and output operations in Python. 