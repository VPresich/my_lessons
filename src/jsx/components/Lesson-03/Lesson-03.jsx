import { useState, useMemo } from 'react';
import { postsList } from '../Lesson-02/data';
import { PostList } from '../Lesson-02/post-list/PostList';
import { PostForm } from '../UI/post-form/PostForm';
import { MySelect } from '../UI/select/MySelect';

import styles from './Lesson-03.module.css';
import { MyInput } from '../UI/input/MyInput';
export const Lesson03 = () => {
  const [posts, setPosts] = useState(postsList);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const filteredPosts = useMemo(() => {
    return sortedPosts.filter(post =>
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedPosts]);

  const handleAddPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const handleDeletePost = id => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  };

  const handleSort = sort => {
    setSelectedSort(sort);
  };

  return (
    <div className={styles.section}>
      <PostForm onSubmit={handleAddPost}></PostForm>
      <hr className={styles.line}></hr>
      <MyInput
        value={searchQuery}
        placeholder="Search..."
        onChange={e => setSearchQuery(e.target.value)}
      />
      <MySelect
        value={selectedSort}
        onChange={handleSort}
        disabled={true}
        defaultValue={'sort by'}
        options={[
          { value: 'title', name: 'by title' },
          { value: 'description', name: ' by description' },
        ]}
      />

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
