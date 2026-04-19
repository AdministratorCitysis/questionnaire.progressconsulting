import React, { useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Background from '../../includes/GateBackground.png'
import logo from '../../includes/logo.svg'
import { authenticateAdmin, getAdminAuthErrorMessage } from '../services/admin-auth-service'

const sectionStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

export default function AdminLoginPage() {
  const history = useHistory()
  const [form, setForm] = useState({ email: '', password: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const isDisabled = useMemo(() => {
    return isSubmitting || form.email.trim() === '' || form.password.trim() === ''
  }, [form.email, form.password, isSubmitting])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
    if (error !== '') {
      setError('')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      await authenticateAdmin({ email: form.email, password: form.password })
      history.push('/admin/dashboard')
    } catch (authError) {
      setError(getAdminAuthErrorMessage(authError))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="gate" style={sectionStyle}>
      <div className="login" style={{ height: 'auto', minHeight: '420px', paddingBottom: '14px' }}>
        <div className="logo" style={{ width: '60%', marginTop: '10px', marginBottom: '10px' }}>
          <img src={logo} alt="Progress Consulting" />
        </div>

        <form onSubmit={handleSubmit} style={{ width: '82%' }} noValidate>
          <input
            id="admin-email"
            type="email"
            placeholder="E-Mail"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="username"
            disabled={isSubmitting}
            required
          />
          <input
            id="admin-password"
            type="password"
            placeholder="Mot de passe"
            name="password"
            value={form.password}
            onChange={handleChange}
            autoComplete="current-password"
            disabled={isSubmitting}
            required
          />

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button type="submit" disabled={isDisabled}>
              {isSubmitting ? 'CONNEXION...' : 'CONNEXION'}
            </button>
          </div>
        </form>

        {error !== '' ? <p className="message-alert">{error}</p> : <p className="message-alert">&nbsp;</p>}

        <p className="asterix" style={{ fontSize: '14px', padding: '0 16px', marginTop: '6px' }}>
          Acces reserve aux administrateurs autorises. Assistance: support@progressconsulting.be
        </p>
      </div>
    </div>
  )
}
