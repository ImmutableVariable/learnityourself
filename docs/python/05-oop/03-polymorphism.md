---
sidebar_position: 4
---

# Polymorphism

In this lesson, we'll explore polymorphism, one of the four pillars of object-oriented programming. Polymorphism allows objects of different classes to be treated as objects of a common superclass, with each object responding in its own way to the same method call.

## What is Polymorphism?

The word "polymorphism" comes from Greek, meaning "many forms." In programming, it refers to the ability of different objects to respond to the same method call in different ways.

For example, if you have several different animal classes, they might all have a `make_sound()` method, but each animal makes a different sound:
- A dog's `make_sound()` returns "Woof!"
- A cat's `make_sound()` returns "Meow!"
- A duck's `make_sound()` returns "Quack!"

The beauty is that you can call the same method on each animal object without knowing what specific animal type it is. This leads to more flexible and reusable code.

## Types of Polymorphism in Python

Python supports several types of polymorphism:

1. **Method Overriding**: Redefining a method in a subclass that was already defined in the parent class
2. **Method Overloading**: Having multiple methods with the same name but different parameters (though Python handles this differently than some languages)
3. **Duck Typing**: If it walks like a duck and quacks like a duck, then it's a duck (focusing on behavior rather than type)
4. **Operator Overloading**: Redefining how operators work with custom objects

Let's explore each of these in more detail.

## Method Overriding

Method overriding happens when a subclass provides a specific implementation for a method that is already defined in its parent class. We saw this in the previous lesson on inheritance, but let's look at another example:

```python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def make_sound(self):
        return "Some generic sound"
    
    def introduce(self):
        return f"I am {self.name}, and I go {self.make_sound()}"

class Dog(Animal):
    def make_sound(self):
        return "Woof!"

class Cat(Animal):
    def make_sound(self):
        return "Meow!"

class Duck(Animal):
    def make_sound(self):
        return "Quack!"

# Create some animals
animals = [
    Animal("Generic Animal"),
    Dog("Buddy"),
    Cat("Whiskers"),
    Duck("Donald")
]

# Polymorphism in action - same method call, different behavior
for animal in animals:
    print(animal.introduce())
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

In this example, each animal class overrides the `make_sound()` method, providing its own implementation. The `introduce()` method, which calls `make_sound()`, works polymorphically—it produces different results depending on the actual type of the object.

## Duck Typing

Python uses a concept called "duck typing," which focuses on what an object can do (its methods and properties) rather than what it is (its class). The name comes from the saying: "If it walks like a duck and quacks like a duck, then it's a duck."

With duck typing, we don't care about the object's type; we only care that it has the methods we want to call:

```python
class Duck:
    def swim(self):
        return "Duck swimming"
    
    def quack(self):
        return "Quack!"

class Person:
    def swim(self):
        return "Person swimming"
    
    def quack(self):
        return "I'm pretending to be a duck!"

class Robot:
    def swim(self):
        return "Robot sinking... ERROR!"
    
    def quack(self):
        return "Beep boop quack!"

def make_it_quack_and_swim(thing):
    # We don't care what 'thing' is, as long as it can quack and swim
    print(thing.quack())
    print(thing.swim())

# These are all different types, but they all have the required methods
duck = Duck()
person = Person()
robot = Robot()

# Duck typing allows us to treat all of these different objects the same way
print("Duck:")
make_it_quack_and_swim(duck)

print("\nPerson:")
make_it_quack_and_swim(person)

print("\nRobot:")
make_it_quack_and_swim(robot)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Duck typing is powerful because it allows for a more flexible design. Instead of requiring a specific class hierarchy, we simply require that objects have the methods we need.

> Duck typing is one of my favorite things about Python! It makes the code so much more flexible. Instead of saying "this function requires a Dog object," you can say "this function requires anything that can bark." This is why Python feels so natural to work with once you get used to it!

## Method Overloading and Multiple Dispatch

Method overloading refers to defining multiple methods with the same name but different parameters. Unlike languages like Java or C++, Python doesn't support traditional method overloading. 

Instead, Python methods can handle different parameter types and numbers through default arguments, variable-length arguments, and type checking:

```python
class Calculator:
    def add(self, x, y=0, z=0):
        """Add two or three numbers."""
        return x + y + z
    
    def multiply(self, *args):
        """Multiply any number of arguments."""
        if not args:
            return 0
        result = 1
        for arg in args:
            result *= arg
        return result
    
    def display_result(self, result, format_type=None):
        """Display the result in different formats."""
        if format_type == 'hex':
            return f"Result (hex): {hex(int(result))}"
        elif format_type == 'bin':
            return f"Result (binary): {bin(int(result))}"
        else:
            return f"Result: {result}"

calc = Calculator()

# Using the add method with different numbers of arguments
print(calc.add(5))          # 5 + 0 + 0 = 5
print(calc.add(5, 3))       # 5 + 3 + 0 = 8
print(calc.add(5, 3, 2))    # 5 + 3 + 2 = 10

# Using the multiply method with different numbers of arguments
print(calc.multiply())      # 0 (default when no args)
print(calc.multiply(4))     # 4
print(calc.multiply(2, 3))  # 2 * 3 = 6
print(calc.multiply(2, 3, 4)) # 2 * 3 * 4 = 24

# Using the display_result method with different format options
print(calc.display_result(42))           # Result: 42
print(calc.display_result(42, 'hex'))    # Result (hex): 0x2a
print(calc.display_result(42, 'bin'))    # Result (binary): 0b101010
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

If you need true method overloading in Python, you can use libraries like `multipledispatch` to achieve it:

```python
from multipledispatch import dispatch

