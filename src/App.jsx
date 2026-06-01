import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { supabase } from './lib/supabase'
import './i18n'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'

export default function App() {
  const [session, setSession] = useState(undefined) // undefined = loading

  useEffect(() => {
    // Let's see if someone's already signed in
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    // Keep an ear out for sign in/out changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    // Cleanup when we're done
    return () => subscription.unsubscribe()
  }, [])

  // Still figuring out who's here
  if (session === undefined) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#faf8f2',
        fontFamily: "'DM Sans', sans-serif",
        color: '#1a6b4a',
        fontSize: '15px'
      }}>
        Just a sec...
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={session ? <Navigate to="/" replace /> : <AuthPage />}
        />
        <Route
          path="/*"
          element={session ? <HomePage session={session} /> : <Navigate to="/auth" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}
