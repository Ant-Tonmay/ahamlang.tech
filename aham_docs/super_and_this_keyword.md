# `this` and `super`

Aham provides the `this` and `super` keywords to access members of the current object and its parent class.

* `this` refers to the current instance.
* `super` accesses members defined in the immediate parent class.

## The `this` Keyword

The `this` keyword refers to the object on which the current method is being executed. It is commonly used to access or modify instance fields and to distinguish object members from local variables or parameters with the same name.

### Accessing Instance Fields

```aham
{
    class Person {
        public {
            dec: name;
            dec: age;

            func Person(name, age) {
                this.name = name;
                this.age = age;
            }

            func display() {
                println("Name: " + this.name);
                println("Age: " + this.age);
            }
        }
    }

    func main() {
        person = Person("Alice", 25);
        person.display();
    }
}
```

Output:

```text
Name: Alice
Age: 25
```

In the constructor, `this.name` and `this.age` refer to the fields of the current object, while `name` and `age` refer to the constructor parameters.

### Calling Another Method

`this` may also be used to invoke another method belonging to the same object.

```aham
{
    class Counter {
        public {
            dec: value = 0;

            func increment() {
                this.value = this.value + 1;
            }

            func increaseTwice() {
                this.increment();
                this.increment();
            }

            func printValue() {
                println(this.value);
            }
        }
    }

    func main() {
        counter = Counter();
        counter.increaseTwice();
        counter.printValue();
    }
}
```

Output:

```text
2
```

---

## The `super` Keyword

The `super` keyword allows a class to access members defined in its parent class. It is commonly used to invoke an overridden method or to access an inherited field while explicitly referring to the superclass.

Unlike `this`, which refers to the current instance, `super` changes **where member lookup begins**. The object being accessed is still the current instance, but the lookup starts from the immediate parent class.

### Calling a Parent Method

When a derived class overrides a method, the parent implementation can still be invoked using `super`.

```aham
{
    class Animal {
        public {
            func speak() {
                println("Animal sound");
            }
        }
    }

    class Dog inherits Animal {
        public {
            func speak() {
                println("Woof");
                super.speak();
            }
        }
    }

    func main() {
        dog = Dog();
        dog.speak();
    }
}
```

Output:

```text
Woof
Animal sound
```

In this example, `Dog` overrides `speak()`, but `super.speak()` invokes the implementation defined in `Animal`.

### Accessing an Inherited Field

The `super` keyword may also be used to access fields declared in the parent class.

```aham
{
    class Animal {
        protected {
            dec: species;
        }

        public {
            func Animal() {
                this.species = "Unknown";
            }
        }
    }

    class Dog inherits Animal {
        public {
            func Dog() {
                this.species = "Dog";
            }

            func printSpecies() {
                println(super.species);
            }
        }
    }

    func main() {
        dog = Dog();
        dog.printSpecies();
    }
}
```

Output:

```text
Dog
```

Although the lookup starts in `Animal`, the value is read from the current object. Since the `Dog` constructor updates `species` to `"Dog"`, that is the value that is printed.

### How `super` Works

The `super` keyword does **not** create or refer to a separate parent object.

Instead, it changes where member lookup begins:

* `this.member` begins lookup in the current class.
* `super.member` begins lookup in the immediate parent class.

In both cases, the receiver is the same object.

For example,

```aham
super.print();
```

is conceptually equivalent to:

> Call `print` on the current object, but begin searching for the method in the parent class instead of the current class.

---

## `this` vs `super`

| `this`                                                                            | `super`                                                               |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Refers to the current object.                                                     | Refers to members defined in the immediate parent class.              |
| Accesses fields and methods of the current class.                                 | Accesses inherited fields and methods starting from the parent class. |
| Member lookup begins in the current class.                                        | Member lookup begins in the parent class.                             |
| Commonly used to access instance fields and invoke methods on the current object. | Commonly used to extend or reuse parent class behavior.               |

## Rules

* `this` may only be used inside instance methods.
* `super` may only be used inside instance methods of a derived class.
* A class must inherit from another class before `super` can be used.
* `super` always refers to the immediate parent class.
* The current object remains the receiver; `super` only changes where member lookup begins.

## When to Use Them

Use `this` when interacting with the current object's fields or methods.

```aham
func deposit(amount) {
    this.balance = this.balance + amount;
}
```

Use `super` when extending, rather than replacing, the behavior provided by a parent class.

```aham
func save() {
    validate();
    super.save();
}
```
