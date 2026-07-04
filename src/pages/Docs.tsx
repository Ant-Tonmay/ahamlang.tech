import { useState } from "react";
import { MarkdownContent } from "../components/MarkdownContent";
import {
  docChapters,
  getDocContent,
  getDocEntry,
  type DocId,
} from "../docs/registry";
import "./Page.css";
import { Helmet } from "react-helmet-async";
function formatDocTitle(title: string) {
  return title.replace(/`/g, "");
}

export function Docs() {
  const [activeDoc, setActiveDoc] = useState<DocId | null>(null);

  if (activeDoc) {
    const entry = getDocEntry(activeDoc);
    const content = getDocContent(activeDoc);

    return (
      <article className="page">
        <header className="page-header">
          <button
            type="button"
            className="docs-back"
            onClick={() => setActiveDoc(null)}
          >
            ← Back to documentation
          </button>
          <h1>{entry ? formatDocTitle(entry.title) : "Documentation"}</h1>
        </header>

        {content ? (
          <MarkdownContent content={content} />
        ) : (
          <p className="lead">This document could not be loaded.</p>
        )}
      </article>
    );
  }

  /* seo */
  
  return (
    <>

      <Helmet>
        <title>Documentation | Aham Programming Language</title>

        <meta
          name="description"
          content="Learn the Aham programming language through tutorials, language reference, and examples."
        />

        <link rel="canonical" href="https://ahamlang.tech/docs" />
      </Helmet>
      <article className="page">
        <header className="page-header">
          <h1>Documentation</h1>
          <p className="lead">
            Everything you need to write and ship Aham programs.
          </p>
        </header>

        <section className="page-section">
          <div className="docs-grid">
            {docChapters.map((chapter) => (
              <div key={chapter.title} className="docs-card">
                <h3>{chapter.title}</h3>
                <ul className="docs-list">
                  {chapter.docs.map((doc) => (
                    <li key={doc.id}>
                      <button
                        type="button"
                        className="docs-link"
                        onClick={() => setActiveDoc(doc.id)}
                      >
                        {formatDocTitle(doc.title)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="page-section">
          <h2>Quick reference</h2>
          <pre>
            <code>{`
  {
      func fib(n) {
          if (n == 0 || n == 1) { return n; }
          return fib(n - 1) + fib(n - 2);
      }

      func main() {
          println(fib(10));
      }
  }

              `}</code>
          </pre>
        </section>
      </article>
    </>
  );
}
