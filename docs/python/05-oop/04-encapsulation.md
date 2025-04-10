---
sidebar_position: 5
---

# Encapsulation

In this lesson, we'll explore encapsulation, the fourth pillar of object-oriented programming. Encapsulation is all about bundling data and methods together while restricting direct access to some of the object's components.

## What is Encapsulation?

Encapsulation is the bundling of data (attributes) and the methods that work on that data into a single unit (a class), and restricting access to some of the object's components. It's like creating a protective capsule around your object's data.

Think of encapsulation like the dashboard of a car:
- You can interact with the car through well-defined interfaces (steering wheel, pedals, buttons)
- You don't need to access the internal engine components directly
- The complex internal workings are hidden from the driver

In programming terms, encapsulation means:
1. Bundling related data and functions into a class
2. Hiding the internal state of objects from the outside world
3. Allowing access to that state only through controlled methods

## Why Use Encapsulation?

Encapsulation offers several benefits:

1. **Data Protection**: Prevent direct access to data, protecting it from accidental corruption
2. **Abstraction**: Hide implementation details, exposing only what's necessary
3. **Modularity**: Group related data and functions together
4. **Flexibility**: Change implementation details without affecting the code that uses the class
5. **Validation**: Enforce validation rules when data is modified

## Access Control in Python

Unlike languages like Java or C++, Python doesn't have true "private" or "protected" access modifiers. However, it does have naming conventions to indicate that certain attributes or methods shouldn't be accessed directly:

1. **Public**: `attribute_name` - No restrictions on access
2. **Protected** (convention): `_attribute_name` - Single underscore suggests "don't access this directly"
3. **Private** (name mangling): `__attribute_name` - Double underscore triggers name mangling

Let's explore these access levels:

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner           # Public attribute
        self._balance = balance       # Protected attribute (by convention)
        self.__account_number = "12345678"  # Private attribute

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            return f"Deposited ${amount}. New balance: ${self._balance}"
        return "Deposit amount must be positive"

    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount
            return f"Withdrew ${amount}. New balance: ${self._balance}"
        return "Insufficient funds or invalid amount"
    
    def get_balance(self):
        return self._balance
    
    def _generate_statement(self):
        # Protected method (should not be called directly)
        return f"Account Statement for {self.owner}: Balance ${self._balance}"
    
    def __secret_method(self):
        # Private method (name mangling)
        return "This is a secret method!"

# Create a bank account
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

# But we can still access it with the mangled name
print(account._BankAccount__account_number)  # 12345678

# Call public methods
print(account.deposit(500))   # Deposited $500. New balance: $1500
print(account.withdraw(200))  # Withdrew $200. New balance: $1300
print(account.get_balance())  # 1300

# Call protected method (not recommended)
print(account._generate_statement())  # Account Statement for Alice: Balance $1300

# Try to call private method
try:
    print(account.__secret_method())  # This will fail
except AttributeError as e:
    print(f"Error: {e}")

# But we can still call it with the mangled name
print(account._BankAccount__secret_method())  # This is a secret method!
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

> Python's approach to access control is a bit different from other languages. It follows the principle of "we're all consenting adults here" which basically means that Python trusts developers to use good judgment rather than enforcing strict restrictions. This can be good for developers who have a deep understanding of OOP languages like Python or even Java, but it can be confusing and detrimental for beginners. The underscores are more like "please don't touch this" signs rather than locked doors. This is sometimes called "privacy by convention" rather than "privacy by enforcement."

## Name Mangling

In the example above, you saw that Python applies name mangling to attributes and methods that start with double underscores. This isn't true privacy, but it does make it harder to access these members accidentally.

When you define an attribute or method as `__name`, Python internally renames it to `_ClassName__name`. This helps prevent name collisions in inheritance hierarchies.

