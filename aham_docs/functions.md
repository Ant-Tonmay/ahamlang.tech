# Functions

A function is a reusable block of code that performs a specific task.

Instead of writing the same code multiple times, a function allows that code to be defined once and executed whenever needed.

Functions improve:

* Code reusability
* Readability
* Maintainability
* Program organization

---

## Defining a Function

A function is defined using the `func` keyword.

### Syntax

```rust
func function_name() {
    // statements
}
```

### Example

```rust
func greet() {
    println("Hello aham");
}
```

The function `greet` contains a single statement that prints a message.

Defining a function does not execute it. The function must be called explicitly.

---

## Calling a Function

A function call executes the statements inside the function.

```rust
{
    func greet() {
        println("Hello aham");
    }

    func main() {
        greet();
    }
}
```

Output:

```text
Hello aham
```

A function can be called multiple times.

```rust
{
    func greet() {
        println("Hello aham");
    }

    func main() {
        greet();
        greet();
        greet();
    }
}
```

Output:

```text
Hello aham
Hello aham
Hello aham
```

---

## Function Parameters

Functions can receive data from the caller through parameters.

Parameters allow the same function to work with different values.

### Example

```rust
{
    func greet(name) {
        println("Hello {name}");
    }

    func main() {
        greet("Alice");
        greet("Bob");
    }
}
```

Output:

```text
Hello Alice
Hello Bob
```

In this example:

* `name` is a parameter.
* `"Alice"` and `"Bob"` are arguments.

---

## Multiple Parameters

A function may accept more than one parameter.

```rust
{
    func add(a, b) {
        println(a + b);
    }

    func main() {
        add(10, 20);
    }

}
```

Output:

```text
30
```

Parameters are passed in the same order they are declared.

---

## Returning Values

A function can return a value to the caller using the `return` statement.

### Example

```rust
{
    func add(a, b) {
        return a + b;
    }

    func main() {

        result = add(10, 20);

        println(result);
    }

}
```

Output:

```text
30
```

When a `return` statement is executed, the function immediately terminates and returns the specified value.

---

## Pass by Value

By default, parameters are passed by value.

When a value is passed to a function, the function receives a copy of that value. Changes made inside the function do not affect the original variable.

### Example

```rust
{
    func change_value(x) {
        x = 99;
    }

    func main() {

        number = 10;

        change_value(number);

        println(number);
    }
}
```

Output:

```text
10
```

Although `x` is modified inside the function, the original variable remains unchanged.

This is because the function operates on a copy of the value.

---

## Pass by Reference

Sometimes a function needs to modify the caller's variable directly.

A parameter can be declared as a reference using the `ref:` keyword.

### Syntax

```rust
func function_name(ref: parameter) {
    // statements
}
```

### Example

```rust
{
    func change_value(ref: x) {
        x = 99;
    }

    func main() {

        number = 10;

        change_value(number);

        println(number);
    }
}
```

Output:

```text
99
```

Because `x` is a reference parameter, modifications made inside the function affect the original variable.

---

## References and Arrays

References are commonly used when working with arrays.

### Array Passed by Value

```rust
{
    func update_array(arr) {

        arr[0] = 99;
        arr.push(4);
    }

    func main() {

        numbers = [1, 2, 3];

        update_array(numbers);

        println(numbers[0]);
        println(length(numbers));
    }
}
```

Output:

```text
1
3
```

The function receives its own copy of the array. Changes remain local to the function.

### Array Passed by Reference

```rust
{
    func update_array(ref: arr) {

        arr[0] = 99;
        arr.push(4);
    }

    func main() {

        numbers = [1, 2, 3];

        update_array(numbers);

        println(numbers[0]);
        println(length(numbers));
    }
}
```

Output:

```text
99
4
```