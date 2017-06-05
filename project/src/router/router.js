import Vue from 'vue'
// 引入vue-router，并安装
import VueRouter from 'vue-router'
// 可以让VueRouter在任何组件中使用
Vue.use(VueRouter)
// 引入组件
import Today from '../pages/today/today'
import Direct from '../pages/direct/direct'
import Global from '../pages/global/global'
import Car from '../pages/car/car'
import Mine from '../pages/mine/mine'


// 定义路由规则
// const routes = [
// 	{
// 		path: '', component: Home
// 	},{
// 		path: '/home', component: Home
// 	},{
// 		path: '/market', component: Market
// 	},{
// 		path: '/car', component: Car
// 	},{
// 		path: '/mine', component: Mine
// 	},
// ]

// 创建路由对象
// const router = new VueRouter({
// 	routes: [
// 		{
// 			path: '', component: Home
// 		},{
// 			path: '/home', component: Home
// 		},{
// 			path: '/market', component: Market
// 		},{
// 			path: '/car', component: Car
// 		},{
// 			path: '/mine', component: Mine, children: [
// 				{ path: '', component: One },
// 				{ path: 'one', component: One },
// 				{ path: 'two', component: Two }
// 			]
// 		}
// 	]
// })

// export defalut router

export default new VueRouter({
	routes: [
		{
			path: '', component: Today
		},{
			path: '/today', component: Today
		},{
			path: '/direct', component: Direct
		},{
			path: '/global', component: Global
		},{
			path: '/car', component: Car
		},{
			path: '/mine', component: Mine
		}
	]
})