import React from 'react';
import styles from './header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles['header__logo']}>Logo</div>
      <nav className={styles['header__nav']}>
        <a className={styles['header__navElement']} href="/">Home page</a>
        <a className={`${styles['header__navElement']} ${styles['header__navElement--red']}`} href="/">Contact</a>
      </nav>
    </div>
  )
}

export default Header;