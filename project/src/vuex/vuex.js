import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: { // 共享的数据 
		arr: [],
		good: null,
		addGood: null
	},
	mutations: { // 修改数据的唯一途径
		ADD_GOODSNUM(state, newItem) {
			var flag = false;
			state.arr.map(function(item){
				if(newItem.title == item.title) {
					item.count++;
					flag = true;
				}
			});
			if(flag == false) {
				newItem.count = 1;
				state.arr.push(newItem);
			}
		},
		REDUCE_GOODSNUM(state, index) {
			var currentGood = state.arr[index];
			if (currentGood.count == 1) {
				state.arr[index].splice(index,1);
			} else {
				currentGood.count--;
			}
		},
		CHANGEGOOD(state, item) {
			state.good = item;
		},
		ADD_ADSGOOD(state, item) {
			state.addGood = item;
		}
	},
	actions: { // 异步操作的事件
	
	},
	getters: { // 这里的getters相当于就是实例中我们用到的计算属性
		
	}
})