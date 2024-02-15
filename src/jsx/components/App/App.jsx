import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter/AppRouter';
import AppNavBar from './AppNavBar/AppNavBar';

import styles from './App.module.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <AppNavBar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;
