
import Layout from '../components/layout'

import content from '../styles/content.module.css'
import util from '../styles/util.module.css'

export default function About() {
  return (
    <Layout>
      <h1>Unser Team</h1>

      <div className={content.wrapper}>
        <div className={content.img}>
          <img src="/img/physiotherapie_backermann2019.jpg" />
          <span className={content.subtitle}>Britta Frankenberger</span>
        </div>
        <div className={content.text}>
          <h2>Britta Frankenberger</h2>
          Physiotherapeutin, Heilpraktikerin <br />
          <br />
          Zusatzqualifikationen:
          <ul>
            <li>Osteopathie</li>
            <li>Manualtherapie</li>
            <li>Manuelle Therapie nach Maitland</li>
            <li>Manuelle Lymphdrainage und Ödemtherapie (Vodder/ Asdonk)</li>
          </ul>
        </div>
      </div>

      <div className={content.wrapper}>
        <div className={content.img}>
          <img src="/img/physiotherapie_lgloeckner2019.jpg" />
          <span className={content.subtitle}>Linn Glöckner</span>
        </div>
        <div className={content.text}>
          <h2>Linn Glöckner</h2>
          Physiotherapeutin <br />
          <br />
          Zusatzqualifikationen:
          <ul>
            <li>Osteopathie</li>
            <li>Manuelle Lymphdrainage</li>
            <li>Kinesiotape</li>
            <li>Kiefergelenkbehandlung</li>
            <li>Cranio-Sacrale Therapie</li>
          </ul>
        </div>
      </div>

      <div className={content.wrapper}>
        <div className={content.img}>
          <img src="/img/physiotherapie_vkraushaar2019.jpg" />
          <span className={content.subtitle}>Vanessa Schmied</span>
        </div>
        <div className={content.text}>
          <h2>Vanessa Schmied</h2>
          Physiotherapeutin, Heilpraktikerin <br />
          <br />
          Zusatzqualifikationen:
          <ul>
            <li>Osteopathie</li>
            <li>Manualtherapie</li>
            <li>Manuelle Lymphdrainage und Ödemtherapie (Vodder/ Asdonk)</li>
            <li>Kinesiotape</li>
          </ul>
        </div>
      </div>

      <div className={content.wrapper}>
        <div className={content.img}>
          <img src="/img/physiotherapie_srolli2019.jpg" />
          <span className={content.subtitle}>Sarah Rolli</span>
        </div>
        <div className={content.text}>
          <h2>Sarah Rolli</h2>
          Physiotherapeutin<br />
          <br />
          Zusatzqualifikationen:
          <ul>
            <li>Manuelle Lymphdrainage und Ödemtherapie (Vodder/ Asdonk)</li>
          </ul>
        </div>
      </div>

    </Layout>
  )
}
