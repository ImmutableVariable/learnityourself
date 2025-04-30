---
sidebar_position: 10
---

# External Libraries

External libraries (also called packages or modules) are collections of Python code that provide specialized functionality. These libraries are typically created to solve specific problems and can save you significant time and effort. For example:

```python
# Without a library, calculating statistics would require many lines of code
data = [12, 15, 23, 14, 19, 17, 21, 14]

# Calculating mean manually
total = 0
for value in data:
    total += value
mean = total / len(data)
print(f"Mean: {mean}")

# With the statistics library, it's just one line, which is much easier to understand and maintain
import statistics
print(f"Mean: {statistics.mean(data)}")
```

## Finding Libraries

Python libraries can be found through several channels:

1. **The Python Package Index (PyPI)** - The official repository for Python packages (https://pypi.org/)
2. **GitHub** - Many Python libraries are hosted on GitHub and provide varying levels of ease to install and use
3. **Community recommendations** - Forums, blogs, and discussion boards
4. **Documentation references** - Other libraries' documentation may reference useful companion libraries

When searching for a library, consider a few things:
- How active is the development?
- How many users does it have?
- Is it well documented?
- Does it have recent updates?

## Evaluating Libraries

Before using a library in your project, you should evaluate it for quality and security:

1. **Popularity**: Libraries with more users generally have fewer bugs and better support, which is better for you as a beginner developer
2. **Documentation**: Good documentation makes a library easier to use. Some libraries that are more complex dont necessarily have good documentation, so you should be careful with these and make sure that the community support is good.
3. **Maintenance**: Check when the library was last updated and how frequently issues are addressed. Libraries that were last updated 2 years ago or more might not be maintained anymore and might have inadvertant security issues. 
4. **Security**: Consider the security implications of the code you're including into your project. While it is rare to see explicitly malicious code in libraries, it is more common to see libraries that are poorly written and have security issues due to a lack of testing and careful consideration of edge cases.

## Installing Libraries

Python libraries are typically installed using pip, Python's package manager:

```bash
pip install numpy
```

You can also specify particular versions if needed:

```bash
pip install numpy==1.21.0
```

For project-specific dependencies, consider using virtual environments:

```bash
python -m venv myproject_env

# Activating the environment (Windows)
myproject_env\Scripts\activate

# Activating the environment (macOS/Linux)
source myproject_env/bin/activate

# Now you can install packages here
pip install numpy pandas matplotlib
```

## Using Libraries

To use a library in your code, you need to import it. This is covered in the [modules lesson](03-functions-modules/03-modules.md).

```python
import numpy

# Using a function from the library
result = numpy.array([1, 2, 3])
```

## Popular Python Libraries

Here's a brief introduction to some widely-used Python libraries:

1. **NumPy** - For numerical and mathematical operations, especially with arrays
2. **Pandas** - For data manipulation and analysis
3. **Matplotlib** - For creating visualizations and plots
4. **Requests** - For making HTTP requests
5. **Django** - For web development
6. **TensorFlow/PyTorch** - For machine learning

While we won't go into detail on each library in this lesson, knowing which libraries exist can help you recognize when you don't need to reinvent the wheel. If you are interested in how to use these libraries, you can find plenty of amazing projects on GitHub that use them. Hopefully this will give you a good starting point for your own projects!

## Contributing to Libraries

Open-source libraries thrive because of community contributions. Here's how you can contribute:

1. **Bug reports**: If you find an issue, report it in the library's issue tracker
2. **Documentation**: Improve or clarify existing documentation
3. **Code contributions**: Fix bugs or add features
4. **Testing**: Help test new features or fixes

Before contributing, familiarize yourself with the project's:
- Contribution guidelines, usually found in the CONTRIBUTING.md file
- Code of conduct, usually found in the CODE_OF_CONDUCT.md file
- Development workflow, usually found in the README.md file
- Testing requirements, usually found in the README.md file

Contributing to open-source projects is not only helpful to others but also improves your own coding skills and visibility in the community.

## Best Practices for Using External Libraries

1. **Don't reinvent the wheel**: Before writing complex code, check if a library already exists. Work smarter, not harder!
2. **Keep dependencies minimal**: Each library adds complexity and potential security risks. Keeping your dependencies to the minimum of what your project needs to function is a good practice.
3. **Use virtual environments**: Isolate project dependencies to avoid conflicts. Installing libraries in a virtual environment is key for python projects in order to avoid conflicts with other projects and your system.
4. **Pin versions**: Specify exact library versions to ensure consistent behavior. This not only helps you avoid unexpected behavior, but also helps the community know what version of the library you are using if they are experiencing issues, or want to contribute.
5. **Read the documentation**: Understand how to properly use the library. This is **extremely** important. Understanding the code you are using will keep you from running malicious code, or misusing the library.
6. **Stay updated**: Keep libraries updated, but test updates before deploying to production. This is important because libraries are updated frequently and sometimes the updates are not backwards compatible.

⚠️ **Warning about unofficial packages**: Be especially cautious with unofficial or community-based packages. Some signs that should raise concern:
- The package has very few users or downloads
- No or minimal documentation
- Code that's difficult to read or understand
- Requests for unusual permissions
- Obfuscated code segments