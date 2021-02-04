import Link from 'next/link'

import Layout from '../components/layout'

import content from '../styles/content.module.css'
import util from '../styles/util.module.css'

export default function About() {
  return (
    <Layout>
      <h1>Unsere Leistungen</h1>

      <div className={[content.wrapper, content.smallImage].join(' ')}>
        <div className={content.text}>
          <h2>Ablauf unserer physiotherapeutischen oder osteopathischen Behandlung</h2>
          <p>
            Zunächst wird ein Anfangsbefund erstellt. Hierzu untersucht die Therapeutin Sie und stellt viele Fragen zur Vorgeschichte. Dies wird Anamnese genannt.
          </p>
          <p>
            Die Therapeutin fragt Sie zu Ihren Beschwerden oder Wünschen an die Therapie. Basierend auf der Verordnung des Arztes und Ihren Wünschen und Beschwerden bespricht sie dann gemeinsam mit Ihnen die Therapieziele für die Behandlung.
          </p>
          <p>
            Bei diesem ersten Gespräch erhalten Sie einen <Link href="/patientenaufklaerungsbogen.pdf"><a>Patientenaufklärungsbogen</a></Link> und die besprochenen Therapieziele und eventuelle Risiken aus Ihrer Vorgeschichte werden festgehalten.
          </p>

          <h2>Wir arbeiten nach akuellen Erkenntnissen in folgenden Bereichen</h2>
          <ul>
            <li>Osteopathie</li>
            <li>Manuelle Therapie</li>
            <li>Schlingentischtherapie (Extensionen)</li>
            <li>Manuelle Lymphdrainage</li>
            <li>Dorntherapie & Breuss-Massage</li>
            <li>Krankengymnastik</li>
            <li>Krankengymnastik nach Bobath</li>
            <li>Krankengymnastik nach PNF</li>
            <li>Fußreflexzonenmassage*</li>
            <li>Kinesio-Tape*</li>
            <li>A.P.M – Akupunkt-Massage nach Penzel</li>
            <li>Massage*</li>
            <li>Elektrotherapie</li>
            <li>Eisbehandlung</li>
          </ul>
          *) auch als Geschenkgutschein erhältlich!

          <h2>Unser Leistungsspektrum</h2>
          <ul>
            <li>Individuelle Behandlung in der Praxis</li>
            <li>Gruppentherapie Rückenschule für Erwachsene</li>
            <li>Hausbesuche</li>
            <li>Geschenkgutscheine</li>
          </ul>
        </div>
        <div className={content.img}>
          <img src="/img/physiotherapie_behandeln_konzept.jpg" />
          <span className={content.subtitle}>Bild: © Britta Ackermann</span>
        </div>
      </div>

    </Layout>
  )
}
