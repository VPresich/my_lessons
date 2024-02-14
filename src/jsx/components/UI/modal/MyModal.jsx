import styles from './MyModal.module.css';
import clsx from 'clsx';

export const MyModal = ({ children, visible, setVisible }) => {
  const classStyle = clsx(styles.myModal, { [styles.active]: visible });
  return (
    <div className={classStyle} onClick={() => setVisible(false)}>
      <div className={styles.myModalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
