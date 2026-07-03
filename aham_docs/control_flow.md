# Fundamentals


## Control Flow

By default, statements are executed from top to bottom.

```text id="f1"
println("First");
println("Second");
println("Third");
```

Output:

```text id="f2"
First
Second
Third
```

However, programs often need to make decisions or repeat actions. Control flow statements allow a program to choose which code to execute and how many times to execute it.

Common control flow constructs include:

* Conditional execution (`if`, `else`)
* Repetition (`while`, `for`)
* Loop control (`break`, `continue`)

## The `if` Statement

An `if` statement executes a block of code only when a condition is true.

```rust id="f3"
{
    func main() {

        age = 20;

        if (age >= 18) {
            println("Adult");
        }

        println("Program finished");
    }
}
```

Output:

```text id="f4"
Adult
Program finished
```

The code inside the `if` block executes because the condition `age >= 18` evaluates to true.

## The `if-else` Statement

An `else` block provides an alternative path when the condition is false.

```rust id="f5"
{
    func main() {

        age = 15;

        if (age >= 18) {
            println("Adult");
        } else {
            println("Minor");
        }
    }
}
```

Output:

```text id="f6"
Minor
```

Only one branch is executed.

## The `if-else if-else` Statement

Multiple conditions can be checked in sequence.

```rust id="f7"
{
    func main() {

        score = 82;

        if (score >= 90) {
            println("Grade A");
        } else if (score >= 75) {
            println("Grade B");
        } else if (score >= 60) {
            println("Grade C");
        } else {
            println("Grade D");
        }
    }
}
```

Output:

```text id="f8"
Grade B
```

Conditions are evaluated from top to bottom. The first matching condition is executed.

## Why Control Flow Matters

Without control flow, every program would execute the same statements every time. Control flow allows programs to:

* React to user input
* Validate data
* Make decisions
* Repeat tasks
* Handle different situations dynamically

Control flow is the foundation of program logic.



## The `for` Loop

A `for` loop is used when a block of code must be executed repeatedly.

Instead of writing the same statements multiple times, a loop allows the program to repeat them automatically.

### Syntax

```rust id="a1"
for (initialization; condition; update) {
    // statements
}
```

A `for` loop consists of three parts:

| Part           | Purpose                              |
| -------------- | ------------------------------------ |
| Initialization | Executed once before the loop begins |
| Condition      | Checked before each iteration        |
| Update         | Executed after each iteration        |

The loop continues as long as the condition evaluates to true.

### Counting Example

The following program prints the numbers from 0 to 9.

```rust id="a2"
{
    func main() {

        for (i = 0; i < 10; i = i + 1) {
            println(i);
        }

    }
}
```

Output:

```text id="a3"
0
1
2
3
4
5
6
7
8
9
```

Execution proceeds as follows:

1. `i` is initialized with `0`.
2. The condition `i < 10` is evaluated.
3. The loop body executes.
4. `i` is incremented by one.
5. The condition is checked again.
6. Steps 3–5 repeat until the condition becomes false.

### Fibonacci Sequence Example

The following program uses a `for` loop to generate the first ten Fibonacci numbers.

```rust id="a4"
{
    func main() {

        current = 0;
        next = 1;

        for (i = 0; i < 10; i = i + 1) {

            print(current);

            temp = current + next;
            current = next;
            next = temp;
        }

    }
}
```

Output:

```text id="a5"
0 1 1 2 3 5 8 13 21 34
```

During each iteration:

1. The current Fibonacci number is printed.
2. The next number is calculated.
3. The variables are updated for the next iteration.

For example:

| Iteration | current | next |
| --------- | ------- | ---- |
| Start     | 0       | 1    |
| 1         | 1       | 1    |
| 2         | 1       | 2    |
| 3         | 2       | 3    |
| 4         | 3       | 5    |

The loop repeats this process ten times, producing the Fibonacci sequence.

### Summary

A `for` loop is useful when:

* The number of iterations is known.
* A counter variable is required.
* A task must be repeated multiple times.

General form:

```rust id="a6"
for (initialization; condition; update) {
    statements
}
```

The loop executes until the condition becomes false.




## The `while` Loop

A `while` loop repeatedly executes a block of code as long as a condition evaluates to true.

Unlike a `for` loop, a `while` loop does not require initialization, condition checking, and updating to be written in a single statement. This makes it useful when the number of iterations is not known in advance.

