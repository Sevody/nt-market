// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    name: 'Ant Design Pro',
    locale: false,
    siderWidth: 208,
  },
  // locale: {
  //   // default zh-CN
  //   default: 'zh-CN',
  //   // default true, when it is true, will use `navigator.language` overwrite default
  //   antd: true,
  //   baseNavigator: true,
  // },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './User/Login',
        },
      ],
    },
    {
      path: '/',
      redirect: '/dashboard/workplace',
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: 'smile',
      routes: [
        {
          name: '工作台',
          path: '/dashboard/workplace',
          component: './Dashboard/Workplace',
        },
      ],
    },
    {
      name: '获客',
      icon: 'smile',
      path: '/customer',
      routes: [
        {
          name: '受众管理',
          icon: 'smile',
          path: '/customer/customer-list',
          component: './Customer/CustomerList',
        },
        {
          name: '来源管理',
          icon: 'smile',
          path: '/customer/source',
          component: './Customer/Source',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
