
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/react'

import './i18n/index.js'
import './store/useLanguageStore'
import './index.css'
import App from './App.jsx'
import ClerkAxiosBridge from './components/clerk/ClerkAxiosBridge.jsx'

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!publishableKey) {
  throw new Error('Missing VITE_CLERK_PUBLISHABLE_KEY')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <ClerkAxiosBridge />
      <App />
    </ClerkProvider>
  </StrictMode>
)
