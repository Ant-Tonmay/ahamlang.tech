# Exception Handling

Programs may encounter unexpected situations during execution, such as invalid operations, missing variables, division by zero, or failed module imports. Aham provides a structured exception handling mechanism to detect, propagate, and recover from these runtime errors without abruptly terminating the program.

## Throwing Exceptions

An exception is raised using the `throw` statement.

```aham
throw Exception("Something went wrong.");
```

Only objects derived from `Exception` should be thrown.

Custom exception classes can be created by inheriting from `Exception` or one of its subclasses.

---

# try-catch-finally

Code that may generate an exception is placed inside a `try` block.

If an exception is thrown, control is transferred to the first matching `catch` block. Regardless of whether an exception occurs, the `finally` block is always executed before leaving the `try` statement.

```c++
{
    try {
        // code that may throw
    }
    catch (Exception e) {
        // handle exception
    }
    finally {
        // always executed
    }

}

```

The `finally` block is optional.

---

# Catch Order

Catch blocks are evaluated from top to bottom.

The first compatible exception type is selected.

Always place more specific exception types before their parent classes.

```c++
{
    try {
         throw TimeoutException("example.com");
    }
    catch (TimeoutException e) {
        println("Timeout");
    }
    catch (NetworkException e) {
        println("Network error");
    }
    catch (Exception e) {
        println("General exception");
    }
}
```

If `NetworkException` were placed before `TimeoutException`, the latter would never be reached because `TimeoutException` is derived from `NetworkException`.

---

# Catch-All Handler

A catch block without an explicit type matches any exception.

```aham
try {
    ...
}
catch (e) {
    println("Unknown error");
}
```

This is typically placed as the final catch block after all typed catches.

---

# Custom Exceptions

Applications can define their own exception hierarchy.

```c++
{
    class NetworkException inherits Exception {
        public {
            dec: message;
            dec: code;

            func NetworkException(msg, c) {
                message = msg;
                code = c;
            }
        }
    }

    class TimeoutException inherits NetworkException {
        public {
            func TimeoutException(host) {
                message = "Timeout connecting to: " + host;
                code = 408;
            }
        }
    }

}
```

Exceptions are ordinary classes and may contain fields, methods, constructors, and participate in inheritance like any other class.

---

# Complete Example

```c++
{
    class NetworkException inherits Exception {
        public {
            dec: message;
            dec: code;

            func NetworkException(msg, c) {
                message = msg;
                code = c;
            }
        }
    }

    class TimeoutException inherits NetworkException {
        public {
            func TimeoutException(host) {
                message = "Timeout connecting to: " + host;
                code = 408;
            }
        }
    }

    func main() {
        try {
            throw TimeoutException("example.com");
        }
        catch (TimeoutException e) {
            println("Timeout: " + e.message);
        }
        catch (NetworkException e) {
            println("Network error: " + e.message);
        }
        catch (e) {
            println("Unknown error");
        }
        finally {
            println("Cleanup done.");
        }
    }
}
```

Output:

```text
Timeout: Timeout connecting to: example.com
Cleanup done.
```

---

# Built-in Exception Classes

Aham provides several built-in exception types for common runtime errors.

```
Exception
│
├── RuntimeException
│   ├── IndexOutOfBoundsException
│   ├── TypeError
│   ├── DivisionByZeroException
│   ├── NameError
│   └── ImportError
│
└── ValueError
```

## Exception

The root of the exception hierarchy.

All custom exceptions should ultimately inherit from `Exception`.

Example uses include application-specific errors and generic failures.

---

## RuntimeException

Base class for exceptions generated during program execution.

Most runtime errors inherit from this class.

---

## IndexOutOfBoundsException

Thrown when an array or collection is accessed using an invalid index.

Example:

```aham
arr = [1, 2, 3];
println(arr[10]);
```

---

## TypeError

Thrown when an operation is performed on incompatible types.

Example:

```aham
a = "hello";
b = 10;

c = a - b;
```

---

## DivisionByZeroException

Thrown when attempting to divide by zero.

Example:

```aham
a = 10;
b = 0;

println(a / b);
```

---

## ValueError

Thrown when a value is valid in type but invalid in meaning.

Typical examples include invalid arguments or values outside an accepted range.

---

## NameError

Thrown when attempting to access a variable, function, or class that does not exist.

Example:

```aham
println(totalPrice);
```

where `totalPrice` has not been declared.

---

## ImportError

Thrown when a module or imported symbol cannot be resolved.

Example:

```aham
include <database> from storage;
```

if the requested module or symbol cannot be found.

---

# Exception Propagation

If an exception is not handled in the current `try` block, it automatically propagates to the caller. This process continues until a matching `catch` block is found.

If no matching handler exists, program execution terminates with an uncaught exception error.

---

# finally

The `finally` block is always executed, regardless of whether:

* no exception occurred,
* an exception was caught,
* an exception was rethrown, or
* the `try` block exits using `return`.

This makes `finally` the appropriate place for cleanup operations such as closing files, releasing resources, or restoring program state.
