import { useState, useEffect } from 'react';
import { usePageFetching } from '../../hooks/usePageFetching';

import { PostList } from '../Lesson-02/post-list/PostList';
import { PostForm } from '../UI/post-form/PostForm';
import { PostFilter } from '../UI/post-filter/PostFilter';
import { MyModal } from '../UI/modal/MyModal';
import { MyButton } from '../UI/button/MyButton';
import { usePosts } from '../../hooks/usePosts';
import { Loader } from '../UI/loader/Loader';
import { Pagination } from '../UI/pagination/Pagination';
import PostService from '../../api/PostService';
import { getPages } from '../../utils/pages';

import styles from './Lesson-08.module.css';

export const Lesson08 = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currPage, setCurrPage] = useState(1);

  const [fetchPosts, isPostLoading, postError] = usePageFetching(async () => {
    const responce = await PostService.getResponce(currPage);
    setPosts(responce.data);
    setTotalPages(getPages(responce.headers['x-total-count']));
  });

  useEffect(() => {
    fetchPosts();
  }, [currPage]);

  const filteredPosts = usePosts(posts, filter.sort, filter.query);

  const handleDeletePost = id => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  };

  const handleAddPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const handleChangePage = p => {
    setCurrPage(p);
  };

  return (
    <div className={styles.section}>
      <MyButton onClick={() => setModal(true)}>Open Modal</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm onSubmit={handleAddPost}></PostForm>
      </MyModal>
      <hr className={styles.line}></hr>
      <PostFilter filter={filter} onChangeFilter={setFilter} />

      {postError && <h2>{postError}</h2>}
      {isPostLoading ? (
        <Loader />
      ) : (
        <PostList
          posts={filteredPosts}
          onDeletePost={handleDeletePost}
          title={'List of Posts'}
        />
      )}
      <Pagination
        page={currPage}
        totalPages={totalPages}
        onChangePage={handleChangePage}
      ></Pagination>
    </div>
  );
};
