import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fontsource/playfair-display/700.css'
import '@fontsource/lora/400.css'
import '@fontsource/lora/500.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import Home from './Home.tsx'
import IkigaiWorkshop from './IkigaiWorkshop.tsx'
import FuehrenInVeraenderungsprozessen from './FuehrenInVeraenderungsprozessen.tsx'
import Impressum from './Impressum.tsx'
import AGB from './AGB.tsx'
import Widerrufsbelehrung from './Widerrufsbelehrung.tsx'
import Datenschutz from './Datenschutz.tsx'
import ScrollToTop from './ScrollToTop.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ikigai-workshop" element={<IkigaiWorkshop />} />
        <Route path="/fuehren-in-veraenderungsprozessen" element={<FuehrenInVeraenderungsprozessen />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/widerruf" element={<Widerrufsbelehrung />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
