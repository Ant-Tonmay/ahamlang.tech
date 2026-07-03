import './Page.css'

export function Home() {
  return (
    <article className="page">
      <header className="page-header">
        <h1>Aham</h1>
        <p className="lead">
          A programming language built for clarity and control.
        </p>
      </header>

      <section className="page-section">
        <pre>
          <code>{`
// hello.aha
{
    func main() {
        print("Hello, Universe")
    }
}
          `}
          </code>
        </pre>
      </section>

      <section className="page-section">
        <h2>Why Aham</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Simple syntax</h3>
            <p>Readable by design. No hidden magic, no ceremony.</p>
          </div>
          <div className="feature-card">
            <h3>Fast compile</h3>
            <p>Small toolchain that gets out of your way.</p>
          </div>
          <div className="feature-card">
            <h3>Explicit types</h3>
            <p>Type inference where it helps, annotations where it matters.</p>
          </div>
        </div>
      </section>
    </article>
  )
}
