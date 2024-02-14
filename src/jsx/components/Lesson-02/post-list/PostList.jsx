import { PostItem } from '../post-item/PostItem';
import styles from './PostList.module.css';

export const PostList = ({ posts, title, onDeletePost }) => {
  if (posts.length === 0) {
    return <h2 className={styles.message}>No posts</h2>;
  }
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <PostItem post={post} onDeletePost={onDeletePost} />
          </li>
        ))}
      </ul>
    </div>
  );
};
