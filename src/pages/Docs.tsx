import { useState } from 'react'
import { MarkdownContent } from '../components/MarkdownContent'
import {
  docChapters,
  getDocContent,
  getDocEntry,
  type DocId,
} from '../docs/registry'
import './Page.css'

function formatDocTitle(title: string) {
  return title.replace(/`/g, '')
}

export function Docs() {
  const [activeDoc, setActiveDoc] = useState<DocId | null>(null)

  if (activeDoc) {
    const entry = getDocEntry(activeDoc)
    const content = getDocContent(activeDoc)

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
          <h1>{entry ? formatDocTitle(entry.title) : 'Documentation'}</h1>
        </header>

        {content ? (
          <MarkdownContent content={content} />
        ) : (
          <p className="lead">This document could not be loaded.</p>
        )}
      </article>
    )
  }

  return (
    <article className="page">
      <header className="page-header">
        <h1>Documentation</h1>
        <p className="lead">Everything you need to write and ship Aham programs.</p>
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
          <code>{`// variable
let x: int = 42

// function
fn add(a: int, b: int) -> int {
    return a + b
}

// conditional
if x > 0 {
    print("positive")
} else {
    print("non-positive")
}`}</code>
        </pre>
      </section>
    </article>
  )
}
