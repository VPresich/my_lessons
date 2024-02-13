import styles from './PostItem.module.css';
import { MyButton } from '../../UI/button/MyButton';

export const PostItem = ({ post: { id, title, description } }) => {
  return (
    <div>
      <div className={styles.post}>
        <div className={styles.postContent}>
          <strong>
            {id}. {title}
          </strong>
          <div className={styles.description}>{description}</div>
        </div>
        <MyButton onClick={() => {}} type="button">
          Delete
        </MyButton>
      </div>
    </div>
  );
};
