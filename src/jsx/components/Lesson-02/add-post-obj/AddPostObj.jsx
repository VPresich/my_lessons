import { useState } from 'react';
import { postsList } from '../data';
import { PostList } from '../post-list/PostList';
import { MyButton } from '../../UI/button/MyButton';
import { MyInput } from '../../UI/input/MyInput';
import styles from './AddPostObj.module.css';

export const AddPostObj = () => {
  const [posts, setPosts] = useState(postsList);
  const [post, setPost] = useState({ title: '', body: '' });

  const handleAddPost = e => {
    e.preventDefault();
    console.log(post);
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
    setPost({ title: '', body: '' });
  };

  const handleDeletePost = id => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  };

  const isAddButtonDisabled = !post.title || !post.body;

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
          placeholder="post body"
          value={post.body}
          onChange={e => {
            setPost({ ...post, body: e.target.value });
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
      <PostList
        onDeletePost={handleDeletePost}
        posts={posts}
        title={'List of Posts'}
      />
    </div>
  );
};
