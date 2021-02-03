import Head from 'next/head'
import Header from '../components/header'
import Menu from '../components/menu'

import styles from '../styles/layout.module.css'

export default function Button({ children, ...pageProps })  {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ackermann & Team - Privatpraxis für Osteopathie & Physiotherapie - Ihre Praxis für Physiotherapie, Osteopathie, Krankengymnastik, Massage, Manuelle Therapie, Rückenschule, Lymphdrainage, Schlingentisch, Fango, u.v.m.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.contentWrapper}>
        <Menu />

        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  )
}