```python
class Parent:
    def __init__(self):
        self.__private_attr = "I'm private in Parent"
    
    def __private_method(self):
        return "Private method in Parent"
    
    def public_method(self):
        return self.__private_method()

class Child(Parent):
    def __init__(self):
        super().__init__()
        self.__private_attr = "I'm private in Child"
    
    def __private_method(self):
        return "Private method in Child"

# Create instances
parent = Parent()
child = Child()

# The private attributes don't collide due to name mangling
print(parent._Parent__private_attr)    # I'm private in Parent
print(child._Child__private_attr)      # I'm private in Child
print(child._Parent__private_attr)     # I'm private in Parent

# The parent's public method calls the parent's private method, not the child's
print(parent.public_method())  # Private method in Parent
print(child.public_method())   # Private method in Parent
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Properties: Getters and Setters

A better way to encapsulate attributes in Python is to use properties. Properties allow you to define methods that are accessed like attributes, providing a clean way to implement getters, setters, and deleters.

```python
class Temperature:
    def __init__(self, celsius=0):
        self._celsius = celsius
    
    # Getter method
    @property
    def celsius(self):
        return self._celsius
    
    # Setter method
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature cannot be below absolute zero")
        self._celsius = value
    
    # Another property that depends on celsius
    @property
    def fahrenheit(self):
        return self._celsius * 9/5 + 32
    
    # Setter for fahrenheit
    @fahrenheit.setter
    def fahrenheit(self, value):
        self.celsius = (value - 32) * 5/9

# Create a temperature object
temp = Temperature(25)  # 25°C

# Get the temperature in celsius (calls the getter)
print(f"Temperature in Celsius: {temp.celsius}°C")

# Get the temperature in fahrenheit (calls the getter)
print(f"Temperature in Fahrenheit: {temp.fahrenheit}°F")

# Set the temperature in celsius (calls the setter)
temp.celsius = 30
print(f"New temperature in Celsius: {temp.celsius}°C")
print(f"New temperature in Fahrenheit: {temp.fahrenheit}°F")

# Set the temperature in fahrenheit (calls the setter)
temp.fahrenheit = 68
print(f"Updated temperature in Celsius: {temp.celsius}°C")
print(f"Updated temperature in Fahrenheit: {temp.fahrenheit}°F")

# Try to set an invalid temperature
try:
    temp.celsius = -300  # Below absolute zero
except ValueError as e:
    print(f"Error: {e}")
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Properties provide several benefits:
1. You can change the implementation without changing the interface
2. You can add validation to setters
3. You can make attributes read-only by not defining a setter
4. You can compute derived values on the fly

## Implementing Full Encapsulation

Let's put everything together in a more complete example with a fully encapsulated `Person` class:

