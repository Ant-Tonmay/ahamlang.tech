import "./Page.css";
import { Helmet } from "react-helmet-async";

const links = [
  {
    label: "GitHub",
    description: "Source code, issues, and pull requests",
    url: "https://github.com/Ant-Tonmay/aham",
  },
  {
    label: "Discord",
    description: "Chat with the community",
    url: "https://discord.gg/hBvXEP5tK",
  },
  {
    label: "Forum",
    description: "Long-form discussions and help",
    url: "https://github.com/Ant-Tonmay/aham/discussions/",
  },
];

export function Community() {
  return (
    <>
      <Helmet>
        <title>Community | Aham Programming Language</title>

        <meta
          name="description"
          content="Join the Aham community through GitHub Discussions, Discord, and contribute to the development of the language."
        />

        <link rel="canonical" href="https://ahamlang.tech/community" />
      </Helmet>
      <article className="page">
        <header className="page-header">
          <h1>Community</h1>
          <p className="lead">
            Connect with other Aham developers and contributors.
          </p>
        </header>

        <section className="page-section">
          <div className="community-list">
            {links.map((link) => (
              <a key={link.label} href={link.url} className="community-row">
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
    </>
  );
}
