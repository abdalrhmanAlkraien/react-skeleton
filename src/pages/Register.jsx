import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import appConfig from '../config/appConfig'
import { registerApi } from '../api/auth'
import { FormButton, FormAlert } from '../components/common'
import './styles/Register.css'

export default function Register() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (form.password !== form.confirmPassword) {
      setError(t('errors.password_mismatch'))
      return
    }

    if (form.password.length < 10 || form.password.length > 128) {
      setError(t('errors.password_length'))
      return
    }

    setLoading(true)

    try {
      await registerApi({
        email: form.email.trim(),
        password: form.password,
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
      })

      navigate('/login', { replace: true })
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.message ||
        t('errors.registration_failed')
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
        <h1 className="auth-card__title">
          {t('auth.register.title')}
        </h1>
        <p className="auth-card__subtitle">
          {t('auth.register.subtitle')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="auth-card__form">

        {/* First Name / Last Name */}
        <div className="auth-grid">
          <div className="auth-field">
            <label className="auth-field__label">
              {t('auth.register.first_name')}
            </label>
            <input
              className="auth-field__input"
              type="text"
              name="firstName"
              placeholder={t('auth.register.first_name_placeholder')}
              value={form.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="auth-field">
            <label className="auth-field__label">
              {t('auth.register.last_name')}
            </label>
            <input
              className="auth-field__input"
              type="text"
              name="lastName"
              placeholder={t('auth.register.last_name_placeholder')}
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email */}
        <div className="auth-field">
          <label className="auth-field__label">
            {t('auth.register.email')}
          </label>
          <input
            className="auth-field__input"
            type="email"
            name="email"
            placeholder={t('auth.register.email_placeholder')}
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password / Confirm Password */}
        <div className="auth-grid">
          <div className="auth-field">
            <label className="auth-field__label">
              {t('auth.register.password')}
            </label>
            <input
              className="auth-field__input"
              type="password"
              name="password"
              placeholder={t('auth.register.password_placeholder')}
              value={form.password}
              onChange={handleChange}
              required
              minLength={10}
              maxLength={128}
            />
          </div>

          <div className="auth-field">
            <label className="auth-field__label">
              {t('auth.register.confirm_password')}
            </label>
            <input
              className="auth-field__input"
              type="password"
              name="confirmPassword"
              placeholder={t('auth.register.confirm_password_placeholder')}
              value={form.confirmPassword}
              onChange={handleChange}
              required
              minLength={10}
              maxLength={128}
            />
          </div>
        </div>

        <FormAlert type="error" message={error} />
        <FormAlert type="success" message={success} />

        <FormButton
          type="submit"
          variant="primary"
          loading={loading}
          loadingText={t('auth.register.submitting')}
          fullWidth
        >
          {t('auth.register.submit')}
        </FormButton>

      </form>

      <p className="auth-card__footer">
        {t('auth.register.has_account')}{' '}
        <span
          className="auth-card__footer-link"
          onClick={() => navigate('/login')}
        >
          {t('auth.register.sign_in')}
        </span>
      </p>

    </div>
  )
}