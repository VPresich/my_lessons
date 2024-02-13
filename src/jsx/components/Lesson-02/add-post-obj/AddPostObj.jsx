import { useState } from 'react';
import { postsList } from '../data';
import { PostList } from '../post-list/PostList';
import { MyButton } from '../../UI/button/MyButton';
import { MyInput } from '../../UI/input/MyInput';
import styles from './AddPostObj.module.css';

export const AddPostObj = () => {
  const [posts, setPosts] = useState(postsList);
  const [post, setPost] = useState({ title: '', description: '' });

  const handleAddPost = e => {
    e.preventDefault();
    console.log(post);
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
    setPost({ title: '', description: '' });
  };

  const isAddButtonDisabled = !post.title || !post.description;

  return (
    <div className={styles.section}>
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
      <PostList posts={posts} title={'List of Posts'} />
    </div>
  );
};
