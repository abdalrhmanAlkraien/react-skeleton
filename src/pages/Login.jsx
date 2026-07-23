import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import appConfig from '../config/appConfig'
import useAuthStore from '../store/authStore'
import { loginApi } from '../api/auth'
import './styles/Login.css'
import FormButton from '../components/common/FormButton'
import FormAlert from '../components/common/FormAlert'
import FormField from '../components/common/FormField'

export default function Login() {
  const navigate = useNavigate()
  const { setAuth } = useAuthStore()

  const [identifier, setIdentifier] = useState('')
  const [password, setPassword]     = useState('')
  const [loading, setLoading]       = useState(false)
  const [error, setError]           = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const body = {
        [appConfig.loginIdentifier]: identifier,
        password,
      }

      const res   = await loginApi(body)
      const data  = res.data
      const token = data[appConfig.auth.tokenKey]
      const user  = data[appConfig.auth.userKey]

      setAuth(token, user)
      navigate('/dashboard')

    } catch (err) {
      setError(
        err.response?.data?.[appConfig.auth.messageKey] ||
        'Login failed. Please check your credentials.'
      )
    } finally {
      setLoading(false)
    }
  }

  const identifierLabel = {
    email:    'Email',
    username: 'Username',
    phone:    'Phone Number',
  }[appConfig.loginIdentifier]

  const identifierType = {
    email:    'email',
    username: 'text',
    phone:    'tel',
  }[appConfig.loginIdentifier]

  return (
    <div className="login-card">

      <div className="login-card__logo">
        MIG<span>FORA</span>
      </div>

      <h1 className="login-card__title">Welcome back</h1>
      <p className="login-card__subtitle">Sign in to your account</p>

      <form onSubmit={handleSubmit} className="login-card__form">

        <FormField
          label={identifierLabel}
          name="identifier"
          type={identifierType}
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          placeholder={`Enter your ${identifierLabel.toLowerCase()}`}
          required
        />

        <FormField
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <FormAlert type="error" message={error} />

        <FormButton
          type="submit"
          variant="primary"
          loading={loading}
          loadingText="Signing in…"
          fullWidth
        >
          Sign In
        </FormButton>

      </form>

      <p className="login-card__footer">
        Don't have an account?{' '}
        <span onClick={() => navigate('/register')}>Register</span>
      </p>

    </div>
  )
}