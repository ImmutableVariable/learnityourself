---
sidebar_position: 6
---

# Encapsulation

Encapsulation allows you to bundle attributes and methods that work on that data into a single unit (a class), while also controlling access to that data.

Think of encapsulation like a capsule that keeps certain things inside protected. Just as a pill capsule keeps medicine safely contained, encapsulation keeps an object's data protected and accessible only through controlled channels.

## Why is Encapsulation Important?

Encapsulation helps us create more reliable and maintainable code by:

1. **Protecting data**: Preventing direct access to data helps avoid accidental changes
2. **Hiding complexity**: Users of a class don't need to know how it works internally  
3. **Reducing dependencies**: Other code depends only on the public interface, not internal details
4. **Supporting validation**: We can check data before allowing changes
5. **Making maintenance easier**: We can change implementation details without affecting other code

## Public, Protected, and Private Attributes

Unlike some other programming languages, Python doesn't have strict access modifiers (like `private` or `protected` keywords). Instead, it uses naming conventions to indicate how attributes and methods should be accessed:

| Type | Naming Convention | Meaning |
|------|------------------|---------|
| Public | `name` | Can be accessed from anywhere |
| Protected | `_name` | Should not be accessed directly (by convention) |
| Private | `__name` | Name mangling is applied, harder to access directly |

Let's see these in action:

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner               # Public attribute
        self._balance = balance           # Protected attribute
        self.__account_number = "12345"   # Private attribute
    
    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            return True
        return False
    
    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount
            return True
        return False
    
    def get_balance(self):
        return f"Balance: ${self._balance}"
    
    def _calculate_interest(self):
        # Protected method - should only be used internally
        return self._balance * 0.05
    
    def __generate_statement(self):
        # Private method - for internal use only
        return f"Statement for {self.owner}: Balance ${self._balance}"

# Create an account
account = BankAccount("Alice", 1000)

# Access public attribute
print(account.owner)  # Alice

# Access protected attribute (not recommended, but possible)
print(account._balance)  # 1000

# Try to access private attribute
try:
    print(account.__account_number)  # This will fail
except AttributeError as e:
    print(f"Error: {e}")

# Use public methods
account.deposit(500)
print(account.get_balance())  # Balance: $1500

# Access protected method (not recommended)
print(account._calculate_interest())  # 75.0

# Try to access private method
try:
    print(account.__generate_statement())  # This will fail
except AttributeError as e:
    print(f"Error: {e}")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

In Python, the conventions are:
- No underscore: Public attributes and methods (anyone can access)
- Single underscore (`_name`): Protected attributes and methods (should only be used within the class and its subclasses)
- Double underscore (`__name`): Private attributes and methods (Python applies name mangling to prevent accidental access)

## Name Mangling

When you use a double underscore prefix for attributes and methods, Python performs "name mangling" by renaming them to `_ClassName__name`. This makes it harder to accidentally access them from outside the class.

```python
class Person:
    def __init__(self, name, age):
        self._name = name        # Public
        self._age = age         # Protected
        self.__id = "12345"     # Private
    
    def __private_method(self):
        return "This is private"

person = Person("Alice", 30)

# Let's see what attributes are available
print(dir(person))

# Notice that __id becomes _Person__id and __private_method becomes _Person__private_method
# We can still access them if we know the mangled name
print(person._Person__id)
print(person._Person__private_method())
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

Name mangling helps prevent naming conflicts in inheritance hierarchies:

```python
class Parent:
    def __init__(self):
        self.__value = "parent value"
    
    def get_value(self):
        return self.__value

class Child(Parent):
    def __init__(self):
        super().__init__()
        self.__value = "child value"  # This is a different attribute!
    
    def get_child_value(self):
        return self.__value

child = Child()
print(child.get_value())         # parent value
print(child.get_child_value())   # child value

# These are actually different attributes
print(child._Parent__value)     # parent value
print(child._Child__value)      # child value
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

## Properties

The naming conventions above are helpful, but Python offers an even better mechanism for encapsulation: properties. Properties allow you to define methods that act like attributes, giving you control over access while providing a clean interface.

Properties are created using the `@property` decorator and optional setter/deleter decorators:

