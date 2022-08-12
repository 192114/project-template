import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

import './index.scss'

const rootElement = document.createElement('div')

const root = createRoot(rootElement)

document.appendChild(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
