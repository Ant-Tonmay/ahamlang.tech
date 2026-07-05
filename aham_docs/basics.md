# Fundamentals

## Vaiables
Variables are one the fundamentals in a programming language . Variables are defined as a containter that store values. 
the way one should create a variables in aham , given below

`name = "aham"`

aham is a dynamically typed language , that means there is no need to mention the type while creating  . Types get assigneed automatically after assigning .

`name = "aham"` this is a line which stores a `string` `"aham"` in a variable called `name`

## Data Types

Even though we don't write type while creating or assigning values in variables . Each variable do have types . 
The following are Primitive Data Types 
- int 
- float
- char
- string
- bool

## Size of Data Types
- int : Integer values are 64-bit/ 8 Bytes by default
- float : Float values are 64-bit/ 8 Bytes by default
- char : Character is 1 byte
- bool : bool is 1 byte

## Time to code
```rust
{
    func main(){
        a = 10;
        b = 10.44;
        c = "Hello Universe !";
        d = 'Z';
        e = false;
        println(type(a));
        println(type(b));
        println(type(c));
        println(type(d));
        println(type(e));
    }
}
```
**Output**
```bash 
int
float
string
char
bool
```
*Note :* 
- `type` is a built-in function to print the type of a variable
- `println` is a built-in function to print with a new- ine .
- `prinbt` is a built-in function to print without a new line.

## Operations 

aham supports the common operators used for calculations, comparisons, logic, bitwise work, and updating variables.

### Arithmetic Operators

Arithmetic operators work on integer values.

| Operator | Meaning | Example |
| --- | --- | --- |
| `+` | Addition | `12 + 5` |
| `-` | Subtraction | `12 - 5` |
| `*` | Multiplication | `12 * 5` |
| `/` | Division | `12 / 5` |
| `%` | Remainder | `12 % 5` |

#### Example Code

```rust
{
    func main(){
        println("Arithmetic operators");
        println("12 + 5 = {12 + 5}");
        println("12 - 5 = {12 - 5}");
        println("12 * 5 = {12 * 5}");
        println("12 / 5 = {12 / 5}");
        println("12 % 5 = {12 % 5}");

    }
}
```
**output**
```bash
Arithmetic operators
12 + 5 = 17
12 - 5 = 7
12 * 5 = 60
12 / 5 = 2
12 % 5 = 2
```

### String Concatenation

Use `+` to join two strings.

```rust
first = "Hello";
second = " aham";
greeting = first + second;
println(greeting);
```

#### Example Code
```rust
{
    func main(){
        println("String concatenation");
        first = "Hello";
        second = " aham";
        greeting = first + second;
        println("first + second = {greeting}");
    }
}
```
**output**
```bash
String concatenation
first + second = Hello aham
```

### Comparison Operators

Comparison operators return a boolean value.

| Operator | Meaning |
| --- | --- |
| `>` | Greater than |
| `>=` | Greater than or equal |
| `<` | Less than |
| `<=` | Less than or equal |
| `==` | Equal to |
| `!=` | Not equal to |

### Logical Operators

Logical operators are used with boolean values and conditions.

| Operator | Meaning | Example |
| --- | --- | --- |
| `&&` | Logical AND | `age >= 18 && has_id == true` |
| `||` | Logical OR | `day == 6 || day == 7` |
| `!` | Logical NOT | `!false` |

### Bitwise Operators

Bitwise operators work on integer bits.

| Operator | Meaning | Example |
| --- | --- | --- |
| `&` | Bitwise AND | `6 & 3` |
| <code>|</code> | Bitwise OR | `6 | 3` |
| `^` | Bitwise XOR | `6 ^ 3` |
| `<<` | Left shift | `6 << 1` |
| `>>` | Right shift | `6 >> 1` |

### Compound Assignment Operators

Compound assignment operators update an existing variable.

| Operator | Same as |
| --- | --- |
| `+=` | `x = x + value` |
| `-=` | `x = x - value` |
| `*=` | `x = x * value` |
| `/=` | `x = x / value` |
| `%=` | `x = x % value` |
| `&=` | `x = x & value` |
| `^=` | `x = x ^ value` |



### Operator Precedence

When an expression contains multiple operators, the language must decide which operation is performed first. This order is known as **operator precedence**.

