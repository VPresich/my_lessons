import { useState } from 'react';
import { postsList } from '../data';
import { PostList } from '../post-list/PostList';
import { MyButton } from '../../UI/button/MyButton';
import { MyInput } from '../../UI/input/MyInput';
import styles from './AddPost.module.css';

export const AddPost = () => {
  const [posts, setPosts] = useState(postsList);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const handleAddPost = e => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      title,
      description,
    };
    setPosts([...posts, newPost]);
    setTitle('');
    setDescription('');
  };

  const isAddButtonDisabled = !title || !description;

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
          placeholder="post description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <MyButton
          type="button"
          disabled={isAddButtonDisabled}
          onClick={handleAddPost}
        >
          Add post
        </MyButton>
      </form>
      <PostList posts={posts} title={'List of Posts'} />
    </div>
  );
};
