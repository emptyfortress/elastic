<template lang="pug">
.cat
	.top(:class="ifSearch")
		.zagg(v-show="!userSearch")
			v-icon.mr-3 mdi-book-open-page-variant-outline
			span Справочник сотрудников
		.pa-6(v-if="loading")
			userLoader
		Subbar(v-show="userSearch && !loading" @close="toggleSearch" :items="searchItemsResults")
	.bottom(:class="ifSearch")
		drag-zone.zone
			drag-content.content
				v-tabs(v-model="leftTab")
					v-tab(v-for="tab in tabs" :key="tab" @click="selectedNode = null") {{ tab }}
				v-tabs-items(v-model="leftTab").ful
					v-tab-item
						tree(:data="treeItems" :options="treeOptions"
							@node:dragging:finish="dragFinish" ref="tree"
							@node:checked="onCheckNode"
							@node:unchecked="onUnCheckNode"
							@node:selected="onSelectNode")
							.node-container(slot-scope="{ node }" @contextmenu.prevent="rightClick(node)")
								.tree-text
									svg-icon(:icon="node.data.icon")
									span {{ node.text }}
					v-tab-item.ful
						Groups(@selectNode="onSelectNode" @checkNode="onCheckNode")
					v-tab-item.ful
						Roles(@selectNode="onSelectNode" @checkNode="onCheckNode")
					v-tab-item.ful
						Titles
				v-btn(fab color="primary" @click="add = true" small :disabled="!selectedNode").plus
					v-icon mdi-plus
			drag-handle.hand
				div
			drag-content.content
				v-tabs(v-model="rightTab")
					v-tab(v-for="tab in tabs1" :key="tab") {{ tab }}
					v-spacer
					v-tab(v-show="selected.length")
						v-badge(color="red" inline :content="selected.length") Выбрано
				v-tabs-items(v-model="rightTab").ful
					v-tab-item
						Users(:dep="dep" v-if="selectedNode" :addUserMode="addUserMode")
						noUser(v-else scope="user")
					v-tab-item
						depInfo(:dep="dep" v-if="selectedNode" @copy="snackbar = true")
						.logo(v-if="selectedNode")
							img(:src="logo")
						noUser(v-else scope="firm")
					v-tab-item.item
						Selection(@uncheck="uncheck")
				v-btn(fab color="primary" small v-if="selectedNode" @click="toggleAddUser" ).plus
					v-icon(v-if="rightTab === 1") mdi-pencil
					v-icon(v-else :class="{'active' : addUserMode}" ) mdi-plus

	dragDialog(:drag="drag" @close="drag = false")
	addDialog(:add="add" @close="add = false" :node="selectedNode" @add="addFromDialog" :tab="leftTab")
	context-menu(ref="ctxMenu" :node="node")
		MyMenu(@editNode = "editNode(node)" @deleteNode="removeNode(node)" @snack="snackbar = true" @addNode = "addChildNode(node)" @infoNode = "infoNode(node)")
	v-snackbar(v-model="snackbar" timeout="1300" absolute top right color="teal") Скопировано
	v-snackbar(v-model="addednode" timeout="1300" absolute top right light color="amber") Узел добавлен
	.bookmark(@click="toggleUserSearch" v-show="searchItemsResults.length")
		img(src="@/assets/img/bookmark.svg")

</template>

<script>
import { dragZone, dragHandle, dragContent } from 'vue-drag-zone'
import LiquorTree from 'liquor-tree'
import {departments} from '@/treedata.js'
import dragDialog from '@/components/dragDialog'
import contextMenu from 'vue-context-menu'
import MyMenu from '@/components/MyMenu'
import Users from '@/components/Users'
import Subbar from '@/components/Subbar'
import depInfo from '@/components/depInfo'
import noUser from '@/components/noUser'
import Selection from '@/components/Selection'
import Groups from '@/components/Groups'
import Roles from '@/components/Roles'
import Titles from '@/components/Titles'
import addDialog from '@/components/addDialog'
import userLoader from '@/components/userLoader'

