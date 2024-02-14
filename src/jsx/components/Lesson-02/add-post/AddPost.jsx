import { useState } from 'react';
import { postsList } from '../data';
import { PostList } from '../post-list/PostList';
import { MyButton } from '../../UI/button/MyButton';
import { MyInput } from '../../UI/input/MyInput';
import styles from './AddPost.module.css';

export const AddPost = () => {
  const [posts, setPosts] = useState(postsList);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleBodyChange = event => {
    setBody(event.target.value);
  };

  const handleAddPost = e => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      title,
      body,
    };
    setPosts([...posts, newPost]);
    setTitle('');
    setBody('');
  };

  const handleDeletePost = id => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  };

  const isAddButtonDisabled = !title || !body;

  return (
    <div className={styles.section}>
      <form>
        <MyInput
          type="text"
          placeholder="post title"
          value={title}
          onChange={handleTitleChange}
        />
        <MyInput
          type="text"
          placeholder="post body"
          value={body}
          onChange={handleBodyChange}
        />
        <MyButton
          type="button"
          disabled={isAddButtonDisabled}
          onClick={handleAddPost}
        >
          Add post
        </MyButton>
      </form>
      <PostList
        onDeletePost={handleDeletePost}
        posts={posts}
        title={'List of Posts'}
      />
    </div>
  );
};
