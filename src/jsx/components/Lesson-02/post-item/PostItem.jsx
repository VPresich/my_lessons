import styles from './PostItem.module.css';
import { MyButton } from '../../UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

export const PostItem = ({ post: { id, title, body }, onDeletePost }) => {
  const router = useNavigate();
  return (
    <div>
      <div className={styles.post}>
        <div className={styles.postContent}>
          <strong>
            {id}. {title}
          </strong>
          <div className={styles.body}>{body}</div>
        </div>
        <div className={styles.postBtns}>
          <MyButton type="button" onClick={() => router(`/posts/${id}`)}>
            Open
          </MyButton>
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
    </div>
  );
};
