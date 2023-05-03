import { useEffect, useState } from 'react'
import './App.css'

import { auth } from './context/auth'

import { getToken, clearToken } from './utils/authCookie'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Restrict from './pages/Restrict'
import DashBoard from './pages/DashBoard'
import NotFound from './pages/NotFound'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = getToken()

    // clearToken()
    if (typeof token === 'undefined') {
      setIsAuthenticated(false)
    }
    else {
      setIsAuthenticated(true)
    }
  }, [])

  if (localStorage.getItem('token')) {
    setIsAuthenticated(true)
  }


  if (!isAuthenticated) {
    return (
      <>
        <auth.Provider value={[isAuthenticated, setIsAuthenticated]}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Restrict />} />
          </Routes>
        </auth.Provider>
      </>
    )
  }

  return (
    <>
      <auth.Provider value={[isAuthenticated, setIsAuthenticated]}>
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </auth.Provider>
    </>
  )
}

export default App
