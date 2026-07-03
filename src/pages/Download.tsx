import './Page.css'

const platforms = [
  { name: 'Linux x64', file: 'aham-linux-x64.tar.gz', size: '12 MB' },
  { name: 'macOS ARM', file: 'aham-macos-arm64.tar.gz', size: '11 MB' },
  { name: 'macOS x64', file: 'aham-macos-x64.tar.gz', size: '12 MB' },
  { name: 'Windows x64', file: 'aham-windows-x64.zip', size: '13 MB' },
]

export function Download() {
  return (
    <article className="page">
      <header className="page-header">
        <h1>Download</h1>
        <p className="lead">Get the latest release of the Aham compiler and runtime.</p>
      </header>

      <section className="page-section">
        <div className="download-list">
          {platforms.map((platform) => (
            <div key={platform.name} className="download-row">
              <div>
                <span className="download-name">{platform.name}</span>
                <span className="download-meta">{platform.file}</span>
              </div>
              <div className="download-actions">
                <span className="download-size">{platform.size}</span>
                <button type="button" className="btn">Download</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <h2>Install from source</h2>
        <pre>
          <code>{`git clone https://github.com/Ant-Tonmay/aham
cd aham
make install`}</code>
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
