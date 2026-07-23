import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './styles/Drawer.css'

/**
 * Drawer — MIGFORA common shell component
 *
 * Props:
 *   open      — boolean
 *   title     — string
 *   onClose   — function
 *   size      — 'sm' | 'md' | 'lg'  (default: 'md')
 *   footer    — ReactNode — rendered in the footer bar (buttons, etc.)
 *   error     — string — renders the error banner inside the shell (optional)
 *   children  — ReactNode — the drawer body content
 */
function Drawer({ open, title, onClose, size = 'md', footer, error, children }) {

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Escape key closes drawer
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    if (open) document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className={`drawer__overlay ${open ? 'drawer__overlay--open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`drawer drawer--${size} ${open ? 'drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >

        {/* Header */}
        <div className="drawer__header">
          <h2 className="drawer__title">{title}</h2>
          <button className="drawer__close" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Error banner — only renders when error string is present */}
        {error && (
          <div className="drawer__error" role="alert">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8"  x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            {error}
          </div>
        )}

        {/* Body — consumer puts whatever they want here */}
        <div className="drawer__body">
          {children}
        </div>

        {/* Footer — only renders when footer prop is passed */}
        {footer && (
          <div className="drawer__footer">
            {footer}
          </div>
        )}

      </div>
    </>,
    document.body
  )
}

export default Drawer