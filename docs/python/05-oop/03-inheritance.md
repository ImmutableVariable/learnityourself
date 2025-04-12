---
sidebar_position: 3
---

# Inheritance

Inheritance is a way of creating a new class that is a modified version of an existing class. The new class (called a subclass or child class) inherits attributes and methods from the existing class (called a superclass or parent class).

Think of it like a family tree:
- The parent class passes down traits to its children (e.g., attributes and methods, also known as "inherited traits")
- Each child can have its own unique traits in addition to the inherited ones (e.g., attributes and methods, also known as "unique traits")
- Children can pass down both their unique traits and their inherited traits to their own children

## Why Use Inheritance?

Inheritance helps us:

1. **Reuse code**: Write code once in the parent class and reuse it in all child classes
2. **Create hierarchies**: Model real-world relationships between concepts
3. **Extend functionality**: Add new features to existing classes without modifying them
4. **Override behavior**: Change how inherited methods work when needed

## Basic Inheritance in Python

To create a class that inherits from another, include the parent class name in parentheses when defining the child class:

```python
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
        
    def make_sound(self):
        return "Some generic animal sound"
    
    def info(self):
        return f"{self.name} is a {self.species}"

# Dog inherits from Animal
class Dog(Animal):
    def __init__(self, name, breed):
        # Initialize the parent class
        super().__init__(name, species="Dog")
        # Add new attributes
        self.breed = breed
        
    # Override the make_sound method
    def make_sound(self):
        return "Woof!"
    
    # Add a new method
    def wag_tail(self):
        return f"{self.name} wags tail happily!"

# Create an Animal
generic_animal = Animal("Generic", "Unknown")
print(generic_animal.info())  # Generic is a Unknown
print(generic_animal.make_sound())  # Some generic animal sound

# Create a Dog, which inherits properties from Animal
buddy = Dog("Buddy", "Golden Retriever")
print(buddy.info())  # Buddy is a Dog, this was inherited from the parent! (notice it isnt in the child class)
print(buddy.make_sound())  # Woof!
print(buddy.wag_tail())  # Buddy wags tail happily!

# Confirm inheritance relationship
print(isinstance(buddy, Dog))  # True
print(isinstance(buddy, Animal))  # True
print(issubclass(Dog, Animal))  # True
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Let's break down what's happening here:

1. We defined a base class `Animal` with some attributes and methods.
2. We created a `Dog` class that inherits from `Animal` by putting `Animal` in parentheses.
3. In the `Dog` class's `__init__` method, we called `super().__init__()` to initialize the parent class.
4. We added a new attribute (`breed`) specific to `Dog`.
5. We overrode the `make_sound` method to provide dog-specific behavior.
6. We added a new method `wag_tail` that only `Dog` has.

The `super()` function is used to call methods from the parent class. It's especially important in the `__init__` method to ensure the parent class is properly initialized.

## Method Overriding

As we saw in the example above, a child class can provide a new implementation for a method defined in the parent class. This is called method overriding.

```python
class Animal:
    def speak(self):
        return "Animal makes a sound"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class Dog(Animal):
    def speak(self):
        return "Woof!"

animals = [Animal(), Cat(), Dog()]
for animal in animals:
    print(animal.speak())
# Animal makes a sound
# Meow!
# Woof!
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Method overriding is a key aspect of polymorphism, which we'll cover in a later lesson.

## Extending Methods

Sometimes, we don't want to completely replace a parent method but rather extend it. We can call the parent method using `super()` and then add our own functionality:

