import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		drawer: true,
		mini: false,
		searchMode: false,
	},
	getters: {
		drawer: state => { return state.drawer },
		mini: state => { return state.mini },
		searchMode: state => { return state.searchMode },
	},
	mutations: {
		toggleDrawer (state) { state.drawer = !state.drawer },
		setMini (state, payload) { state.mini = payload },
		toggleSearchMode (state) { state.searchMode = !state.searchMode },
		setSearchMode (state, payload) { state.searchMode = payload },
	},
	actions: {
	},
	modules: {
	}
})
