import './Page.css'
import { Link } from "react-router-dom";
export function Home() {
  return (
    <article className="page">
      <header className="page-header">
        <h1>Aham</h1>
        <p className="lead">
          A bytecode-compiled, bytecode-based programming language designed
          for simplicity and readability.
        </p>

        <div className="hero-actions">
          <a className="button" href="/getting-started">
            Get Started
          </a>
        </div>
      </header>

      <section className="page-section">
        <h2>Hello, Universe!</h2>

        <pre>
          <code>{`{
    func main() {
        print("Hello, Universe!");
    }
}`}</code>
        </pre>

        <h3>Compile</h3>
        <pre>
          <code>{`$ aham -c hello.aha`}</code>
        </pre>

        <h3>Run</h3>
        <pre>
          <code>{`$ aham -r hello.ahc

Hello, Universe!`}</code>
        </pre>
      </section>

      <section className="page-section">
        <h2>How Aham Works</h2>

        <pre>
          <code>{`.aha
  │
  ▼
Compiler
  │
  ▼
.ahc
  │
  ▼
Aham Virtual Machine
  │
  ▼
Program Execution`}</code>
        </pre>
      </section>

      <section className="page-section">
        <h2>Features</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Simple Syntax</h3>
            <p>Readable and consistent language design.</p>
          </div>

          <div className="feature-card">
            <h3>Portable Bytecode</h3>
            <p>Compile once into portable <code>.ahc</code> bytecode.</p>
          </div>

          <div className="feature-card">
            <h3>Aham VM</h3>
            <p>Execute programs using the Aham Virtual Machine.</p>
          </div>

          <div className="feature-card">
            <h3>Object-Oriented</h3>
            <p>Classes, inheritance, traits, and polymorphism.</p>
          </div>

          <div className="feature-card">
            <h3>Module System</h3>
            <p>Organize projects into reusable modules.</p>
          </div>

          <div className="feature-card">
            <h3>Exception Handling</h3>
            <p>Structured <code>try</code>, <code>catch</code>, <code>finally</code>, and <code>throw</code>.</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>Explore</h2>

        <div className="feature-grid">
          <Link className="feature-card" to="/download">
            <h3>Getting Started</h3>
            <p>Install Aham and write your first program.</p>
          </Link>

          <Link className="feature-card" to="/docs">
            <h3>Language Guide</h3>
            <p>Learn the syntax and core language features.</p>
          </Link>

          <a
            className="feature-card"
            href="https://github.com/Ant-Tonmay/aham"
            target="_blank"
            rel="noreferrer"
          >
            <h3>GitHub</h3>
            <p>Browse the source code and contribute.</p>
          </a>
        </div>
      </section>
    </article>
  )
}