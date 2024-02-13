import React from 'react';
import styles from './MyInput.module.css';

export const MyInput = React.forwardRef((props, ref) => {
  return <input className={styles.customInput} {...props} ref={ref} />;
});

MyInput.displayName = 'MyInput';
