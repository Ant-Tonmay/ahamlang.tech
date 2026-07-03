import { downloadPlatforms } from '../downloads/registry'
import './Page.css'

export function Download() {
  return (
    <article className="page">
      <header className="page-header">
        <h1>Download</h1>
        <p className="lead">Get Aham 1.0.0 — the compiler and runtime for your platform.</p>
      </header>

      {downloadPlatforms.map((platform) => (
        <section key={platform.title} className="page-section">
          <h2>{platform.title}</h2>
          <div className="download-list">
            {platform.downloads.map((entry) => (
              <div key={entry.id} className="download-row">
                <div>
                  <span className="download-name">{entry.name}</span>
                  <span className="download-meta">{entry.description}</span>
                </div>
                <div className="download-actions">
                  <span className="download-size">{entry.size}</span>
                  <a href={entry.path} download={entry.file} className="btn">
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="page-section">
        <h2>Install from source</h2>
        <pre>
          <code>{`$ git clone https://github.com/Ant-Tonmay/aham.git
$ cd aham
$ cmake -S . -B build
$ cd build
$ make`}</code>
        </pre>
      </section>

      <section className="page-section">
        <h2>Verify</h2>
        <pre>
          <code>aham --version</code>
        </pre>
      </section>
    </article>
  )
}
