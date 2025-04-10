---
sidebar_position: 2
---

# Classes and Objects

In this lesson, we'll explore the fundamental building blocks of object-oriented programming in Python: classes and objects.

## What Are Classes and Objects?

Think of a **class** as a blueprint or template. It defines what something should look like and how it should behave, but it isn't the thing itself.

An **object** is an instance of a class—an actual "thing" created from the blueprint. 

To use an analogy:
- A class is like a cookie cutter
- An object is like a cookie made with that cookie cutter

## Creating a Class in Python

Let's start by creating a simple class:

```python
class Dog:
    # Class attribute (shared by all instances)
    species = "Canis familiaris"
    
    # Initializer / Constructor method
    def __init__(self, name, age):
        # Instance attributes (unique to each instance)
        self.name = name
        self.age = age
    
    # Instance method
    def bark(self):
        return f"{self.name} says Woof!"
    
    # Another instance method
    def get_info(self):
        return f"{self.name} is {self.age} years old"
```

Let's break this down:

- `class Dog:` - This defines a new class called `Dog`.
- `species = "Canis familiaris"` - This is a class attribute, shared by all instances of the class.
- `__init__` - This is a special method called when a new object is created. It's like a constructor in other languages.
- `self` - This parameter refers to the instance being created. It's a convention in Python to name it `self`.
- `bark()` and `get_info()` - These are instance methods that define the behavior of Dog objects.

## Creating Objects (Instances)

Once we have a class, we can create objects from it:

```python
###### Same class as above
class Dog:
    # Class attribute (shared by all instances)
    species = "Canis familiaris"
    
    # Initializer / Constructor method
    def __init__(self, name, age):
        # Instance attributes (unique to each instance)
        self.name = name
        self.age = age
    
    # Instance method
    def bark(self):
        return f"{self.name} says Woof!"
    
    # Another instance method
    def get_info(self):
        return f"{self.name} is {self.age} years old"
######

# Creating instances of the Dog class
buddy = Dog("Buddy", 9)
miles = Dog("Miles", 4)

# Accessing attributes
print(buddy.name)        # Output: Buddy
print(miles.age)         # Output: 4
print(buddy.species)     # Output: Canis familiaris

# Calling methods
print(buddy.bark())      # Output: Buddy says Woof!
print(miles.get_info())  # Output: Miles is 4 years old
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## The `self` Parameter

You might wonder about this `self` parameter that appears in all the methods. In Python, instance methods always take the instance as the first parameter, conventionally named `self`. When you call a method on an object, Python automatically passes the object as the first argument.

```python
# These two lines are equivalent
buddy.bark()
Dog.bark(buddy)
```

> The `self` parameter is one of those things that trips up beginners. Just remember, when you define a method inside a class, you always include `self` as the **first** parameter, but when you call that method on an object, you **don't pass anything** for `self` because Python handles that automatically!

## Instance Attributes vs. Class Attributes

We've seen two types of attributes:

1. **Instance attributes**: Defined in `__init__` and attached to `self`. Each object has its own copy.
2. **Class attributes**: Defined directly in the class. Shared by all instances of the class.

```python
class Dog:
    # Class attribute
    species = "Canis familiaris"
    count = 0
    
    def __init__(self, name, age):
        # Instance attributes
        self.name = name
        self.age = age
        # We can access class attributes through self or the class name
        Dog.count += 1
    
    @classmethod
    def get_count(cls):
        return f"There are {cls.count} dogs"

# Create some dogs
dog1 = Dog("Buddy", 9)
dog2 = Dog("Charlie", 5)

# All dogs share the same species
print(dog1.species, dog2.species)  # Canis familiaris Canis familiaris

# But each has its own name and age
print(dog1.name, dog1.age)  # Buddy 9
print(dog2.name, dog2.age)  # Charlie 5

# We can access the count through the class
print(Dog.get_count())  # There are 2 dogs
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Methods in Python Classes

Python classes can have several types of methods:

### 1. Instance Methods

The most common type of method, which operates on an instance of the class.

```python
def bark(self):
    return f"{self.name} says Woof!"
```

