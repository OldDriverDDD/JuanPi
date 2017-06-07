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
// 商品详情页面
import Details from '../components/details'

//女装跳转广告页面
import Special from '../components/special'

// 搜索页面
import Search from '../components/search'

// today二级路由
import New from '../pages/today/new'
import Dress from '../pages/today/dress'
import Mother from '../pages/today/mother'
import Shuma from '../pages/today/shuma'
import Man from '../pages/today/man'
import Beautys from '../pages/today/beautys'
import Shoesbag from '../pages/today/shoesBag'
import House from '../pages/today/house'
import Cate from '../pages/today/cate'


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

const todyChild = [
		        { path: '', component: New },
		        { path: 'new', component: New },
		        { path: 'dress', component: Dress },
		        { path: 'shoesBag', component: Shoesbag },
		        { path: 'mother', component: Mother },
		        { path: 'shuma', component: Shuma },
		        { path: 'house', component: House },
		        { path: 'man', component: Man },
		        { path: 'beautys', component: Beautys },
		        { path: 'cate', component: Cate }
		    ];

export default new VueRouter({
	routes: [
		{
			path: '', component: Today, children: todyChild
		},{
			path: '/today', component: Today, children: todyChild

		},{
			path: '/direct', component: Direct
		},{
			path: '/global', component: Global
		},{
			path: '/car', component: Car
		},{
			path: '/mine', component: Mine
		},{
			path:'/details',component:Details
		},{
			path:'/special/:id',component:Special
		},{
			path: '/search',component:Search
		}
		

		// router.redirect({
		// 	'/':'/today/new'
		// })
	]
})