import { defineConfig } from 'umi';
import routes from './src/router';

export default defineConfig({
  title: 'APP',
  /** 构建目录 */
  outputPath: '/build',
  /** 设置 node_modules 目录下依赖文件的编译方式 */
  nodeModulesTransform: {
    type: 'none',
  },
  /** 配置别名，对引用路径进行映射 */
  alias: {},
  /** 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存 */
  hash: true,
  /* 配置 html 的输出形式 */
  exportStatic: {},
  /* 多线程 */
  // workerLoader: {},
  /** 路由模式 */
  history: { type: 'browser' },
  /** 自定义字体 */
  chainWebpack(config) {
    config.module.rule('otf').test(/.otf$/).use('file-loader').loader('file-loader');
  },
  /** 是否启用按需加载 */
  dynamicImport: {
    /** 动态加载loading */
    loading: '@/Loading',
  },
  /* 开启 TypeScript 编译时类型检查。 */
  forkTSChecker: {},
  /* 快速刷新（Fast Refresh），开发时可以保持组件状态，同时编辑提供即时反馈 */
  // fastRefresh:{},
  /** 移动端布局适配 */
  extraPostCSSPlugins: [
    // require('postcss-flexbugs-fixes'),
    require('postcss-preset-env'),
    require('postcss-px-to-viewport')({
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是375
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: [], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // 允许在媒体查询中转换`px`
    }),
  ],
  /** 忽略 moment 的 locale 文件，用于减少尺寸 */
  ignoreMomentLocale: true,
  /* 路由 */
  routes,
});
