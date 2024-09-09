import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import Name from './components/Name'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Name />
  </StrictMode>,
)
