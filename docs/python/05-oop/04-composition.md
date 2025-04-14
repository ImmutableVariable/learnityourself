---
sidebar_position: 4
---

# Composition

Composition is a fundamental concept in object-oriented programming where you build complex objects by combining simpler objects. Instead of inheriting behavior from a parent class, you include instances of other classes as attributes. This is often described as a "has-a" relationship, as opposed to inheritance's "is-a" relationship.

## What is Composition?

Think of composition like building with LEGO blocks. Rather than creating one big piece (inheritance), you create smaller, specialized pieces that fit together (composition).

Some real-world examples of composition:
- A car **has a** engine, transmission, and wheels
- A computer **has a** CPU, memory, and storage
- A playlist **has a** collection of songs

In each case, the main object is made up of other objects, each with their own specific responsibilities.

## Composition vs. Inheritance

Let's compare composition and inheritance:

| Composition | Inheritance |
|-------------|-------------|
| "Has-a" relationship | "Is-a" relationship |
| Car has an engine | Sports car is a car |
| Flexible at runtime | Fixed at compile time |
| Less coupling between classes | Tighter coupling between classes |
| Changes in component classes have minimal impact | Changes in parent class affect all child classes |

## Basic Composition in Python

Here's a simple example of composition:

```python
class Engine:
    def __init__(self, horsepower):
        self.horsepower = horsepower
    
    def start(self):
        return "Engine started!"
    
    def stop(self):
        return "Engine stopped."

class Car:
    def __init__(self, make, model, horsepower):
        self.make = make
        self.model = model
        # Composition: Car has an Engine
        self.engine = Engine(horsepower)
    
    def start_car(self):
        return f"{self.make} {self.model}: {self.engine.start()}"
    
    def stop_car(self):
        return f"{self.make} {self.model}: {self.engine.stop()}"

# Create a car
my_car = Car("Toyota", "Corolla", 132)

# Use the car's methods that delegate to the engine
print(my_car.start_car())  # Toyota Corolla: Engine started!
print(my_car.stop_car())   # Toyota Corolla: Engine stopped.

# We can also access the engine directly
print(f"Horsepower: {my_car.engine.horsepower}")  # Horsepower: 132
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

In this example, the `Car` class contains an instance of the `Engine` class. The car delegates engine-related operations to its engine component.

## A More Complete Example

Let's create a more complex example with multiple components:

```python
class Battery:
    def __init__(self, capacity):
        self.capacity = capacity
        self.power = capacity
    
    def use_power(self, amount):
        if amount <= self.power:
            self.power -= amount
            return True
        return False
    
    def charge(self):
        self.power = self.capacity
        return "Battery fully charged"
    
    def get_status(self):
        return f"Battery at {(self.power / self.capacity) * 100:.1f}%"

class Screen:
    def __init__(self, size):
        self.size = size
        self.is_on = False
    
    def turn_on(self):
        self.is_on = True
        return "Screen turned on"
    
    def turn_off(self):
        self.is_on = False
        return "Screen turned off"
    
    def display(self, message):
        if self.is_on:
            return f"Displaying on {self.size}\" screen: {message}"
        return "Screen is off, cannot display message"

class Smartphone:
    def __init__(self, brand, model, screen_size, battery_capacity):
        self.brand = brand
        self.model = model
        # Composition: Smartphone has a Screen and a Battery
        self.screen = Screen(screen_size)
        self.battery = Battery(battery_capacity)
        self.is_on = False
    
    def power_on(self):
        if self.battery.use_power(5):
            self.is_on = True
            result = f"{self.screen.turn_on()}\n{self.brand} {self.model} powered on"
            return result
        else:
            return "Not enough battery to power on"
    
    def power_off(self):
        self.is_on = False
        self.screen.turn_off()
        return f"{self.brand} {self.model} powered off"
    
    def make_call(self, number):
        if not self.is_on:
            return "Phone is off, cannot make call"
        
        if self.battery.use_power(10):
            return f"Calling {number}..."
        else:
            self.power_off()
            return "Phone died during call attempt"
    
    def charge_phone(self):
        result = self.battery.charge()
        return f"{self.brand} {self.model}: {result}"
    
    def check_battery(self):
        return f"{self.brand} {self.model}: {self.battery.get_status()}"

# Create a smartphone
my_phone = Smartphone("Apple", "iPhone 13", 6.1, 100)

# Use the smartphone with its components
print(my_phone.power_on())
print(my_phone.check_battery())
print(my_phone.make_call("555-1234"))
print(my_phone.check_battery())
print(my_phone.charge_phone())
print(my_phone.power_off())
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

In this example:
1. We have two component classes: `Battery` and `Screen`
2. The `Smartphone` class is composed of these components
3. The smartphone delegates specific operations to the appropriate component
4. Each component has its own state and behavior

## Advantages of Composition

1. **Flexibility**: Components can be swapped at runtime
2. **Reusability**: Components can be reused in different contexts
3. **Loose coupling**: Changes to one component have minimal impact on others
4. **Separation of concerns**: Each class has a clear, focused responsibility

