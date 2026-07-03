import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const mainNav = [
  { path: '/', label: 'Home', end: true },
  { path: '/download', label: 'Download' },
  { path: '/docs', label: 'Docs' },
  //{ path: '/examples', label: 'Examples' },
]

const secondaryNav = [
  { path: '/about', label: 'About' },
  { path: '/community', label: 'Community' },
]

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <NavLink to="/" end className="sidebar-logo">
          aham
        </NavLink>
        <span className="sidebar-tag">lang</span>
      </div>

      <nav className="sidebar-nav">
        <p className="nav-section-label">Menu</p>
        <ul className="nav-list">
          {mainNav.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `nav-item ${isActive ? 'active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <p className="nav-section-label">More</p>
        <ul className="nav-list">
          {secondaryNav.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-item ${isActive ? 'active' : ''}`
                }
              >
                {item.label}
              </NavLink>
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