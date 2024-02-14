import { useState } from 'react';
import { postsList } from '../Lesson-02/data';
import { PostList } from '../Lesson-02/post-list/PostList';
import { PostForm } from '../UI/post-form/PostForm';
import { PostFilter } from '../UI/post-filter/PostFilter';
import { MyModal } from '../UI/modal/MyModal';
import { MyButton } from '../UI/button/MyButton';
import { usePosts } from '../../hooks/usePosts';

import axios from 'axios';
import { BASE_URL_POST } from './constants';

import styles from './Lesson-07.module.css';

export const Lesson07 = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  const filteredPosts = usePosts(posts, filter.sort, filter.query);

  const handleDeletePost = id => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  };

  const handleAddPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts() {
    console.log('FETCH');
    const response = await axios(BASE_URL_POST);
    if (response) {
      setPosts(response.data);
    }
  }

  return (
    <div className={styles.section}>
      <MyButton onClick={() => setModal(true)}>Open Modal</MyButton>
      <MyButton
        onClick={() => {
          fetchPosts();
        }}
      >
        Get posts
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm onSubmit={handleAddPost}></PostForm>
      </MyModal>
      <hr className={styles.line}></hr>
      <PostFilter filter={filter} onChangeFilter={setFilter} />
      {handleDeletePost.length ? (
        <PostList
          posts={filteredPosts}
          onDeletePost={handleDeletePost}
          title={'List of Posts'}
        />
      ) : (
        <h2 className={styles.message}>No posts</h2>
      )}
    </div>
  );
};
