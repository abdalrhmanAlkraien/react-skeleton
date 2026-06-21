import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import SidebarProfile from './profile/SidebarProfile'
import './styles/Sidebar.css'

const NAV_ITEMS = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
      </svg>
    ),
  },
]

export default function Sidebar({ isOpen, onClose }) {

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <>
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}>

        <div className="sidebar__header">
          <span className="sidebar__logo">
            MIG<span className="sidebar__logo-accent">FORA</span>
          </span>
        </div>

        <nav className="sidebar__nav">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `sidebar__nav-link ${isActive ? 'sidebar__nav-link--active' : ''}`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar__bottom">
          <SidebarProfile />
          <div className="sidebar__footer">
            © {new Date().getFullYear()} MIGFORA
          </div>
        </div>

      </aside>
    </>
  )
}