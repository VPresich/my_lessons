import { useState, useEffect } from 'react';
import { useFetching } from '../../hooks/useFetching';

import { PostList } from '../Lesson-02/post-list/PostList';
import { PostForm } from '../UI/post-form/PostForm';
import { PostFilter } from '../UI/post-filter/PostFilter';
import { MyModal } from '../UI/modal/MyModal';
import { MyButton } from '../UI/button/MyButton';
import { usePosts } from '../../hooks/usePosts';
import { Loader } from '../UI/loader/Loader';
import PostService from '../../api/PostService';

import styles from './Lesson-08.module.css';

export const Lesson08 = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = usePosts(posts, filter.sort, filter.query);

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

      {postError && <h2>{postError}</h2>}
      {isPostLoading ? (
        <Loader />
      ) : (
        <PostList
          posts={filteredPosts}
          onDeletePost={handleDeletePost}
          title={'List of Posts'}
        />
      )}
    </div>
  );
};
