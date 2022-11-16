
import Layout from '../components/layout'
import content from '../styles/content.module.css'
import util from '../styles/util.module.css'

export default function About() {
  return (
    <Layout>
      <h1>Neues aus unserer Praxis</h1>

      <div className={content.wrapper}>
        <div className={content.img}>
          <img src="/img/physiotherapie_geschenk_by_rainer-sturm.jpg" />
          <span className={content.subtitle}><a href="https://www.pixelio.de" target="_blank">Bild: © Rainer Sturm / pixelio.de</a></span>
        </div>
        <div className={content.text}>
          Verschenken Sie doch einfach mal eine entspannende Massage oder Fußreflexzonenmassage an Ihre Lieben, ob zu Weihnachten, Ostern, zum Muttertag, Geburtstag oder einfach nur so.
          Darüber freut sich jeder gestresste und schmerzende Rücken.... < br/>
          < br/>
          Fragen Sie uns nach "Geschenkgutscheinen".
        </div>
      </div>
    </Layout>
  )
}
