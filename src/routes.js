import { Home } from './pages/Home';
import { About } from './pages/About';

export default [
  {
    id: 'home',
    component: Home,
    path: '/',
    exact: true
  },
  {
    id: 'about',
    component: About,
    path: '/about-the-project',
    exact: true
  }
];
