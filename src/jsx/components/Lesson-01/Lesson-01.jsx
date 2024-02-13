import styles from './Lesson-01.module.css';
import { Counter } from './Counter/Counter';
import { InputValue } from './InputValue/InputValue';
import { CounterClass } from './CounterClass/CounterClass';

export const Lesson01 = () => {
  return (
    <div className={styles.section}>
      <Counter />
      <CounterClass />
      <InputValue />
    </div>
  );
};