### Syntax

```rust
while (condition) {
    // statements
}
```

Before each iteration, the condition is evaluated.

* If the condition is `true`, the loop body executes.
* If the condition is `false`, the loop terminates.

### Example

The following program prints the numbers from `0` to `4`.

```rust
{
    func main() {

        i = 0;

        while (i < 5) {
            println(i);
            i += 1;
        }

    }
}
```

Output:

```text
0
1
2
3
4
```

### How It Works

Initially:

```text
i = 0
```

The condition is evaluated:

```text
i < 5
```

Since the condition is true, the loop body executes.

```rust
println(i);
i += 1;
```

After the first iteration:

```text
i = 1
```

The condition is evaluated again.

```text
1 < 5
```

The process repeats until `i` becomes `5`.

At that point:

```text
5 < 5
```

evaluates to `false`, and the loop terminates.

### Execution Flow

```text
i = 0
      │
      ▼
Check condition (i < 5)
      │
   true
      ▼
 Execute loop body
      │
      ▼
 Update i
      │
      ▼
 Check condition again
```

This cycle continues until the condition becomes false.

### Infinite Loops

A common mistake is forgetting to update the value used in the condition.

```rust
i = 0;

while (i < 5) {
    println(i);
}
```

Since `i` never changes, the condition remains true forever, causing an infinite loop.

To avoid infinite loops, ensure that the loop condition can eventually become false.

### When to Use a `while` Loop

Use a `while` loop when:

* The number of iterations is unknown.
* Repetition depends on a condition.
* The loop should continue until a specific event occurs.

Examples include:

* Reading user input until a valid value is entered.
* Processing data until the end of a file is reached.
* Running a task until a condition changes.

### Summary

A `while` loop repeatedly executes a block of code while a condition remains true.

General form:

```rust
while (condition) {
    statements
}
```

The condition is checked before every iteration, and the loop terminates when the condition becomes false.

* **`for` loop** → use when the number of iterations is known.
* **`while` loop** → use when the loop should continue as long as a condition remains true.


## The `break` Statement

The `break` statement immediately terminates the nearest enclosing loop.

When a `break` statement is executed, the loop stops and execution continues with the first statement after the loop.

### Example

```rust id="b1"
{
    func main() {

        for (i = 0; i < 10; i += 1) {

            if (i == 5) {
                break;
            }

            println(i);
        }

        println("Loop finished");
    }
}
```

Output:

```text id="b2"
0
1
2
3
4
Loop finished
```

### How It Works

The loop begins counting from `0`.

When `i` becomes `5`, the condition

```text id="b3"
i == 5
```

evaluates to true and the `break` statement executes.

```rust id="b4"
break;
```

The loop terminates immediately, so the values `5`, `6`, `7`, `8`, and `9` are never printed.

### Common Uses

The `break` statement is commonly used when:

* A desired value has been found.
* An error condition occurs.
* Further iterations are unnecessary.

---

## The `continue` Statement

The `continue` statement skips the remainder of the current iteration and proceeds directly to the next iteration of the loop.

Unlike `break`, it does not terminate the loop.

### Example

```rust id="c1"
{
    func main() {

        for (i = 0; i < 10; i += 1) {

            if (i == 5) {
                continue;
            }

            println(i);
        }

    }
}
```

Output:

```text id="c2"
0
1
2
3
4
6
7
8
9
```

### How It Works

The loop counts from `0` to `9`.

When `i` becomes `5`, the condition

```text id="c3"
i == 5
```

evaluates to true.

The `continue` statement executes:

```rust id="c4"
continue;
```

The remainder of the loop body is skipped, and the next iteration begins immediately.

As a result, the value `5` is not printed, but the loop continues executing normally.

### Another Example

The following program prints only even numbers.

```rust id="c5"
{
    func main() {

        for (i = 0; i < 10; i += 1) {

            if (i % 2 != 0) {
                continue;
            }

            println(i);
        }

    }
}
```

Output:

```text id="c6"
0
2
4
6
8
```

Odd numbers are skipped, while even numbers are printed.

---

## Difference Between `break` and `continue`

| Statement  | Effect                                                         |
| ---------- | -------------------------------------------------------------- |
| `break`    | Terminates the loop completely                                 |
| `continue` | Skips the current iteration and proceeds to the next iteration |


