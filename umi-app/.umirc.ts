import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/components/nav',
      routes: [
        { path: '/index', component: '@/pages/index' },
        { path: '/parent', component: '@/pages/parent' },
        { path: '/child', component: '@/pages/child' },
        { path: '/component', component: '@/pages/component' },
      ],
    },
  ],
  fastRefresh: {},
  dva: {
    immer: false,
    hmr: false,
  },
});
