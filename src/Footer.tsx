import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Unsere Angebote</h4>
          <ul>
            <li><Link to="/">Startseite</Link></li>
            <li><Link to="/ikigai-workshop">Ikigai-Workshop</Link></li>
            <li><Link to="/fuehren-in-veraenderungsprozessen">Führen in Veränderungsprozessen</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Rechtliches</h4>
          <ul>
            <li><Link to="/impressum">Impressum</Link></li>
            <li><Link to="/datenschutz">Datenschutz</Link></li>
            <li><Link to="/agb">AGB</Link></li>
            <li><Link to="/widerruf">Widerrufsrecht</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Zahlung & Sicherheit</h4>
          <p>Sichere Zahlungsabwicklung über Stripe. Alle Transaktionen sind SSL-verschlüsselt.</p>
          <p>Bei Fragen zur Zahlung wenden Sie sich bitte an office@entwicklungs-werkstatt.com</p>
        </div>
        <div className="footer-section">
          <h4>Kontakt</h4>
          <p>office@entwicklungs-werkstatt.com</p>
        </div>
      </div>
    </footer>
  )
}
