import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../store/authStore'
import useThemeStore from '../store/useThemeStore'
import { FormButton } from './common'
import './styles/Navbar.css'

export default function Navbar({ onToggleSidebar }) {
  const navigate = useNavigate()
  const { token, clearAuth } = useAuthStore()
  const { theme, toggleTheme } = useThemeStore()

  const handleLogout = () => {
    clearAuth()
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <button
          className="navbar__icon-btn"
          onClick={onToggleSidebar}
          title="Toggle sidebar"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6"  x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>

        <Link to="/dashboard" className="navbar__logo">
          MIG<span className="navbar__logo-accent">FORA</span>
        </Link>
      </div>

      <div className="navbar__actions">
        <button
          className="navbar__icon-btn"
          onClick={toggleTheme}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1"  x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1"  y1="12" x2="3"  y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>

        {token ? (
          <FormButton variant="outline" onClick={handleLogout}>Logout</FormButton>
        ) : (
          <FormButton variant="primary" onClick={() => navigate('/login')}>Login</FormButton>
        )}
      </div>
    </nav>
  )
}