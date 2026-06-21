import { useState, useEffect } from 'react'
import { updateProfileApi } from '../../api/profile'
import './styles/ProfileDrawer.css'

export default function ProfileDrawer({ isOpen, onClose, profile, onSave }) {
  const [form, setForm] = useState({ name: '', email: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    if (profile) {
      setForm({ name: profile.name || '', email: profile.email || '' })
    }
  }, [profile])

  useEffect(() => {
    if (!isOpen) {
      setError('')
      setSuccess('')
    }
  }, [isOpen])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    if (!form.name.trim()) {
      setError('Name is required')
      return
    }
    if (!form.email.trim()) {
      setError('Email is required')
      return
    }
    setError('')
    setLoading(true)
    updateProfileApi(form)
      .then((res) => {
        setSuccess('Profile updated successfully')
        setLoading(false)
        onSave(res.data)
      })
      .catch(() => {
        setError('Failed to update profile')
        setLoading(false)
      })
  }

  return (
    <>
      {isOpen && <div className="profile-drawer__overlay" onClick={onClose} />}

      <div className={`profile-drawer ${isOpen ? 'profile-drawer--open' : ''}`}>

        <div className="profile-drawer__header">
          <span className="profile-drawer__title">Edit Profile</span>
          <button className="profile-drawer__close" onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="profile-drawer__body">

          {error && <div className="profile-drawer__error">{error}</div>}
          {success && <div className="profile-drawer__success">{success}</div>}

          <div className="profile-drawer__field">
            <label className="profile-drawer__label">Name</label>
            <input
              className="profile-drawer__input"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </div>

          <div className="profile-drawer__field">
            <label className="profile-drawer__label">Email</label>
            <input
              className="profile-drawer__input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address"
            />
          </div>

        </div>

        <div className="profile-drawer__footer">
          <button className="profile-drawer__btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button
            className="profile-drawer__btn-primary"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>

      </div>
    </>
  )
}