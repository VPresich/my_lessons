import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Posts } from '../../pages/Posts/Posts';
import { PostIdPage } from '../../pages/PostIdPage/PostIdPage';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