Operators with higher precedence are evaluated before operators with lower precedence.

Consider the following aham program:

```rust
{
    func main() {
        println("2 + 3 * 4 = {2 + 3 * 4}");
        println("(2 + 3) * 4 = {(2 + 3) * 4}");

        println("1 + 2 << 2 = {1 + 2 << 2}");
        println("1 + (2 << 2) = {1 + (2 << 2)}");

        println("3 < 4 && 10 > 2 || false = {3 < 4 && 10 > 2 || false}");
    }
}
```

### Arithmetic Precedence

Multiplication and division have higher precedence than addition and subtraction.

```text
2 + 3 * 4
```

is evaluated as:

```text
2 + (3 * 4)
```

Result:

```text
14
```

If the addition should be performed first, parentheses must be used.

```text
(2 + 3) * 4
```

Result:

```text
20
```

### Shift Operator Precedence

Addition has higher precedence than shift operators.

```text
1 + 2 << 2
```

is evaluated as:

```text
(1 + 2) << 2
```

Result:

```text
3 << 2
= 12
```

Using parentheses changes the order of evaluation.

```text
1 + (2 << 2)
```

Result:

```text
1 + 8
= 9
```

### Logical Operator Precedence

Comparison operators are evaluated before logical operators.

```text
3 < 4 && 10 > 2 || false
```

is evaluated as:

```text
(3 < 4) && (10 > 2) || false
```

which becomes:

```text
true && true || false
```

and finally:

```text
true
```

The expression evaluates to:

```text
true
```



#### Table



| Precedence | Operators   | 
| ---------- | ----------- | 
| Highest    | `()`        | 
|            | `* / %`     |  
|            | `+ -`       |  
|            | `<< >>`     |   
|            | `< <= > >=` |   
|            | `== !=`     |   
|            | `&&`        |
| Lowest     |             |   


# Output

Aham provides two built-in functions for writing text to the console.

* `print()` writes text without moving to the next line.
* `println()` writes text followed by a newline.

## `print()`

```aham
{
    func main() {
        print("Hello");
        print(" World");
    }
}
```

Output:

```text
Hello World
```

## `println()`

```aham
{
    func main() {
        println("Hello");
        println("World");
    }
}
```

Output:

```text
Hello
World
```

## String Interpolation

Values can be embedded directly inside strings using `{}`.

```aham
{
    func main() {
        x = 10;

        print("x = {x}");
        println("x = {x}");
    }
}
```

Output:

```text
x = 10x = 10
```

Expressions may also be used inside the braces.

```aham
{
    func main() {
        a = 10;
        b = 20;

        println("{a} + {b} = {a + b}");
    }
}
```

Output:

```text
10 + 20 = 30
```

## Input and Type Casting

### Reading Input

Aham provides the `readline()` function to read a complete line of input from the console. The function always returns a value of type `string`.

#### Example

```aha
{
    func main() {
        print("Enter your name: ");
        name = readline();

        println("Hello, " + name);
    }
}
```

**Output**

```text
Enter your name: Alice
Hello, Alice
```

---

#### Reading Numbers

Since `readline()` returns a string, numeric input must be converted to the required type using explicit type casting.

```aha
{
    func main() {
        print("Enter first number: ");
        a = int(readline());

        print("Enter second number: ");
        b = int(readline());

        println(a + b);
    }
}
```

**Output**

```text
Enter first number: 10
Enter second number: 20
30
```

---

### Type Casting

Aham supports explicit type conversion using constructor-style syntax.

```aha
value = TargetType(expression);
```

#### Examples

```aha
b = "42";

c = int(b);          // String → Integer
d = char(65);        // Integer → Character ('A')
e = string(10);      // Integer → String

println(c);
println(d);
println(e);
```

### Common Conversions

| Conversion               | Example       |
| ------------------------ | ------------- |
| String → Integer         | `int("123")`  |
| Integer → String         | `string(123)` |
| Integer → Character      | `char(65)`    |
| Character → Integer      | `int('A')`    |
---

## Checking Types

The `type()` function returns the runtime type of a value.

```aha
{
    func main() {
        a = int(readline());
        b = string(100);

        println(type(a));
        println(type(b));
    }
}
```

Example output:

```text
int
string
```
___
