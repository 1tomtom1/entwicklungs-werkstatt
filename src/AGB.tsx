import { Link } from 'react-router-dom'

const h2style = { fontSize: '1.25rem', color: 'var(--dark)', marginTop: '2rem', textAlign: 'left' as const }

export default function AGB() {
  return (
    <div className="app">
      <section className="section">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link to="/" className="btn btn-back" style={{ marginBottom: '2rem', display: 'inline-block' }}>
            ← Zurück zur Startseite
          </Link>

          <h1 style={{ textAlign: 'left' }}>Allgemeine Geschäftsbedingungen</h1>

          <h2 style={h2style}>Inhaltsverzeichnis</h2>
          <ol style={{ paddingLeft: '1.5rem' }}>
            <li>Geltungsbereich, Begriffsbestimmungen</li>
            <li>Leistungen des Veranstalters</li>
            <li>Vertragsschluss</li>
            <li>Widerrufsrecht für Verbraucher</li>
            <li>Preise und Zahlungsbedingungen</li>
            <li>Teilnahmeberechtigung, Vertragsübertragung</li>
            <li>Unterschreitung der Mindestteilnehmerzahl</li>
            <li>Änderung oder Ausfall der Veranstaltung</li>
            <li>Kursbegleitendes Material</li>
            <li>Haftung</li>
            <li>Anwendbares Recht</li>
            <li>Alternative Streitbeilegung</li>
          </ol>

          <h2 style={h2style}>1) Geltungsbereich, Begriffsbestimmungen</h2>
          <p><strong>1.1</strong> Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") des Thomas Wiedmann, handelnd unter „Thomas Wiedmann" (nachfolgend „Veranstalter"), gelten für alle Verträge zur Teilnahme an Kursen / Seminaren (nachfolgend „Veranstaltung"), die ein Verbraucher oder Unternehmer (nachfolgend „Kunde") mit dem Veranstalter hinsichtlich der auf der Website des Veranstalters dargestellten Veranstaltungen abschließt. Hiermit wird der Einbeziehung von eigenen Bedingungen des Kunden widersprochen, es sei denn, es ist etwas anderes vereinbart.</p>
          <p><strong>1.2</strong> Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können.</p>
          <p><strong>1.3</strong> Unternehmer im Sinne dieser AGB ist eine natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt.</p>

          <h2 style={h2style}>2) Leistungen des Veranstalters</h2>
          <p><strong>2.1</strong> Der Veranstalter bietet ausschließlich Präsenzveranstaltungen an. Der Inhalt der Veranstaltung ergibt sich aus der jeweiligen Kursbeschreibung auf der Website des Veranstalters.</p>
          <p><strong>2.2</strong> Bei Präsenzveranstaltungen erbringt der Veranstalter seine Leistungen ausschließlich im persönlichen Kontakt mit dem Kunden und in von ihm hierzu ausgewählten Räumlichkeiten. Sofern sich aus der Kursbeschreibung des Veranstalters nichts anderes ergibt, hat der Kunde keinen Anspruch auf Auswahl einer bestimmten Räumlichkeit zur Durchführung der gewünschten Veranstaltung.</p>
          <p><strong>2.3</strong> Der Veranstalter erbringt seine Leistungen durch qualifiziertes, von ihm ausgewähltes Personal. Dabei kann sich der Veranstalter auch der Leistungen Dritter (Subunternehmer) bedienen, die in seinem Auftrag tätig werden. Sofern sich aus der Kursbeschreibung des Veranstalters nichts anderes ergibt, hat der Kunde keinen Anspruch auf Auswahl einer bestimmten Person zur Durchführung der gewünschten Veranstaltung.</p>
          <p><strong>2.4</strong> Der Veranstalter erbringt seine Leistungen mit größter Sorgfalt und nach bestem Wissen und Gewissen. Einen bestimmten Erfolg schuldet der Veranstalter aber nicht. Insbesondere übernimmt der Veranstalter keine Gewähr dafür, dass sich beim Kunden ein bestimmter Lernerfolg einstellt oder dass der Kunde ein bestimmtes Leistungsziel erreicht. Dies ist nicht zuletzt auch vom persönlichen Einsatz und Willen des Kunden abhängig, auf den der Veranstalter keinen Einfluss hat.</p>

          <h2 style={h2style}>3) Vertragsschluss</h2>
          <p><strong>3.1</strong> Die auf der Website des Veranstalters beschriebenen Veranstaltungen stellen keine verbindlichen Angebote seitens des Veranstalters dar, sondern dienen zur Abgabe eines verbindlichen Angebots durch den Kunden.</p>
          <p><strong>3.2</strong> Der Kunde kann sein Angebot über das auf der Website des Veranstalters bereitgestellte Online-Anmeldeformular abgeben. Dabei gibt der Kunde, nachdem er seine Daten in das Anmeldeformular eingetragen hat, durch Klicken des den Anmeldevorgang abschließenden Buttons ein rechtlich verbindliches Vertragsangebot in Bezug auf die ausgewählte Veranstaltung ab.</p>
          <p><strong>3.3</strong> Der Veranstalter kann das Angebot des Kunden innerhalb von fünf Tagen annehmen, indem er dem Kunden eine schriftliche Anmeldebestätigung oder eine Anmeldebestätigung in Textform (Fax oder E-Mail) übermittelt, wobei insoweit der Zugang der Anmeldebestätigung beim Kunden maßgeblich ist, oder indem er den Kunden nach Abgabe von dessen Vertragserklärung zur Zahlung auffordert. Liegen mehrere der vorgenannten Alternativen vor, kommt der Vertrag in dem Zeitpunkt zustande, in dem eine der vorgenannten Alternativen zuerst eintritt. Die Frist zur Annahme des Angebots beginnt am Tag nach der Absendung des Angebots durch den Kunden zu laufen und endet mit dem Ablauf des fünften Tages, welcher auf die Absendung des Angebots folgt. Nimmt der Veranstalter das Angebot des Kunden innerhalb vorgenannter Frist nicht an, so gilt dies als Ablehnung des Angebots mit der Folge, dass der Kunde nicht mehr an seine Willenserklärung gebunden ist. Gleiches gilt für den Fall, dass die vom Kunden ausgewählte Veranstaltung schon vor Ablauf der Annahmefrist beginnt und der Veranstalter das Angebot des Kunden nicht bis spätestens 24 Stunden vor Beginn der Veranstaltung annimmt, sofern zwischen den Parteien nichts anderes vereinbart wurde.</p>
          <p><strong>3.4</strong> Bei einer Anmeldung über die Website des Veranstalters wird der Vertragstext nach dem Vertragsschluss vom Veranstalter gespeichert und dem Kunden nach Absendung von dessen Bestellung in Textform (z. B. E-Mail, Fax oder Brief) übermittelt. Eine darüber hinausgehende Zugänglichmachung des Vertragstextes durch den Veranstalter erfolgt nicht.</p>
          <p><strong>3.5</strong> Vor verbindlicher Abgabe des Angebots über das Online-Anmeldeformular des Veranstalters kann der Kunde seine Eingaben laufend über die üblichen Tastatur- und Mausfunktionen korrigieren.</p>
          <p><strong>3.6</strong> Für den Vertragsschluss steht die deutsche Sprache zur Verfügung.</p>
          <p><strong>3.7</strong> Meldet der Kunde weitere Teilnehmer für eine Veranstaltung an, verpflichtet er sich, auch für die vertraglichen Verpflichtungen aller von ihm angemeldeten Teilnehmer einzustehen, sofern er bei der Anmeldung eine entsprechende Erklärung abgibt.</p>

          <h2 style={h2style}>4) Widerrufsrecht für Verbraucher</h2>
          <p>Verbrauchern steht grundsätzlich ein Widerrufsrecht zu. Nähere Informationen zum Widerrufsrecht ergeben sich aus der Widerrufsbelehrung des Veranstalters.</p>

          <h2 style={h2style}>5) Preise und Zahlungsbedingungen</h2>
          <p><strong>5.1</strong> Sofern sich aus dem Angebot des Veranstalters nichts anderes ergibt, handelt es sich bei den angegebenen Preisen um Gesamtpreise. Umsatzsteuer fällt nicht an, da der Veranstalter als Kleinunternehmer umsatzsteuerbefreit ist.</p>
          <p><strong>5.2</strong> Kosten für Anreise, Übernachtung und Verpflegung bei Präsenzveranstaltungen sind nicht im Preis inbegriffen und vom Kunden zu tragen, sofern sich aus der Kursbeschreibung des Veranstalters nichts anderes ergibt.</p>
          <p><strong>5.3</strong> Die Zahlungsmöglichkeiten werden dem Kunden auf der Website des Veranstalters mitgeteilt.</p>
          <p><strong>5.4</strong> Bei Auswahl der Zahlungsart „Sofortüberweisung" erfolgt die Zahlungsabwicklung durch die Klarna Bank AB (publ), Sveavägen 46, 11134 Stockholm, Schweden (im Folgenden „Klarna"). Um den Rechnungsbetrag via „Sofortüberweisung" bezahlen zu können, muss der Kunde über ein für die Teilnahme an „Sofortüberweisung" freigeschaltetes Online-Banking-Konto verfügen, sich beim Zahlungsvorgang entsprechend legitimieren und die Zahlungsanweisung bestätigen. Die Zahlungstransaktion wird unmittelbar danach von Klarna durchgeführt und das Bankkonto des Kunden belastet. Nähere Informationen zur Zahlungsart „Sofortüberweisung" kann der Kunde im Internet unter https://www.klarna.com/sofort/ abrufen.</p>
          <p><strong>5.5</strong> Bei Auswahl der Zahlungsart Kreditkarte via Stripe ist der Rechnungsbetrag mit Vertragsschluss sofort fällig. Die Zahlungsabwicklung erfolgt über den Zahlungsdienstleister Stripe Payments Europe Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland (im Folgenden: „Stripe"). Stripe behält sich vor, eine Bonitätsprüfung durchzuführen und diese Zahlungsart bei negativer Bonitätsprüfung abzulehnen.</p>

          <h2 style={h2style}>6) Teilnahmeberechtigung, Vertragsübertragung</h2>
          <p><strong>6.1</strong> Teilnahmeberechtigt ist nur die in der Anmeldebestätigung namentlich genannte Person. Eine Vertragsübertragung auf einen Dritten ist nur mit Zustimmung des Veranstalters möglich.</p>
          <p><strong>6.2</strong> Tritt ein Dritter in den Vertrag zwischen dem Kunden und dem Veranstalter ein, so haften er und der Kunde dem Veranstalter als Gesamtschuldner für den Teilnahmepreis und die durch den Eintritt des Dritten gegebenenfalls entstehenden Mehrkosten.</p>

          <h2 style={h2style}>7) Unterschreitung der Mindestteilnehmerzahl</h2>
          <p><strong>7.1</strong> Der Veranstalter kann für seine Kurse eine Mindestteilnehmerzahl bestimmen. Bei Bestimmung einer Mindestteilnehmerzahl wird der Veranstalter hierauf im Rahmen der Kursbeschreibung ausdrücklich hinweisen.</p>
          <p><strong>7.2</strong> Bei Unterschreitung der Mindestteilnehmerzahl kann der Veranstalter bis spätestens sieben Tage vor Kursbeginn durch Erklärung gegenüber dem Kunden vom Vertrag zurücktreten. Der Veranstalter wird dem Kunden seine Rücktrittserklärung unverzüglich nach Kenntnis der nicht erreichten Teilnehmerzahl, spätestens bis sieben Tage vor Kursbeginn zugehen lassen.</p>
          <p><strong>7.3</strong> Macht der Veranstalter von seinem Rücktrittsrecht gemäß vorstehender Ziffer Gebrauch, so kann der Kunde die Teilnahme an einer mindestens gleichwertigen anderen Veranstaltung verlangen, wenn der Veranstalter in der Lage ist, eine solche Veranstaltung ohne Mehrpreis für den Kunden aus seinem Angebot anzubieten. Der Kunde hat sein Verlangen unverzüglich nach Zugang der Erklärung des Veranstalters diesem gegenüber geltend zu machen.</p>
          <p><strong>7.4</strong> Macht der Kunde nicht von seinem Recht gemäß vorstehender Ziffer Gebrauch, so wird der Veranstalter dem Kunden ein gegebenenfalls bereits gezahltes Teilnahmeentgelt unverzüglich zurückerstatten.</p>

          <h2 style={h2style}>8) Änderung oder Ausfall der Veranstaltung</h2>
          <p><strong>8.1</strong> Der Veranstalter behält sich vor, Zeit, Ort, Kursleiter und/oder Inhalt der Veranstaltung zu ändern, sofern die Änderung unter Berücksichtigung der Interessen des Veranstalters für den Kunden zumutbar ist. Zumutbar sind nur unerhebliche Leistungsänderungen, die nach Vertragsabschluss notwendig werden und nicht vom Veranstalter wider Treu und Glauben herbeigeführt wurden. Der Veranstalter wird den Kunden im Falle einer Änderung von Zeit, Ort, Kursleiter und/oder Inhalt der Veranstaltung rechtzeitig hierüber informieren.</p>
          <p><strong>8.2</strong> Bei einer erheblichen Leistungsänderung kann der Kunde kostenlos vom Vertrag zurücktreten oder stattdessen die Teilnahme an einer mindestens gleichwertigen anderen Veranstaltung verlangen, wenn der Veranstalter in der Lage ist, eine solche Veranstaltung ohne Mehrpreis für den Kunden aus seinem Angebot anzubieten.</p>
          <p><strong>8.3</strong> Die Rechte gemäß vorstehender Ziffer hat der Kunde unverzüglich nach der Information des Veranstalters über die Leistungsänderung diesem gegenüber geltend zu machen.</p>
          <p><strong>8.4</strong> Der Veranstalter ist berechtigt, die Veranstaltung aus wichtigen Gründen, wie etwa höherer Gewalt oder Erkrankung des Kursleiters kurzfristig gegen volle Erstattung eines ggf. bereits gezahlten Teilnahmeentgelts abzusagen. Der Veranstalter wird sich bei Ausfall der Veranstaltung um einen Ersatztermin bemühen.</p>

          <h2 style={h2style}>9) Kursbegleitendes Material</h2>
          <p><strong>9.1</strong> Der Veranstalter ist Inhaber sämtlicher Nutzungsrechte, die zur Durchführung der Veranstaltung erforderlich sind. Dies gilt auch im Hinblick auf Unterlagen, die dem Kunden gegebenenfalls im Zusammenhang mit der Veranstaltung überlassen werden.</p>
          <p><strong>9.2</strong> Der Kunde darf die Inhalte der Veranstaltung einschließlich gegebenenfalls bereitgestellter Unterlagen lediglich in dem Umfang nutzen, der nach dem von beiden Parteien zugrunde gelegten Vertragszweck erforderlich ist. Ohne gesonderte Erlaubnis des Veranstalters ist der Kunde insbesondere nicht berechtigt, die Veranstaltung oder Teile daraus aufzuzeichnen oder Unterlagen zu vervielfältigen, zu verbreiten oder öffentlich zugänglich zu machen.</p>

          <h2 style={h2style}>10) Haftung</h2>
          <p>Der Veranstalter haftet dem Kunden aus allen vertraglichen, vertragsähnlichen und gesetzlichen, auch deliktischen Ansprüchen auf Schadens- und Aufwendungsersatz wie folgt:</p>
          <p><strong>10.1</strong> Der Veranstalter haftet aus jedem Rechtsgrund uneingeschränkt bei Vorsatz oder grober Fahrlässigkeit, bei vorsätzlicher oder fahrlässiger Verletzung des Lebens, des Körpers oder der Gesundheit, aufgrund eines Garantieversprechens, soweit diesbezüglich nichts anderes geregelt ist, aufgrund zwingender Haftung wie etwa nach dem Produkthaftungsgesetz.</p>
          <p><strong>10.2</strong> Verletzt der Veranstalter fahrlässig eine wesentliche Vertragspflicht, ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt, sofern nicht gemäß vorstehender Ziffer unbeschränkt gehaftet wird. Wesentliche Vertragspflichten sind Pflichten, die der Vertrag dem Veranstalter nach seinem Inhalt zur Erreichung des Vertragszwecks auferlegt, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf.</p>
          <p><strong>10.3</strong> Im Übrigen ist eine Haftung des Veranstalters ausgeschlossen.</p>
          <p><strong>10.4</strong> Vorstehende Haftungsregelungen gelten auch im Hinblick auf die Haftung des Veranstalters für seine Erfüllungsgehilfen und gesetzlichen Vertreter.</p>

          <h2 style={h2style}>11) Anwendbares Recht</h2>
          <p>Für sämtliche Rechtsbeziehungen der Parteien gilt das Recht der Bundesrepublik Deutschland. Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als nicht der durch zwingende Bestimmungen des Rechts des Staates, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat, gewährte Schutz entzogen wird.</p>

          <h2 style={h2style}>12) Alternative Streitbeilegung</h2>
          <p>Der Veranstalter ist zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</p>
        </div>
      </section>
    </div>
  )
}
