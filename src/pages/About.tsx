import './Page.css'

export function About() {
  return (
    <article className="page">
      <header className="page-header">
        <h1>About</h1>
        <p className="lead">Aham is a programming language focused on simplicity and explicitness.</p>
      </header>

      <section className="page-section">
        <h2>Philosophy</h2>
        <p>
          Aham prioritizes readable syntax, predictable behavior, and a small standard
          library. The name comes from the Sanskrit word meaning &ldquo;I am&rdquo; — a
          reminder that code should speak clearly about what it does.
        </p>
        <p>
          Aham is a statically compiled, bytecode-based programming language designed with simplicity, readability, and explicitness in mind.
          Source code is compiled into portable bytecode, which is executed by the Aham Virtual Machine (VM).
        </p>
      </section>

      <section className="page-section">
        <h2>Design goals</h2>
        <ul>
          <li>Keep the language simple without sacrificing expressiveness.</li>
          <li>Prefer readability over clever or implicit syntax.</li>
          <li>Provide a consistent and predictable programming model.</li>
          <li>Separate compilation from execution through a portable bytecode format.</li>
          <li>Grow the language carefully while maintaining backward compatibility whenever possible.</li>
        </ul>
      </section>

      <section className="page-section">
        <h2>Status</h2>
        <p>
          Aham is currently in its first major release.
          The core language and toolchain are stable, while the standard library and ecosystem will continue to grow in future releases.
          New features and improvements will be introduced with a focus on maintaining a simple, consistent, and reliable programming experience.
          Feedback and contributions are always welcome.
        </p>
      </section>
    </article>
  )
}
