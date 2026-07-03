# Modules, Imports, Aliases and Exports

As applications grow, organizing code into reusable modules becomes essential. aham provides a simple module system built around four concepts:

* `include`
* `include ... from`
* `alias`
* `export`

These features allow code to be organized into independent modules while keeping dependencies explicit.

---

# Importing a Module

The simplest way to use another module is with the `include` statement.

```aham
{
    include maths;

    func main() {
        m = math();

        println(m.sqrt(16));
        println(m.power(2, 3));
    }
}
```

The statement

```aham
include maths;
```

loads the `maths` module and imports all of its exported members into the current module.

Only members explicitly exported by the module become visible.

---

# Importing Selected Members

Sometimes only a small portion of a module is required.

Aham allows importing specific exported members using the `from` syntax.

```aham
{
    include <mathTrait> from maths;

    func main() {
        // mathTrait is available
    }
}
```

The syntax is

```aham
include <member1, member2, ...> from module;
```

Only the listed exported members are imported.

This keeps the global namespace clean and makes dependencies explicit.

---

# Exporting Members

Modules decide which declarations are visible outside the module using the `export` statement.

Example:

```aham
{
    trait mathTrait {

        public {

            dec : sqrt(num);

            dec : power(n, x);

        }

    }

    export { mathTrait };
}
```

Only `mathTrait` is exported.

Any declaration not listed in the `export` block remains private to the module and cannot be imported by other modules.

Multiple declarations may be exported together.

```aham
export {
    mathTrait,
    Calculator,
    PI
};
```

---

# Aliasing Modules

As projects grow, it is common for multiple modules to export declarations with the same name.

For example, suppose two different modules both export a function named `calculate`.

```aham
include finance;
include statistics;

func main() {
    calculate();    // Which calculate() should be called?
}
```

Since both modules introduce the same name into the current module, the reference becomes ambiguous.

Module aliases solve this problem by giving each imported module its own local name.

```aham
{
    alias finance = include finance;
    alias stats = include statistics;

    func main() {

        finance.calculate();

        stats.calculate();

    }
}
```

The alias acts as a namespace qualifier, making it explicit which module is being referenced.

Aliases also improve readability when working with modules that have long or deeply nested names.

```aham
{
    alias tr = include trie;

    func main() {

        tree = tr.Trie();

    }
}
```

Module aliases are local to the current source file and do not affect other modules.


# Aliasing Variables

The `alias` keyword is not limited to modules.

It can also create shorter names for variables.

```aham
{
    func main() {

        abignameforstrign = "hello world";

        alias s = abignameforstrign;

        print(s);

    }
}
```

This is particularly useful when working with long variable names.

---

# Combining Imports

A module may freely combine normal imports, aliased imports and selected imports.

```aham
{
    include maths;

    alias tr = include trie;

    alias io = include fileIO;

    include minheap;

    include maxheap;

    func main() {

        // Application code

    }
}
```

Imports are processed in the order they appear in the source file.

If any imported module cannot be found, compilation stops and the compiler reports the missing dependency.

---

# Module Visibility

A module can access only declarations that another module explicitly exports.

For example,

```aham
// maths.pg

{
    trait mathTrait {
        ...
    }

    class InternalMathHelper {
        ...
    }

    export {
        mathTrait
    };
}
```

Another module may import `mathTrait`, but attempting to import `InternalMathHelper` results in a compile-time error because it is not exported.

---