### 2. Class Methods

Methods that operate on the class itself, not an instance. Defined using the `@classmethod` decorator and take `cls` (the class) as their first parameter.

```python
@classmethod
def get_count(cls):
    return f"There are {cls.count} dogs"
```

### 3. Static Methods

Methods that are related to the class but don't operate on instances or the class itself. Defined using the `@staticmethod` decorator.

```python
@staticmethod
def is_adult(age):
    return age >= 2
```

Let's put these all together:

```python
class Dog:
    species = "Canis familiaris"
    count = 0
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
        Dog.count += 1
    
    # Instance method
    def bark(self):
        return f"{self.name} says Woof!"
    
    # Class method
    @classmethod
    def get_count(cls):
        return f"There are {cls.count} dogs"
    
    # Static method
    @staticmethod
    def is_adult(age):
        return age >= 2

# Let's try these methods
dog1 = Dog("Buddy", 9)

# Instance method - needs an instance to call
print(dog1.bark())  # Buddy says Woof!

# Class method - can be called on the class
print(Dog.get_count())  # There are 1 dogs

# Static method - can be called on the class or an instance
print(Dog.is_adult(1))  # False
print(dog1.is_adult(dog1.age))  # True
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Adding More Functionality

Let's expand our `Dog` class with more functionality:

```python
class Dog:
    species = "Canis familiaris"
    
    def __init__(self, name, age, breed):
        self.name = name
        self.age = age
        self.breed = breed
        self.tricks = []  # Initialize an empty list
    
    def bark(self):
        if self.breed.lower() == "chihuahua":
            return f"{self.name} says Yip yip!"
        else:
            return f"{self.name} says Woof!"
    
    def learn_trick(self, trick):
        self.tricks.append(trick)
        return f"{self.name} has learned to {trick}!"
    
    def perform_trick(self, trick):
        if trick in self.tricks:
            return f"{self.name} performs {trick}!"
        else:
            return f"{self.name} doesn't know how to {trick}."
    
    def birthday(self):
        self.age += 1
        return f"{self.name} is now {self.age} years old!"

# Create a dog and interact with it
buddy = Dog("Buddy", 3, "Golden Retriever")
tiny = Dog("Tiny", 2, "Chihuahua")

print(buddy.bark())    # Buddy says Woof!
print(tiny.bark())     # Tiny says Yip yip!

print(buddy.learn_trick("sit"))  # Buddy has learned to sit!
print(buddy.learn_trick("roll over"))  # Buddy has learned to roll over!
print(buddy.perform_trick("sit"))  # Buddy performs sit!
print(buddy.perform_trick("play dead"))  # Buddy doesn't know how to play dead.

print(buddy.birthday())  # Buddy is now 4 years old!
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Adding Validation and Behavior

We can make our class smarter by adding validation to ensure the data makes sense:

