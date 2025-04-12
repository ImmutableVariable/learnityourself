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