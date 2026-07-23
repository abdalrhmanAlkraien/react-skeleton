import './styles/Spinner.css'

/**
 * Spinner
 *
 * Props:
 *   size   — 'sm' | 'md' | 'lg'  (default: 'md')
 *   color  — 'orange' | 'white' | 'navy'  (default: 'orange')
 *   label  — string  — screen reader label (default: 'Loading…')
 */
function Spinner({ size = 'md', color = 'orange', label = 'Loading…' }) {
  return (
    <div
      className={`spinner spinner--${size} spinner--${color}`}
      role="status"
      aria-label={label}
    />
  )
}

export default Spinner