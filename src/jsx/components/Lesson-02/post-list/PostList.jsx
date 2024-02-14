import { PostItem } from '../post-item/PostItem';

export const PostList = ({ posts, title, onDeletePost }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <PostItem post={post} onDeletePost={onDeletePost} />
          </li>
        ))}
      </ul>
    </div>
  );
};
