import { LIMIT } from '../api/constants';
export const getPages = totalCount => {
  return Math.ceil(totalCount / LIMIT);
};

export const getPagesArray = pagesCount => {
  let result = [];
  for (let i = 0; i < pagesCount; i++) {
    result.push(i + 1);
  }
  return result;
};
