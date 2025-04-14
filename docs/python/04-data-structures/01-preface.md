---
sidebar_position: 1
---

# A Preface to Data Structures in Python

Before we get started, we should address a few important terms that will be used in this lesson. 

## Class, Objects, and Methods

A class is a blueprint for creating objects. An object is an instance of a class. Along with this, a method is a function that is defined within a class. Along with this, we also have attributes within classes. These are just variables that are defined within a class. You use methods a lot within python and especially when working with the built-in data structures.

Example:
```python
[1, 2, 3].append(4)
```

This is a really helpful bit of code. The `append` keyword is a method within the list class, and acts as a way to add an element to the end of the list.

We will discuss this further in []. \<- REPLACE WITH OFFICIAL LINK

## Mutable and Immutable Objects

In Python, there are two main types of objects: mutable and immutable. Mutable objects can be modified after creation, while immutable objects cannot. Some examples of immutable objects include strings, integers, and tuples. Whenever you modify an immutable object, a new object is created (new value). Mutable objects include lists and dictionaries, which can be changed in place without creating a new object.