```python
class Person:
    def __init__(self, name, age=0, email=None):
        self._name = name
        self._age = 0  # initialize to 0 and use the setter
        self._email = None
        
        # Use setters for validation
        self.age = age
        self.email = email
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        if not value or not isinstance(value, str):
            raise ValueError("Name cannot be empty and must be a string")
        self._name = value
    
    @property
    def age(self):
        return self._age
    
    @age.setter
    def age(self, value):
        if not isinstance(value, int):
            raise TypeError("Age must be an integer")
        if value < 0 or value > 150:
            raise ValueError("Age must be between 0 and 150")
        self._age = value
    
    @property
    def email(self):
        return self._email
    
    @email.setter
    def email(self, value):
        if value is not None and '@' not in value:
            raise ValueError("Invalid email format")
        self._email = value
    
    @property
    def is_adult(self):
        """Computed property - not stored"""
        return self._age >= 18
    
    def greet(self):
        return f"Hello, my name is {self._name} and I'm {self._age} years old."
    
    def __str__(self):
        email_info = f", email: {self._email}" if self._email else ""
        return f"Person(name: {self._name}, age: {self._age}{email_info})"

# Create a person
try:
    # This would raise an error
    invalid_person = Person("", -5, "invalid_email")
except ValueError as e:
    print(f"Error: {e}")

# Create a valid person
person = Person("Alice", 30, "alice@example.com")
print(person)  # Person(name: Alice, age: 30, email: alice@example.com)
print(f"Is adult? {person.is_adult}")  # Is adult? True

# Try to set invalid values
try:
    person.age = 200  # Too high
except ValueError as e:
    print(f"Error setting age: {e}")

try:
    person.email = "no_at_symbol"  # Invalid email
except ValueError as e:
    print(f"Error setting email: {e}")

# Update with valid values
person.name = "Alicia"
person.age = 31
person.email = "alicia@example.com"
print(person)  # Person(name: Alicia, age: 31, email: alicia@example.com)

# Create a minor
minor = Person("Bob", 15)
print(minor)  # Person(name: Bob, age: 15)
print(f"Is adult? {minor.is_adult}")  # Is adult? False
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

## Information Hiding with Encapsulation

Encapsulation allows us to hide implementation details. Let's look at an example where the internal representation changes, but the public interface remains the same:

```python
class ShoppingCart:
    def __init__(self):
        # Implementation detail: using a list of dictionaries
        self.__items = []
    
    def add_item(self, name, price, quantity=1):
        """Add an item to the cart."""
        item = {"name": name, "price": price, "quantity": quantity}
        self.__items.append(item)
    
    def remove_item(self, name):
        """Remove an item from the cart."""
        for i, item in enumerate(self.__items):
            if item["name"] == name:
                del self.__items[i]
                return True
        return False
    
    @property
    def total(self):
        """Calculate the total price of all items."""
        return sum(item["price"] * item["quantity"] for item in self.__items)
    
    @property
    def item_count(self):
        """Count the total number of items (considering quantities)."""
        return sum(item["quantity"] for item in self.__items)
    
    def __str__(self):
        """Return a string representation of the cart."""
        if not self.__items:
            return "Empty shopping cart"
        
        item_strings = []
        for item in self.__items:
            item_strings.append(
                f"{item['name']} - ${item['price']:.2f} x {item['quantity']}"
            )
        
        return "\n".join([
            "Shopping Cart:",
            *item_strings,
            f"Total: ${self.total:.2f}"
        ])

# Let's use our shopping cart
cart = ShoppingCart()
cart.add_item("Apple", 0.99, 5)
cart.add_item("Banana", 0.59, 3)
cart.add_item("Book", 15.99, 1)

print(cart)  # Displays all items
print(f"Item count: {cart.item_count}")  # 9
print(f"Total: ${cart.total:.2f}")  # $22.71

# Remove an item
cart.remove_item("Banana")
print(cart)  # Bananas are gone

# The consumer of this class doesn't know or care about the internal representation
# We could switch from a list of dictionaries to a different implementation
# without changing the public interface
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

We could refactor this class to use a completely different internal representation (like a dictionary instead of a list) without changing how it's used externally.

## Balancing Encapsulation

Encapsulation is not about making everything private. It's about designing clean interfaces and hiding implementation details. When designing classes, consider:

1. What should be public (part of the interface)?
2. What should be protected (accessible to subclasses)?
3. What should be private (internal implementation details)?

