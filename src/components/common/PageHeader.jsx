import './styles/PageHeader.css'

/**
 * PageHeader
 *
 * Props:
 *   title    — string     — page title
 *   subtitle — string     — supporting description (optional)
 *   action   — ReactNode  — right-side button or element (optional)
 */
function PageHeader({ title, subtitle, action }) {
  return (
    <div className="page-header">
      <div className="page-header__text">
        <h1 className="page-header__title">{title}</h1>
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
      </div>
      {action && (
        <div className="page-header__action">{action}</div>
      )}
    </div>
  )
}

export default PageHeader
