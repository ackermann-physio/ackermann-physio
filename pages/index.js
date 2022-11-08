import Link from 'next/link'

import Layout from '../components/layout'

import banner from '../styles/banner.module.css'
import content from '../styles/content.module.css'
import util from '../styles/util.module.css'

export default function About() {
  return (
    <Layout>
      <h1>Ackermann & Team <br /> Privatpraxis für Osteopathie & Physiotherapie</h1>

      <div className={[content.wrapper, content.largeImage].join(' ')}>
        <div className={content.text}>
          Wir freuen uns über Ihren Besuch und stellen uns gerne bei Ihnen vor. <br />
          <br />
          Schauen Sie sich unser Therapieangebot an, betreten Sie unsere Praxisräume und verschaffen Sie sich einen ersten Eindruck über Ihre Therapeutinnen und deren Qualifikationen. <br />
          <br />
          <div className={util.center}>
            Rheinstraße 20 <br />
            64283 Darmstadt <br />
            <a href="tel:+496151293242">Tel. 0 61 51 / 29 32 42</a> <br />
            e-Mail <a href="mailto:info@ackermann-physio.de">info@ackermann-physio.de</a> <br />
          </div>

          <h2 className={util.center}>Bei uns sind Sie in guten Händen!</h2>
        </div>
        <div className={content.img}>
          <img src="/img/physiotherapie_darmstadt_team2_600.jpg" />
          <span className={[content.subtitle, util.center].join(' ')}>Das Praxisteam</span>
        </div>
      </div>

      <div className={banner.wrapper}>
        <span className={util.bold}>
          Wir haben geöffnet <br />
        </span>
        <br />
        Nehmen Sie Ihre Termine gerne wie gewohnt wahr. <br />
        Bitte tragen Sie zum Betreten der Praxis und während der Behandlung eine FFP2-Maske. <br />
      </div>

      <div className={content.wrapper}>
        <div className={content.text}>
        </div>
      </div>

    </Layout>
  )
}
