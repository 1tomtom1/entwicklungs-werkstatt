import { Link } from 'react-router-dom'
import './App.css'
import Footer from './Footer'

const requestMailto =
  'mailto:office@entwicklungs-werkstatt.com' +
  '?subject=' + encodeURIComponent('Anfrage Inhouse-Seminar „Führen in Veränderungsprozessen“') +
  '&body=' + encodeURIComponent(
    'Guten Tag,\n\n' +
    'wir interessieren uns für das Inhouse-Seminar „Führen in Veränderungsprozessen“.\n\n' +
    'Organisation:\n' +
    'Ansprechperson:\n' +
    'Veränderungsvorhaben, an dem wir arbeiten möchten (kurz):\n' +
    'Geplante Teilnehmerzahl (max. 14):\n' +
    'Wunschzeitraum:\n' +
    'Ort (bei uns vor Ort / Raum, den wir bereitstellen):\n\n' +
    'Viele Grüße'
  )

export default function FuehrenInVeraenderungsprozessen() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">Zum Inhalt springen</a>
      <div className="top-bar">
        <Link to="/" className="top-bar-link">← Zur Startseite</Link>
      </div>

      {/* Hero Section */}
      <section className="hero hero-home" id="main-content">
        <div className="hero-content">
          <p className="hero-tagline">Inhouse-Seminar für Organisationen</p>
          <h1 className="hero-title hero-title-long">Führen in Veränderungsprozessen</h1>
          <p className="subheadline hero-subheadline">
            Ein Tagesseminar, in dem deine Führungskräfte lernen, Veränderungen wirksam zu begleiten – direkt an einem Veränderungsprozess, der in deiner Organisation gerade läuft oder geplant ist.
          </p>
          <a href={requestMailto} className="btn btn-primary btn-large hero-button">
            Termin anfragen
          </a>
          <p className="hero-note">
            Für Gruppen bis zu 14&nbsp;Personen, direkt in deiner Organisation.
          </p>
        </div>
      </section>

      {/* Preis & Anfrage */}
      <section className="section section-price">
        <h2>Preis und Anfrage</h2>
        <div className="price-card">
          <p className="price-amount">1.290&nbsp;Euro</p>
          <p className="price-unit">pro Tagesseminar</p>
          <ul>
            <li>für bis zu 14&nbsp;Teilnehmende</li>
            <li>inklusive Arbeitsheft für jede teilnehmende Person</li>
            <li>Anfahrt inklusive</li>
          </ul>
          <p className="note-text">Gemäß §&nbsp;19&nbsp;UStG wird keine Umsatzsteuer berechnet.</p>
        </div>

        <h3 className="steps-heading">So läuft deine Anfrage ab</h3>
        <ol className="steps">
          <li className="step">
            <span className="step-number" aria-hidden="true">1</span>
            <div>
              <h4 className="step-title">Anfrage</h4>
              <p>Du schreibst uns eine kurze E-Mail.</p>
            </div>
          </li>
          <li className="step">
            <span className="step-number" aria-hidden="true">2</span>
            <div>
              <h4 className="step-title">Gespräch</h4>
              <p>Wir klären Ziele und Rahmen in einem kurzen Gespräch.</p>
            </div>
          </li>
          <li className="step">
            <span className="step-number" aria-hidden="true">3</span>
            <div>
              <h4 className="step-title">Termin</h4>
              <p>Wir legen gemeinsam Termin und Ort fest.</p>
            </div>
          </li>
        </ol>

        <div className="request-action">
          <a href={requestMailto} className="btn btn-primary btn-large">
            Termin anfragen
          </a>
          <p className="payment-note centered-payment-note">
            Deine Anfrage ist unverbindlich. Der Button öffnet eine vorbefüllte E-Mail an office@entwicklungs-werkstatt.com.
          </p>
        </div>
      </section>

      {/* Das Besondere: Training am echten Veränderungsprozess */}
      <div className="highlight-band">
        <section className="section">
          <h2>Das Besondere: Training am echten Veränderungsprozess</h2>
          <p className="intro-text">
            Kein Rollenspiel, keine erfundenen Fallstudien. Deine Führungskräfte trainieren die Kompetenz, Veränderungen zu begleiten, an dem Veränderungsprozess, der in deiner Organisation gerade läuft oder geplant ist.
          </p>
          <div className="highlight-points">
            <div className="highlight-card">
              <h3>Echte Vorhaben</h3>
              <p>Jede Person bringt ein reales Veränderungsthema mit, das sie gerade bewegt oder das ansteht.</p>
            </div>
            <div className="highlight-card">
              <h3>Konkrete Ergebnisse</h3>
              <p>In Kleingruppen entstehen für das eigene Vorhaben Change-Story, Führungskoalition, Stakeholder-Analyse, Ablaufplan, Beteiligung und Verankerung.</p>
            </div>
            <div className="highlight-card">
              <h3>Sofort wirksam</h3>
              <p>Die Teilnehmenden gehen nicht nur mit Wissen nach Hause, sondern mit einem Fahrplan für ihr eigenes Vorhaben.</p>
            </div>
          </div>
          <p className="intro-text highlight-closing">
            Theorie wird nicht nur erklärt, sondern gleich am eigenen Fall angewendet.
          </p>
        </section>
      </div>

      {/* Warum dieses Seminar? */}
      <section className="section section-2">
        <h2>Warum dieses Seminar?</h2>
        <p className="intro-text">
          Veränderungen scheitern selten an der Idee. Sie scheitern, wenn Menschen das Warum nicht verstehen, das Ziel unklar bleibt oder Sorgen kein Gehör finden.
        </p>
        <p className="intro-text">
          Führungskräfte stehen dabei an der entscheidenden Stelle: Sie geben Orientierung, beteiligen Betroffene und bleiben dran, auch wenn es zäh wird. Dieses Seminar gibt ihnen dafür bewährte Modelle und konkrete Werkzeuge an die Hand.
        </p>
      </section>

      {/* Für wen? */}
      <section className="section section-3">
        <h2>Für wen ist das Seminar?</h2>
        <div className="checklist-intro-wrapper">
          <div className="checklist">
            <div className="check-item">
              <span className="check-icon" aria-hidden="true">✓</span>
              <p><strong>Führungskräfte aller Ebenen,</strong> die Veränderungen in ihrem Team begleiten.</p>
            </div>
            <div className="check-item">
              <span className="check-icon" aria-hidden="true">✓</span>
              <p><strong>Teamleitungen und Projektverantwortliche,</strong> die Veränderungen konkret umsetzen müssen.</p>
            </div>
            <div className="check-item">
              <span className="check-icon" aria-hidden="true">✓</span>
              <p><strong>Organisationen,</strong> die ihre Führungskräfte auf anstehende Veränderungsprozesse vorbereiten möchten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Was deine Führungskräfte mitnehmen */}
      <section className="section section-2">
        <h2>Was deine Führungskräfte mitnehmen</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Veränderung strukturiert steuern</h3>
            <p>Das 8-Stufen-Modell nach Kotter – und warum die Stufen in der Praxis parallel laufen statt nacheinander.</p>
          </div>
          <div className="card">
            <h3>Überzeugend kommunizieren</h3>
            <p>Mit einer Change-Story Notwendigkeit, Zielbild und Weg verständlich machen – ehrlich und mit Herz.</p>
          </div>
          <div className="card">
            <h3>Betroffene verstehen</h3>
            <p>Die Stakeholder-Analyse zeigt, wer betroffen ist, wer Einfluss hat und wie die Kommunikation darauf abgestimmt wird.</p>
          </div>
          <div className="card">
            <h3>Beteiligung gestalten</h3>
            <p>Formate, in denen Sorgen und Fragen Raum bekommen – und Stabilitätsanker, die zeigen, was bleibt.</p>
          </div>
          <div className="card">
            <h3>Mit Widerstand umgehen</h3>
            <p>Widerstand verstehen als nicht wissen, nicht wollen, nicht können oder nicht dürfen – und Angst als natürliche Reaktion ernst nehmen.</p>
          </div>
          <div className="card">
            <h3>Dranbleiben und verankern</h3>
            <p>Quick Wins planen, einen Ablaufplan aufstellen und Neues dauerhaft zum Standard machen.</p>
          </div>
        </div>
      </section>

      {/* So arbeiten wir */}
      <section className="section section-2">
        <h2>So arbeiten wir</h2>
        <p className="intro-text">
          Erfahrungsaustausch, Kleingruppenarbeit, kompakter Fachinput und der Transfer in die Praxis. Jede teilnehmende Person erhält ein Arbeitsheft zum Nachschlagen und Bearbeiten.
        </p>
      </section>

      {/* Tagesablauf */}
      <section className="section section-5">
        <h2>Der Tag im Überblick</h2>
        <div className="agenda-grid">
          <div className="agenda-col">
            <h3>Vormittag</h3>
            <ul>
              <li>Ankommen und Einstieg</li>
              <li>Warum Veränderung? Die Ausgangslage</li>
              <li>Das Kotter-Modell in der Praxis</li>
              <li>Change-Story entwickeln und vortragen</li>
              <li>Stakeholder und Kommunikation</li>
            </ul>
          </div>
          <div className="agenda-col">
            <h3>Nachmittag</h3>
            <ul>
              <li>Hindernisse erkennen und Beteiligung gestalten</li>
              <li>Umgang mit Widerstand und Angst</li>
              <li>Fallarbeit am eigenen Vorhaben</li>
              <li>Dranbleiben und Verankern</li>
              <li>Feedback und Abschluss</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rahmen */}
      <section className="section section-5">
        <h2>Der Rahmen</h2>
        <div className="event-details event-details-two-columns">
          <div className="detail-block">
            <h3>Dauer</h3>
            <p>Tagesseminar, ca. 7&nbsp;Stunden inklusive Pausen</p>
          </div>
          <div className="detail-block">
            <h3>Gruppengröße</h3>
            <p>Bis zu 14&nbsp;Personen</p>
          </div>
          <div className="detail-block">
            <h3>Ort</h3>
            <p>Bei dir vor Ort oder in einem Raum, den deine Organisation bereitstellt</p>
          </div>
          <div className="detail-block">
            <h3>Termin</h3>
            <p>Nach Absprache</p>
          </div>
        </div>
      </section>

      {/* Abschluss-CTA */}
      <section className="section section-cta">
        <h2>Lass uns über dein Veränderungsvorhaben sprechen</h2>
        <div className="request-action">
          <a href={requestMailto} className="btn btn-primary btn-large">
            Termin anfragen
          </a>
        </div>
      </section>

      {/* Über uns */}
      <section className="section section-about">
        <h2>Über uns</h2>
        <div className="trainer-grid">
          <div className="trainer-card">
            <h3>Thomas Wiedmann</h3>
            <p>Führungskräftetrainer und Coach.</p>
          </div>
          <div className="trainer-card">
            <h3>Alexandra Schuth</h3>
            <p>[Platzhalter: Kurzbiografie und Foto folgen]</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
