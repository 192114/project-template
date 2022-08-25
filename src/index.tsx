import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import App from './App'
import './index.css'

const rootElement = document.createElement('div')

const root = createRoot(rootElement)

document.body.appendChild(rootElement)

root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)
