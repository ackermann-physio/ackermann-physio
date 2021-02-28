import Link from 'next/link'

import Layout from '../components/layout'

import content from '../styles/content.module.css'
import util from '../styles/util.module.css'

export default function About() {
  return (
    <Layout>
      <h1>Datenschutzerklärung</h1>

      <div className={[content.wrapper, content.smallImage].join(' ')}>
        <div className={content.text}>
          <h2>Allgemeiner Hinweis und Pflichtinformationen</h2>
            <h3>Benennung der verantwortlichen Stelle</h3>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist: <br />
             <br />
            <span className={util.bold}>
              Ackermann & Team <br />
              Privatpraxis für Osteopathie & Physiotherapie <br />
            </span>
            Inh. Britta Ackermann <br />
            Rheinstraße 20 <br />
            64283 Darmstadt <br />
            <span className={util.bold}>
               <a href="tel:+496151293242">Tel. 0 61 51 / 29 32 42</a> <br />
            </span>
            <a href="mailto:info@ackermann-physio.de">info@ackermann-physio.de</a>  <br />
            <a href="ackermann-physio.de">ackermann-physio.de</a> <br />
            <a href="ackermann-osteopathie.de">ackermann-osteopathie.de</a> <br />
            <br />
            Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.). <br />
            <br />

            <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>
            <p>
              Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit:  <br />
              <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.</a>
            </p>

            <h3>Recht auf Datenübertragbarkeit</h3>
            <p>
              Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h3>
            <p>
              Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.
            </p>

            <h3>SSL- bzw. TLS-Verschlüsselung</h3>
            <p>
              Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.
            </p>

            <h3>Datenschutzbeauftragter</h3>
            <p>
              Wir haben einen Datenschutzbeauftragten bestellt.  <br />
              <br />
              <span className={util.bold}>
                Britta Ackermann (Heilpraktikerin, Physiotherapeutin) <br />
              </span>
              Rheinstraße 20 <br />
              64283 Darmstadt <br />
              <span className={util.bold}>
                 <a href="tel:+496151293242">Tel. 0 61 51 / 29 32 42</a> <br />
              </span>
              <a href="mailto:info@ackermann-physio.de">info@ackermann-physio.de</a>
            </p>

            <h3>Server-Log-Dateien</h3>
            <p>
              In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              <ul>
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
            </p>

            <h3>Cookies</h3>
            <p>
              Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
            <p>
              Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
            <p>
              Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen.
            </p>
            <p>
              Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.
            </p>
            <p>
              Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. für Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerklärung separat behandelt.
            </p>

            <h3>Matomo (ehemals Piwik)</h3>
            <p>
              Unsere Website verwendet den Webanalysedienst Matomo. Matomo ist eine Open Source Lösung.
            </p>
            <p>
              Matomo verwendet "Cookies." Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert und die eine Analyse der Website-Benutzung ermöglichen. Mittels Cookie erzeugte Informationen über die Benutzung unserer Website werden auf unserem Server gespeichert. Vor der Speicherung erfolgt eine Anonymisierung Ihrer IP-Adresse.
            </p>
            <p>
              Cookies von Matomo verbleiben auf Ihrem Endgerät, bis Sie eine Löschung vornehmen.
            </p>
            <p>
              Das Setzen von Matomo-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sowohl unser Webangebot und ggf. auch Werbung zu optimieren.
            </p>
            <p>
              Es erfolgt keine Weitergabe der im Matomo-Cookie gespeicherten Informationen über die Benutzung dieser Website. Das Setzen von Cookies durch Ihren Webbrowser ist verhinderbar. Einige Funktionen unserer Website könnten dadurch jedoch eingeschränkt werden.
            </p>
            <p>
              Sie können hier die Speicherung und Nutzung Ihrer Daten deaktivieren. Ihr Browser setzt ein Opt-Out-Cookie, welches die Speicherung von Matomo Nutzungsdaten unterbindet. Wenn Sie Ihre Cookies löschen, wird auch das Matomo Opt-Out-Cookie entfernt. Bei einem erneuten Besuch unserer Website ist das Opt-Out-Cookie zur Unterbindung der Speicherung und Nutzung Ihrer Daten erneut zu setzen.
            </p>
        </div>
      </div>
    </Layout>
  )
}
