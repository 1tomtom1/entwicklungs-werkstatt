import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fontsource/playfair-display/700.css'
import '@fontsource/lora/400.css'
import '@fontsource/lora/500.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import App from './App.tsx'
import Impressum from './Impressum.tsx'
import AGB from './AGB.tsx'
import Widerrufsbelehrung from './Widerrufsbelehrung.tsx'
import Datenschutz from './Datenschutz.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/widerruf" element={<Widerrufsbelehrung />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
