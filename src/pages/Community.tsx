import './Page.css'

const links = [
  { label: 'GitHub', description: 'Source code, issues, and pull requests' },
  { label: 'Discord', description: 'Chat with the community' },
  { label: 'Forum', description: 'Long-form discussions and help' },
  { label: 'Blog', description: 'Release notes and language updates' },
]

export function Community() {
  return (
    <article className="page">
      <header className="page-header">
        <h1>Community</h1>
        <p className="lead">Connect with other Aham developers and contributors.</p>
      </header>

      <section className="page-section">
        <div className="community-list">
          {links.map((link) => (
            <a key={link.label} href="#" className="community-row">
              <span className="community-label">{link.label}</span>
              <span className="community-desc">{link.description}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="page-section">
        <h2>Contributing</h2>
        <p>
          Aham is open source. See the contributing guide on GitHub for how to
          report bugs, propose features, or submit patches.
        </p>
      </section>
    </article>
  )
}
