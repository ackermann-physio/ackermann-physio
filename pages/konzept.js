
import Layout from '../components/layout'

import content from '../styles/content.module.css'
import util from '../styles/util.module.css'

export default function About() {
  return (
    <Layout>
        <h1>Unser Konzept</h1>
        <div className={content.wrapper}>
          <div className={content.text}>
            <h2>Sie stehen bei uns als Patient und Mensch im Mittelpunkt.</h2>
            Darum arbeiten wir nach einem ganzheitlichen Therapieansatz: Wir behandeln nicht nur Ihre Diagnose, sondern Sie!<br />
            Respekt, Offenheit und die Bereitschaft hinzuhören, ist die Basis unserer Arbeit. Für Sie nehmen wir uns Zeit.
            <h2>Qualität</h2>
            Wir nehmen regelmäßig an Fachfortbildungen teil, um stets auf dem neuesten Stand der Wissenschaft zu sein.
            <h2>Diskretion</h2>
            Wir üben einen Heilberuf aus und unterliegen der Schweigepflicht. Damit Sie sich gut aufgehoben fühlen, arbeiten wir nicht in Kabinen sondern in geschlossenen Zimmern. Dadurch hört niemand drittes, was Sie Ihrem Therapeut anvertrauen. Unsere Räume sollen Ihnen das richtige Ambiente bieten, um sich zu entspannen.
            <h2>Teamarbeit</h2>
            Wir verstehen und mögen uns, daher kommunizieren wir miteinander - in Ihrem Interesse. Sollten Sie von mehr als einem Therapeuten betreut werden, so profitieren Sie von unserem unterschiedlichen Fachwissen, das sich hervorragend ergänzt. Ihre individuellen Wünsche berücksichtigen wir gerne.
          </div>
          <div className={content.img}>
            <img src="/img/physiotherapie_konzept-3fach.jpg" />
            <span className={content.subtitle}>Bild: © Britta Ackermann</span>
          </div>
        </div>
    </Layout>
  )
}
