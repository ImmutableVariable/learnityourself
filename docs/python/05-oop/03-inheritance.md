---
sidebar_position: 3
---

# Inheritance

Inheritance allows you to create new classes built upon existing ones. By using inheritance, you can reuse methods and attributes from a parent class, which makes your code more modular and easier to maintain. 

## Basic Inheritance Concept

Think of it like a family tree:

- The parent class passes down traits to its children (e.g., attributes and methods, also known as "inherited traits")
- Each child can have its own unique traits in addition to the inherited ones (e.g., attributes and methods, also known as "unique traits")
- Children can pass down both their unique traits and their inherited traits to their own children


## Creating a Child Class

To create a class that inherits from another, include the parent class name in parentheses when defining the child class:

```python
class ParentClass:
    # Parent class code here
    pass

class ChildClass(ParentClass):
    # Child class code here
    pass
```

Let's see a simple example:

```python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "Some generic animal sound"

class Dog(Animal):
    def speak(self):
        return "Woof!"

# Create an animal
generic_animal = Animal("Generic")
print(generic_animal.name)      # Generic
print(generic_animal.speak())   # Some generic animal sound

# Create a dog
dog = Dog("Buddy")
print(dog.name)                 # Buddy (inherited from Animal)
print(dog.speak())              # Woof! (overridden in Dog)
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

In this example, `Dog` inherits from `Animal`. Notice that:
1. We didn't have to define the `__init__` method in `Dog` - it's inherited from `Animal`
2. The `Dog` class has access to the `name` attribute defined in `Animal`
3. We've overridden the `speak` method in `Dog` to give it dog-specific behavior

## The `super()` Function

When you want to extend rather than completely replace a parent class's method, you can use the `super()` function. This is especially important in the `__init__` method to ensure the parent class is properly initialized:

```python
class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name, breed):
        # Call the parent's __init__ method
        super().__init__(name)
        # Add an attribute specific to Dog
        self.breed = breed
    
# Create a dog
dog = Dog("Buddy", "Golden Retriever")
print(dog.name)    # Buddy (initialized through Animal.__init__)
print(dog.breed)   # Golden Retriever (initialized in Dog.__init__)
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

The `super()` function calls the method from the parent class. In this case, `super().__init__(name)` calls the `__init__` method of the `Animal` class, which sets up the `name` attribute.

## A Complete Example

Let's see a more complete example that demonstrates inheritance, method overriding, and using `super()`:

```python
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
        
    def make_sound(self):
        return "Some generic animal sound"
    
    def info(self):
        return f"{self.name} is a {self.species}"

class Dog(Animal):
    def __init__(self, name, breed):
        # Initialize the parent class with name and species="Dog"
        super().__init__(name, species="Dog")
        # Add dog-specific attribute
        self.breed = breed
        
    # Override the make_sound method
    def make_sound(self):
        return "Woof!"
    
    # Add a new method
    def wag_tail(self):
        return f"{self.name} wags tail happily!"

# Create an Animal
generic_animal = Animal("Generic", "Unknown")
print(generic_animal.info())          # Generic is a Unknown
print(generic_animal.make_sound())    # Some generic animal sound

# Create a Dog
buddy = Dog("Buddy", "Golden Retriever")
print(buddy.info())                   # Buddy is a Dog
print(buddy.make_sound())             # Woof!
print(buddy.wag_tail())               # Buddy wags tail happily!
print(f"Buddy is a {buddy.breed}")    # Buddy is a Golden Retriever
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

## Extending Methods

Sometimes, you want to keep the functionality of a parent method and just add some additional behavior. You can do this by calling the parent method with `super()` and then adding your own code:

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"Hi, I'm {self.name} and I'm {self.age} years old."

class Student(Person):
    def __init__(self, name, age, school):
        super().__init__(name, age)
        self.school = school
    
    def introduce(self):
        # Call the parent's introduce method
        intro = super().introduce()
        # Add student-specific information
        return f"{intro} I attend {self.school}."

# Create a person
person = Person("John", 30)
print(person.introduce())  # Hi, I'm John and I'm 30 years old.

# Create a student
student = Student("Alice", 20, "Python University")
print(student.introduce())  # Hi, I'm Alice and I'm 20 years old. I attend Python University.
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

In this example, the `Student` class doesn't completely override the `introduce` method—it extends it by first calling the parent's method and then adding more information.

## Multiple Inheritance

Python allows a class to inherit from multiple parent classes. This is called multiple inheritance:

```python
class Flyable:
    def fly(self):
        return "Flying high!"

class Swimmable:
    def swim(self):
        return "Swimming gracefully"

# Inherit from both Flyable and Swimmable
class Duck(Flyable, Swimmable):
    def quack(self):
        return "Quack quack!"

# Create a duck
duck = Duck()
print(duck.fly())    # Flying high!
print(duck.swim())   # Swimming gracefully
print(duck.quack())  # Quack quack!
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

In this example, the `Duck` class inherits from both `Flyable` and `Swimmable`, so it can both fly and swim. Multiple inheritance can be powerful, but it should be used with care as it can make your code more complex.

## Checking Inheritance Relationships

Python provides built-in functions to check inheritance relationships:

```python
class Animal:
    pass

class Dog(Animal):
    pass

dog = Dog()

# Check if dog is an instance of Dog
print(isinstance(dog, Dog))      # True

# Check if dog is also an instance of Animal
print(isinstance(dog, Animal))   # True

# Check if Dog is a subclass of Animal
print(issubclass(Dog, Animal))   # True
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

## When to Use Inheritance

You should use inheritance when you have an "is-a" relationship between classes. For example:
- A dog *is an* animal
- A car *is a* vehicle
- A student *is a* person

If the relationship is more like "has-a", you might want to use composition (which we will cover in the next lesson) instead. For example:
- A car *has an* engine (not "a car is an engine")
- A person *has a* name (not "a person is a name")

## Summary

Inheritance is a powerful feature that allows you to:
- Reuse code by having child classes inherit attributes and methods from parent classes
- Create specialized versions of classes by overriding methods
- Extend existing functionality by calling the parent method and adding your own code
- Model real-world relationships between objects

The basic syntax for inheritance in Python is:

```python
class ParentClass:
    # Parent class code
    pass

class ChildClass(ParentClass):
    # Child class code
    pass
```

Remember to use `super()` when you need to call a method from the parent class, especially in the `__init__` method.