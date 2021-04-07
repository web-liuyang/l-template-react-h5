import { IConfigFromPlugins } from '@@/core/pluginConfig';

type Routes = IConfigFromPlugins['routes'];

const routes: Routes = [
  {
    path: '/',
    exact: true,
    component: '@/pages/Home/index', // 主页
  },
];

export default routes;
