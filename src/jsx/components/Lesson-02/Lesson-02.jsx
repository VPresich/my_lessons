import { AddPost } from './add-post/AddPost';
import { AddPostObj } from './add-post-obj/AddPostObj';
import styles from './Lesson-02.module.css';

export const Lesson02 = () => {
  return (
    <div className={styles.section}>
      <AddPost />
      <AddPostObj />
    </div>
  );
};
