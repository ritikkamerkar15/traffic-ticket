import React from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={
          <div className="p-4">
            <h1 className="text-2xl font-bold">Welcome</h1>
          </div>
        } />
      </Routes>
    </div>
  )
}

export default App