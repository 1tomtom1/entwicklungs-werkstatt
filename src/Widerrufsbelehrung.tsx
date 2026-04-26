import { Link } from 'react-router-dom'

const h2style = { fontSize: '1.25rem', color: 'var(--dark)', marginTop: '2rem', textAlign: 'left' as const }
const h3style = { fontSize: '1.1rem', color: 'var(--dark)', marginTop: '1.5rem', textAlign: 'left' as const }

export default function Widerrufsbelehrung() {
  return (
    <div className="app">
      <section className="section">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link to="/" className="btn btn-back" style={{ marginBottom: '2rem', display: 'inline-block' }}>
            ← Zurück zur Startseite
          </Link>

          <h1 style={{ textAlign: 'left' }}>Widerrufsbelehrung &amp; Widerrufsformular</h1>
          <p>Verbrauchern steht ein Widerrufsrecht nach folgender Maßgabe zu, wobei Verbraucher jede natürliche Person ist, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können:</p>

          <h2 style={h2style}>A. Widerrufsbelehrung (Dienstleistungen)</h2>

          <h3 style={h3style}>Widerrufsrecht</h3>
          <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
          <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>
          <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Thomas Wiedmann, Werner-von-Siemens-Straße 35, 63486 Bruchköbel, Deutschland, Tel.: 061812997144, E-Mail: office@entwicklungs-werkstatt.com) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.</p>
          <p>Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
          <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>

          <h3 style={h3style}>Folgen des Widerrufs</h3>
          <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>
          <p>Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.</p>

          <h3 style={h3style}>Ausschluss bzw. vorzeitiges Erlöschen des Widerrufsrechts</h3>
          <p>Das Widerrufsrecht besteht nicht bei Verträgen zur Erbringung von Dienstleistungen im Zusammenhang mit Freizeitbetätigungen, wenn der Vertrag für die Erbringung einen spezifischen Termin oder Zeitraum vorsieht.</p>
          <p>Das Widerrufsrecht erlischt vorzeitig, wenn wir die Dienstleistung vollständig erbracht haben und wir mit der Ausführung der Dienstleistung erst begonnen haben, nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben haben und gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung durch uns verlieren.</p>

          <h2 style={h2style}>B. Widerrufsformular</h2>
          <p>Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden es zurück.</p>
          <div style={{ border: '1px solid #ccc', padding: '1.5rem', marginTop: '1rem', lineHeight: '2' }}>
            <p><strong>An:</strong><br />
            Thomas Wiedmann<br />
            Werner-von-Siemens-Straße 35<br />
            63486 Bruchköbel<br />
            Deutschland<br />
            E-Mail: office@entwicklungs-werkstatt.com</p>

            <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*) / die Erbringung der folgenden Dienstleistung (*):</p>
            <p>____________________________________________________________</p>
            <p>____________________________________________________________</p>
            <p>Bestellt am (*) ________________ / erhalten am (*) ________________</p>
            <p>____________________________________________________________<br />
            Name des/der Verbraucher(s)</p>
            <p>____________________________________________________________<br />
            Anschrift des/der Verbraucher(s)</p>
            <p>____________________________________________________________<br />
            Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</p>
            <p>________________________<br />
            Datum</p>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>(*) Unzutreffendes streichen</p>
          </div>
        </div>
      </section>
    </div>
  )
}
