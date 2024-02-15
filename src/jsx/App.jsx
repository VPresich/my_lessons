// import { MenuApp } from './menu-app/MenuApp';
// import styles from './App.module.css';

// export const App = () => {
//   return (
//     <div className={styles.container}>
//       <MenuApp />
//     </div>
//   );
// };

import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/UI/navbar/NavBar';
import { Lesson01 } from './components/Lesson-01/Lesson-01';
import { Lesson02 } from './components/Lesson-02/Lesson-02';
import { Lesson03 } from './components/Lesson-03/Lesson-03';
import { Lesson04 } from './components/Lesson-04/Lesson-04';
import { Lesson05 } from './components/Lesson-05/Lesson-05';
import { Lesson06 } from './components/Lesson-06/Lesson-06';
import { Lesson07 } from './components/Lesson-07/Lesson-07';
import { Lesson08 } from './components/Lesson-08/Lesson-08';

import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Lesson01 />} />
        <Route path="/lesson02" element={<Lesson02 />} />
        <Route path="/lesson03" element={<Lesson03 />} />
        <Route path="/lesson04" element={<Lesson04 />} />
        <Route path="/lesson05" element={<Lesson05 />} />
        <Route path="/lesson06" element={<Lesson06 />} />
        <Route path="/lesson07" element={<Lesson07 />} />
        <Route path="/lesson08" element={<Lesson08 />} />
      </Routes>
    </div>
  );
};
