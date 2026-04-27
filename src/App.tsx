import { Link } from 'react-router-dom'
import './App.css'

export default function App() {
  const stripeCheckoutUrl = 'https://buy.stripe.com/bJe8wO8oscrc2aU4GK2wU01'

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tagline">Das Ikigai-Prinzip</p>
          <h1 className="hero-title">Finde mehr Sinn und Freude in deinem Leben.</h1>
          <p className="subheadline hero-subheadline">
            Dein 3-stündiger Intensiv-Workshop für berufliche und private Klarheit. Live im LOKAL Bruchköbel.
          </p>
          <button
            className="btn btn-primary btn-large hero-button"
            onClick={() => window.location.href = stripeCheckoutUrl}
          >
            Jetzt Platz sichern für 69 Euro
          </button>
          <p className="hero-note">
            Begrenzt auf 14 Teilnehmer/-innen für einen persönlichen und intensiven Austausch.
          </p>
        </div>
      </section>

      {/* Section 2: Was erwartet dich? */}
      <section className="section section-2">
        <h2>Was erwartet dich?</h2>
        <p className="intro-text">
          Wir begleiten dich durch die vier Dimensionen deines Ikigai, damit du am Ende des Nachmittags mit einem konkreten Bild deiner Zukunft nach Hause gehst:
        </p>
        <div className="cards-grid">
          <div className="card">
            <h3>Deine Leidenschaft entfachen</h3>
            <p>Wir identifizieren die Tätigkeiten, bei denen du die Zeit vergisst und dir echte Energie schenkst.</p>
          </div>
          <div className="card">
            <h3>Deine Mission definieren</h3>
            <p>Finde heraus, welchen positiven Unterschied du in der Welt (oder deinem Unternehmen) machen möchtest.</p>
          </div>
          <div className="card">
            <h3>Deine Stärken schärfen</h3>
            <p>Werde dir deiner Talente bewusst – auch jener, die im Alltag oft als „selbstverständlich" übergangen werden.</p>
          </div>
          <div className="card">
            <h3>Deinen Wert erkennen</h3>
            <p>Wir bringen deine Fähigkeiten mit dem in Einklang, was wirklich gebraucht und wertgeschätzt wird.</p>
          </div>
        </div>
        <p className="result-text">
          <strong>Das Ergebnis:</strong> Du verlässt den Workshop mit einer <strong>persönlichen Landkarte</strong>. Du hast den Kopf frei von Nebensächlichkeiten und hältst eine klare, schriftliche Orientierung in den Händen, die dir zeigt, wie du Sinnhaftigkeit und Lebensfreude fest in deinem Alltag verankerst.
        </p>
      </section>

      {/* Section 3: Für wen der Workshop ist */}
      <section className="section section-3">
        <h2>Für wen der Workshop ist</h2>
        <div className="checklist-intro-wrapper">
          <p className="intro-text intro-text-bold">
            Du bist hier richtig, wenn Du...
          </p>
          <div className="checklist">
            <div className="check-item">
              <span className="check-icon">✓</span>
              <p><strong>Verantwortung trägst,</strong> aber spürst, dass deine eigene Begeisterung im Alltagstrübel oft auf der Strecke bleibt.</p>
            </div>
          <div className="check-item">
            <span className="check-icon">✓</span>
            <p><strong>Erfolgreich bist,</strong> dich aber dennoch fragst, ob das schon alles war oder da noch ein tieferer Sinn auf dich wartet.</p>
          </div>
          <div className="check-item">
            <span className="check-icon">✓</span>
            <p><strong>Vor einer Entscheidung stehst</strong> und eine strukturierte Methode suchst, um Kopf und Bauchgefühl in Einklang zu bringen.</p>
          </div>
          <div className="check-item">
            <span className="check-icon">✓</span>
            <p><strong>Den Wunsch nach Veränderung hast,</strong> aber statt vager Ratschläge ein konkretes Werkzeug (dein Ikigai) bevorzugst.</p>
          </div>
          <div className="check-item">
            <span className="check-icon">✓</span>
            <p><strong>Qualität schätzt</strong> und den Austausch in einem exklusiven Kreis von Gleichgesinnten auf Augenhöhe suchst.</p>
          </div>
        </div>
      </div>
        <p className="summary-text">
          <strong>Kurzum:</strong> Der Workshop ist für Menschen, die bereit sind, für drei Stunden die Pausentaste zu drücken, um danach mit mehr Fokus, Klarheit und Freude wieder durchzustarten.
        </p>
      </section>

      <section className="section section-ikigai">
        <h2>Was ist eigentlich Ikigai?</h2>
        <p className="intro-text">
          Ikigai (生き甲斐) ist ein japanisches Konzept und bedeutet frei übersetzt: „Das, wofür es sich lohnt, morgens aufzustehen."
        </p>
        <p className="intro-text">
          Es ist die Schnittmenge aus vier lebenswichtigen Fragen, die wir oft aus dem Blick verlieren:
        </p>
        <ul className="ikigai-list">
          <li>Was du liebst.</li>
          <li>Was du gut kannst.</li>
          <li>Was die Welt braucht.</li>
          <li>Wofür du bezahlt werden kannst.</li>
        </ul>
        <p className="result-text">
          Wer sein Ikigai findet, erlebt nicht nur mehr Sinn im Tun, sondern schützt sich auch aktiv vor dem Ausbrennen im Hamsterrad. Es ist dein persönlicher Kompass für ein Leben in Balance.
        </p>
      </section>

      {/* Section 5: Datum, Ort, Dauer */}
      <section className="section section-5">
        <h2>Wann und wo wir uns treffen</h2>
        <div className="event-details event-details-two-columns">
          <div className="detail-block">
            <h3>Datum</h3>
            <p>Sonntag, 31. Mai 2026</p>
          </div>
          <div className="detail-block">
            <h3>Zeit</h3>
            <p>15:00 – 18:00 Uhr</p>
          </div>
          <div className="detail-block">
            <h3>Ort</h3>
            <p>LOKAL, Innerer Ring 1a, 63486 Bruchköbel</p>
          </div>
          <div className="detail-block">
            <h3>Dauer</h3>
            <p>3 Stunden inklusive einer Pause</p>
          </div>
        </div>
      </section>

      <section className="section section-price">
        <h2>Preis, Anmeldung & Verpflegung</h2>
        <div className="price-copy">
          <p><strong>Preis:</strong></p>
          <p>69 Euro brutto</p>
          <p className="price-highlight"><strong>Das ist in deinem Ticket enthalten:</strong></p>
          <ul className="price-list">
            <li>Teilnahme am Live-Workshop - geleitet von zwei erfahrenen Trainer/-innen</li>
            <li>Das Ikigai-Workbook - ein hochwertiges, gedrucktes Arbeitsbuch für deine Reflexion und spätere Nutzung</li>
            <li>exklusiver Rahmen - eine kleine Gruppe von maximal 14 Teilnehmern/-innen für echten Austausch auf Augenhöhe</li>
          </ul>
          <p className="price-highlight"><strong>Wichtiger Hinweis zur Verpflegung:</strong></p>
          <p className="note-text">
            Damit du bestens versorgt bist, kannst Du im LOKAL vorab Kaltgetränke, Kaffespezialitäten und kleine Snacks ganz nach deinem Geschmack auf eigene Rechnung bestellen.
          </p>
          <button
            className="btn btn-primary btn-large hero-button"
            onClick={() => window.location.href = stripeCheckoutUrl}
          >
            Jetzt verbindlich anmelden & Platz sichern
          </button>
          <p className="payment-note centered-payment-note">
            Sichere Zahlung per Kreditkarte, Apple Pay, Google Pay oder SEPA-Lastschrift über den Zahlungsdienstleister Stripe
          </p>
        </div>
      </section>

      <section className="section section-about">
        <h2>Über uns</h2>
        <div className="about-intro">
          <p>Wir begleiten Menschen mit Leidenschaft dabei, sich weiterzuentwickeln, neue Perspektiven zu entdecken und eigene Stärken bewusster zu nutzen.</p>
          <p>Wir beide brennen für unsere Arbeit, die darin besteht, Menschen in ihrer persönlichen Entwicklung ein Stück zu begleiten. Im Hauptberuf sind wir Führungskräftetrainer und Coaches – mit fundierten Ausbildungen in beiden Bereichen. Seit 2013 haben wir zahlreiche Workshops, Seminare und persönliche Coachings gestaltet und dabei immer wieder erlebt, wie wertvoll ein geschützter Raum für Austausch, Reflexion und Entwicklung sein kann.</p>
          <p>Da wir beide in Bruchköbel leben, ist es uns ein besonderes Anliegen, nun auch hier vor Ort ein Angebot zu schaffen: nahbar, persönlich und mit echtem Bezug zu unserer Heimatstadt.</p>
          <p>Wenn Du Lust hast, Dich ein Stück von uns begleiten zu lassen, bist Du herzlich willkommen in unserem Workshop.</p>
        </div>
        <div className="about-grid">
          <article className="about-card">
            <img src="/Thomas.jpeg" alt="Thomas Wiedmann" className="about-photo" />
            <h3 className="about-name">Thomas Wiedmann</h3>
          </article>
          <article className="about-card">
            <img src="/Franziska.jpeg" alt="Franziska Splinter" className="about-photo" />
            <h3 className="about-name">Franziska Splinter</h3>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
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
    </div>
  )
}
