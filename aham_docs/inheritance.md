# Inheritance

Inheritance allows a class to acquire fields and methods from another class.

The class being inherited from is called the **parent class** (or base class), and the class that inherits is called the **child class** (or derived class).

Inheritance promotes code reuse and helps build relationships between classes.

---

## Why Inheritance?

Consider the following class:

```rust
{
    class Parent {

        public {
            func greet() {
                println("Hello");
            }
        }
    }
}
```

If another class also needs the same functionality, duplicating the code is unnecessary.

Instead, the new class can inherit from the existing class.

```rust
class Child inherits Parent {
}
```

The child class automatically gains access to inherited members.

---

## Syntax

Inheritance is declared using the `inherits` keyword.

```rust
class Child inherits Parent {
}
```

The child class inherits members from the parent class.

---

## Inherited Members

The following members are inherited:

* Public members
* Protected members
* Shared members

Private members are not inherited.

### Example

```rust
{
    class Parent {

        public {
            dec : value;
        }

        protected {
            dec : name;
        }

        shared {
            dec : count = 0;
        }
    }

    class Child inherits Parent {

    }
}
```

The `Child` class inherits:

```text
value
name
count
```

However, any private members remain accessible only inside `Parent`.

---

## Accessing Inherited Members

Inherited members behave as if they were declared inside the child class.

```rust
{
    class Parent {

        public {
            dec : value;
        }
    }

    class Child inherits Parent {
    }

    func main() {

        child = Child();

        child.value = 100;

        println(child.value);
    }
}
```

Output:

```text
100
```

---

## Protected Members

Protected members are accessible inside the parent class and all derived classes.

```rust
{
    class Parent {

        protected {

            func printParent() {
                println("Parent");
            }
        }
    }

    class Child inherits Parent {

        public {

            func display() {
                printParent();
            }
        }
    }
}
```

Although `printParent()` is protected, it can still be used inside `Child`.

---

## Method Overriding

A child class may provide its own implementation of an inherited method.

This is known as **method overriding**.

### Example

```rust
{
    class Parent {

        protected {

            func printParent() {
                println("Parent");
            }
        }
    }

    class Child inherits Parent {

        public {

            func printParent() {
                    println("Child");
                }
        }
    }
}
```

When the method is called on a `Child` object, the child's implementation is used.

```rust
child = Child();

child.printParent();
```

Output:

```text
Child
```

---

## Shared Members and Inheritance

Shared members belong to the class hierarchy rather than individual objects.

### Example

```rust
{
    class Parent {

        shared {
             dec : count = 0;
        }
    }

    class Child inherits Parent {
    }
}
```

Usage:

```rust
child1 = Child();

child1.count += 1;

println(child1.count);
```

Output:

```text
1
```

Creating another object:

```rust
child2 = Child();

child2.count += 1;

println(child2.count);
```

Output:

```text
2
```

Because `count` is shared, both objects access the same value.

---

## Complete Example

```rust
{
    class Parent {

        protected {

            func printParent() {
                println("Parent");
            }
        }

        shared {
            dec : count = 0;
        }
    }

    class Child inherits Parent {

        public {

            func printParent() {
                println("Child");
            }
        }
    }

    func main() {

        child1 = Child();

        child1.count += 1;

        child1.printParent();

        println(child1.count);

        child2 = Child();

        child2.count += 1;

        child2.printParent();

        println(child2.count);
    }
}
```

Output:

```text
Child
1
Child
2
```

This demonstrates both method overriding and shared member inheritance.

---

# Multiple Inheritance

aham supports **single class inheritance**.

A class may inherit from only one parent class.

```rust
class Child inherits Parent {
}
```

The following is not allowed:

```rust
class Child inherits ParentA, ParentB {
}
```

---

## Multiple Inheritance Through Traits

While classes cannot inherit from multiple classes, a class may implement multiple traits.

```rust
{
    trait Drawable {

        public {
            dec : draw();
        }
    }

    trait Shape {

        public {
            dec : area();
        }
    }

    class Circle impl Drawable, Shape {

        public {

            func draw() {
                println("Drawing circle");
            }

            func area() {
                return 314;
            }
        }
    }
}
```

This provides the benefits of multiple inheritance without inheriting implementation from multiple parent classes.

---

## Combining Inheritance and Traits

A class may inherit from a parent class and implement multiple traits simultaneously.

```rust
class Circle inherits ShapeBase impl Drawable, Printable {
}
```

In this case:

* `ShapeBase` provides inherited implementation.
* `Drawable` defines required drawing behavior.
* `Printable` defines required printing behavior.

---

## Summary

| Feature                    | Example                                       |
| -------------------------- | --------------------------------------------- |
| Single Inheritance         | `class Child inherits Parent`                 |
| Access Inherited Members   | `child.value`                                 |
| Protected Members          | Accessible in derived classes                 |
| Method Overriding          | Child provides a new implementation           |
| Shared Inheritance         | Shared members are inherited                  |
| Multiple Class Inheritance | Not supported                                 |
| Multiple Traits            | `class Circle impl Shape, Draw`               |
| Class + Traits             | `class Circle inherits Base impl Shape, Draw` |

Inheritance allows classes to reuse existing functionality and create parent-child relationships. aham uses single class inheritance for implementation reuse and traits for multiple inheritance of behavior contracts.