```python
class Dog:
    species = "Canis familiaris"
    
    def __init__(self, name, age, breed):
        # Validate age
        if not isinstance(age, int) or age < 0:
            raise ValueError("Age must be a positive integer")
        
        self.name = name
        self.age = age
        self.breed = breed
        self._energy = 100  # Private-by-convention attribute
    
    def play(self, minutes):
        """Play with the dog, decreasing its energy"""
        if minutes < 0:
            raise ValueError("Minutes must be positive")
        
        energy_loss = minutes * 2
        if energy_loss > self._energy:
            self._energy = 0
            return f"{self.name} played until exhausted!"
        else:
            self._energy -= energy_loss
            return f"{self.name} played for {minutes} minutes!"
    
    def rest(self, minutes):
        """Let the dog rest, increasing its energy"""
        energy_gain = minutes
        self._energy = min(100, self._energy + energy_gain)
        return f"{self.name} rested and now has {self._energy}% energy."
    
    def get_energy(self):
        """Get the dog's current energy level"""
        return f"{self.name}'s energy level: {self._energy}%"

# Create a dog and interact with it
try:
    # This will fail because age is negative
    invalid_dog = Dog("Max", -3, "Labrador")
except ValueError as e:
    print(f"Error: {e}")

buddy = Dog("Buddy", 3, "Golden Retriever")
print(buddy.get_energy())  # Buddy's energy level: 100%

print(buddy.play(20))  # Buddy played for 20 minutes!
print(buddy.get_energy())  # Buddy's energy level: 60%

print(buddy.play(40))  # Buddy played until exhausted!
print(buddy.get_energy())  # Buddy's energy level: 0%

print(buddy.rest(50))  # Buddy rested and now has 50% energy.
print(buddy.get_energy())  # Buddy's energy level: 50%
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Notice we prefixed the `_energy` attribute with an underscore. This is a Python convention indicating that the attribute is intended to be private or for internal use only. Python doesn't actually prevent access to such attributes, but the underscore signals to other developers that they shouldn't access it directly.

## Multiple Objects Interacting

Now let's create a scenario where multiple objects interact with each other:

```python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
        self.toys = []
    
    def add_toy(self, toy):
        self.toys.append(toy)
        return f"{self.name} got a new {toy.name}!"
    
    def play_with_toy(self, toy_name):
        for toy in self.toys:
            if toy.name == toy_name:
                return toy.use(self.name)
        return f"{self.name} doesn't have a {toy_name}."

class Toy:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound
    
    def use(self, dog_name):
        return f"{dog_name} plays with the {self.name} and it makes a {self.sound} sound!"

# Create dogs and toys
buddy = Dog("Buddy", "Golden Retriever")
rex = Dog("Rex", "German Shepherd")

ball = Toy("ball", "bounce")
squeaky = Toy("squeaky toy", "squeak")
frisbee = Toy("frisbee", "whoosh")

# Give toys to dogs
print(buddy.add_toy(ball))  # Buddy got a new ball!
print(buddy.add_toy(squeaky))  # Buddy got a new squeaky toy!
print(rex.add_toy(frisbee))  # Rex got a new frisbee!

# Let dogs play with their toys
print(buddy.play_with_toy("ball"))  # Buddy plays with the ball and it makes a bounce sound!
print(buddy.play_with_toy("frisbee"))  # Buddy doesn't have a frisbee.
print(rex.play_with_toy("frisbee"))  # Rex plays with the frisbee and it makes a whoosh sound!
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## The `__str__` and `__repr__` Methods

When you print an object or use it in a string context, Python calls the object's `__str__` method. When you represent an object in a development context (like in a debugger or the REPL), Python calls `__repr__`. We can customize these methods:

```python
class Dog:
    def __init__(self, name, age, breed):
        self.name = name
        self.age = age
        self.breed = breed
    
    def __str__(self):
        """Return a human-friendly string representation"""
        return f"{self.name}, a {self.age}-year-old {self.breed}"
    
    def __repr__(self):
        """Return a developer-friendly string representation"""
        return f"Dog('{self.name}', {self.age}, '{self.breed}')"

buddy = Dog("Buddy", 9, "Golden Retriever")

# Using str() or print() calls __str__
print(str(buddy))  # Buddy, a 9-year-old Golden Retriever
print(buddy)       # Same as above

# Using repr() calls __repr__
print(repr(buddy))  # Dog('Buddy', 9, 'Golden Retriever')

# In a list, repr() is used
dogs = [buddy, Dog("Miles", 4, "Jack Russell")]
print(dogs)  # [Dog('Buddy', 9, 'Golden Retriever'), Dog('Miles', 4, 'Jack Russell')]
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

> The `__repr__` method is super handy when debugging. A good rule of thumb is to make `__repr__` return a string that, if evaluated, would recreate the object. Think of it as the "code representation" of your object!

## Summary

In this lesson, we've covered the basics of classes and objects in Python:

- Classes are blueprints for creating objects
- Objects are instances of classes with their own data
- Attributes store data inside objects
- Methods define behavior for objects
- Special methods like `__init__`, `__str__`, and `__repr__` provide core functionality

These concepts form the foundation of object-oriented programming in Python. In the next lesson, we'll explore inheritance, which allows us to create hierarchies of classes that share and extend functionality.