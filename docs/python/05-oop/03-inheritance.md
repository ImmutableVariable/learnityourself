---
sidebar_position: 3
---

# Inheritance

In this lesson, we'll explore one of the most powerful features of object-oriented programming: inheritance. Inheritance allows us to create new classes that are built upon existing classes, inheriting their attributes and behaviors while adding new ones.

## What is Inheritance?

Inheritance is a way of creating a new class that is a modified version of an existing class. The new class (called a subclass or child class) inherits attributes and methods from the existing class (called a superclass or parent class).

Think of it like a family tree:
- The parent class passes down traits to its children
- Each child can have its own unique traits in addition to the inherited ones
- Children can pass down both their unique traits and their inherited traits to their own children

## Why Use Inheritance?

Inheritance helps us:

1. **Reuse code**: Write code once in the parent class and reuse it in all child classes
2. **Create hierarchies**: Model real-world relationships between concepts
3. **Extend functionality**: Add new features to existing classes without modifying them
4. **Override behavior**: Change how inherited methods work when needed

## Basic Inheritance in Python

To create a class that inherits from another, simply include the parent class name in parentheses when defining the child class:

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

# Create a Dog
buddy = Dog("Buddy", "Golden Retriever")
print(buddy.info())  # Buddy is a Dog
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
        super().__init__(make, model, year)
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

Python supports multiple inheritance, allowing a class to inherit from more than one parent class:

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

# Single inheritance
class Fish(Swimmable):
    def make_sound(self):
        return "Blub blub"

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

While multiple inheritance is powerful, it can lead to complex issues like the "diamond problem" where a method or attribute might be inherited from multiple paths. Python resolves this using the Method Resolution Order (MRO).

## Method Resolution Order (MRO)

When a class inherits from multiple classes, Python uses a specific order to determine which implementation of a method to use. This is called the Method Resolution Order (MRO).

```python
class A:
    def method(self):
        return "Method from A"

class B(A):
    def method(self):
        return "Method from B"

class C(A):
    def method(self):
        return "Method from C"

class D(B, C):
    pass

d = D()
print(d.method())  # Method from B
print(D.mro())     # [<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>]
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Python uses the C3 linearization algorithm to determine the MRO. In the example above, the method from class `B` is used because `B` comes before `C` in the MRO.

> Multiple inheritance can be really powerful, but it can also be a bit confusing at times. I find it's best to use it sparingly and keep your inheritance hierarchies as simple as possible. If you find yourself with complex multiple inheritance, it might be a sign that composition (using objects as attributes) could be a better approach.

## Abstract Base Classes

Sometimes, you want to define a class that should never be instantiated directly, but only serve as a base for other classes. Python's `abc` module provides a way to create abstract base classes:

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        """Calculate the area of the shape"""
        pass
    
    @abstractmethod
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
    
    def area(self):
        return 3.14159 * self.radius ** 2
    
    def perimeter(self):
        return 2 * 3.14159 * self.radius

# Another concrete subclass
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

# This will raise TypeError because Shape is abstract
try:
    s = Shape()
except TypeError as e:
    print(f"Error: {e}")

# Concrete shapes can be instantiated
circle = Circle(5)
rectangle = Rectangle(4, 6)

print(circle.area())        # 78.53975
print(circle.describe())    # A shape with area 78.53975 and perimeter 31.4159

print(rectangle.area())     # 24
print(rectangle.perimeter()) # 20
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Abstract base classes are useful for defining interfaces that subclasses must implement. They help ensure that all subclasses provide certain methods.

## Creating Class Hierarchies

Let's create a more complex example of a class hierarchy for a simple game:

```python
class GameObject:
    def __init__(self, x, y, name="GameObject"):
        self.x = x
        self.y = y
        self.name = name
    
    def move(self, dx, dy):
        self.x += dx
        self.y += dy
        return f"{self.name} moved to ({self.x}, {self.y})"
    
    def __str__(self):
        return f"{self.name} at ({self.x}, {self.y})"

class Character(GameObject):
    def __init__(self, x, y, name, health=100):
        super().__init__(x, y, name)
        self.health = health
    
    def take_damage(self, amount):
        self.health -= amount
        if self.health <= 0:
            return f"{self.name} has been defeated!"
        return f"{self.name} took {amount} damage. Health: {self.health}"
    
    def __str__(self):
        return f"{super().__str__()} | Health: {self.health}"

class Player(Character):
    def __init__(self, x, y, name, health=100, score=0):
        super().__init__(x, y, name, health)
        self.score = score
        self.inventory = []
    
    def collect_item(self, item):
        self.inventory.append(item)
        self.score += item.value
        return f"{self.name} collected {item.name}. Score: {self.score}"
    
    def __str__(self):
        return f"{super().__str__()} | Score: {self.score} | Items: {len(self.inventory)}"

class Enemy(Character):
    def __init__(self, x, y, name, health=100, damage=10):
        super().__init__(x, y, name, health)
        self.damage = damage
    
    def attack(self, character):
        return f"{self.name} attacks {character.name}! {character.take_damage(self.damage)}"
    
    def __str__(self):
        return f"{super().__str__()} | Damage: {self.damage}"

class Item(GameObject):
    def __init__(self, x, y, name, value=1):
        super().__init__(x, y, name)
        self.value = value
    
    def __str__(self):
        return f"{super().__str__()} | Value: {self.value}"

