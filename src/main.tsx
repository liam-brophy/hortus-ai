import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Import only index.css which now contains all styles
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContext'; // Import ThemeProvider

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider> {/* Wrap App with ThemeProvider */}
      <App />
    </ThemeProvider>
  </StrictMode>,
)
