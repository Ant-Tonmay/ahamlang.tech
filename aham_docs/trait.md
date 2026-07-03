# Traits

A trait defines a contract that classes must follow.

Traits specify:

* Fields
* Methods
* Shared members

but do not provide method implementations.

Any class that implements a trait must provide implementations for all required methods.

Traits are used to define common behavior that can be shared across multiple classes.

---

## Why Traits?

Consider different geometric shapes:

```text
Circle
Rectangle
Triangle
```

Each shape can calculate its area.

Rather than forcing every class to define its own unrelated API, a trait can define a common contract.

```rust
trait Shape {

    public {
        dec : area();
    }
}
```

Any class implementing `Shape` must provide an `area()` method.

---

## Defining a Trait

Traits are declared using the `trait` keyword.

### Example

```rust
trait Shape {

    public {
        dec : area();
    }
}
```

A trait contains declarations only.

Method bodies are not allowed inside traits.

---

## Trait Sections

Traits support the following sections:

```text
public
protected
shared
```

Traits do not support a `private` section.

Since traits define contracts, all members must remain visible to implementing classes.

---

## Declaring Fields

Traits can declare fields using the `dec` keyword.

```rust
trait Shape {

    public {
        dec : name;
    }
}
```

Traits may also provide default values.

```rust
trait Shape {

    shared {
        dec : radius = 10;
    }
}
```

---

## Declaring Methods

Methods inside traits are declarations only.

```rust
trait Shape {

    public {
        dec : area();
    }
}
```

Implementations are provided by classes that implement the trait.

---

## Implementing a Trait

Classes implement traits using the `impl` keyword.

### Example

```rust
{
    trait Shape {

    public {
        dec : area();
    }
}

class Circle impl Shape {

    public {

        func area() {
            return 3.14 * 10 * 10;
        }
    }
}
}
```

The `Circle` class provides the implementation required by the `Shape` trait.

---

## Multiple Traits

A class may implement multiple traits.

### Example

```rust
{
    trait Shape {

    public {
        dec : area();
    }
}

trait Draw {

    public {
        dec : draw();
    }
}

class Circle impl Shape, Draw {

    public {

        func area() {
            return 3.14 * 10 * 10;
        }

        func draw() {
            println("Drawing circle");
        }
    }
}
}
```

The class must implement methods from both traits.

---

## Trait Inheritance

Traits can inherit from other traits.

### Syntax

```rust
trait Child inherits ParentA, ParentB
```

A trait may inherit from multiple parent traits.

### Example

```rust
{
    trait Shape {

    public {
        dec : area();
    }
}

trait Draw {

    public {
        dec : draw();
    }
}

trait DrawableShape inherits Shape, Draw {
}
}
```

Any class implementing `DrawableShape` must satisfy both `Shape` and `Draw`.

---

## Shared Members in Traits

Traits may declare shared members.

```rust
trait Shape {

    shared {
        dec : radius = 10;
    }

    public {
        dec : area();
    }
}
```

Shared members can be accessed directly by implementing classes.

```rust
class Circle impl Shape {

    public {

        func area() {
            return 3.14 * radius * radius;
        }
    }
}
```

---

## Complete Example

```rust
{
    trait Shape {

    shared {
        dec : radius = 10;
    }

    public {
        dec : area();
    }
}

trait Draw {

    public {
        dec : draw();
    }
}

class Circle impl Shape, Draw {

    public {

        func area() {
            return 3.14 * radius * radius;
        }

        func draw() {
            println("Drawing circle");
        }
    }
}

func main() {

    circle = Circle();

    println(circle.area());

    circle.draw();
}
}
```

Output:

```text
314
Drawing circle
```

---

## Trait vs Class

| Trait                                        | Class                         |
| -------------------------------------------- | ----------------------------- |
| Defines a contract                           | Defines an implementation     |
| Contains declarations                        | Contains implementations      |
| Cannot be instantiated                       | Can be instantiated           |
| May be implemented by many classes           | Creates objects               |
| Supports multiple inheritance through traits | Implements one or more traits |

---

> Traits are contracts, not implementations.

