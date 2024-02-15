import { useEffect, useState } from 'react';
import styles from './PostIdPage.module.css';
import { useParams } from 'react-router-dom';
import { useFetching } from '../../../hooks/useFetching';
import PostService from '../../../api/PostService';
import { Loader } from '../../UI/loader/Loader';

export const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isPostLoading, postError] = useFetching(async id => {
    const response = await PostService.getPostById(id);
    setPost(response.data);
  });

  const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(
    async id => {
      const response = await PostService.getCommentsById(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(params.id)
      .then(fetchCommentsById(params.id))
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className={styles.section}>
      <h1>Page of the post + {params.id}</h1>
      {postError && <h2>{postError}</h2>}
      {isPostLoading ? (
        <Loader />
      ) : (
        <div>
          <div>
            {post.id}.{post.title}
          </div>
          <div>{post.body}</div>
        </div>
      )}

      {commentsError && <h2>{commentsError}</h2>}
      {isCommentsLoading ? (
        <Loader />
      ) : (
        <div>
          <div>Comments:</div>
          {comments.map(comm => (
            <div key={comm.id}>
              <h2>name: {comm.name}</h2>
              <h5>email: {comm.email}</h5>
              <p>{comm.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
