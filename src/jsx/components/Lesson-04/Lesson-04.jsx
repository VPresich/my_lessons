import { useState, useMemo } from 'react';
import { postsList } from '../Lesson-02/data';
import { PostList } from '../Lesson-02/post-list/PostList';
import { PostForm } from '../UI/post-form/PostForm';
import { PostFilter } from '../UI/post-filter/PostFilter';
import styles from './Lesson-04.module.css';

export const Lesson04 = () => {
  const [posts, setPosts] = useState(postsList);
  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const filteredPosts = useMemo(() => {
    return sortedPosts.filter(post =>
      post.description.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const handleDeletePost = id => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  };

  const handleAddPost = newPost => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className={styles.section}>
      <PostForm onSubmit={handleAddPost}></PostForm>
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
