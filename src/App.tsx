import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const Login = lazy(() => import('./pages/Login'))

function App() {

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </Suspense>
  )
}

export default App
