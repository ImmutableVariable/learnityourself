---
sidebar_position: 4
---

# Composition

Composition allows you to build complex objects by combining simpler objects. This is different from inheritance because inheritance represents a "is-a" relationship (a dog is an animal), while composition represents a "has-a" relationship (a car has an engine).

## Composition vs. Inheritance

| Composition | Inheritance |
|-------------|-------------|
| "Has-a" relationship | "Is-a" relationship |
| Car has an engine | Sports car is a car |
| Flexible at runtime | Fixed at compile time |
| Less coupling between classes | Tighter coupling between classes |
| Changes in component classes have minimal impact | Changes in parent class affect all child classes |

## Real World Analogies

Some real-world examples of composition:
- A car **has a** engine, transmission, and wheels
- A computer **has a** CPU, memory, and storage
- A playlist **has a** collection of songs

In each case, the main object is made up of other objects, each with their own specific responsibilities.

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

You can also use composition to create a more complex object. For example, a car might have an engine, battery, and radio.

```python
class Engine:
    def start(self):
        return "Engine started"

    def stop(self):
        return "Engine stopped"

class Battery:
    def __init__(self):
        self.level = 100

    def use(self, amount):
        if self.level >= amount:
            self.level -= amount
            return True
        return False

    def charge(self):
        self.level = 100
        return "Battery charged"

    def status(self):
        return f"Battery level: {self.level}%"

class Radio:
    def __init__(self):
        self.on = False

    def turn_on(self):
        self.on = True
        return "Radio is playing music"

    def turn_off(self):
        self.on = False
        return "Radio is off"

class Car:
    def __init__(self):
        # A car HAS an engine, battery, and radio
        self.engine = Engine()
        self.battery = Battery()
        self.radio = Radio()

    def start_car(self):
        if self.battery.use(10):
            print(self.engine.start())
            print(self.radio.turn_on())
        else:
            print("Battery too low to start the car")

    def stop_car(self):
        print(self.engine.stop())
        print(self.radio.turn_off())

    def check_battery(self):
        print(self.battery.status())

    def charge_battery(self):
        print(self.battery.charge())

my_car = Car()

my_car.start_car()
my_car.check_battery()
my_car.stop_car()
my_car.charge_battery()
my_car.check_battery()
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

In this example:

1. The `Car` class has an `Engine`, `Battery`, and `Radio` components
2. The operations `start_car()`, `stop_car()`, `check_battery()`, and `charge_battery()` are delegated to the components rather than the `Car` itself.


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

A common pattern with composition is delegation, where one component delegates the execution of a method to another component.

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

## Composition vs. Aggregation

There's a subtle distinction between composition and aggregation:

- **Composition**: The component cannot exist independently of the container ("strong" relationship)
- **Aggregation**: The component can exist independently of the container ("weak" relationship)

For example:
- A room is composed of walls (the walls can't exist without the room)
- A school aggregates students (students exist even if the school closes)

In practice, both are implemented similarly in Python, but the conceptual distinction can be helpful.

## Summary 

### When to Use Composition

Use composition when:
- You need objects made up of other objects
- You want to reuse code without the limitations of inheritance
- You need to change behavior at runtime
- The relationship is "has-a" rather than "is-a"

### Benefits of Composition

The key advantages of composition include:
1. **Flexibility**: Components can be swapped at runtime
2. **Reusability**: Components can be reused in different contexts
3. **Loose coupling**: Changes to one component have minimal impact on others
4. **Separation of concerns**: Each class has a clear, focused responsibility

### Best Practices

1. **Prefer composition over inheritance** when possible (it's more flexible)
2. **Use inheritance for "is-a" relationships** and composition for "has-a" relationships
3. **Keep components focused** on a single responsibility
4. **Consider interface requirements** when designing components
5. **Don't expose component implementation details** in the containing class