import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

var store = new Vuex.Store({
	state: {
		files: []
	},
	getters: {
		files(state) {
			return state.files;
		}
	},
	mutations: {

	},
	actions: {

	}
});

export default store;