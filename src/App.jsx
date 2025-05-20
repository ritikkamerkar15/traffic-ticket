import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from './components/auth/LoginForm'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App