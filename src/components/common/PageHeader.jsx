import useLanguageStore from '../../store/useLanguageStore'
import './styles/PageHeader.css'

function PageHeader({ title, subtitle, action }) {
  const { lang } = useLanguageStore()
  const isRTL = lang === 'ar'

  return (
    <div
      className="page-header"
      style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}
    >
      {isRTL ? (
        <>
          <div className="page-header__action">
            {action}
          </div>
          <div className="page-header__text" style={{ textAlign: 'right' }}>
            <h1 className="page-header__title">{title}</h1>
            {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
          </div>
        </>
      ) : (
        <>
          <div className="page-header__text">
            <h1 className="page-header__title">{title}</h1>
            {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
          </div>
          {action && (
            <div className="page-header__action">{action}</div>
          )}
        </>
      )}
    </div>
  )
}

export default PageHeader