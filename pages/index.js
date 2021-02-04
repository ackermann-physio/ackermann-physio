
import Layout from '../components/layout'

import content from '../styles/content.module.css'
import util from '../styles/util.module.css'

export default function About() {
  return (
    <Layout>
      <h1>Ackermann & Team <br /> Privatpraxis für Osteopathie & Physiotherapie</h1>

      <div className={content.wrapper}>
        <div className={content.img}>
          <img src="/img/physiotherapie_backermann2019-1.jpg" />
        </div>
        <div className={content.text}>
          <h2>So können Sie uns erreichen</h2>
          Ackermann & Team <br />
          Privatpraxis für Osteopathie & Physiotherapie <br />
          Inh. Britta Ackermann <br />
          <br />
          Rheinstraße 20 <br />
          64283 Darmstadt <br />
          <br />
          <span className={util.bold}>
            Tel. <a className={util.bold} href="tel:+496151293242">0 61 51 / 29 32 42</a> <br />
          </span>
          <br />
          <a href="mailto:info@ackermann-physio.de">info@ackermann-physio.de</a>
        </div>
      </div>

      <div className={content.wrapper}>
        <div className={content.text}>
          <h2>Behandlungszeiten</h2>
          <span className={util.bold}>
            Osteopathie
          </span>
          <br />
          nach individueller Vereinbarung! <br />
          <br />
          <span className={util.bold}>
            Physiotherapie
          </span>
          <br />
          Montag bis Freitag von 8.00 - 20.00 Uhr <br />
          und nach individueller Vereinbarung! <br />
          <br />
          Hausbesuche sind möglich!

          <h2>Noch Fragen?</h2>
          Zwecks Terminvereinbarung bitten wir um Ihren Anruf unter <a href="tel:+496151293242">06151 / 29 32 42</a> oder Ihre e-Mail an <a href="mailto:info@ackermann-physio.de">info@ackermann-physio.de</a>. <br />
          <br />
          Da wir in erster Linie an und mit unseren Patienten arbeiten, haben Sie bitte Verständnis, wenn unser Anrufbeantworter Ihren Anruf entgegennimmt, während wir uns in einer Behandlung befinden. <br />
          Wir rufen garantiert zurück! <br />
          Auch auf Ihre e-Mails werden wir antworten, dies kann aber ein wenig dauern, wenn gerade viel los ist. <br />
          Eilige Anfragen daher lieber per Anrufbeantworter. <br />
        </div>
        <div className={content.img}>
          <img src="/img/physiotherapie_behandlungsraum.jpg" />
        </div>
      </div>

      <div className={content.wrapper}>
        <div className={content.text}>
        </div>
      </div>

    </Layout>
  )
}
