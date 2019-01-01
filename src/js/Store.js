import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

var store = new Vuex.Store({
	state: {
		files: [],
	},
	getters: {
		files(state) {
			return state.files;
		},
		file(state) {
			return id => state.files[id];
		}
	},
	mutations: {
		addFile(state, file) {
			state.files.push(file);
		}
	},
	actions: {

	}
});

export default store;