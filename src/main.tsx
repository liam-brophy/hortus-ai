import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './basic.css'
import TestApp from './TestApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TestApp />
  </StrictMode>,
)
