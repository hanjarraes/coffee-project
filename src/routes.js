import React from 'react';
const Menu = React.lazy(() => import('./views/Menu'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/menu', name: 'Dashboard', component: Menu },
];

export default routes;
