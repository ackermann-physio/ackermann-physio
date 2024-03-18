import Link from 'next/link'

import styles from '../styles/menu.module.css'

export default function Menu({ children, ...pageProps })  {
  return (
    <nav className={styles.main}>
      <Link href="/praxis">
        Praxis
      </Link>
      <Link href="/team">
        Team
      </Link>
      <Link href="/leistungen">
        Leistungen
      </Link>
      <Link href="/konzept">
        Konzept
      </Link>
      <Link href="/anfahrt">
        Anfahrt
      </Link>
      <Link href="/aktuelles" className={styles.spaceBefore}>
        Aktuelles
      </Link>
      <Link href="/">
        Startseite
      </Link>
    </nav>
  );
}
