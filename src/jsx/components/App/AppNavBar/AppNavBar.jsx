import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import styles from './AppNavBar.module.css';
import clsx from 'clsx';

const AppNavBar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const handleNavLinkClick = to => {
    setActiveLink(to);
  };

  const buildClassName = to => {
    return clsx(styles.navLink, to === activeLink && styles.active);
  };

  return (
    <div>
      <nav className={styles.navBar}>
        <NavLink
          className={buildClassName('/')}
          to="/"
          onClick={() => handleNavLinkClick('/')}
        >
          Home
        </NavLink>

        <NavLink
          className={buildClassName('/posts')}
          to="/posts"
          onClick={() => handleNavLinkClick('/posts')}
        >
          Posts
        </NavLink>
      </nav>
    </div>
  );
};

export default AppNavBar;
