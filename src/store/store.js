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
		selectedItems: [],
		treeItems: [],
		users: [],
		userSearch: false,
		query: '',
	},
	getters: {
		drawer: state => { return state.drawer },
		mini: state => { return state.mini },
		searchMode: state => { return state.searchMode },
		loading: state => { return state.loading },
		searchItemsResults: state => { return state.searchItemsResults },
		filterResults: state => { return state.filterResults },
		checked: state => { return state.checked },
		selectedItems: state => { return state.selectedItems },
		treeItems: state => { return state.treeItems },
		users: state => { return state.users },
		userSearch: state => { return state.userSearch },
		query: state => { return state.query },
	},
	mutations: {
		toggleDrawer (state) { state.drawer = !state.drawer },
		setMini (state, payload) { state.mini = payload },
		toggleSearchMode (state) { state.searchMode = !state.searchMode },
		setSearchMode (state, payload) { state.searchMode = payload },
		setLoading (state, payload) { state.loading = payload },
		setItems (state, payload) { state.selectedItems = payload },
		addItemToSelection (state, payload) { state.users.push(payload) },
		setSearchItemsResults (state, payload) { state.searchItemsResults = payload },
		setFilterResults (state, payload) { state.filterResults = payload },
		setChecked (state, payload) { state.checked = payload },
		setTreeItems (state, payload) { state.treeItems = payload },
		setUsers (state, payload) { state.users = payload },
		setUserSearch (state, payload) { state.userSearch = payload },
		toggleUserSearch (state) { state.userSearch = !state.userSearch },
		setQuery (state, payload) { state.query = payload},
	},
	actions: {
	},
	modules: {
	}
})
