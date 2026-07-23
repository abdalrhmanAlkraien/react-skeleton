import './styles/StatusBadge.css'

/**
 * StatusBadge
 *
 * Props:
 *   status  — string  — the status value (matched to a color variant)
 *   label   — string  — display text (optional — defaults to status value)
 *
 * Built-in variants:
 *   success  → DONE, ACTIVE, COMPLETED, PASSED
 *   warning  → SCHEDULED, PENDING, RUNNING
 *   danger   → FAILED, MISSED, CRITICAL, HIGH
 *   neutral  → DRAFT, UNKNOWN, INFO, LOW
 *   info     → MEDIUM
 *   package  → BASIC, GROWTH, ENTERPRISE
 */

const STATUS_VARIANT_MAP = {
  DONE:        'success',
  ACTIVE:      'success',
  COMPLETED:   'success',
  PASSED:      'success',

  SCHEDULED:   'warning',
  PENDING:     'warning',
  RUNNING:     'warning',

  FAILED:      'danger',
  MISSED:      'danger',
  CRITICAL:    'danger',
  HIGH:        'danger',

  DRAFT:       'neutral',
  UNKNOWN:     'neutral',
  LOW:         'neutral',

  MEDIUM:      'info',

  BASIC:       'package-basic',
  GROWTH:      'package-growth',
  ENTERPRISE:  'package-enterprise',
}

function StatusBadge({ status, label }) {
  const variant = STATUS_VARIANT_MAP[status?.toUpperCase()] || 'neutral'
  const displayLabel = label || status || '—'

  return (
    <span className={`status-badge status-badge--${variant}`}>
      <span className="status-badge__dot" />
      {displayLabel}
    </span>
  )
}

export default StatusBadge