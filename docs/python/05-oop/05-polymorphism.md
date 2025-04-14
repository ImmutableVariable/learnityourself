---
sidebar_position: 5
---

# Polymorphism

Polymorphism is a core concept in object-oriented programming that allows objects of different classes to be treated as objects of a common type. The word "polymorphism" comes from Greek, meaning "many forms." In programming, it means that a single function or method can work with different types of objects and each object responds in its own way.

Think of polymorphism like a TV remote control. The same "power" button works on different TVs, where you can press the button and each TV turns on in its own way, but the action is the same.

## Why is Polymorphism Useful?

Polymorphism makes your code more:
- **Flexible**: You can write code that works with objects of different types
- **Reusable**: The same code can handle different object types without changes
- **Extensible**: You can add new classes that work with existing code
- **Organized**: You can group related objects and treat them similarly

## Method Overriding: A Simple Form of Polymorphism

The most common form of polymorphism in Python is through method overriding, which we briefly saw in the inheritance lesson. This happens when a child class provides its own implementation of a method that's already defined in its parent class.

```python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "Some generic animal sound"

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class Duck(Animal):
    def speak(self):
        return "Quack!"

# Create some animals
fido = Dog("Fido")
whiskers = Cat("Whiskers")
donald = Duck("Donald")

# Each animal speaks in its own way
print(f"{fido.name} says: {fido.speak()}")      # Fido says: Woof!
print(f"{whiskers.name} says: {whiskers.speak()}")  # Whiskers says: Meow!
print(f"{donald.name} says: {donald.speak()}")    # Donald says: Quack!
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

In this example, each animal class overrides the `speak()` method, providing its own implementation. Even though the method name is the same, the behavior is different for each animal.

## Polymorphism in Action: Using Different Objects in the Same Way

The real power of polymorphism becomes clear when we can treat different objects in a uniform way:

```python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "Some generic animal sound"
    
    def introduce(self):
        return f"I am {self.name}, and I say {self.speak()}"

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class Duck(Animal):
    def speak(self):
        return "Quack!"

# Create a list of different animals
animals = [
    Animal("Generic Animal"),
    Dog("Buddy"),
    Cat("Whiskers"),
    Duck("Donald")
]

# Polymorphism in action - same code works with different object types
for animal in animals:
    print(animal.introduce())
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

In this example, we treat all animals the same way by calling the `introduce()` method on each one. Even though they're different types, Python knows to call the right `speak()` method for each animal.

## Duck Typing: "If it walks like a duck and quacks like a duck..."

Python uses a concept called "duck typing" which is another form of polymorphism. The idea is that we don't care about the object's type; we only care that it has the methods we want to call.

The name comes from the saying: "If it walks like a duck and quacks like a duck, then it's a duck."

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

def make_it_quack_and_swim(thing):
    # We don't care what 'thing' is, as long as it can quack and swim
    print(thing.quack())
    print(thing.swim())

# We can use the same function for completely different object types
donald = Duck()
john = Person()

print("Duck:")
make_it_quack_and_swim(donald)

print("\nPerson:")
make_it_quack_and_swim(john)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Duck typing is different from inheritance-based polymorphism because the objects don't need to have a common parent class. They just need to implement the same methods.

## Practical Example: A Shape Hierarchy

Let's look at a practical example of polymorphism with various geometric shapes:

