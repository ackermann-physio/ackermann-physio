import Link from 'next/link'

import styles from '../styles/header.module.css'

export default function Header({ children, ...pageProps })  {
  return (
    <div className={styles.main}>
      <Link href="/">

        <img src="/img/logo.png" />

      </Link>
      <span>
        Private Praxis für Krankengymnastik - Massage - Manuelle Therapie - Osteopathie
      </span>
    </div>
  );
}
