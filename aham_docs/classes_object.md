# Classes

A class is a user-defined type that groups related data and behavior into a single unit.

Data is stored in fields, while behavior is implemented using methods.

Classes help organize code, model real-world entities, and improve maintainability.

---

## Why Classes?

Without classes, related data is often stored in separate variables.

```rust
name = "Alice";
age = 20;

name2 = "Bob";
age2 = 25;
```

As a program grows, managing related data becomes difficult.

A class groups related data and functionality together.

```rust
person = Person();
```

The object can now store its own data and expose methods to operate on that data.

---

## Defining a Class

Classes are defined using the `class` keyword.

```rust
class Person {

    public {
        dec : name;
        dec : greet();
    }

    func greet() {
        println("Hello {this.name}");
    }
}
```

A class definition may contain:

* Fields
* Methods
* Constructors
* Access modifiers

---

## Creating Objects

Objects are created by calling the class name.

```rust
person = Person();
```

Each object receives its own copy of the class fields.

Multiple objects can be created from the same class.

```rust
person1 = Person();
person2 = Person();
```

---

## Constructors

A constructor is a special function that initializes an object when it is created.

A constructor:

* Has the same name as the class.
* Does use the`func` keyword.
* Executes automatically when an object is created.

### Example

```rust
class Person {

    public {
        dec : name;

        func Person(name) {
            this.name = name;
        }
    }
}
```

Creating an object:

```rust
person = Person("Alice");
```

The constructor receives `"Alice"` and stores it in the object's `name` field.

---

## Fields

Fields store data belonging to an object.

```rust
class Person {

    public {
        dec : name;
        dec : age;
    }
}
```

Fields are accessed using the dot operator.

```rust
person = Person();

person.name = "Alice";
person.age = 20;

println(person.name);
println(person.age);
```

---

## Methods

Methods are functions that belong to a class.

They can access and modify object data.

```rust
class Person {

    public {
        dec : name;
        dec : greet();
    }

    func greet() {
        println("Hello {this.name}");
    }
}
```

Calling a method:

```rust
person = Person();

person.name = "Alice";

person.greet();
```

Output:

```text
Hello Alice
```

---

## The `this` Keyword

Inside a class, the `this` keyword refers to the current object.

```rust
this.name
```

refers to the `name` field of the current object.

Example:

```rust
class Person {

    public {
        dec : name;

        func Person(name) {
            this.name = name;
        }
    }
}
```

Without `this`, the parameter `name` and the field `name` would be ambiguous.

---

## Access Modifiers

aham provides four access modifiers:

```text
private
protected
public
shared
```

These modifiers control the visibility and accessibility of fields and methods.

---

### Private

Private members are accessible only inside the class.

```rust
private {
    dec : secret;
}
```

Private members cannot be accessed directly from outside the class.

---

### Protected

Protected members are accessible:

* Inside the class.
* Inside derived classes.

```rust
protected {
    dec : value;
}
```

Protected members are primarily used when working with inheritance.

---

### Public

Public members can be accessed from anywhere.

```rust
public {
    dec : name;
    dec : greet();
}
```

Example:

```rust
person.name = "Alice";
person.greet();
```

---

### Shared

Shared members belong to the class itself rather than individual objects.


```rust
shared {
    dec : count = 0;
}
```

Shared members are accessed through the class name.

```rust
MathUtils.count += 1;
```

An object instance is not required.

---

## Declarations with `dec`

The `dec` keyword declares fields and methods before their implementation.

### Field Declaration

```rust
public {
    dec : name;
    dec : age;
}
```

### Method Declaration

```rust
public {
    dec : greet();
}
```

The method implementation can appear later in the class body.

```rust
func greet() {
    println("Hello");
}
```

This allows class interfaces to be organized separately from implementations.

---

## Shared Members Example

```rust
class MathUtils {

    shared {
        dec : pi;
        dec : count = 0;
    }
}
```

Assigning values:

```rust
MathUtils.pi = 3.14159;
MathUtils.count += 1;
```

Reading values:

```rust
println(MathUtils.pi);
println(MathUtils.count);
```

Shared fields are shared across all objects created from the class.

```rust
a = MathUtils();
b = MathUtils();

MathUtils.count += 1;

println(MathUtils.count);
```

Both objects observe the same shared value.

---

## Complete Example

The following example demonstrates a simple key-value store implemented as a class.

```rust

{
    class HashMap {

        private {
            dec : arr;
            dec : retrieve(key);
            dec : change(key, val);
        }

        public {
            dec : insert(key, val);
            dec : get(key);
            dec : update(key, val);

            HashMap() {
                this.arr = [];
            }
        }

        func insert(key, val) {
            push(this.arr, key);
            push(this.arr, val);
        }

        func retrieve(key) {

            for (i = 0; i < length(this.arr); i += 2) {

                if (this.arr[i] == key) {
                    return this.arr[i + 1];
                }
            }

            return null;
        }

        func change(key, val) {

            for (i = 0; i < length(this.arr); i += 2) {

                if (this.arr[i] == key) {
                    this.arr[i + 1] = val;
                    return;
                }
            }
        }

        func get(key) {
            return this.retrieve(key);
        }

        func update(key, val) {
            this.change(key, val);
        }
    }

}
```

Usage:

```rust
map = HashMap();

map.insert(1, 10);

println(map.get(1));

map.update(1, 20);

println(map.get(1));
```

Output:

```text
10
20
```

---
