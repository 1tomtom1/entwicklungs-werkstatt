import { Link } from 'react-router-dom'

const h2style = { fontSize: '1.5rem', color: 'var(--dark)', marginTop: '2rem', textAlign: 'left' as const }

export default function Impressum() {
  return (
    <div className="app">
      <section className="section">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link to="/" className="btn btn-back" style={{ marginBottom: '2rem', display: 'inline-block' }}>
            ← Zurück zur Startseite
          </Link>

          <h1 style={{ textAlign: 'left' }}>Impressum</h1>
          <p style={{ marginBottom: '2rem', fontStyle: 'italic' }}>Angaben gemäß §5 DDG</p>

          <h2 style={h2style}>Angaben zum Betreiber</h2>
          <p>
            <strong>Thomas Wiedmann</strong><br />
            Werner-von-Siemens-Straße 35<br />
            63486 Bruchköbel
          </p>

          <h2 style={h2style}>Vertreten durch</h2>
          <p>Thomas Wiedmann</p>

          <h2 style={h2style}>Kontakt</h2>
          <p>
            <strong>Telefon:</strong> 06181-2997144<br />
            <strong>E-Mail:</strong> office@entwicklungs-werkstatt.com
          </p>

          <h2 style={h2style}>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
            <strong>DE461433759</strong>
          </p>

          <h2 style={h2style}>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>
            Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil und sind dazu auch nicht verpflichtet.
          </p>
        </div>
      </section>
    </div>
  )
}
