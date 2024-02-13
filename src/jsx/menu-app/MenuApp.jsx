import { NavLink, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Lesson01 } from '../components/Lesson-01/Lesson-01';
import { Lesson02 } from '../components/Lesson-02/Lesson-02';
import { Lesson03 } from '../components/Lesson-03/Lesson-03';

import styles from './MenuApp.module.css';
import clsx from 'clsx';

export const MenuApp = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleNavLinkClick = to => {
    setActiveLink(to);
  };

  const buildLinkClassName = to => {
    const nameClass = clsx(styles.link, to === activeLink && styles.active);
    console.log(nameClass);
    return clsx(styles.link, to === activeLink && styles.active);
  };

  return (
    <div>
      <nav className={styles.menu}>
        <NavLink
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
      </nav>
      <Routes>
        <Route path="/" element={<Lesson01 />} />
        <Route path="/lesson02" element={<Lesson02 />} />
        <Route path="/lesson03" element={<Lesson03 />} />
      </Routes>
    </div>
  );
};
