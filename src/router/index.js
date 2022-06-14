import { createRouter, createWebHistory } from 'vue-router'

const routes = [
{
  path: '/',
  name: 'index',
  component: () => import(/* webpackChunkName: "index" */ '../views/IndexView.vue')
},
{
  path: '/index',
  component: () => import(/* webpackChunkName: "index" */ '../views/IndexView.vue')
},{
  path: '/find',
  name: 'find',//发现
  component: () => import(/* webpackChunkName: "find" */ '../views/FindView.vue')
},{
  path: '/my',
  name: 'my',//我的
  component: () => import(/* webpackChunkName: "my" */ '../views/MyView.vue')
},
{
  path: '/rank',
  name: 'rank',//排行
  component: () => import(/* webpackChunkName: "my" */ '../views/RankView.vue')
}
,
{
  path: '/anime',
  name: 'anime',//动画
  component: () => import(/* webpackChunkName: "my" */ '../views/AnimeView.vue')
},{
  path: '/detaill',
  name: 'detaill',//详情
  component: () => import(/* webpackChunkName: "my" */ '../views/DetailView.vue')
},{
  path:'/empty',
  name:'empty',//空页面
  component: () => import(/* webpackChunkName: "my" */ '../views/EmptyView.vue')
}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
