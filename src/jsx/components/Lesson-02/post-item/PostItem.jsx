import styles from './PostItem.module.css';
import { MyButton } from '../../UI/button/MyButton';

export const PostItem = ({ post: { id, title, body }, onDeletePost }) => {
  return (
    <div>
      <div className={styles.post}>
        <div className={styles.postContent}>
          <strong>
            {id}. {title}
          </strong>
          <div className={styles.body}>{body}</div>
        </div>
        <MyButton
          onClick={() => {
            onDeletePost(id);
          }}
          type="button"
        >
          Delete
        </MyButton>
      </div>
    </div>
  );
};
