import Link from 'next/link'

import styles from '../styles/menu.module.css'

export default function Menu({ children, ...pageProps })  {
  return (
    <nav className={styles.main}>
      <Link href="/praxis">
        <a>Praxis</a>
      </Link>
      <Link href="/team">
        <a>Team</a>
      </Link>
      <Link href="/leistungen">
        <a>Leistungen</a>
      </Link>
      <Link href="/konzept">
        <a>Konzept</a>
      </Link>
      <Link href="/anfahrt">
        <a>Anfahrt</a>
      </Link>
      <Link href="/aktuelles">
        <a className={styles.spaceBefore}>Aktuelles</a>
      </Link>
      <Link href="/">
        <a>Startseite</a>
      </Link>
    </nav>
  )
}
