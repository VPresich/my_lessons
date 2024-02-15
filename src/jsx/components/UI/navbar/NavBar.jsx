import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import styles from './NavBar.module.css';
import clsx from 'clsx';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleNavLinkClick = to => {
    setActiveLink(to);
  };

  const buildLinkClassName = to => {
    const nameClass = clsx(styles.link, to === activeLink && styles.active);
    return nameClass;
  };

  return (
    <div>
      <nav className={styles.menu}>
        <NavLink
          className={buildLinkClassName('/')}
          to="/"
          onClick={() => handleNavLinkClick('/')}
        >
          Home
        </NavLink>

        <NavLink
          className={buildLinkClassName('/posts')}
          to="/posts"
          onClick={() => handleNavLinkClick('/posts')}
        >
          Posts
        </NavLink>
        {/* <NavLink
          className={buildLinkClassName('/')}
          to="/"
          onClick={() => handleNavLinkClick('/')}
        >
          Lesson01
        </NavLink>

        <NavLink
          className={buildLinkClassName('/lesson02')}
          to="/lesson02"
          onClick={() => handleNavLinkClick('/lesson02')}
        >
          Lesson02
        </NavLink>

        <NavLink
          className={buildLinkClassName('/lesson03')}
          to="/lesson03"
          onClick={() => handleNavLinkClick('/lesson03')}
        >
          Lesson03
        </NavLink>

        <NavLink
          className={buildLinkClassName('/lesson04')}
          to="/lesson04"
          onClick={() => handleNavLinkClick('/lesson04')}
        >
          Lesson04
        </NavLink>

        <NavLink
          className={buildLinkClassName('/lesson05')}
          to="/lesson05"
          onClick={() => handleNavLinkClick('/lesson05')}
        >
          Lesson05
        </NavLink>

        <NavLink
          className={buildLinkClassName('/lesson06')}
          to="/lesson06"
          onClick={() => handleNavLinkClick('/lesson06')}
        >
          Lesson06
        </NavLink>

        <NavLink
          className={buildLinkClassName('/lesson07')}
          to="/lesson07"
          onClick={() => handleNavLinkClick('/lesson07')}
        >
          Lesson07
        </NavLink>

        <NavLink
          className={buildLinkClassName('/lesson08')}
          to="/lesson08"
          onClick={() => handleNavLinkClick('/lesson08')}
        >
          Lesson08
        </NavLink> */}
      </nav>
    </div>
  );
};
