
import Layout from '../components/layout'

import content from '../styles/content.module.css'
import util from '../styles/util.module.css'

export default function About() {
  return (
    <Layout>
      <h1>Hygieneregeln für Ihre Gesundheit</h1>

      <div className={content.wrapper}>
        <div className={content.text}>
          <span className={util.bold}>Liebe Patientinnen und Patienten,</span>
          <p>
            folgende Auflagen müssen aufgrund der gesetzlichen Vorgaben durch das Infektionsschutzgesetz (IfSG), den Vorgaben des Landes Hessen (Corona-Verordnung) und der Berufsgenossenschaft (BGW) umgesetzt werden. Wir bitten Sie zu Ihrer und unserer Sicherheit um Einhaltung folgender Regeln:
          </p>
          <p>
            1. Wenn Sie <span className={util.bold}>Erkältungssymptome</span> zeigen oder der <span className={util.bold}>Verdacht einer Infektion</span> besteht, verschieben Sie bitte Ihren Termin. Sollte ein Infektionsverdacht aufkommen, nachdem Sie die Praxis besucht haben, müssen Sie uns sofort informieren.
          </p>
          <p>
            2. <span className={util.bold}>Desinfizieren Sie die Hände</span> direkt nach Betreten der Räumlichkeiten bzw. waschen Sie die Hände mit Seife.
          </p>
          <p>
            3. Halten Sie einen <span className={util.bold}>Mindestabstand von 1,5 m</span> ein.
          </p>
          <p>
            4. Erscheinen Sie bitte erst kurz vor der Behandlung, um die <span className={util.bold}>Wartezeit zu minimieren</span> und den Aufenthalt im Wartebereich zeitlich möglichst kurz zu gestalten..
          </p>
          <p>
            5. Tragen Sie einen Mund-Nasen-Schutz zu jeder Zeit in der Praxis. Die Maskenpflicht gilt auch während der Behandlung – ausgenommen sind Behandlungen im Gesicht oder im Kopfbereich.
          </p>
          <p>
            6. Die <span className={util.bold}>Maskenpflicht</span> gilt auch für Therapeuten/innen sowie sämtliches Personal (ausgenommen Rezeptionspersonal hinter der Schutzscheibe).
          </p>
          <p>
            7. Behandlungsutensilien und Liegen werden nach jedem Gebrauch desinfiziert und sind erst dann wieder für Behandlungen zugänglich.
          </p>
          <p>
            8. Zwischen allen Behandlungen wird ausreichend gelüftet.
          </p>
        </div>
        <div className={content.img}>
          <img src="/img/mundschutz_200.jpg" />
          <span className={content.subtitle}>Bild: © Britta Ackermann</span>
        </div>
      </div>

    </Layout>
  )
}
