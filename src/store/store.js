import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		drawer: true,
		mini: false,
		searchMode: false,
		loading: false,
		searchItemsResults: [],
		filterResults: [],
		checked: [],
		grid: true,
	},
	getters: {
		drawer: state => { return state.drawer },
		mini: state => { return state.mini },
		searchMode: state => { return state.searchMode },
		loading: state => { return state.loading },
		searchItemsResults: state => { return state.searchItemsResults },
		filterResults: state => { return state.filterResults },
		checked: state => { return state.checked },
		grid: state => { return state.grid },
	},
	mutations: {
		toggleDrawer (state) { state.drawer = !state.drawer },
		setMini (state, payload) { state.mini = payload },
		toggleSearchMode (state) { state.searchMode = !state.searchMode },
		setSearchMode (state, payload) { state.searchMode = payload },
		setLoading (state, payload) { state.loading = payload },
		setSearchItemsResults (state, payload) { state.searchItemsResults = payload },
		setFilterResults (state, payload) { state.filterResults = payload },
		setChecked (state, payload) { state.checked = payload },
		setGrid (state, payload) { state.grid = payload },
	},
	actions: {
	},
	modules: {
	}
})
