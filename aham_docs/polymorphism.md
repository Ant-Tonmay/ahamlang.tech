# Polymorphism

Polymorphism allows methods with the same name to behave differently depending on their parameters or the object on which they are called.

aham supports polymorphism through:

* Method Overloading
* Method Overriding
* Runtime Dispatch

---

## Method Overloading

Method overloading allows multiple methods with the same name to exist within a class.

In aham, overload resolution is based solely on the number of arguments (arity).

The parameter types are not considered when selecting an overload.

### Example

```rust
{
    class BinaryOpr {

        public {

            func binaryOpr(a, b, op) {

                if (op == "-") {
                    return a - b;
                }
                else if (op == "*") {
                    return a * b;
                }
                else if (op == "/") {
                    return a / b;
                }
            }

            func binaryOpr(a, b) {
                return a + b;
            }
        }
    }

    func main() {

        a = 10;
        b = 20;

        calculator = BinaryOpr();

        println(calculator.binaryOpr(a, b, "-"));
        println(calculator.binaryOpr(a, b));
    }
}

```

Output:

```text
-10
30
```

When the call contains:

```rust
calculator.binaryOpr(a, b, "-");
```

the three-parameter version is selected.

When the call contains:

```rust
calculator.binaryOpr(a, b);
```

the two-parameter version is selected.

---

## Overload Resolution Rules

aham identifies overloaded methods using:

```text
(method name, parameter count)
```

Examples:

```rust
func print() {}
func print(value) {}
func print(a, b) {}
```

All three methods are valid because they have different parameter counts.

However:

```rust
func print(number) {}
func print(text) {}
```

is not valid.

Although the parameter names are different, both methods have:

```text
name  = print
arity = 1
```

and therefore conflict.

---

## Method Overriding

Method overriding occurs when a child class provides a new implementation of a method inherited from a parent class.

To override a method:

* The method name must be the same.
* The parameter count must be the same.

### Example

```rust
{
    class Parent {

        public {

            func greet(name) {
                println("Hello {name}");
            }
        }
    }

    class Child inherits Parent {

        public {

            func greet(name) {
                println("Hi {name}");
            }
        }
    }
}
```

The child implementation replaces the inherited implementation.

```rust
child = Child();

child.greet("Alice");
```

Output:

```text
Hi Alice
```

---

## Runtime Dispatch

When a method is called on an object, aham performs method lookup using the runtime type of the object.

This behavior is known as runtime dispatch.

### Example

```rust
{
    class Parent {

        public {

            func greet() {
                println("Parent");
            }
        }
    }

    class Child inherits Parent {

        public {

            func greet() {
                println("Child");
            }
        }
    }
}
```

Calling:

```rust
child = Child();

child.greet();
```

produces:

```text
Child
```

The method defined in the object's class is selected at runtime.

---

## Summary

### Overloading

* Multiple methods may share the same name.
* Overload resolution uses argument count only.
* Parameter types are not considered.

Valid:

```rust
func print() {}
func print(value) {}
func print(a, b) {}
```

Invalid:

```rust
func print(number) {}
func print(text) {}
```

---

### Overriding

* A child class may replace an inherited method.
* The method name must match.
* The parameter count must match.

Example:

```rust
{
    class Child inherits Parent {

        public {

            func greet(name) {
                println("Hi {name}");
            }
        }
    }
}
```

---

### Runtime Dispatch

* Method calls are bound to the object's runtime class.
* Overridden methods are selected automatically.
* This enables polymorphic behavior in class hierarchies.

Together, overloading, overriding, and runtime dispatch form the foundation of polymorphism in aham.
