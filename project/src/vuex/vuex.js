import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: { // 共享的数据
		money: 0
	},
	mutations: { // 修改数据的唯一途径
	
	},
	actions: { // 异步操作的事件
	
	},
	getters: { // 这里的getters相当于就是实例中我们用到的计算属性

	}
})