```python
class LibraryItem:
    def __init__(self, title, author):
        # Public attributes - part of the interface
        self.title = title
        self.author = author
        
        # Protected attributes - accessible to subclasses
        self._checked_out = False
        self._due_date = None
        
        # Private attributes - internal implementation details
        self.__id = self.__generate_id()
    
    # Public methods - the interface
    def check_out(self, days=14):
        """Check out the item"""
        if self._checked_out:
            return f"{self.title} is already checked out"
        
        self._checked_out = True
        self._due_date = self.__calculate_due_date(days)
        return f"{self.title} has been checked out until {self._due_date}"
    
    def check_in(self):
        """Return the item to the library"""
        if not self._checked_out:
            return f"{self.title} is not checked out"
        
        self._checked_out = False
        self._due_date = None
        return f"{self.title} has been returned"
    
    def get_status(self):
        """Get the current status of the item"""
        status = "checked out" if self._checked_out else "available"
        due_info = f" until {self._due_date}" if self._due_date else ""
        return f"{self.title} is {status}{due_info}"
    
    # Protected methods - for subclasses
    def _get_loan_period(self):
        """Default loan period in days"""
        return 14
    
    # Private methods - implementation details
    def __generate_id(self):
        """Generate a unique ID (simplified)"""
        import random
        return random.randint(10000, 99999)
    
    def __calculate_due_date(self, days):
        """Calculate the due date"""
        from datetime import datetime, timedelta
        return (datetime.now() + timedelta(days=days)).strftime("%Y-%m-%d")

# Subclass with additional functionality
class Book(LibraryItem):
    def __init__(self, title, author, isbn):
        super().__init__(title, author)
        self.isbn = isbn
        self._renewable = True  # Additional protected attribute
    
    # Override a protected method
    def _get_loan_period(self):
        """Books have a 21-day loan period"""
        return 21
    
    # Add a new public method
    def renew(self, additional_days=None):
        """Renew the book loan"""
        if not self._checked_out:
            return f"{self.title} is not checked out"
        
        if not self._renewable:
            return f"{self.title} cannot be renewed"
        
        if additional_days is None:
            additional_days = self._get_loan_period()
        
        self._due_date = self.__calculate_due_date(additional_days)  # This will fail
        return f"{self.title} has been renewed until {self._due_date}"

# Create a library item
book = Book("Python Programming", "John Smith", "123-456-789")
print(book.get_status())  # Python Programming is available

# Check out the book
print(book.check_out())   # Python Programming has been checked out until...
print(book.get_status())  # Python Programming is checked out until...

# Try to access attributes
print(f"Title: {book.title}")        # Public - accessible
print(f"Checked out: {book._checked_out}")  # Protected - accessible (but shouldn't be used)

try:
    print(f"ID: {book.__id}")        # Private - not accessible
except AttributeError as e:
    print(f"Cannot access private ID: {e}")

# Try to renew the book
try:
    print(book.renew())
except AttributeError as e:
    print(f"Error: {e}")  # Private methods aren't inherited
```
<codapi-snippet sandbox="python" editor="python" init-delay="500">
</codapi-snippet>

Notice that trying to use the private `__calculate_due_date` method in the subclass fails because private methods aren't inherited. This is an important consideration when designing class hierarchies.

## Encapsulation Beyond Classes

The principles of encapsulation extend beyond individual classes. At a higher level, modules and packages in Python provide another layer of encapsulation.

You can control what gets exposed from a module by using the `__all__` list:

```python
# In a file named my_module.py

# Public - intended to be used
def public_function():
    return "This is a public function"

# Private - for internal use only
def _private_function():
    return "This is a private function"

# Only export the public function
__all__ = ['public_function']
```

When someone imports this module with `from my_module import *`, only the functions listed in `__all__` will be imported.

## Encapsulation Best Practices

Here are some best practices for effective encapsulation in Python:

1. **Make attributes private by default**, then expose them through properties if needed
2. **Choose clear, descriptive names** for public methods (they are your class's API)
3. **Use properties instead of get/set methods** for a more Pythonic interface
4. **Don't expose complex implementation details** through the public interface
5. **Document your public interface** clearly with docstrings
6. **Follow the principle of least privilege** - expose only what's necessary
7. **Make your class "self-validating"** - ensure it can't be put into an invalid state
8. **Use well-named small methods rather than large, complex ones**

## Summary

In this lesson, we've explored encapsulation, a fundamental principle in object-oriented programming:

- Encapsulation means bundling data and methods together into a single unit
- Python uses naming conventions (`_protected` and `__private`) rather than strict access control
- Properties (`@property`) provide a clean way to implement getters and setters
- Encapsulation helps protect data, hide implementation details, and maintain a clean interface
- Well-designed encapsulation makes classes easier to use, maintain, and extend

By properly encapsulating your classes, you create more robust, maintainable, and flexible code. The other pillars of OOP (inheritance, polymorphism) work best when combined with good encapsulation practices.