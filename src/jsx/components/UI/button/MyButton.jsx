import styles from './MyButton.module.css';

export const MyButton = ({ children, ...props }) => {
  return (
    <button className={styles.customBtn} {...props}>
      {children}
    </button>
  );
};
