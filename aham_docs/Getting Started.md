# Getting Started

Once Aham is installed, you are ready to write your first program.

Unlike many programming languages, an Aham source file is **never empty**. Every program is enclosed inside a top-level block (`{}`), which serves as the root of the program.

---

# Creating a Project

Create a directory for your project.

```bash
$ mkdir -p ~/space/hello_universe
$ cd ~/space/hello_universe
```

Create a source file named `hello_universe.aha`.

> **Naming Convention**
>
> * Source files use the **`.aha`** extension.
> * If a filename contains multiple words, separate them using underscores (`_`).
>
> Examples:
>
> ```
> hello.aha
> hello_universe.aha
> file_reader.aha
> ```

---

# Your First Program

Every Aham program must be wrapped inside a top-level block.

```aham
{
    func main() {
        print("Hello, Universe!");
    }
}
```

Notice that the file **does not begin with code directly**. The entire program is enclosed within `{}`.

---

# Compiling

Compile the source file into Aham bytecode using the `-c` option.

```bash
$ aham -c hello_universe.aha
```

This produces a compiled bytecode file:

```text
hello_universe.ahc
```

---

# Running

Execute the compiled bytecode with the Aham Virtual Machine.

```bash
$ aham -r hello_universe.ahc
```

Output:

```text
Hello, Universe!
```

---

# Understanding the Program

```aham
{
    func main() {
        print("Hello, Universe!");
    }
}
```

* `main()` is the program's **entry point**.
* Execution always begins from `main()`.
* `main()` does not take any parameters.
* `print()` is a built-in function that writes text to the console.
* `"Hello, Universe!"` is a string literal passed to `print()`.

The outer `{}` defines the program's top-level block. Every valid Aham source file must be enclosed within this block.

---

# Aham Virtual Machine

Aham is a **compiled, bytecode-based programming language**.

The execution flow is:

```text
Source Code (.aha)
        │
        ▼
 Aham Compiler (-c)
        │
        ▼
 Bytecode (.ahc)
        │
        ▼
 Aham Virtual Machine (-r)
        │
        ▼
 Program Execution
```

Instead of executing source code directly, the Aham compiler converts `.aha` files into portable bytecode (`.ahc`). The **Aham Virtual Machine (VM)** then executes this bytecode.

This architecture provides:

* Platform-independent bytecode
* Faster startup than interpreting source code
* A clear separation between compilation and execution
* The ability to distribute compiled `.ahc` files without exposing source code
