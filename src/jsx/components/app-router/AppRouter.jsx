import { Routes, Route } from 'react-router-dom';
import { Lesson01 } from '../Lesson-01/Lesson-01';
import { Lesson02 } from '../Lesson-02/Lesson-02';
import { Lesson03 } from '../Lesson-03/Lesson-03';
import { Lesson04 } from '../Lesson-04/Lesson-04';
import { Lesson05 } from '../Lesson-05/Lesson-05';
import { Lesson06 } from '../Lesson-06/Lesson-06';
import { Lesson07 } from '../Lesson-07/Lesson-07';
import { Lesson08 } from '../Lesson-08/Lesson-08';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Lesson01 />} />
      <Route path="/lesson02" element={<Lesson02 />} />
      <Route path="/lesson03" element={<Lesson03 />} />
      <Route path="/lesson04" element={<Lesson04 />} />
      <Route path="/lesson05" element={<Lesson05 />} />
      <Route path="/lesson06" element={<Lesson06 />} />
      <Route path="/lesson07" element={<Lesson07 />} />
      <Route path="/lesson08" element={<Lesson08 />} />
    </Routes>
  );
};
