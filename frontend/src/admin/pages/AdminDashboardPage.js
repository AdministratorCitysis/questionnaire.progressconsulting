import React from 'react'
import { useHistory } from 'react-router-dom'
import AdminShell from '../components/AdminShell'
import { useAdminAuth } from '../context/AdminAuthContext'

export default function AdminDashboardPage() {
  const { admin, logout } = useAdminAuth()
  const history = useHistory()

  const handleLogout = () => {
    logout()                       // clears sessionStorage token + auth state
    history.push('/admin/login')   // redirect to login
  }

  const subtitle = admin
    ? `Connecté en tant que ${admin.name || admin.email}`
    : 'Tableau de bord administrateur'

  return (
    <AdminShell
      title="Dashboard Admin"
      subtitle={subtitle}
    >
      <div className="boxes">
        <div className="box">
          <div className="checklist">
            <p className="checklistItem">Authentification</p>
            <p className="checklistItem">✓ Connecté au backend</p>
          </div>
        </div>
        <div className="box">
          <div className="checklist">
            <p className="checklistItem">Questionnaires</p>
            <p className="checklistItem">Gestion à brancher</p>
          </div>
        </div>
        <div className="box">
          <div className="checklist">
            <p className="checklistItem">Utilisateurs</p>
            <p className="checklistItem">Gestion à brancher</p>
          </div>
        </div>
      </div>

      <div className="download-button">
        <button
          onClick={handleLogout}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            color: 'inherit',
          }}
        >
          <p>Se déconnecter</p>
        </button>
      </div>
    </AdminShell>
  )
}
