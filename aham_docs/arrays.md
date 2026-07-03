# Arrays

An array is a collection of values stored under a single variable.

Arrays allow multiple values to be grouped together and accessed using an index.

```rust
numbers = [10, 20, 30, 40, 50];
```

Array indices start at `0`.

```rust
println(numbers[0]); // 10
println(numbers[1]); // 20
println(numbers[2]); // 30
```

---

## Dynamic Arrays

A dynamic array can grow as new elements are added.

Dynamic arrays can be created using either an array literal or an empty array.

### Creating a Dynamic Array

```rust
numbers = [1, 2, 3, 4, 5];
```

or

```rust
numbers = [];
```

### Adding Elements

Dynamic arrays support the `push()` method.

```rust
numbers = [];

numbers.push(10);
numbers.push(20);
numbers.push(30);
```

The array automatically expands as needed.

### Example

```rust
{
    func main() {

        values = [];

        for (i = 0; i < 5; i += 1) {
            values.push(i);
        }

        println(values);
    }
}
```

Output:

```text
[0, 1, 2, 3, 4]
```

---

## Accessing Array Elements

Elements are accessed using square brackets.

```rust
numbers = [10, 20, 30];

println(numbers[0]);
println(numbers[1]);
println(numbers[2]);
```

Output:

```text
10
20
30
```

Elements can also be modified.

```rust
numbers[1] = 99;
```

Result:

```text
[10, 99, 30]
```

---

## Fixed Arrays with `shape()`

While dynamic arrays can grow as needed, sometimes the size of an array is known in advance.

aham provides the `shape()` function for creating fixed-size arrays.

### Syntax

```rust
shape(size)
```

Example:

```rust
numbers = shape(5);
```

This creates an array containing five elements.

Because the size is fixed, the following operation is not allowed:

```rust
numbers.push(60);
```

### Initializing Elements

All elements can be initialized with the same value.

```rust
numbers = shape(5, 0);
```

Result:

```text
[0, 0, 0, 0, 0]
```

Another example:

```rust
flags = shape(4, true);
```

Result:

```text
[true, true, true, true]
```

---


## `length()`

The `length()` built-in function returns the number of elements in an array.

### Syntax

```rust
length(array)
```

Example:

```rust
numbers = [10, 20, 30, 40];

println(length(numbers));
```

Output:

```text
4
```

The `length()` function works with both dynamic and fixed-size arrays.


---

## `push()`

The `push()` function appends a new element to the end of a dynamic array.

### Syntax

```rust
array.push(value)
```

Example:

```rust
numbers = [];

numbers.push(10);
numbers.push(20);
numbers.push(30);

println(numbers);
```

Output:

```text
[10, 20, 30]
```

`push()` is supported only by dynamic arrays. Attempting to call it on a fixed-size array created with `shape()` results in a runtime error.

```rust
numbers = shape(5);

numbers.push(60);    // Runtime Error
```



## Templates

The second argument to `shape()` acts as a template.

General form:

```rust
shape(size, template)
```

The template determines the initial value of every element.

Examples:

```rust
shape(5, 0)
```

```text
[0, 0, 0, 0, 0]
```

```rust
shape(5, true)
```

```text
[true, true, true, true, true]
```

```rust
shape(5, [])
```

```text
[
    [],
    [],
    [],
    [],
    []
]
```

When arrays are used as templates, each element receives its own independent copy.

This concept forms the foundation of multi-dimensional arrays.

---

# Multi-Dimensional Arrays

Arrays can contain other arrays.

This allows the creation of two-dimensional, three-dimensional, and higher-dimensional structures.

---

## Dynamic Array

```rust
matrix = [];
```

Rows and columns can be added dynamically.

---

## Fixed Rows, Dynamic Columns

Sometimes the number of rows is known in advance, but the number of columns is not.

```rust
rows = shape(n, []);
```

Example:

```rust
rows = shape(3, []);

rows[0].push(10);
rows[0].push(20);

rows[1].push(30);

rows[2].push(40);
rows[2].push(50);
rows[2].push(60);
```

Result:

```text
[
    [10, 20],
    [30],
    [40, 50, 60]
]
```

In this structure:

* The number of rows is fixed.
* Each row is a dynamic array.
* Columns can grow independently.

---

## Fixed Two-Dimensional Arrays

A fixed `n × n` matrix can be created using:

```rust
matrix = shape(n, shape(n));
```

Example:

```rust
n = 3;

matrix = shape(n, shape(n));
```

Result:

```text
[
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
```

Elements are accessed using two indices.

```rust
matrix[1][2] = 50;
```

---

## Fixed Three-Dimensional Arrays

A fixed `n × n × n` array can be created using:

```rust
cube = shape(n, shape(n, shape(n)));
```

Example:

```rust
cube[1][2][3] = 100;
```

Elements are accessed using three indices.

---

## Mixed Structures

Fixed and dynamic arrays can be freely combined.

```rust
shape(10)
```

Fixed one-dimensional array.

```rust
shape(10, 0)
```

Fixed one-dimensional array initialized with `0`.

```rust
shape(10, [])
```

Fixed rows, dynamic columns.

```rust
shape(10, shape(10))
```

Fixed `10 × 10` matrix.

```rust
shape(10, shape(10, shape(10)))
```

Fixed `10 × 10 × 10` cube.

```rust
[]
```

Fully dynamic array.

---