class Overloader:
    @dispatch(int, int)
    def add(self, x, y):
        return f"Adding two integers: {x + y}"
    
    @dispatch(str, str)
    def add(self, x, y):
        return f"Concatenating two strings: {x + y}"
    
    @dispatch(list, list)
    def add(self, x, y):
        return f"Combining two lists: {x + y}"

o = Overloader()
print(o.add(1, 2))              # Adding two integers: 3
print(o.add("Hello, ", "world")) # Concatenating two strings: Hello, world
print(o.add([1, 2], [3, 4]))    # Combining two lists: [1, 2, 3, 4]
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Operator Overloading

Operator overloading allows you to define how operators like `+`, `-`, `*`, etc. work with your custom classes. This is done by implementing special methods, often called "dunder methods" (short for "double underscore").

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    # Overload the + operator
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    # Overload the - operator
    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)
    
    # Overload the * operator for scalar multiplication
    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)
    
    # Overload the == operator
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    
    # Provide a string representation
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    # Provide a representation for debugging
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

# Create some vectors
v1 = Vector(1, 2)
v2 = Vector(3, 4)

# Use overloaded operators
v3 = v1 + v2
print(f"{v1} + {v2} = {v3}")  # Vector(1, 2) + Vector(3, 4) = Vector(4, 6)

v4 = v2 - v1
print(f"{v2} - {v1} = {v4}")  # Vector(3, 4) - Vector(1, 2) = Vector(2, 2)

v5 = v1 * 3
print(f"{v1} * 3 = {v5}")     # Vector(1, 2) * 3 = Vector(3, 6)

# Test equality
print(f"{v1} == {v2}: {v1 == v2}")  # Vector(1, 2) == Vector(3, 4): False
print(f"{v4} == {v4}: {v4 == v4}")  # Vector(2, 2) == Vector(2, 2): True
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Here are some common operator overloading methods:

| Method | Operator | Description |
|--------|----------|-------------|
| `__add__` | + | Addition |
| `__sub__` | - | Subtraction |
| `__mul__` | * | Multiplication |
| `__truediv__` | / | Division |
| `__eq__` | == | Equality |
| `__lt__` | \< | Less than |
| `__gt__` | > | Greater than |
| `__len__` | len() | Length |
| `__getitem__` | [] | Indexing |
| `__call__` | () | Calling objects like functions |

## Polymorphism with Functions and Iterables

Python's built-in functions often work polymorphically with different types of objects. For example, the `len()` function works with strings, lists, dictionaries, and any other object that implements the `__len__` method:

```python
# len() works with different types
print(len("Hello"))           # 5 (string)
print(len([1, 2, 3, 4]))      # 4 (list)
print(len({"a": 1, "b": 2}))  # 2 (dictionary)

# The + operator works differently depending on the type
print("Hello" + " World")      # Hello World (string concatenation)
print([1, 2] + [3, 4])         # [1, 2, 3, 4] (list concatenation)

# The * operator is also polymorphic
print(3 * 4)           # 12 (integer multiplication)
print("Hello" * 3)     # HelloHelloHello (string repetition)
print([1, 2] * 3)      # [1, 2, 1, 2, 1, 2] (list repetition)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Similarly, iteration in Python is polymorphic. The `for` loop works with any object that is iterable (implements the `__iter__` method):

```python
# Iterating over different types of iterables
print("Iterating over a string:")
for char in "Hello":
    print(char)

print("\nIterating over a list:")
for item in [1, 2, 3]:
    print(item)

print("\nIterating over a dictionary:")
for key in {"a": 1, "b": 2}:
    print(key)

# We can even create our own iterable class
class CountDown:
    def __init__(self, start):
        self.start = start
    
    def __iter__(self):
        # Return an iterator
        return CountDownIterator(self.start)

class CountDownIterator:
    def __init__(self, start):
        self.current = start
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        self.current -= 1
        return self.current + 1

print("\nIterating over our custom iterable:")
for number in CountDown(5):
    print(number)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Practical Example: A Shape Hierarchy

Let's bring together what we've learned about polymorphism with a practical example of a shape hierarchy:

