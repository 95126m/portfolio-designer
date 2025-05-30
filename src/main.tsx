import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from '@/theme/GlobalStyles'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)