```python
class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age
    
    # Getter property for name
    @property
    def name(self):
        return self._name
    
    # Setter property for name
    @name.setter
    def name(self, value):
        if not value:
            raise ValueError("Name cannot be empty")
        self._name = value
    
    # Getter property for age
    @property
    def age(self):
        return self._age
    
    # Setter property for age with validation
    @age.setter
    def age(self, value):
        if value < 0:
            raise ValueError("Age cannot be negative")
        self._age = value

# Create a person
person = Person("Alice", 30)

# Access properties (they look like attributes)
print(person.name)  # Alice
print(person.age)   # 30

# Set properties (validation happens automatically). 
# The setter property is called when they are set
person.name = "Bob"
person.age = 25

print(person.name, person.age)  # Bob 25

# Try to set invalid values
try:
    person.name = ""  # This will raise an error
except ValueError as e:
    print(f"Error: {e}")

try:
    person.age = -5  # This will raise an error
except ValueError as e:
    print(f"Error: {e}")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

Properties give you several benefits:
1. You can validate data before setting it
2. You can compute values on the fly
3. You can change the implementation without affecting the interface
4. Your code is cleaner and more Pythonic

## Temperature Converter Example

Let's see a more complete example of encapsulation using properties:

```python
class Temperature:
    def __init__(self, celsius=0):
        self._celsius = celsius
    
    @property
    def celsius(self):
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:  # Absolute zero in Celsius
            raise ValueError("Temperature cannot be below absolute zero")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        # Calculate on the fly
        return (self._celsius * 9/5) + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        # Convert from Fahrenheit to Celsius
        celsius_value = (value - 32) * 5/9
        # Use the celsius setter for validation
        self.celsius = celsius_value
    
    @property
    def kelvin(self):
        return self._celsius + 273.15
    
    @kelvin.setter
    def kelvin(self, value):
        self.celsius = value - 273.15

# Create a temperature
temp = Temperature(25)  # 25°C

# Access different temperature scales
print(f"{temp.celsius}°C")      # 25.0°C
print(f"{temp.fahrenheit}°F")   # 77.0°F
print(f"{temp.kelvin}K")        # 298.15K

# Change temperature using different scales
temp.fahrenheit = 68  # Set to 68°F
print(f"{temp.celsius}°C")      # 20.0°C

temp.kelvin = 300     # Set to 300K
print(f"{temp.celsius}°C")      # 26.85°C

# Validation
try:
    temp.celsius = -300  # Below absolute zero
except ValueError as e:
    print(f"Error: {e}")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

## Read-Only Properties

Sometimes you want to expose a property for reading but not for writing. You can do this by providing only the getter method without a setter:

```python
import datetime

class Person:
    def __init__(self, name, birth_year):
        self._name = name
        self._birth_year = birth_year
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        if not value:
            raise ValueError("Name cannot be empty")
        self._name = value
    
    @property
    def birth_year(self):
        return self._birth_year
    
    # Read-only property (no setter)
    @property
    def age(self):
        current_year = datetime.datetime.now().year
        return current_year - self._birth_year

# Create a person
person = Person("Alice", 1990)

# Access properties
print(person.name)       # Alice
print(person.birth_year) # 1990
print(person.age)        # Current age based on birth year

# We can change name
person.name = "Bob"
print(person.name)  # Bob

# We can change birth_year
person.birth_year = 1985
print(person.birth_year)  # 1985
print(person.age)         # Updated age

# But we cannot set age directly
try:
    person.age = 25  # This will raise an error
except AttributeError as e:
    print(f"Error: {e}")
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

## Encapsulation and Composition

Encapsulation works particularly well with composition. You can hide the complexity of component objects while exposing a clean interface:

```python
class Engine:
    def __init__(self, horsepower):
        self._horsepower = horsepower
        self._running = False
        self._temperature = 0
    
    def start(self):
        if not self._running:
            self._running = True
            self._temperature = 50
            return "Engine started"
        return "Engine already running"
    
    def stop(self):
        if self._running:
            self._running = False
            self._temperature = 0
            return "Engine stopped"
        return "Engine already stopped"
    
    @property
    def status(self):
        state = "running" if self._running else "stopped"
        return f"Engine is {state} (temp: {self._temperature}°C)"

class Car:
    def __init__(self, make, model, horsepower):
        self.make = make
        self.model = model
        # The engine is encapsulated within the car
        self._engine = Engine(horsepower)
    
    def start(self):
        return f"{self.make} {self.model}: {self._engine.start()}"
    
    def stop(self):
        return f"{self.make} {self.model}: {self._engine.stop()}"
    
    @property
    def engine_status(self):
        return f"{self.make} {self.model}: {self._engine.status}"

# Create a car
car = Car("Toyota", "Corolla", 132)

# We use the car's interface, which delegates to the engine
print(car.start())          # Toyota Corolla: Engine started
print(car.engine_status)    # Toyota Corolla: Engine is running (temp: 50°C)
print(car.stop())           # Toyota Corolla: Engine stopped
print(car.engine_status)    # Toyota Corolla: Engine is stopped (temp: 0°C)

# We don't need to know how the engine works internally
```
<codapi-snippet sandbox="python" editor="basic" init-delay="500">
</codapi-snippet>

## Best Practices for Encapsulation in Python

1. **Use private attributes (`__name`)** for data that should never be accessed directly
2. **Use protected attributes (`_name`)** for data that might be accessed by subclasses
3. **Use properties** instead of direct attribute access for validation and computed values
4. **Provide clear public methods** as the interface to your class
5. **Don't expose implementation details** in your public interface
6. **Document your class's expected usage**