# Create a simple game
player = Player(0, 0, "Hero")
goblin = Enemy(5, 5, "Goblin", health=50, damage=5)
troll = Enemy(10, 10, "Troll", health=150, damage=15)
coin = Item(3, 3, "Gold Coin", value=10)
gem = Item(7, 7, "Ruby", value=50)

print(player)  # Hero at (0, 0) | Health: 100 | Score: 0 | Items: 0
print(goblin)  # Goblin at (5, 5) | Health: 50 | Damage: 5
print(coin)    # Gold Coin at (3, 3) | Value: 10

# Move the player
print(player.move(3, 3))  # Hero moved to (3, 3)

# Collect items
print(player.collect_item(coin))  # Hero collected Gold Coin. Score: 10

# Combat
print(goblin.attack(player))  # Goblin attacks Hero! Hero took 5 damage. Health: 95

# Fight back
print(troll.attack(player))  # Troll attacks Hero! Hero took 15 damage. Health: 80
print(troll.attack(player))  # Troll attacks Hero! Hero took 15 damage. Health: 65

print(player)  # Hero at (3, 3) | Health: 65 | Score: 10 | Items: 1
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

This example demonstrates how inheritance allows us to create a rich class hierarchy with shared and specialized behaviors at each level.

## Mixins

A mixin is a class that's designed to provide additional functionality to other classes through multiple inheritance. Mixins don't stand on their own—they're meant to be "mixed in" with other classes.

```python
class LoggerMixin:
    def log(self, message):
        print(f"[LOG] {self.__class__.__name__}: {message}")

class SaveableMixin:
    def save(self, filename=None):
        if filename is None:
            filename = f"{self.__class__.__name__.lower()}.dat"
        self.log(f"Saving to {filename}")
        # Actual saving would go here
        return filename

class Product(LoggerMixin, SaveableMixin):
    def __init__(self, name, price):
        self.name = name
        self.price = price
    
    def discount(self, percent):
        self.price *= (1 - percent/100)
        self.log(f"Applied {percent}% discount, new price: ${self.price:.2f}")
        return self.price

# Let's use our mixed-in class
laptop = Product("Laptop", 1000)
laptop.log("Product created")  # [LOG] Product: Product created
laptop.discount(10)            # [LOG] Product: Applied 10% discount, new price: $900.00
filename = laptop.save()       # [LOG] Product: Saving to product.dat
print(f"Saved to {filename}")  # Saved to product.dat
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Mixins are a great way to add common functionality to many different classes without deep inheritance hierarchies.

## Composition vs. Inheritance

While inheritance is powerful, sometimes it's better to use composition (having objects as attributes) instead:

```python
# Inheritance approach
class Car(Vehicle):
    pass

# Composition approach
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
    def __init__(self, cylinders, horsepower):
        self.cylinders = cylinders
        self.horsepower = horsepower
        self.running = False
    
    def start(self):
        self.running = True
        return "Engine started"
    
    def stop(self):
        self.running = False
        return "Engine stopped"
    
    def __str__(self):
        status = "running" if self.running else "off"
        return f"{self.cylinders}-cylinder engine ({self.horsepower}hp), {status}"

class Wheel:
    def __init__(self, size=16):
        self.size = size
        self.pressure = 32  # PSI
    
    def inflate(self, amount):
        self.pressure += amount
        return f"Wheel inflated to {self.pressure} PSI"
    
    def __str__(self):
        return f"{self.size}-inch wheel at {self.pressure} PSI"

class Car:
    def __init__(self, make, model, cylinders=4, horsepower=180):
        self.make = make
        self.model = model
        self.engine = Engine(cylinders, horsepower)
        self.wheels = [Wheel() for _ in range(4)]
        self.odometer = 0
    
    def start(self):
        return self.engine.start()
    
    def stop(self):
        return self.engine.stop()
    
    def drive(self, distance):
        if not self.engine.running:
            return "Can't drive, engine is not running!"
        self.odometer += distance
        return f"Drove {distance} kilometers. Total: {self.odometer}km"
    
    def check_tire_pressure(self):
        pressures = [wheel.pressure for wheel in self.wheels]
        return f"Tire pressures: {pressures} PSI"
    
    def inflate_tires(self, amount):
        results = []
        for i, wheel in enumerate(self.wheels):
            results.append(f"Wheel {i+1}: {wheel.inflate(amount)}")
        return "\n".join(results)
    
    def __str__(self):
        return f"{self.make} {self.model}\nEngine: {self.engine}\nOdometer: {self.odometer}km"

# Create and use a car
my_car = Car("Toyota", "Corolla")
print(my_car)

print(my_car.check_tire_pressure())
print(my_car.inflate_tires(2))

print(my_car.start())
print(my_car.drive(100))
print(my_car.drive(150))
print(my_car.stop())

print(my_car)
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

In this lesson, we've explored inheritance, a fundamental concept in object-oriented programming:

- Inheritance allows classes to inherit attributes and methods from parent classes
- Child classes can override or extend parent methods
- Python supports multiple inheritance, with a well-defined method resolution order
- Abstract base classes define interfaces that subclasses must implement
- Mixins provide a way to add functionality to many classes
- Sometimes composition is preferable to inheritance

Inheritance is a powerful tool for code reuse and for modeling real-world relationships. In the next lesson, we'll dive deeper into polymorphism, which builds upon inheritance to create flexible and extensible code.