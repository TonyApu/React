import { defineConfig } from 'umi';

export default defineConfig({
  model: {},
  antd: {},
  request: {},
  initialState: {},
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Đăng Nhập',
      path: '/login',
      component: './Login',
    },
    {
      name: 'Trang Chủ',
      path: '/home',
      component: './Home',
    },
    {
      path: '/products',
      component: './Products',
      name: 'Menu',
      wrappers: ['@/wrappers/auth'],
    },
  ],
  mock: {
    include: ['src/pages/**/_mock.ts'],
  },
  dva: {},
  layout: {
    // https://umijs.org/docs/max/layout-menu#构建时配置
    title: 'UmiJS',
    locale: true,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
});
