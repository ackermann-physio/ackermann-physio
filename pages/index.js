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
          Wir freuen uns über Ihren Besuch in unserer Privatpraxis und stellen uns gerne bei Ihnen vor. <br />
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
           Partner/in für Physiotherapiepraxis gesucht <br />
        </span>
        <br />
        <div className={[content.wrapper, content.largeImage].join(' ')}>
            <div className={content.text}>
                Zur Erweiterung unserer, in der Darmstädter Innenstadt liegenden, Physiotherapiepraxis suchen wir eine/n 3. Partner/in. <br />
                Wir ermöglichen einen unkomplizierten Einstieg in eine langjährig bestehende Praxis und bieten eine respektvolle partnerschaftliche Zusammenarbeit. <br />
                Auch Berufseinsteiger und Interessenten, die in die Selbstständigkeit starten wollen, dürfen sich angesprochen fühlen. Die Konditionen besprechen wir dann gerne in einem persönlichen Gespräch. <br />
		        <br />
                <p>
                   <Link href="/plakat-praxisverkauf.pdf">Vollständige Infos zum Download</Link>
                </p>


            </div>
            <div className={content.img}>
                <img src="/img/physiotherapie_darmstadt_b-a.jpg" />
                <span className={[content.subtitle, util.center].join(' ')}>Angela Hett und Britta Frankenberger</span>
            </div>
        </div>
	  </div>

      <div className={content.wrapper}>
        <div className={content.text}>
        </div>
      </div>

    </Layout>
  )
}
