import { useState } from 'react';
import { postsList } from '../Lesson-02/data';
import { PostList } from '../Lesson-02/post-list/PostList';
import { PostForm } from '../UI/post-form/PostForm';
import { PostFilter } from '../UI/post-filter/PostFilter';
import { MyModal } from '../UI/modal/MyModal';
import { MyButton } from '../UI/button/MyButton';
import { usePosts } from '../../hooks/usePosts';

import styles from './Lesson-06.module.css';

export const Lesson06 = () => {
  const [posts, setPosts] = useState(postsList);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  const filteredPosts = usePosts(posts, filter.sort, filter.query); //customhook

  const handleDeletePost = id => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  };

  const handleAddPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  return (
    <div className={styles.section}>
      <MyButton onClick={() => setModal(true)}>Open Modal</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm onSubmit={handleAddPost}></PostForm>
      </MyModal>
      <hr className={styles.line}></hr>
      <PostFilter filter={filter} onChangeFilter={setFilter} />
      <PostList
        posts={filteredPosts}
        onDeletePost={handleDeletePost}
        title={'List of Posts'}
      />
    </div>
  );
};