```python
class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer = 0
        
    def drive(self, distance):
        self.odometer += distance
        return f"Driving {distance} kilometers"
    
    def get_info(self):
        return f"{self.year} {self.make} {self.model}, {self.odometer}km"

class ElectricVehicle(Vehicle):
    def __init__(self, make, model, year, battery_capacity):
        super().__init__(make, model, year)  # Call the parent constructor
        self.battery_capacity = battery_capacity
        self.charge_level = 100  # percent
        
    def drive(self, distance):
        # Call the parent method
        result = super().drive(distance)
        
        # Add our own functionality
        self.charge_level -= (distance / self.battery_capacity) * 10
        self.charge_level = max(0, self.charge_level)  # Don't go below 0
        
        # Return combined result
        return f"{result}, battery at {self.charge_level:.1f}%"
    
    def get_info(self):
        # Extend the parent method
        basic_info = super().get_info()
        return f"{basic_info}, Battery: {self.battery_capacity}kWh ({self.charge_level:.1f}%)"

# Create a regular vehicle
car = Vehicle("Toyota", "Corolla", 2020)
print(car.drive(100))  # Driving 100 kilometers
print(car.get_info())  # 2020 Toyota Corolla, 100km

# Create an electric vehicle
tesla = ElectricVehicle("Tesla", "Model 3", 2022, 75)
print(tesla.drive(100))  # Driving 100 kilometers, battery at 86.7%
print(tesla.drive(200))  # Driving 200 kilometers, battery at 60.0%
print(tesla.get_info())  # 2020 Tesla Model 3, 300km, Battery: 75kWh (60.0%)
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Multiple Inheritance

You can also inherit from multiple classes at once.

```python
class Flyable:
    def fly(self):
        return "Flying high!"
    
    def land(self):
        return "Landing smoothly"

class Swimmable:
    def swim(self):
        return "Swimming gracefully"
    
    def dive(self):
        return "Diving deep"

# Single inheritance
class Bird(Flyable):
    def make_sound(self):
        return "Tweet tweet"

# Multiple inheritance
class Duck(Bird, Swimmable):
    def make_sound(self):
        return "Quack quack"

duck = Duck()
print(duck.make_sound())  # Quack quack
print(duck.fly())         # Flying high!
print(duck.swim())        # Swimming gracefully
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Multiple inheritance can be really powerful, but it can also be a bit confusing at times. I find it's best to use it sparingly and keep your inheritance hierarchies as simple as possible. If you find yourself with complex multiple inheritance, it might be a sign that composition (using objects as attributes) could be a better approach.

## Creating Class Hierarchies

Here is a simple example of a class hierarchy:

```python
class Animal:
    def __init__(self, name):
        self.name = name

class Mammal(Animal):
    def __init__(self, name, fur_color):
        # notice how name is passed to the parent
        super().__init__(name)
        self.fur_color = fur_color

class Dog(Mammal):
    def __init__(self, name, breed):
        # Name is also passed to the parent
        # Along with this, the fur color is set to "brown" by default
        super().__init__(name, "brown") 
        self.breed = breed

class Cat(Mammal):
    def __init__(self, name, color):
        super().__init__(name, color)
        self.color = color

dog = Dog("Fido", "Labrador")
cat = Cat("Whiskers", "White")

print(dog.name)  # Fido
print(dog.fur_color)  # brown

print(cat.name)  # Whiskers
print(cat.color)  # White
```
<codapi-snippet sandbox="python" editor="python" init-delay="500"> 
</codapi-snippet>

We start by defining a class `Animal`. All animals have a name (defined by `self.name` and the name parameter). Animal is a base class for all other classes in our hierarchy. Then, we define `Mammal` (a subclass of animal). Each mammal has a fur color. Then, we use `Mammal` as the parent class for `Dog` and `Cat`. Each dog has a breed, and each cat has a color.

## Abstract Base Classes

Sometimes, you want to define a base class that other classes **must** implement certain methods from. Python’s ABC module helps us do this.

