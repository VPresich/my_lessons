import styles from './Counter.module.css';
import { useState } from 'react';
// import { CustomButton } from '../../custom-button/CustomButton';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div className={styles.section}>
      <p>{count}</p>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={increment}>
          Increment
        </button>
        <button className={styles.btn} onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};
