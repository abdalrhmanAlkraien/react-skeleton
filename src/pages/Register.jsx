import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import appConfig from '../config/appConfig'
import { registerApi } from '../api/auth'
import { FormButton, FormAlert } from '../components/common'
import './styles/Register.css'
import useThemeStore from '../store/useThemeStore'

export default function Register() {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useThemeStore()

  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')
  const [success, setSuccess] = useState('')

  const [form, setForm] = useState({
    fullName: '', username: '', email: '', phone: '', password: '', confirmPassword: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    setLoading(true)
    try {
      const res = await registerApi({
        fullName: form.fullName, username: form.username,
        email: form.email, phone: form.phone, password: form.password,
      })
      setSuccess(res.data?.[appConfig.auth.messageKey] || 'Registration successful!')
      setTimeout(() => navigate('/login'), 1500)
    } catch (err) {
      setError(
        err.response?.data?.[appConfig.auth.messageKey] ||
        'Registration failed. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-card auth-card--wide">

      <div className="auth-card__logo">
        MIG<span className="auth-card__logo-accent">FORA</span>
      </div>

      <div className="auth-card__heading">
        <h1 className="auth-card__title">Create account</h1>
        <p className="auth-card__subtitle">Fill in your details to get started</p>
      </div>

      <form onSubmit={handleSubmit} className="auth-card__form">

        <div className="auth-grid">
          <div className="auth-field">
            <label className="auth-field__label">Full Name</label>
            <input className="auth-field__input" type="text" name="fullName"
              placeholder="John Doe" value={form.fullName} onChange={handleChange} required />
          </div>
          <div className="auth-field">
            <label className="auth-field__label">Username</label>
            <input className="auth-field__input" type="text" name="username"
              placeholder="johndoe" value={form.username} onChange={handleChange} required />
          </div>
        </div>

        <div className="auth-grid">
          <div className="auth-field">
            <label className="auth-field__label">Email</label>
            <input className="auth-field__input" type="email" name="email"
              placeholder="john@email.com" value={form.email} onChange={handleChange} required />
          </div>
          <div className="auth-field">
            <label className="auth-field__label">Phone Number</label>
            <input className="auth-field__input" type="tel" name="phone"
              placeholder="+966 5X XXX XXXX" value={form.phone} onChange={handleChange} required />
          </div>
        </div>

        <div className="auth-grid">
          <div className="auth-field">
            <label className="auth-field__label">Password</label>
            <input className="auth-field__input" type="password" name="password"
              placeholder="Min. 8 characters" value={form.password} onChange={handleChange} required minLength={8} />
          </div>
          <div className="auth-field">
            <label className="auth-field__label">Confirm Password</label>
            <input className="auth-field__input" type="password" name="confirmPassword"
              placeholder="Repeat password" value={form.confirmPassword} onChange={handleChange} required />
          </div>
        </div>

        <FormAlert type="error"   message={error}   />
        <FormAlert type="success" message={success} />

        <FormButton type="submit" variant="primary" loading={loading} loadingText="Creating account…" fullWidth>
          Create Account
        </FormButton>

      </form>

      <p className="auth-card__footer">
        Already have an account?{' '}
        <span className="auth-card__footer-link" onClick={() => navigate('/login')}>
          Sign in
        </span>
      </p>


      <div className="auth-card__theme">
        <button className="auth-card__theme-btn" onClick={toggleTheme}>
          {theme === 'dark' ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              Switch to light mode
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              Switch to dark mode
            </>
          )}
        </button>
      </div>

    </div>
  )
}