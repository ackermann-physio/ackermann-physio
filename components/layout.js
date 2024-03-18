import Head from 'next/head'
import Link from 'next/link'
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

        <div className={styles.mainWrapper}>
          <main className={styles.main}>
            {children}
          </main>
          <footer className={styles.footer}>
            <Link href="/impressum">
              Impressum
            </Link>
            <span className={styles.spacer} />
            <Link href="/datenschutz">
              Datenschutzhinweis
            </Link>
            <br />
            © Britta Frankenberger
            <span className={styles.spacer} />
            Ackermann & Team - Privatpraxis für Osteopathie & Physiotherapie
            <span className={styles.spacer} />
            <address>Rheinstraße 20, 64283 Darmstadt</address>
            <span className={styles.spacer} />
            Tel. <a href="tel:+496151293242">06151/293242</a>
          </footer>
        </div>
      </div>
    </div>
  );
}
