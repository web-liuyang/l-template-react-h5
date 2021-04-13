import { IConfigFromPlugins } from '@@/core/pluginConfig';

type Routes = IConfigFromPlugins['routes'];

const routes: Routes = [
  {
    path: '/',
    exact: true,
    component: '@/pages/Home/index',
    title: 'Home',
  },
  {
    path: '*',
    component: '@/404',
    title: '404',
  },
];

export default routes;
