
import Layout from '../components/layout'

import banner from '../styles/banner.module.css'
import content from '../styles/content.module.css'
import util from '../styles/util.module.css'

export default function About() {
  return (
    <Layout>
      <h1>Ackermann & Team <br /> Privatpraxis für Osteopathie & Physiotherapie</h1>

      <div className={banner.wrapper}>
        <span className={util.bold}>
          In der aktuellen Lage in Hessen bleiben alle Einrichtungen des Gesundheitswesens geöffnet. <br />
        </span>
        <br />
        Bitte unterstützen Sie unsere Praxis bei den notwendigen hygienischen Maßnahmen<br />
        <span className={util.bold}>
          und verschieben Sie Ihre Termine, wenn Sie unter Erkältungssymptomen leiden!<br />
        </span>
        <br />
        Falls Sie über 60 Jahre alt sind oder aufgrund von Vorerkrankungen ein erhöhtes Risiko haben, dann wägen Sie die Notwendigkeit einer Behandlung bitte ab oder besprechen Sie mit uns ein geeignetes Vorgehen. <br />
        <br />
        Wir freuen uns auf Ihren Besuch!<br />
        <br />
        Ihr Team der Physiotherapiepraxis Ackermann
      </div>

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

      <div className={content.wrapper}>
        <div className={content.text}>
        </div>
      </div>

    </Layout>
  )
}
