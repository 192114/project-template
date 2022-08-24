import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import styles from './App.module.css'

const Login = lazy(() => import('./pages/Login'))

function App() {
  return (
    <Suspense fallback={null}>
      <div className={styles.title}>title<span>red</span></div>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </Suspense>
  )
}

export default App
