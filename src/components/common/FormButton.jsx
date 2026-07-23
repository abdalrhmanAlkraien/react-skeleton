import './styles/FormButton.css'

/**
 * FormButton — MIGFORA standard button component
 *
 * Props:
 *   variant    — 'primary' | 'ghost' | 'outline'  (default: 'primary')
 *   type       — 'submit' | 'button' | 'reset'     (default: 'button')
 *   loading    — boolean                            (default: false)
 *   loadingText — string shown while loading        (default: 'Loading…')
 *   disabled   — boolean                            (default: false)
 *   fullWidth  — boolean, stretches to 100%         (default: false)
 *   onClick    — function
 *   children   — button label
 */
function FormButton({
  variant     = 'primary',
  type        = 'button',
  loading     = false,
  loadingText = 'Loading…',
  disabled    = false,
  fullWidth   = false,
  onClick,
  children,
}) {
  const classes = [
    'form-btn',
    `form-btn--${variant}`,
    fullWidth ? 'form-btn--full' : '',
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? loadingText : children}
    </button>
  )
}

export default FormButton