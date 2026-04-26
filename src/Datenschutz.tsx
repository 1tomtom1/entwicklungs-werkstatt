import { Link } from 'react-router-dom'

const h2style = { fontSize: '1.25rem', color: 'var(--dark)', marginTop: '2rem', textAlign: 'left' as const }
const h3style = { fontSize: '1.05rem', color: 'var(--dark)', marginTop: '1.5rem', textAlign: 'left' as const }

export default function Datenschutz() {
  return (
    <div className="app">
      <section className="section">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link to="/" className="btn btn-back" style={{ marginBottom: '2rem', display: 'inline-block' }}>
            ← Zurück zur Startseite
          </Link>

          <h1 style={{ textAlign: 'left' }}>Datenschutzerklärung</h1>

          <h2 style={h2style}>1) Einleitung und Kontaktdaten des Verantwortlichen</h2>
          <p><strong>1.1</strong> Wir freuen uns, dass Sie unsere Website besuchen, und bedanken uns für Ihr Interesse. Im Folgenden informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten bei der Nutzung unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          <p><strong>1.2</strong> Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist Thomas Wiedmann, Werner-von-Siemens-Straße 35, 63486 Bruchköbel, Deutschland, Tel.: 061812997144, E-Mail: office@entwicklungs-werkstatt.com. Der für die Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>

          <h2 style={h2style}>2) Datenerfassung beim Besuch unserer Website</h2>
          <p><strong>2.1</strong> Bei der bloß informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur solche Daten, die Ihr Browser an den Seitenserver übermittelt (sog. „Server-Logfiles"). Wenn Sie unsere Website aufrufen, erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:</p>
          <ul>
            <li>Unsere besuchte Website</li>
            <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
            <li>Menge der gesendeten Daten in Byte</li>
            <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
            <li>Verwendeter Browser</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
          </ul>
          <p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website. Eine Weitergabe oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.</p>
          <p><strong>2.2</strong> Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung personenbezogener Daten und anderer vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den Verantwortlichen) eine SSL- bzw. TLS-Verschlüsselung. Sie können eine verschlüsselte Verbindung an der Zeichenfolge „https://" und dem Schloss-Symbol in Ihrer Browserzeile erkennen.</p>

          <h2 style={h2style}>3) Hosting &amp; Content-Delivery-Network</h2>
          <p>Für das Hosting unserer Website und die Darstellung der Seiteninhalte nutzen wir einen Anbieter, der seine Leistungen selbst oder durch ausgewählte Sub-Unternehmer ausschließlich auf Servern innerhalb der Europäischen Union erbringt.</p>
          <p>Sämtliche auf unserer Website erhobenen Daten werden auf diesen Servern verarbeitet.</p>
          <p>Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.</p>

          <h2 style={h2style}>4) Cookies</h2>
          <p>Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir Cookies, also kleine Textdateien, die auf Ihrem Endgerät abgelegt werden. Teilweise werden diese Cookies nach Schließen des Browsers automatisch wieder gelöscht (sog. „Session-Cookies"), teilweise verbleiben diese Cookies länger auf Ihrem Endgerät und ermöglichen das Speichern von Seiteneinstellungen (sog. „persistente Cookies"). Im letzteren Fall können Sie die Speicherdauer der Übersicht zu den Cookie-Einstellungen Ihres Webbrowsers entnehmen.</p>
          <p>Sofern durch einzelne von uns eingesetzte Cookies auch personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des Vertrages, gemäß Art. 6 Abs. 1 lit. a DSGVO im Falle einer erteilten Einwilligung oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der bestmöglichen Funktionalität der Website sowie einer kundenfreundlichen und effektiven Ausgestaltung des Seitenbesuchs.</p>
          <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen können.</p>
          <p>Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalität unserer Website eingeschränkt sein kann.</p>

          <h2 style={h2style}>5) Kontaktaufnahme</h2>
          <p>Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden – ausschließlich zum Zweck der Bearbeitung und Beantwortung Ihres Anliegens und nur im dafür erforderlichen Umfang – personenbezogene Daten verarbeitet.</p>
          <p>Rechtsgrundlage für die Verarbeitung dieser Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf einen Vertrag ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden gelöscht, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>

          <h2 style={h2style}>6) Datenverarbeitung zur Vertragsabwicklung</h2>
          <p><strong>6.1</strong> Zur Abwicklung des Vertrags arbeiten wir mit dem / den nachstehenden Dienstleister(n) zusammen, die uns ganz oder teilweise bei der Durchführung geschlossener Verträge unterstützen. An diese Dienstleister werden nach Maßgabe der folgenden Informationen gewisse personenbezogene Daten übermittelt.</p>
          <p><strong>6.2</strong> Verwendung von Paymentdienstleistern (Zahlungsdiensten)</p>

          <h3 style={h3style}>Apple Pay</h3>
          <p>Wenn Sie sich für die Zahlungsart „Apple Pay" der Apple Distribution International (Apple), Hollyhill Industrial Estate, Hollyhill, Cork, Irland, entscheiden, erfolgt die Zahlungsabwicklung über die „Apple Pay"-Funktion Ihres mit iOS, watchOS oder macOS betriebenen Endgerätes durch die Belastung einer bei „Apple Pay" hinterlegten Zahlungskarte. Apple Pay verwendet hierbei Sicherheitsfunktionen, die in die Hardware und Software Ihres Geräts integriert sind, um Ihre Transaktionen zu schützen. Für die Freigabe einer Zahlung ist somit die Eingabe eines zuvor durch Sie festgelegten Codes sowie die Verifizierung mittels der „Face ID"- oder „Touch ID"-Funktion ihres Endgerätes erforderlich.</p>
          <p>Zum Zwecke der Zahlungsabwicklung werden Ihre im Rahmen des Bestellvorgangs mitgeteilten Informationen nebst den Informationen über Ihre Bestellung in verschlüsselter Form an Apple weitergegeben. Apple verschlüsselt diese Daten sodann erneut mit einem entwicklerspezifischen Schlüssel, bevor die Daten zur Durchführung der Zahlung an den Zahlungsdienstleister der in Apple Pay hinterlegten Zahlungskarte übermittelt werden. Die Verschlüsselung sorgt dafür, dass nur die Website, über die der Einkauf getätigt wurde, auf die Zahlungsdaten zugreifen kann. Nachdem die Zahlung getätigt wurde, sendet Apple zur Bestätigung des Zahlungserfolges Ihre Geräteaccountnummer sowie einen transaktionsspezifischen, dynamischen Sicherheitscode an die Ausgangswebsite.</p>
          <p>Sofern bei den beschriebenen Übermittlungen personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung ausschließlich zum Zwecke der Zahlungsabwicklung gemäß Art. 6 Abs. 1 lit. b DSGVO.</p>
          <p>Apple bewahrt anonymisierte Transaktionsdaten auf, darunter der ungefähre Kaufbetrag, das ungefähre Datum und die ungefähre Uhrzeit sowie die Angabe, ob die Transaktion erfolgreich abgeschlossen wurde. Durch die Anonymisierung wird ein Personenbezug vollständig ausgeschlossen. Apple nutzt die anonymisierten Daten zur Verbesserung von „Apple Pay" und anderen Apple-Produkten und Diensten.</p>
          <p>Wenn Sie Apple Pay auf dem iPhone oder der Apple Watch zum Abschluss eines Kaufs verwenden, den Sie über Safari auf dem Mac getätigt haben, kommunizieren der Mac und das Autorisierungsgerät über einen verschlüsselten Kanal auf den Apple-Servern. Apple verarbeitet oder speichert keine dieser Informationen in einem Format, mit dem Ihre Person identifiziert werden kann. Sie können die Möglichkeit zur Verwendung von Apple Pay auf Ihrem Mac in den Einstellungen Ihres iPhone deaktivieren. Gehen Sie zu „Wallet &amp; Apple Pay", und deaktivieren Sie „Zahlungen auf Mac erlauben".</p>
          <p>Weitere Hinweise zum Datenschutz bei Apple Pay finden Sie unter: https://support.apple.com/de-de/HT203027</p>

          <h3 style={h3style}>Google Pay</h3>
          <p>Wenn Sie sich für die Zahlungsart „Google Pay" der Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland („Google") entscheiden, erfolgt die Zahlungsabwicklung über die „Google Pay"-Applikation Ihres mit mindestens Android 4.4 („KitKat") betriebenen und über eine NFC-Funktion verfügenden mobilen Endgeräts durch die Belastung einer bei Google Pay hinterlegten Zahlungskarte oder einem dort verifizierten Bezahlsystem (z.B. PayPal). Für die Freigabe einer Zahlung über Google Pay in Höhe von mehr als 25,- € ist das vorherige Entsperren Ihres mobilen Endgerätes durch die jeweils eingerichtete Verifikationsmaßnahme (etwa Gesichtserkennung, Passwort, Fingerabdruck oder Muster) erforderlich.</p>
          <p>Zum Zwecke der Zahlungsabwicklung werden Ihre im Rahmen des Bestellvorgangs mitgeteilten Informationen nebst den Informationen über Ihre Bestellung an Google weitergegeben. Google übermittelt sodann Ihre in Google Pay hinterlegten Zahlungsinformationen in Form einer einmalig vergebenen Transaktionsnummer an die Ausgangswebsite, mit der eine erfolgte Zahlung verifiziert wird. Diese Transaktionsnummer enthält keinerlei Informationen zu den realen Zahldaten Ihrer bei Google Pay hinterlegten Zahlungsmittel, sondern wird als einmalig gültiger numerischer Token erstellt und übermittelt. Bei sämtlichen Transaktionen über Google Pay tritt Google lediglich als Vermittler zur Abwicklung des Bezahlvorgangs auf. Die Durchführung der Transaktion erfolgt ausschließlich im Verhältnis zwischen dem Nutzer und der Ausgangswebsite durch Belastung des bei Google Pay hinterlegten Zahlungsmittels.</p>
          <p>Sofern bei den beschriebenen Übermittlungen personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung ausschließlich zum Zwecke der Zahlungsabwicklung gemäß Art. 6 Abs. 1 lit. b DSGVO.</p>
          <p>Google behält sich vor, bei jeder über Google Pay getätigten Transaktion bestimmte vorgangsspezifische Informationen zu erheben, zu speichern und auszuwerten. Hierzu gehören Datum, Uhrzeit und Betrag der Transaktion, Händlerstandort und -beschreibung, eine vom Händler bereitgestellte Beschreibung der gekauften Waren oder Dienste, Fotos, die Sie der Transaktion beigefügt haben, der Name und die E-Mail-Adresse des Verkäufers und Käufers bzw. des Absenders und Empfängers, die verwendete Zahlungsmethode, Ihre Beschreibung für den Grund der Transaktion sowie gegebenenfalls das mit der Transaktion verbundene Angebot.</p>
          <p>Laut Google erfolgt diese Verarbeitung ausschließlich gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis des berechtigten Interesses an der ordnungsgemäßen Rechnungslegung, der Verifizierung von Vorgangsdaten und der Optimierung und Funktionserhaltung des Google Pay-Dienstes.</p>
          <p>Google behält sich außerdem vor, die verarbeiteten Vorgangsdaten mit weiteren Informationen zusammenzuführen, die bei der Nutzung weiterer Google-Dienste durch Google erhoben und gespeichert werden.</p>
          <p>Weitere Hinweise zum Datenschutz bei Google Pay finden Sie unter: https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice&ldl=de</p>

          <h3 style={h3style}>Klarna</h3>
          <p>Auf dieser Website stehen eine oder mehrere Online-Zahlungsarten des folgenden Anbieters zur Verfügung: Klarna Bank AB, Sveavägen 46, 111 34 Stockholm, Schweden</p>
          <p>Bei Auswahl einer Zahlungsart des Anbieters, bei der Sie in Vorleistung gehen (etwa Kreditkartenzahlung), werden an diesen Ihre im Rahmen des Bestellvorgangs mitgeteilten Zahlungsdaten (darunter Name, Anschrift, Bank- und Zahlkarteninformationen, Währung und Transaktionsnummer) sowie Informationen über den Inhalt Ihrer Bestellung gemäß Art. 6 Abs. 1 lit. b DSGVO weitergegeben. Die Weitergabe Ihrer Daten erfolgt in diesem Falle ausschließlich zum Zweck der Zahlungsabwicklung mit dem Anbieter und nur insoweit, als sie hierfür erforderlich ist.</p>
          <p>Bei Auswahl einer Zahlungsart, bei der der Anbieter in Vorleistung geht (etwa Rechnungs- oder Ratenkauf bzw. Lastschrift), werden Sie im Bestellablauf auch aufgefordert, bestimmte persönliche Daten (Vor- und Nachname, Straße, Hausnummer, Postleitzahl, Ort, Geburtsdatum, E-Mail-Adresse, Telefonnummer, ggf. Daten zu einem alternativen Zahlungsmittel) anzugeben.</p>
          <p>Um unser berechtigtes Interesse an der Feststellung der Zahlungsfähigkeit unserer Kunden zu wahren, werden diese Daten von uns gemäß Art. 6 Abs. 1 lit. f DSGVO zum Zweck einer Bonitätsprüfung an den Anbieter weitergeleitet. Der Anbieter prüft auf Basis der von Ihnen angegebenen persönlichen Daten sowie weiterer Daten (wie etwa Warenkorb, Rechnungsbetrag, Bestellhistorie, Zahlungserfahrungen), ob die von Ihnen ausgewählte Zahlungsmöglichkeit im Hinblick auf Zahlungs- und/oder Forderungsausfallrisiken gewährt werden kann.</p>
          <p>Die Bonitätsauskunft kann Wahrscheinlichkeitswerte enthalten (sog. Score-Werte). Soweit Score-Werte in das Ergebnis der Bonitätsauskunft einfließen, haben sie ihre Grundlage in einem wissenschaftlich anerkannten mathematisch-statistischen Verfahren. In die Berechnung der Score-Werte fließen unter anderem, aber nicht ausschließlich, Anschriftendaten ein.</p>
          <p>Sie können dieser Verarbeitung Ihrer Daten jederzeit durch eine Nachricht an uns oder gegenüber dem Anbieter widersprechen. Jedoch bleibt der Anbieter ggf. weiterhin berechtigt, Ihre personenbezogenen Daten zu verarbeiten, sofern dies zur vertragsgemäßen Zahlungsabwicklung erforderlich ist.</p>

          <h3 style={h3style}>Sofortüberweisung</h3>
          <p>Auf dieser Website stehen eine oder mehrere Online-Zahlungsarten des folgenden Anbieters zur Verfügung: Klarna Bank AB (publ), Sveavägen 46, 11134 Stockholm, Schweden</p>
          <p>Bei Auswahl einer Zahlungsart des Anbieters, bei der Sie in Vorleistung gehen (etwa Kreditkartenzahlung), werden an diesen Ihre im Rahmen des Bestellvorgangs mitgeteilten Zahlungsdaten (darunter Name, Anschrift, Bank- und Zahlkarteninformationen, Währung und Transaktionsnummer) sowie Informationen über den Inhalt Ihrer Bestellung gemäß Art. 6 Abs. 1 lit. b DSGVO weitergegeben. Die Weitergabe Ihrer Daten erfolgt in diesem Falle ausschließlich zum Zweck der Zahlungsabwicklung mit dem Anbieter und nur insoweit, als sie hierfür erforderlich ist.</p>

          <h3 style={h3style}>Stripe</h3>
          <p>Auf dieser Website stehen eine oder mehrere Online-Zahlungsarten des folgenden Anbieters zur Verfügung: Stripe Payments Europe Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland</p>
          <p>Bei Auswahl einer Zahlungsart des Anbieters, bei der Sie in Vorleistung gehen (etwa Kreditkartenzahlung), werden an diesen Ihre im Rahmen des Bestellvorgangs mitgeteilten Zahlungsdaten (darunter Name, Anschrift, Bank- und Zahlkarteninformationen, Währung und Transaktionsnummer) sowie Informationen über den Inhalt Ihrer Bestellung gemäß Art. 6 Abs. 1 lit. b DSGVO weitergegeben. Die Weitergabe Ihrer Daten erfolgt in diesem Falle ausschließlich zum Zweck der Zahlungsabwicklung mit dem Anbieter und nur insoweit, als sie hierfür erforderlich ist.</p>
          <p>Bei Auswahl einer Zahlungsart, bei der der Anbieter in Vorleistung geht (etwa Rechnungs- oder Ratenkauf bzw. Lastschrift), werden Sie im Bestellablauf auch aufgefordert, bestimmte persönliche Daten (Vor- und Nachname, Straße, Hausnummer, Postleitzahl, Ort, Geburtsdatum, E-Mail-Adresse, Telefonnummer, ggf. Daten zu einem alternativen Zahlungsmittel) anzugeben.</p>
          <p>Um unser berechtigtes Interesse an der Feststellung der Zahlungsfähigkeit unserer Kunden zu wahren, werden diese Daten von uns gemäß Art. 6 Abs. 1 lit. f DSGVO zum Zweck einer Bonitätsprüfung an den Anbieter weitergeleitet. Der Anbieter prüft auf Basis der von Ihnen angegebenen persönlichen Daten sowie weiterer Daten (wie etwa Warenkorb, Rechnungsbetrag, Bestellhistorie, Zahlungserfahrungen), ob die von Ihnen ausgewählte Zahlungsmöglichkeit im Hinblick auf Zahlungs- und/oder Forderungsausfallrisiken gewährt werden kann.</p>
          <p>Die Bonitätsauskunft kann Wahrscheinlichkeitswerte enthalten (sog. Score-Werte). Soweit Score-Werte in das Ergebnis der Bonitätsauskunft einfließen, haben sie ihre Grundlage in einem wissenschaftlich anerkannten mathematisch-statistischen Verfahren. In die Berechnung der Score-Werte fließen unter anderem, aber nicht ausschließlich, Anschriftendaten ein.</p>
          <p>Sie können dieser Verarbeitung Ihrer Daten jederzeit durch eine Nachricht an uns oder gegenüber dem Anbieter widersprechen. Jedoch bleibt der Anbieter ggf. weiterhin berechtigt, Ihre personenbezogenen Daten zu verarbeiten, sofern dies zur vertragsgemäßen Zahlungsabwicklung erforderlich ist.</p>

          <h2 style={h2style}>7) Tools und Sonstiges</h2>
          <h3 style={h3style}>Cookie-Consent-Tool</h3>
          <p>Diese Website nutzt zur Einholung wirksamer Nutzereinwilligungen für einwilligungspflichtige Cookies und cookie-basierte Anwendungen ein sog. „Cookie-Consent-Tool". Das „Cookie-Consent-Tool" wird Nutzern bei Seitenaufruf in Form einer interaktiven Benutzeroberfläche angezeigt, auf welcher sich per Häkchensetzung Einwilligungen für bestimmte Cookies und/oder cookie-basierte Anwendungen erteilen lassen. Hierbei werden durch den Einsatz des Tools alle einwilligungspflichtigen Cookies/Dienste nur dann geladen, wenn der jeweilige Nutzer entsprechende Einwilligungen per Häkchensetzung erteilt. So wird sichergestellt, dass nur im Falle einer erteilten Einwilligung derartige Cookies auf dem jeweiligen Endgerät des Nutzers gesetzt werden.</p>
          <p>Das Tool setzt technisch notwendige Cookies, um Ihre Cookie-Präferenzen zu speichern. Personenbezogene Nutzerdaten werden hierbei grundsätzlich nicht verarbeitet.</p>
          <p>Kommt es im Einzelfall zum Zwecke der Speicherung, Zuordnung oder Protokollierung von Cookie-Einstellungen doch zur Verarbeitung personenbezogener Daten (wie etwa der IP-Adresse), erfolgt diese gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einem rechtskonformen, nutzerspezifischen und nutzerfreundlichen Einwilligungsmanagement für Cookies und mithin an einer rechtskonformen Ausgestaltung unseres Internetauftritts.</p>
          <p>Weitere Rechtsgrundlage für die Verarbeitung ist ferner Art. 6 Abs. 1 lit. c DSGVO. Wir unterliegen als Verantwortliche der rechtlichen Verpflichtung, den Einsatz technisch nicht notwendiger Cookies von der jeweiligen Nutzereinwilligung abhängig zu machen.</p>
          <p>Soweit erforderlich, haben wir mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.</p>
          <p>Weitere Informationen zum Betreiber und den Einstellungsmöglichkeiten des Cookie-Consent-Tools finden Sie direkt in der entsprechenden Benutzeroberfläche auf unserer Website.</p>

          <h2 style={h2style}>8) Rechte des Betroffenen</h2>
          <p><strong>8.1</strong> Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten die nachstehenden Betroffenenrechte (Auskunfts- und Interventionsrechte), wobei für die jeweiligen Ausübungsvoraussetzungen auf die angeführte Rechtsgrundlage verwiesen wird:</p>
          <ul>
            <li>Auskunftsrecht gemäß Art. 15 DSGVO</li>
            <li>Recht auf Berichtigung gemäß Art. 16 DSGVO</li>
            <li>Recht auf Löschung gemäß Art. 17 DSGVO</li>
            <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
            <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO</li>
            <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
            <li>Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO</li>
            <li>Recht auf Beschwerde gemäß Art. 77 DSGVO</li>
          </ul>

          <p><strong>8.2</strong> WIDERSPRUCHSRECHT</p>
          <p style={{ textTransform: 'uppercase' as const }}>Wenn wir im Rahmen einer Interessenabwägung Ihre personenbezogenen Daten aufgrund unseres überwiegenden berechtigten Interesses verarbeiten, haben Sie das jederzeitige Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen diese Verarbeitung Widerspruch mit Wirkung für die Zukunft einzulegen.</p>
          <p style={{ textTransform: 'uppercase' as const }}>Machen Sie von Ihrem Widerspruchsrecht Gebrauch, beenden wir die Verarbeitung der betroffenen Daten. Eine Weiterverarbeitung bleibt aber vorbehalten, wenn wir zwingende schutzwürdige Gründe für die Verarbeitung nachweisen können, die Ihre Interessen, Grundrechte und Grundfreiheiten überwiegen, oder wenn die Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen dient.</p>
          <p style={{ textTransform: 'uppercase' as const }}>Werden Ihre personenbezogenen Daten von uns verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen. Sie können den Widerspruch wie oben beschrieben ausüben.</p>
          <p style={{ textTransform: 'uppercase' as const }}>Machen Sie von Ihrem Widerspruchsrecht Gebrauch, beenden wir die Verarbeitung der betroffenen Daten zu Direktwerbezwecken.</p>

          <h2 style={h2style}>9) Dauer der Speicherung personenbezogener Daten</h2>
          <p>Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und – sofern einschlägig – zusätzlich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen).</p>
          <p>Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO werden die betroffenen Daten so lange gespeichert, bis Sie Ihre Einwilligung widerrufen.</p>
          <p>Existieren gesetzliche Aufbewahrungsfristen für Daten, die im Rahmen rechtsgeschäftlicher bzw. rechtsgeschäftsähnlicher Verpflichtungen auf der Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden, werden diese Daten nach Ablauf der Aufbewahrungsfristen routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein berechtigtes Interesse an der Weiterspeicherung fortbesteht.</p>
          <p>Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO ausüben, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
          <p>Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO ausüben.</p>
          <p>Sofern sich aus den sonstigen Informationen dieser Erklärung über spezifische Verarbeitungssituationen nichts anderes ergibt, werden gespeicherte personenbezogene Daten im Übrigen dann gelöscht, wenn sie für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.</p>
        </div>
      </section>
    </div>
  )
}
