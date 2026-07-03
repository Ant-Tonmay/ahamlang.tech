import './Page.css'

const examples = [
  {
    title: 'Hello world',
    code: `fn main() {
    print("hello, world")
}`,
  },
  {
    title: 'Fibonacci',
    code: `fn fib(n: int) -> int {
    if n <= 1 { return n }
    return fib(n - 1) + fib(n - 2)
}

fn main() {
    print(fib(10))
}`,
  },
  {
    title: 'File read',
    code: `import io

fn main() {
    let content = io.read("input.txt")
    print(content)
}`,
  },
]

export function Examples() {
  return (
    <article className="page">
      <header className="page-header">
        <h1>Examples</h1>
        <p className="lead">Short programs to help you learn Aham by reading code.</p>
      </header>

      <section className="page-section">
        {examples.map((example) => (
          <div key={example.title} className="example-block">
            <h3>{example.title}</h3>
            <pre>
              <code>{example.code}</code>
            </pre>
          </div>
        ))}
      </section>
    </article>
  )
}
