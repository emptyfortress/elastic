import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		drawer: true,
		mini: true,
	},
	getters: {
		drawer: state => { return state.drawer },
		mini: state => { return state.mini },
	},
	mutations: {
		toggleDrawer (state) { state.drawer = !state.drawer },
		setMini (state, payload) { state.mini = payload },
	},
	actions: {
	},
	modules: {
	}
})
