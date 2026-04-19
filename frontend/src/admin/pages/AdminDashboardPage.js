import React from 'react'
import { Link } from 'react-router-dom'
import AdminShell from '../components/AdminShell'

export default function AdminDashboardPage() {
  return (
    <AdminShell
      title="Dashboard Admin"
      subtitle="Tableau de bord administrateur - base prête pour la suite (gestion questionnaires/utilisateurs)."
    >
      <div className="boxes">
        <div className="box">
          <div className="checklist">
            <p className="checklistItem">Authentification</p>
            <p className="checklistItem">À implémenter côté backend</p>
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
        <Link to="/admin/login" style={{ textDecoration: 'none' }}>
          <p>Se déconnecter</p>
        </Link>
      </div>
    </AdminShell>
  )
}

