import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: '/', component: 'home', name: 'Trang Chủ'},
    { path: '/products', component: 'products', name: 'Menu',},
    { path: '/login', component: 'login', name: "Đăng nhập" },
  ],
  plugins: ["@umijs/plugins/dist/react-query"],
  reactQuery: {},
  npmClient: 'yarn',
});
