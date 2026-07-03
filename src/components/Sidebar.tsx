import './Sidebar.css'

export type PageId =
  | 'home'
  | 'download'
  | 'docs'
  | 'examples'
  | 'about'
  | 'community'

interface NavItem {
  id: PageId
  label: string
}

const mainNav: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'download', label: 'Download' },
  { id: 'docs', label: 'Docs' },
  { id: 'examples', label: 'Examples' },
]

const secondaryNav: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'community', label: 'Community' },
]

interface SidebarProps {
  activePage: PageId
  onNavigate: (page: PageId) => void
}

export function Sidebar({ activePage, onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <button
          type="button"
          className="sidebar-logo"
          onClick={() => onNavigate('home')}
        >
          aham
        </button>
        <span className="sidebar-tag">lang</span>
      </div>

      <nav className="sidebar-nav">
        <p className="nav-section-label">Menu</p>
        <ul className="nav-list">
          {mainNav.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`nav-item ${activePage === item.id ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <p className="nav-section-label">More</p>
        <ul className="nav-list">
          {secondaryNav.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`nav-item ${activePage === item.id ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <span className="version">v0.1.0</span>
      </div>
    </aside>
  )
}
