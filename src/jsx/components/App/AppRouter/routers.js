export const routers = [
  { path: '/', element: 'Home' },
  { path: '/posts', element: 'Posts' },
  { path: '/posts/:id', element: 'PostIdPage' },
  { path: '*', element: 'ErrorPage' },
];
