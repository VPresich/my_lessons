import { useState } from 'react';
import { postsList } from '../Lesson-02/data';
import { PostList } from '../Lesson-02/post-list/PostList';
import { PostForm } from '../UI/post-form/PostForm';

import styles from './Lesson-03.module.css';

export const Lesson03 = () => {
  const [posts, setPosts] = useState(postsList);

  const handleAddPost = newPost => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className={styles.section}>
      <PostForm onSubmit={handleAddPost}></PostForm>
      <PostList posts={posts} title={'List of Posts'} />
    </div>
  );
};
