import { useState, useRef } from 'react';
import { postsList } from '../data';
import { PostList } from '../post-list/PostList';
import { MyButton } from '../../UI/button/MyButton';
import { MyInput } from '../../UI/input/MyInput';
import styles from './AddPostRef.module.css';

export const AddPostRef = () => {
  const [posts, setPosts] = useState(postsList);
  const [title, setTitle] = useState('');

  const descrInputRef = useRef();

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleAddPost = e => {
    e.preventDefault();
    console.log(title);
    console.log(descrInputRef.current.value);
    console.log(descrInputRef);
    const newPost = {
      id: posts.length + 1,
      title,
      body: descrInputRef.current.value,
    };
    setPosts([...posts, newPost]);
    setTitle('');
  };

  const handleDeletePost = id => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  };

  // const isAddButtonDisabled = !title || !body;

  return (
    <div className={styles.section}>
      <form>
        <MyInput
          type="text"
          placeholder="post title"
          value={title}
          onChange={handleTitleChange}
        />
        <MyInput ref={descrInputRef} type="text" placeholder="post body" />
        <MyButton type="button" disabled={false} onClick={handleAddPost}>
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
