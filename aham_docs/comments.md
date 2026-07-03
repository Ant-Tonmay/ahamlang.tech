# Comments

Comments are used to document code, explain implementation details, or temporarily disable sections of code during development. Comments are ignored by the compiler and do not affect program execution.

Aham supports three types of comments:

* Single-line comments
* Multi-line comments
* Nested multi-line comments

## Single-Line Comments

A single-line comment begins with `//` and continues until the end of the current line.

```aham
func main() {
    // Print a greeting
    println("Hello, Universe!");
}
```

Single-line comments are useful for short explanations or notes.

```aham
radius = 10;      // Radius of the circle
area = 3.14159 * radius * radius;
```

---

## Multi-Line Comments

A multi-line comment begins with `/*` and ends with `*/`. Everything between these delimiters is treated as a comment.

```aham
/*
    This program demonstrates
    how to calculate the area
    of a circle.
*/

func main() {
    println("Hello, Universe!");
}
```

Multi-line comments are commonly used for documenting algorithms, classes, or larger sections of code.

---

## Nested Multi-Line Comments

Unlike many programming languages, Aham supports nested multi-line comments. This allows one block comment to contain another without terminating the outer comment.

```aham
/*
    Beginning of the outer comment.

    /*
        This is a nested comment.
    */

    The outer comment continues here.
*/

func main() {
    println("Nested comments are supported.");
}
```


## Notes

* Single-line comments begin with `//`.
* Multi-line comments begin with `/*` and end with `*/`.
* Multi-line comments may span multiple lines.
* Block comments can be nested to any depth.
* Comments are ignored during compilation and do not become part of the generated program.

