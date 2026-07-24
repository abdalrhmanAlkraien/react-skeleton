import { useTranslation } from 'react-i18next'
import './styles/StatusBadge.css'

const STATUS_VARIANT_MAP = {
  DONE: 'success', ACTIVE: 'success', COMPLETED: 'success', PASSED: 'success',
  SCHEDULED: 'warning', PENDING: 'warning', RUNNING: 'warning',
  FAILED: 'danger', MISSED: 'danger', CRITICAL: 'danger', HIGH: 'danger',
  DRAFT: 'neutral', UNKNOWN: 'neutral', LOW: 'neutral',
  MEDIUM: 'info',
  BASIC: 'package-basic', GROWTH: 'package-growth', ENTERPRISE: 'package-enterprise',
}

function StatusBadge({ status, label }) {
  const { t } = useTranslation()
  const variant = STATUS_VARIANT_MAP[status?.toUpperCase()] || 'neutral'
  const displayLabel = label || t(`status.${status?.toUpperCase()}`, { defaultValue: status || '—' })

  return (
    <span className={`status-badge status-badge--${variant}`}>
      <span className="status-badge__dot" />
      {displayLabel}
    </span>
  )
}

export default StatusBadge