```python
import math

class Shape:
    def area(self):
        raise NotImplementedError("Subclasses must implement area()")
    
    def perimeter(self):
        raise NotImplementedError("Subclasses must implement perimeter()")
    
    def describe(self):
        return f"A shape with area {self.area():.2f} and perimeter {self.perimeter():.2f}"

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return math.pi * self.radius ** 2
    
    def perimeter(self):
        return 2 * math.pi * self.radius
    
    def __str__(self):
        return f"Circle with radius {self.radius}"

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)
    
    def __str__(self):
        return f"Rectangle with width {self.width} and height {self.height}"

class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)
        self.side = side
    
    def __str__(self):
        return f"Square with side {self.side}"

# Create some shapes
shapes = [
    Circle(5),
    Rectangle(4, 6),
    Square(3)
]

# Use polymorphism to process all shapes the same way
for shape in shapes:
    print(f"\n{shape}")
    print(f"Area: {shape.area():.2f}")
    print(f"Perimeter: {shape.perimeter():.2f}")
    print(shape.describe())

# Calculate the total area of all shapes
total_area = sum(shape.area() for shape in shapes)
print(f"\nTotal area of all shapes: {total_area:.2f}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

In this example, we have a base `Shape` class and several subclasses. Each subclass implements the `area()` and `perimeter()` methods differently, but we can treat all shapes uniformly through polymorphism.

## Abstract Base Classes and Interfaces

The `abc` module in Python provides facilities for defining abstract base classes, which are classes that cannot be instantiated directly but define an interface that subclasses must implement.

```python
from abc import ABC, abstractmethod

class PaymentMethod(ABC):
    @abstractmethod
    def process_payment(self, amount):
        """Process a payment for the given amount."""
        pass
    
    @abstractmethod
    def refund(self, amount):
        """Process a refund for the given amount."""
        pass

class CreditCard(PaymentMethod):
    def __init__(self, card_number, expiry, cvv):
        self.card_number = card_number
        self.expiry = expiry
        self.cvv = cvv
    
    def process_payment(self, amount):
        # In a real system, this would integrate with a payment gateway
        last_four = self.card_number[-4:]
        return f"Processing ${amount:.2f} payment with credit card ending in {last_four}"
    
    def refund(self, amount):
        last_four = self.card_number[-4:]
        return f"Refunding ${amount:.2f} to credit card ending in {last_four}"

class PayPal(PaymentMethod):
    def __init__(self, email):
        self.email = email
    
    def process_payment(self, amount):
        return f"Processing ${amount:.2f} payment with PayPal account {self.email}"
    
    def refund(self, amount):
        return f"Refunding ${amount:.2f} to PayPal account {self.email}"

class BankTransfer(PaymentMethod):
    def __init__(self, account_number, routing_number):
        self.account_number = account_number
        self.routing_number = routing_number
    
    def process_payment(self, amount):
        return f"Processing ${amount:.2f} payment with bank transfer to account {self.account_number}"
    
    def refund(self, amount):
        return f"Refunding ${amount:.2f} to bank account {self.account_number}"

# Process a payment without knowing the specific payment method
def checkout(cart_total, payment_method):
    print(f"Checking out with total: ${cart_total:.2f}")
    confirmation = payment_method.process_payment(cart_total)
    print(confirmation)
    return confirmation

# Create some payment methods
credit_card = CreditCard("4111111111111111", "12/25", "123")
paypal = PayPal("customer@example.com")
bank = BankTransfer("12345678", "87654321")

# Process payments with different methods
checkout(99.99, credit_card)
checkout(49.99, paypal)
checkout(149.99, bank)

# Process a refund
print(paypal.refund(25.00))
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

In this example, the `PaymentMethod` abstract base class defines an interface that all payment methods must implement. The `checkout` function can work with any payment method without knowing the specific type, demonstrating polymorphism.

## Advantages of Polymorphism

Polymorphism offers several advantages:

1. **Code reuse**: Write generic code that works with objects of multiple types.
2. **Flexibility**: Add new classes without changing existing code.
3. **Extensibility**: Extend the system's functionality by adding new classes.
4. **Simplified code**: Treat different objects uniformly, simplifying code structure.
5. **Decoupling**: Reduce dependencies between different parts of your code.

## Summary

In this lesson, we've explored polymorphism, a powerful concept in object-oriented programming:

- Polymorphism allows objects of different classes to be treated through a common interface
- Python supports polymorphism through method overriding, duck typing, and operator overloading
- Duck typing focuses on what an object can do, not what it is
- Operators like `+` and `-` can be overloaded to work with custom objects
- Abstract base classes can define interfaces that subclasses must implement
- Polymorphism makes code more flexible, extensible, and maintainable

Polymorphism is what gives object-oriented programming much of its power and flexibility. By treating different objects uniformly through common interfaces, we can write code that is more generic, reusable, and easier to maintain.

In the next lesson, we'll explore encapsulation, which deals with controlling access to the internal state of objects.