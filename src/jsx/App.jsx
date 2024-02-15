import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/app-router/AppRouter';
import { NavBar } from './components/UI/navbar/NavBar';

import styles from './App.module.css';

export const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <NavBar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};