```python
from abc import ABC, abstractmethod

# ABC -> Abstract Base Class
class Shape(ABC):
    @abstractmethod # A abstract method, this must be implemented by child classes
    def area(self):
        """Calculate the area of the shape"""
        pass
    
    @abstractmethod # A abstract method, this must be implemented by child classes
    def perimeter(self): 
        """Calculate the perimeter of the shape"""
        pass
    
    def describe(self):
        """Non-abstract method can have implementation"""
        return f"A shape with area {self.area()} and perimeter {self.perimeter()}"

# Concrete subclass must implement all abstract methods
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self): # This is a method that MUST be implemented because it is abstract
        return 3.14159 * self.radius ** 2
    
    def perimeter(self):
        return 2 * 3.14159 * self.radius

# Another concrete subclass
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self): # This method MUST be implemented
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

# This will raise TypeError because Shape is abstract
# For this to not Error, we need to implement the abstract methods
try:
    # you CANNOT instantiate an abstract class directly
    s = Shape()
except TypeError as e:
    print(f"Error: {e}")

# You CAN instantiate concrete subclasses
circle = Circle(5)
rectangle = Rectangle(4, 6)

print(circle.area())        # 78.53975
print(circle.describe())    # A shape with area 78.53975 and perimeter 31.4159

print(rectangle.area())     # 24
print(rectangle.perimeter()) # 20
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

### What's Happening Here?

We have a base class called `Shape` that is an abstract base class. This means it cannot be instantiated directly, but it can be used as a base for other classes. Then, we have two subclasses called `Circle` and `Rectangle` that inherit from `Shape` and implement the abstract methods `area()` and `perimeter()`. However, the describe() method is not abstract, so it has an automatic implementation (or you can override it).

## Mixins

A mixin is a class that's designed to provide additional functionality to other classes through multiple inheritance. Mixins don't stand on their own—they're meant to be "mixed in" with other classes.

```python
# A simple mixin that adds logging functionality
class LoggerMixin:
    def log(self, message):
        print(f"[LOG] {message}")

# A basic class that uses the mixin
class Animal(LoggerMixin):
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        # Notice that we are using the mixin's log method
        self.log(f"{self.name} says hello!")

# Using the mixin]
animal = Animal("Whiskers")
animal.speak()
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Mixins are often used to add functionality to existing classes without modifying them.

## Composition vs. Inheritance

While inheritance is powerful, sometimes it's better to use composition (having objects as attributes) instead:

```python
# Inheritance approach, a car IS a vehicle
class Car(Vehicle):
    pass

# Composition approach
# a car HAS an engine, battery, and wheels
class Car:
    def __init__(self, make, model, year):
        self.engine = Engine(cylinders=4)
        self.battery = Battery(voltage=12)
        self.wheels = [Wheel() for _ in range(4)]
```

A common guideline is "prefer composition over inheritance" when possible. Composition often makes code more flexible and easier to maintain.

Let's see a more complete example:

```python
# Composition example
class Engine:
    def __init__(self):
        self.running = False

    def start(self):
        self.running = True
        return "Engine started"

    def stop(self):
        self.running = False
        return "Engine stopped"

class Wheel:
    def __init__(self):
        self.pressure = 32  

    def inflate(self):
        self.pressure += 2
        return f"Inflated to {self.pressure} PSI"

class Car:
    def __init__(self):
        self.engine = Engine()
        self.wheels = [Wheel(), Wheel(), Wheel(), Wheel()]

    def start(self):
        return self.engine.start()

    def stop(self):
        return self.engine.stop()

    def inflate_tires(self):
        messages = []
        for i, wheel in enumerate(self.wheels):
            messages.append(f"Wheel {i+1}: {wheel.inflate()}")
        return "\n".join(messages)

# Usage
car = Car()

print(car.start())
print(car.stop())

print(car.inflate_tires())
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## When to Use Inheritance vs. Composition

Use **inheritance** when:
- You have an "is-a" relationship (a Dog is an Animal)
- The subclass is a specialized version of the superclass
- The subclass shares most behavior with the superclass

Use **composition** when:
- You have a "has-a" relationship (a Car has an Engine)
- The relationship between classes is more flexible
- You want to reuse components in different contexts

## Summary

Key points: 
- Inheritance allows a class to use methods and attributes from another class (a "parent" or "superclass").
- A child class can reuse methods and attributes from the parent class, add new attributes and methods, or override existing ones.
- You can use multiple inheritance to create a class that has attributes and methods from multiple parent classes.

```python
class Parent:
    def greet(self):
        return "Hello!"

class Child(Parent):
    def greet(self):
        return "Hi!"  # This overrides the parent method

parent = Parent()
child = Child()

print(parent.greet())  # Output: Hello!
print(child.greet())   # Output: Hi!
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>