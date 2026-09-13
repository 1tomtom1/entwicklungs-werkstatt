import { Link } from 'react-router-dom'
import './App.css'
import Footer from './Footer'

export default function IkigaiWorkshop() {
  const stripeCheckoutUrl = 'https://buy.stripe.com/bJecN47kocrcg1K6OS2wU02'

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">Zum Inhalt springen</a>
      <div className="top-bar">
        <Link to="/" className="top-bar-link">← Zur Startseite</Link>
      </div>

      {/* Hero Section */}
      <section className="hero" id="main-content">
        <div className="hero-content">
          <img src="/logo-ikigai-kreis.svg" alt="Ikigai Logo" className="hero-logo" width="279" height="279" />
          <p className="hero-tagline">IKIGAI-Workshop</p>
          <h1 className="hero-title">Gewinne mehr Klarheit in deinem Leben.</h1>
          <p className="subheadline hero-subheadline">
            Dein 4-stündiger Intensiv-Workshop für berufliche und private Lebenssituationen.<br />
            Live im LOKAL Bruchköbel.
          </p>
          <a
            href={stripeCheckoutUrl}
            className="btn btn-primary btn-large hero-button"
          >
            Jetzt Platz sichern für 69&nbsp;Euro
          </a>
          <p className="hero-note">
            Begrenzt auf 14&nbsp;Teilnehmer/-innen für einen persönlichen und intensiven Austausch.
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
            <p>Werde dir deiner Talente bewusst – auch jener, die im Alltag oft als „selbstverständlich“ übergangen werden.</p>
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
            Du bist hier genau richtig, wenn Du…
          </p>
          <div className="checklist">
            <div className="check-item">
              <span className="check-icon" aria-hidden="true">✓</span>
              <p><strong>Vor einer beruflichen Weggabelung stehst</strong> und Du wissen willst, ob dieser Weg wirklich zu Deinen inneren Werten passt.</p>
            </div>
          <div className="check-item">
            <span className="check-icon" aria-hidden="true">✓</span>
            <p><strong>Dich im Hamsterrad Deines Jobs fragst: „War das schon alles?“</strong> Du suchst nach der nötigen Klarheit, um Dich vielleicht sogar nebenberuflich neu zu erfinden.</p>
          </div>
          <div className="check-item">
            <span className="check-icon" aria-hidden="true">✓</span>
            <p><strong>Dich jahrelang für andere aufgegeben hast</strong> – und jetzt endlich den Mut finden willst, herauszufinden, was Dir Freude bereitet, was Deinem Leben Sinn verleiht und wie Du Dir wieder Raum für Deine eigenen Bedürfnisse schaffst.</p>
          </div>
          <div className="check-item">
            <span className="check-icon" aria-hidden="true">✓</span>
            <p><strong>In Deiner Beziehung nur noch „nebeneinander herlebst“</strong> und Klarheit darüber suchst, was Dir für eine erfüllte Zukunft wirklich wichtig ist und welche Schritte sich für Dich richtig anfühlen.</p>
          </div>
          <div className="check-item">
            <span className="check-icon" aria-hidden="true">✓</span>
            <p><strong>Keine vagen Ratschläge, sondern eine Entscheidungshilfe suchst.</strong> Du willst Dein Kopf- und Bauchgefühl endlich in Einklang bringen, um mit einem klaren „Ja“ zu Dir selbst den nächsten Schritt zu gehen.</p>
          </div>
        </div>
      </div>
        <p className="summary-text">
          <strong>Kurzum:</strong> Der Workshop ist für Menschen, die bereit sind, für drei Stunden die Pause-Taste zu drücken, um das Fundament für ihre nächsten großen Entscheidungen zu legen.
        </p>
      </section>

      <section className="section section-ikigai">
        <h2>Was ist eigentlich Ikigai?</h2>
        <p className="intro-text">
          Ikigai (生き甲斐) ist ein japanisches Konzept und bedeutet frei übersetzt: „Das, wofür es sich lohnt, morgens aufzustehen.“
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

      {/* Section: Eindrücke vom letzten Workshop */}
      <section className="section section-gallery">
        <h2>Eindrücke vom letzten Workshop</h2>
        <div className="gallery-grid-landscape">
          <img src="/Workshop_02.jpg" alt="Der Workshopraum im LOKAL Bruchköbel" className="gallery-img-landscape" loading="lazy" width="4000" height="2252" />
          <img src="/Workshop_03.jpg" alt="Workshop-Materialien auf dem Tisch" className="gallery-img-landscape" loading="lazy" width="4032" height="3024" />
          <img src="/Workshop_04.jpg" alt="Flipchart: Die 5 häufigsten Bedauern am Sterbebett" className="gallery-img-landscape" loading="lazy" width="4032" height="3024" />
          <img src="/Workshop_08.jpg" alt="Tischaufbau mit Blumen und Materialien" className="gallery-img-landscape" loading="lazy" width="4000" height="2252" />
          <img src="/Workshop_09.jpg" alt="Franziska beim Workshop im LOKAL" className="gallery-img-landscape" loading="lazy" width="4032" height="3024" />
          <img src="/Workshop_12.jpg" alt="Atmosphärische Nahaufnahme am Tisch" className="gallery-img-landscape" loading="lazy" width="4032" height="3024" />
        </div>
        <div className="gallery-grid-portrait">
          <img src="/Workshop_01.jpg" alt="Begrüßungs-Flipchart IKIGAI Workshop" className="gallery-img-portrait" loading="lazy" width="2252" height="4000" />
          <img src="/Workshop_05.jpg" alt="Teilnehmer beim Arbeiten" className="gallery-img-portrait" loading="lazy" width="3024" height="4032" />
          <img src="/Workshop_06.jpg" alt="Teilnehmerinnen im Gespräch" className="gallery-img-portrait" loading="lazy" width="2252" height="4000" />
          <img src="/Workshop_07.jpeg" alt="Flipchart mit Workshop-Mindmap" className="gallery-img-portrait" loading="lazy" width="2160" height="3840" />
          <img src="/Workshop_10.jpg" alt="Thomas Wiedmann am Ikigai-Diagramm" className="gallery-img-portrait" loading="lazy" width="2252" height="4000" />
          <img src="/Workshop_11.jpg" alt="Flipchart: 4 Fragen zum Abschluss" className="gallery-img-portrait" loading="lazy" width="2252" height="4000" />
        </div>
      </section>

      {/* Section 5: Datum, Ort, Dauer */}
      <section className="section section-5">
        <h2>Wann und wo wir uns treffen</h2>
        <div className="event-details event-details-two-columns">
          <div className="detail-block">
            <h3>Datum</h3>
            <p>Sonntag, 1. November 2026</p>
          </div>
          <div className="detail-block">
            <h3>Zeit</h3>
            <p>15:00 – 19:00&nbsp;Uhr</p>
          </div>
          <div className="detail-block">
            <h3>Ort</h3>
            <p>LOKAL, Innerer Ring 1a, 63486 Bruchköbel</p>
          </div>
          <div className="detail-block">
            <h3>Dauer</h3>
            <p>4&nbsp;Stunden inklusive Pausen</p>
          </div>
        </div>
      </section>

      <section className="section section-price">
        <h2>Preis, Anmeldung & Verpflegung</h2>
        <div className="price-copy">
          <p><strong>Preis:</strong></p>
          <p>69&nbsp;Euro brutto</p>
          <p className="price-highlight"><strong>Das ist in deinem Ticket enthalten:</strong></p>
          <ul className="price-list">
            <li>Teilnahme am Live-Workshop - geleitet von zwei erfahrenen Trainer/-innen</li>
            <li>Das Ikigai-Workbook - ein hochwertiges, gedrucktes Arbeitsbuch für deine Reflexion und spätere Nutzung</li>
            <li>exklusiver Rahmen - eine kleine Gruppe von maximal 14&nbsp;Teilnehmern/-innen für echten Austausch auf Augenhöhe</li>
            <li>faire Rückzahlungs-Garantie: Falls die Mindestanzahl von 8&nbsp;Teilnehmer/-innen nicht erreicht wird, erhältst Du Deine Kursgebühr zu 100%&nbsp;zurückerstattet.</li>
          </ul>
          <p className="price-highlight"><strong>Wichtiger Hinweis zur Verpflegung:</strong></p>
          <p className="note-text">
            Damit du bestens versorgt bist, kannst Du im LOKAL Kaltgetränke, Kaffespezialitäten und kleine Snacks ganz nach deinem Geschmack auf eigene Rechnung bestellen.
          </p>
          <a
            href={stripeCheckoutUrl}
            className="btn btn-primary btn-large hero-button"
          >
            Jetzt verbindlich anmelden & Platz sichern
          </a>
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
          <p className="about-name">Franziska Splinter und Thomas Wiedmann</p>
        </div>
        <img src="/Franziska und Thomas.jpg" alt="Thomas Wiedmann und Franziska Splinter" className="about-photo-large" loading="lazy" width="2736" height="3648" />
      </section>

      <Footer />
    </div>
  )
}