export default {
	data() {
		return {
			selectedNode: null,
			snackbar: false,
			addednode: false,
			leftTab: null,
			rightTab: null,
			drag: false,
			add: false,
			addUserMode: false,
			treeData: [],
			node: null,
			nodes: [],
			seluser: [],
			treeOptions: {
				dnd: true,
				checkbox: true,
			},
			tabs: ['Подразделения', 'Группы', 'Роли', 'Должности'],
			tabs1: ['Сотрудники', 'Информация'],
		}
	},
	computed: {
		searchItemsResults () {
			return this.$store.getters.searchItemsResults
		},
		loading () {
			return this.$store.getters.loading
		},
		checkedItems () {
			return this.$refs.tree.findAll({state: {checked: true}})
		},
		treeItems () {
			return this.$store.getters.treeItems
		},
		selected () {
			let users = this.$store.getters.users.filter( item => item.isSelected)
			return [...users, ...this.nodes]
		},
		dep() {
			let t = {}
			if(this.selectedNode) {
				t.dep = this.selectedNode.data.dep
				t.firm = this.selectedNode.data.firm
				return t
			} else return null
		},
		logo () {
			return this.selectedNode.data.logo || this.selectedNode.parent.data.logo
		},
		search() {
			return this.$store.getters.searchMode
		},
		userSearch () {
			return this.$store.getters.userSearch
		},
		ifSearch() {
			if(this.userSearch) {
				return 'big'
			} else return ''
		}
	},
	components: {
		dragZone,
		dragHandle,
		dragContent,
		tree: LiquorTree,
		dragDialog,
		contextMenu,
		MyMenu,
		Users,
		Subbar,
		depInfo,
		noUser,
		Selection,
		Groups,
		Roles,
		Titles,
		addDialog,
		userLoader,
	},
	created() {
		this.treeData = departments
		this.$store.commit('setTreeItems', departments)
	},
	methods: {
		toggleAddUser () {
			this.addUserMode = !this.addUserMode
		},
		uncheck (e) {
			let node = this.$refs.tree.find(e)
			node.uncheck()
		},
		onUnCheckNode () {
			let allChecked = this.checkedItems.map( item => {
				return {fio: item.data.text, icon: item.data.icon}
			})
			this.$store.commit('setChecked', allChecked)
		},
		onCheckNode () {
			this.nodes.push({})
			let allChecked = this.checkedItems.map( item => {
				return {fio: item.data.text, icon: item.data.icon, checked: item.states.checked}
			})
			this.$store.commit('setChecked', allChecked)
		},
		onSelectNode (e) {
			this.selectedNode = e
			console.log(e)
		},
		toggleUserSearch () {
			this.$store.commit('toggleUserSearch')
			this.$store.commit('toggleSearchMode')
		},
		toggleSearch() {
			this.$store.commit('toggleSearchMode')
			this.$store.commit('setUserSearch', false)
		},
		addChildNode(node) {
			if (node.enabled()) {
				node.append('Новое подразделение')
				this.addednode = true
			}
		},
		addFromDialog(val) {
			if (this.selectedNode.enabled()) {
				this.selectedNode.append(val)
				this.addednode = true
				this.selectedNode.expand()
				let that = this.$refs.tree.find(val)
				that.select()
			}
		},
		removeNode(node) {
			if (confirm('Are you sure?')) {
				node.remove()
			}
		},
		editNode(node, e) {
			node.startEditing()
			console.log(e)
		},
		dragFinish() {
			this.drag = true
		},
		rightClick(e) {
			this.$refs.ctxMenu.open()
			this.node = e
		},
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.top {
	/* height: 60px; */
	transition: .2s ease all;
	&.big {
		height: 200px;
		background: #fff;
		border-bottom: 1px solid #aaa;
	}
}
.zagg {
	padding-top: 20px;
	font-size: 1.5rem;
	color: #666;
}
.zone {
	width: 100%;
	margin: 0 auto;
	position: relative;
	display: flex;
}
.hand {
	width: 20px;
	div {
		width:10px;
		height: calc(100vh - 145px);
		transform: translateX(8px);
	}
	&:hover {
		div { border-left: 3px dotted #333; }
	}
}
.zone .content {
	width: calc((100% - 20px) / 2);
	position: relative;
}
.tree-text .icon {
	margin-right: 6px;
}

.node-container {
	width: 100%;
}
.tree {
	height: calc(100vh - 194px);
	overflow-x: auto;
	overflow-y: auto;
}
.big {
	transition: .2s ease all;
}
.big .hand div {
	height: calc(100vh - 283px);
}
.big .tree, .big .ful .v-window-item, .big.bottom {
	height: calc(100vh - 330px);
}

.ful .v-window-item.v-window-item--active {
	background: #fff;
	height: calc(100vh - 192px);
}
.big .ful .v-window-item.v-window-item--active {
	background: #fff;
	height: calc(100vh - 330px);
}

.filt {
	width: 200px;
}
.plus {
	position: absolute;
	right: 1rem;
	bottom: 1rem;
	.active {
		transform: rotate(45deg);
	}
}
.logo {
	position: absolute;
	bottom: .3rem;
	left: 1rem;
}
.cen {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	aling-items: center;
	i {
		margin-top: 4rem;
		font-size: 8rem;
	}
}
.res {
	height: 100%;
	overflow: auto;
}
.list {
	border-bottom: 1px solid #ccc;
}
.cat {
	position: relative;
	.bookmark {
		position: absolute;
		top: 0;
		right: 1.7rem;
		cursor: pointer;
		img {
			height: 24px;
		}
	}
}
</style>
