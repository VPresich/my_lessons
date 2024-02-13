import styles from './InputValue.module.css';
import { useState } from 'react';

export const InputValue = () => {
  const [value, setValue] = useState('q');
  return (
    <div className={styles.section}>
      <p>{value}</p>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      ></input>
    </div>
  );
};
