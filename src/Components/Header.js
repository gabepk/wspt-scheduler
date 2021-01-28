import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        Weighted Shortest Processing Time Scheduler
      </nav>
    </div>
  );
};

export default Header;
