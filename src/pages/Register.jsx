import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import appConfig from '../config/appConfig'
import { registerApi } from '../api/auth'
import './styles/Register.css'
import './styles/Login.css'
import FormAlert from '../components/common/FormAlert'
import FormField from '../components/common/FormField'

export default function Register() {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')
  const [success, setSuccess] = useState('')

  const [form, setForm] = useState({
    fullName:        '',
    username:        '',
    email:           '',
    phone:           '',
    password:        '',
    confirmPassword: '',
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
      const body = {
        fullName: form.fullName,
        username: form.username,
        email:    form.email,
        phone:    form.phone,
        password: form.password,
      }

      const res = await registerApi(body)

      setSuccess(
        res.data?.[appConfig.auth.messageKey] || 'Registration successful!'
      )

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
    <div className="register-card">

      <div className="register-card__logo">
        MIG<span>FORA</span>
      </div>

      <h1 className="register-card__title">Create account</h1>
      <p className="register-card__subtitle">Fill in your details to get started</p>

      <form onSubmit={handleSubmit} className="register-card__form">

        {/* Row 1 — Full Name + Username */}
        <div className="register-card__row">
          <FormField
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
          <FormField
            label="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="johndoe"
            required
          />
        </div>

        {/* Row 2 — Email + Phone */}
        <div className="register-card__row">
          <FormField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@email.com"
            required
          />
          <FormField
            label="Phone Number"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+966 5X XXX XXXX"
            required
          />
        </div>

        {/* Row 3 — Password + Confirm */}
        <div className="register-card__row">
          <FormField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Min. 8 characters"
            required
            minLength={8}
          />
          <FormField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Repeat password"
            required
          />
        </div>

        <FormAlert type="error"   message={error}   />
        <FormAlert type="success" message={success} />

        <FormButton
          type="submit"
          variant="primary"
          loading={loading}
          loadingText="Creating account…"
          fullWidth
        >
          Create Account
        </FormButton>

      </form>

      <p className="register-card__footer">
        Already have an account?{' '}
        <span onClick={() => navigate('/login')}>Sign in</span>
      </p>

    </div>
  )
}