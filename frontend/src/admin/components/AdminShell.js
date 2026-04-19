import React from 'react'
import logo from '../../includes/logo.svg'

export default function AdminShell({ title, subtitle, children }) {
  return (
    <div className="App">
      <div className="survey">
        <div className="head">
          <div className="header">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="survey-title">
            <p>{title}</p>
          </div>
        </div>

        <div className="messageBox">
          <p className="message-info">{subtitle}</p>
        </div>

        {children}
      </div>
    </div>
  )
}