## When to Use Composition

Use composition when:
- You need objects made up of other objects
- You want to reuse code without the limitations of inheritance
- You need to change behavior at runtime
- The relationship is "has-a" rather than "is-a"

## Composition with Multiple Components

Let's look at another example with multiple components of the same type:

```python
class Wheel:
    def __init__(self, position):
        self.position = position
        self.is_flat = False
    
    def inflate(self):
        self.is_flat = False
        return f"{self.position} wheel inflated"
    
    def get_flat(self):
        self.is_flat = True
        return f"{self.position} wheel got flat"
    
    def check(self):
        if self.is_flat:
            return f"{self.position} wheel is flat"
        return f"{self.position} wheel is good"

class Bicycle:
    def __init__(self):
        # Composition with multiple components of the same type
        self.wheels = [
            Wheel("Front"),
            Wheel("Rear")
        ]
    
    def check_wheels(self):
        return [wheel.check() for wheel in self.wheels]
    
    def inflate_all(self):
        return [wheel.inflate() for wheel in self.wheels]
    
    def can_ride(self):
        for wheel in self.wheels:
            if wheel.is_flat:
                return False
        return True

# Create a bicycle
bike = Bicycle()

# Check the wheels
print("Initial wheel check:")
for status in bike.check_wheels():
    print(status)

# Flat tire
print("\nOh no!")
print(bike.wheels[1].get_flat())

# Check again
print("\nAfter flat:")
for status in bike.check_wheels():
    print(status)
print(f"Can ride: {bike.can_ride()}")

# Fix the flat
print("\nFixing flat:")
print(bike.wheels[1].inflate())

# Check again
print("\nAfter fixing:")
for status in bike.check_wheels():
    print(status)
print(f"Can ride: {bike.can_ride()}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Here, the `Bicycle` class contains a list of `Wheel` objects, showing how composition can be used with multiple components of the same type.

## Delegation Pattern

A common pattern with composition is delegation, where the containing class forwards requests to its components:

```python
class Speaker:
    def play_sound(self, sound):
        return f"Playing: {sound}"

class MusicPlayer:
    def __init__(self):
        # Composition
        self.speaker = Speaker()
    
    def play_song(self, song):
        # Delegation: MusicPlayer delegates to Speaker
        return self.speaker.play_sound(f"♫ {song} ♫")

# Create a music player
player = MusicPlayer()

# The player delegates to its speaker component
print(player.play_song("Bohemian Rhapsody"))  # Playing: ♫ Bohemian Rhapsody ♫
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Composition vs. Aggregation

There's a subtle distinction between composition and aggregation:

- **Composition**: The component cannot exist independently of the container ("strong" relationship)
- **Aggregation**: The component can exist independently of the container ("weak" relationship)

For example:
- A room is composed of walls (the walls can't exist without the room)
- A school aggregates students (students exist even if the school closes)

In practice, both are implemented similarly in Python, but the conceptual distinction can be helpful.

## Combining Inheritance and Composition

In real-world applications, we often combine inheritance and composition:

```python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def eat(self):
        return f"{self.name} is eating"

class Tail:
    def __init__(self, length):
        self.length = length
    
    def wag(self):
        return "Tail is wagging"
    
    def describe(self):
        return f"A {self.length} inch tail"

# Using inheritance
class Dog(Animal):
    def __init__(self, name, tail_length):
        super().__init__(name)
        # Using composition
        self.tail = Tail(tail_length)
    
    def wag_tail(self):
        return f"{self.name}: {self.tail.wag()}"
    
    def describe(self):
        return f"{self.name} has {self.tail.describe()}"

# Create a dog with both inheritance and composition
fido = Dog("Fido", 12)

# Using inherited method
print(fido.eat())  # Fido is eating

# Using methods that delegate to the composed object
print(fido.wag_tail())  # Fido: Tail is wagging
print(fido.describe())  # Fido has A 12 inch tail
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

In this example, `Dog` inherits from `Animal` (is-a relationship) and is composed with `Tail` (has-a relationship).

## Best Practices

1. **Prefer composition over inheritance** when possible (it's more flexible)
2. **Use inheritance for "is-a" relationships** and composition for "has-a" relationships
3. **Keep components focused** on a single responsibility
4. **Consider interface requirements** when designing components
5. **Don't expose component implementation details** in the containing class

## Summary

Composition is a powerful technique in object-oriented programming where you build complex objects by combining simpler ones. In comparison to inheritance, inheritance represents an "is-a" relationship (a dog is an animal) while composition represents a "has-a" relationship (a car has an engine). Composition offers several advantages over inheritance including greater flexibility, better reusability, looser coupling between classes, and clearer separation of concerns. These benefits make composition a preferred approach in many design scenarios where you need to build complex objects with modular, reusable components.

In the next lesson, we'll explore polymorphism, another key concept in object-oriented programming. 