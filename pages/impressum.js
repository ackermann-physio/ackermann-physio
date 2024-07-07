import Link from 'next/link'

import Layout from '../components/layout'

import content from '../styles/content.module.css'
import util from '../styles/util.module.css'

export default function About() {
  return (
    <Layout>
      <h1>Impressum & Copyright</h1>

      <div className={[content.wrapper, content.smallImage].join(' ')}>
        <div className={content.text}>
          <h2>Anbieter dieses Internetauftritts im Sinne ist:</h2>
          <span className={util.bold}>
            Ackermann & Team <br />
            Privatpraxis für Osteopathie & Physiotherapie <br />
          </span>
          Inh. Britta Frankenberger <br />
          Rheinstraße 20 <br />
          64283 Darmstadt <br />
          <span className={util.bold}>
             <a href="tel:+496151293242">Tel. 0 61 51 / 29 32 42</a> <br />
          </span>
          <a href="mailto:info@ackermann-physio.de">info@ackermann-physio.de</a>  <br />
          <a href="ackermann-physio.de">ackermann-physio.de</a> <br />
          <a href="ackermann-osteopathie.de">ackermann-osteopathie.de</a>
          <br />
          <br />

          <h2>Inhaltlich verantwortlich:</h2>
          <span className={util.bold}>
            Britta Frankenberger (Heilpraktikerin, Physiotherapeutin) <br />
          </span>
          Rheinstraße 20 <br />
          64283 Darmstadt <br />
          <span className={util.bold}>
             <a href="tel:+496151293242">Tel. 0 61 51 / 29 32 42</a> <br />
          </span>
          <a href="mailto:info@ackermann-physio.de">info@ackermann-physio.de</a>
          <p>
            Mitglied im Verband der Osteopathen Deutschland e.V. (VOD), Wiesbaden <br />
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: 63 770 582 417 <br />
            Die Berufsbezeichnung lautet Heilpraktikerin ohne Approbation (Deutschland). Verliehen durch den Kreisausschuss des Kreises Groß Gerau, Wilhelm-Slipp-Straße 4, 64521 Groß-Gerau, Deutschland <br />
            Die berufsrechtliche Regelung bildet §1 des Heilpraktikergesetzes vom 17.02.1939 und §3 der 1. Durchführungsverordnung zum HP Gesetz vom 18.02.1939, in der derzeit gültigen Fassung <br />
            Inhaltlich Verantwortlicher gemäß § 10 Absatz 3 MDStV: Britta Frankenberger <br />
            Aufsichtsbehörde: Gesundheitsamt Darmstadt, Niersteiner Straße 3, 64295 Darmstadt
          </p>
          <br />

          <h2>Copyright</h2>
          <p>
            Das Copyright für veröffentlichte, vom Anbieter selbst erstellte Texte, Grafiken und Fotos bleibt allein beim Anbieter der Seiten. Eine Vervielfältigung oder Verwendung solcher selbst erstellter Texte, Grafiken und Fotos in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Anbieters nicht gestattet. <br />
            Bei allen verwendeten und nicht selbst erstellten Texten, Grafiken und Fotos ist der Anbieter bestrebt, die Urheberrechte zu beachten und zu nennen oder lizenzfreie Texte, Grafiken und Fotos zu nutzen. <br />
            Alle verwendeten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Die Marken- und Warenzeichen können ggf. durch Dritte geschützt sein. Sollte dies nicht genannt sein, kann nicht davon ausgegangen werden, dass kein Schutz besteht!
          </p>
        </div>
      </div>
    </Layout>
  )
}
