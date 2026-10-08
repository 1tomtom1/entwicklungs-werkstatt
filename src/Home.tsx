import { Link } from 'react-router-dom'
import './App.css'
import Footer from './Footer'

export default function Home() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">Zum Inhalt springen</a>

      {/* Hero Section */}
      <section className="hero hero-home" id="main-content">
        <div className="hero-content">
          <p className="hero-tagline">Seminare &amp; Workshops</p>
          <h1 className="hero-title">Deine Entwicklungswerkstatt</h1>
          <p className="subheadline hero-subheadline">
            Persönliche und berufliche Weiterentwicklung – nahbar, persönlich und mit echtem Praxisbezug.
          </p>
        </div>
      </section>

      <section className="section">
        <p className="intro-text">
          Ob im Beruf oder im Privatleben: Wer stehen bleibt, verpasst die Chance zu wachsen. Veränderung beginnt oft mit einer einzigen Frage – Was will ich wirklich? Genau hier setzen wir an.
        </p>
        <p className="intro-text">
          In unseren Seminaren und Workshops schaffen wir einen geschützten Raum für Reflexion, Austausch und echte Entwicklung. Fernab vom Alltagstrubel bekommst Du die Zeit und die Werkzeuge, um Klarheit zu gewinnen – über Deine berufliche Ausrichtung, Deine persönlichen Ziele oder die nächsten Schritte in Veränderungsprozessen.
        </p>
        <p className="intro-text">
          Denn Weiterentwicklung ist kein Luxus, sondern die Grundlage für ein erfülltes Leben und erfolgreiches Arbeiten. Wer sich selbst besser versteht, trifft bessere Entscheidungen, geht Herausforderungen gelassener an und bleibt auch in Zeiten des Wandels handlungsfähig.
        </p>
        <p className="intro-text">
          Wir freuen uns, Dich kennenzulernen.
        </p>
        <h2>Unsere Angebote</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Ikigai-Workshop</h3>
            <p>Gewinne mehr Klarheit in deinem Leben – ein 4-stündiger Intensiv-Workshop für berufliche und private Lebenssituationen.</p>
            <Link to="/ikigai-workshop" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
              Mehr erfahren
            </Link>
          </div>
          <div className="card">
            <h3>Führen in Veränderungsprozessen</h3>
            <p>Ein Inhouse-Tagesseminar für Organisationen: Führungskräfte trainieren, Veränderungen zu begleiten – direkt an einem Veränderungsprozess, der in deiner Organisation läuft oder geplant ist.</p>
            <Link to="/fuehren-in-veraenderungsprozessen" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
              Mehr erfahren
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
