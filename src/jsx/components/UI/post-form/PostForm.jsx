import { useState } from 'react';
import { nanoid } from 'nanoid';
import { MyButton } from '../../UI/button/MyButton';
import { MyInput } from '../../UI/input/MyInput';
// import styles from './PostForm.module.css';

export const PostForm = ({ onSubmit }) => {
  const [post, setPost] = useState({ title: '', description: '' });

  const handleAddPost = e => {
    e.preventDefault();
    onSubmit({ ...post, id: nanoid() });
    setPost({ title: '', description: '' });
  };

  const isAddButtonDisabled = !post.title || !post.description;

  return (
    <form>
      <MyInput
        type="text"
        placeholder="post title"
        value={post.title}
        onChange={e => {
          setPost({ ...post, title: e.target.value });
        }}
      />
      <MyInput
        type="text"
        placeholder="post description"
        value={post.description}
        onChange={e => {
          setPost({ ...post, description: e.target.value });
        }}
      />
      <MyButton
        type="button"
        disabled={isAddButtonDisabled}
        onClick={handleAddPost}
      >
        Add post
      </MyButton>
    </form>
  );
};
