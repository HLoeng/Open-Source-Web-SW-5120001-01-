
import React from 'react';
import styles from './Header.module.css'; 


const Header = () => {
  return (
    <header className={styles.header}> 
      <div className={styles.logo}>UFC LOGO</div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="/ranking">Ranking</a></li>
          <li><a href="/events">Events</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;