```python
import math

class Shape:
    def area(self):
        pass
    
    def perimeter(self):
        pass
    
    def describe(self):
        return f"A shape with area {self.area()} and perimeter {self.perimeter()}"

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return math.pi * self.radius ** 2
    
    def perimeter(self):
        return 2 * math.pi * self.radius
    
    def describe(self):
        return f"A circle with radius {self.radius}, area {self.area():.2f}, and circumference {self.perimeter():.2f}"

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)
    
    def describe(self):
        return f"A rectangle with width {self.width}, height {self.height}, area {self.area()}, and perimeter {self.perimeter()}"

class Square(Rectangle):
    def __init__(self, side):
        # We use the parent class's __init__ method
        super().__init__(side, side)
        self.side = side
    
    def describe(self):
        return f"A square with side {self.side}, area {self.area()}, and perimeter {self.perimeter()}"

# Create some shapes
shapes = [
    Circle(5),
    Rectangle(4, 6),
    Square(4)
]

# Polymorphism allows us to treat all shapes the same way
for shape in shapes:
    print(shape.describe())
    print(f"Area: {shape.area()}")
    print(f"Perimeter: {shape.perimeter()}")
    print()
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

In this example, each shape class implements the same methods (`area()`, `perimeter()`, and `describe()`), but the implementations are different for each shape. The `Square` class even inherits from `Rectangle` to reuse code.

## Operator Overloading: Polymorphism for Operators

In Python, you can also define how operators like `+`, `-`, `*`, etc., behave with your custom objects. This is called operator overloading and is another form of polymorphism.

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
    
    # Overload the * operator (scalar multiplication)
    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)
    
    # String representation
    def __str__(self):
        return f"Vector({self.x}, {self.y})"

# Create vectors
v1 = Vector(2, 3)
v2 = Vector(5, 7)

# Use overloaded operators
v3 = v1 + v2
v4 = v2 - v1
v5 = v1 * 3

print(f"v1 = {v1}")
print(f"v2 = {v2}")
print(f"v1 + v2 = {v3}")
print(f"v2 - v1 = {v4}")
print(f"v1 * 3 = {v5}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

In this example, we defined what happens when you use operators with our `Vector` class by implementing special methods like `__add__`, `__sub__`, and `__mul__`.

## Polymorphism Through Function Parameters

Python functions can exhibit polymorphism by working with different types of arguments:

```python
def add(a, b):
    return a + b

# This same function works with different types
print(add(5, 3))             # 8 (integers)
print(add(3.5, 2.1))         # 5.6 (floats)
print(add("Hello, ", "World"))  # "Hello, World" (strings)
print(add([1, 2], [3, 4]))    # [1, 2, 3, 4] (lists)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Here, the `add()` function works with different types because the `+` operator has different behaviors depending on the operand types. This is another form of polymorphism.

## Method Overloading in Python

Unlike some other languages, Python doesn't support method overloading in the traditional sense (defining multiple methods with the same name but different parameters). However, you can achieve similar functionality using default parameters, variable-length arguments, or type checking:

```python
class Calculator:
    def add(self, *args):
        """Add any number of arguments."""
        return sum(args)
    
    def multiply(self, x, y=1, z=1):
        """Multiply two or three numbers."""
        return x * y * z

calc = Calculator()

# Using variable arguments
print(calc.add(1))                  # 1
print(calc.add(1, 2))               # 3
print(calc.add(1, 2, 3, 4, 5))      # 15

# Using default parameters
print(calc.multiply(5))             # 5 * 1 * 1 = 5
print(calc.multiply(5, 3))          # 5 * 3 * 1 = 15
print(calc.multiply(5, 3, 2))       # 5 * 3 * 2 = 30
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## When to Use Polymorphism

Polymorphism is useful when:
- You have objects of different types that need to be treated similarly
- You want to create flexible code that can work with future class types
- You're designing a framework or library for others to extend
- You want to reduce repetitive code that does similar things with different object types

## Best Practices

1. **Use common interface methods**: Define common method names that classes should implement
2. **Design for extensibility**: Make it easy to add new classes that fit into your polymorphic code
3. **Don't check types explicitly**: Avoid `isinstance()` checks when possible; rely on duck typing
4. **Document expected behavior**: Make it clear what methods custom objects should implement
5. **Keep interfaces simple**: The fewer methods an object needs to implement, the easier it is to add new types

## Summary

Polymorphism is like having a universal remote that works with different TVs where you press the same button but each TV responds in its own way. In Python, this powerful concept lets you write more flexible and maintainable code by allowing different objects to respond to the same method calls in their own unique ways. Whether through method overriding (where child classes customize parent methods), duck typing (where unrelated classes implement the same methods), operator overloading (defining how operators work with your objects), or flexible function parameters, polymorphism helps you create code that can work with objects of various types without needing to know their specific type ahead of time. It's what makes Python code so adaptable and is one of the key features that makes object-oriented programming so powerful and flexible. If you're curious about the potential pitfalls or how polymorphism in Python compares to more strictly-typed languages, check out our advanced section on "Polymorphism Conitnued" where we explore edge cases, performance considerations, and design tradeoffs.

In the next lesson, we'll explore encapsulation, which focuses on protecting data and implementation details within a class.