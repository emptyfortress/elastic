<template lang="pug">
.cat
	.top(:class="ifSearch")
		.zagg(v-if="!search")
			v-icon.mr-3 mdi-book-open-page-variant-outline
			span Справочник сотрудников
		Subbar(v-else @close="toggleSearch")
	.bottom(:class="ifSearch")
		drag-zone.zone
			drag-content.content
				v-tabs(v-model="leftTab")
					v-tab(v-for="tab in tabs" :key="tab") {{ tab }}
				v-tabs-items(v-model="leftTab").ful
					v-tab-item
						tree(:data="treeData" :options="treeOptions" @node:dragging:finish="dragFinish" ref="tree")
							.node-container(slot-scope="{ node }" @contextmenu.prevent="rightClick(node)")
								.tree-text
									i(:class="node.data.icon")
									span {{ node.text }}
					v-tab-item
						h3 Groups
					v-tab-item
						h3 Роли
					v-tab-item
						h3 Должности
			drag-handle.hand
				div
			drag-content.content.rel
				v-tabs(v-model="rightTab")
					v-tab Сотрудники
				v-tabs-items(v-model="rightTab").ful
					v-tab-item
						Users(:filter="filterTable")
				.filt
					v-text-field(v-model="filterTable" placeholder="Фильтр" prepend-icon="mdi-filter-outline" clearable)

	dragDialog(:drag="drag" @close="drag = false")
	context-menu(ref="ctxMenu" :node="node")
		MyMenu(@editNode = "editNode(node)" @deleteNode="removeNode(node)" @snack="snackbar = true" @addNode = "addChildNode(node)")
	v-snackbar(v-model="snackbar" timeout="1300" absolute top right color="teal") Узел скопирован
	v-snackbar(v-model="addednode" timeout="1300" absolute top right light color="amber") Узел добавлен


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



export default {
	data() {
		return {
			filterTable: '',
			snackbar: false,
			addednode: false,
			leftTab: null,
			rightTab: null,
			drag: false,
			treeData: [],
			node: null,
			treeOptions: {
				dnd: true,
			},
			tabs: ['Подразделения', 'Группы', 'Роли', 'Должности'],
		}
	},
	computed: {
		search() {
			return this.$store.getters.searchMode
		},
		ifSearch() {
			if(this.search) {
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
	},
	mounted() {
		this.treeData = departments
	},
	methods: {
		toggleSearch() {
			this.$store.commit('toggleSearchMode')
		},
		addChildNode(node) {
			if (node.enabled()) {
				node.append('Новое подразделение')
				this.addednode = true
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
	height: 60px;
	transition: .2s ease all;
	&.big {
		height: 200px;
		background: #fff;
		border-bottom: 1px solid #ccc;
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
}
.tree-text i {
	margin-right: 6px;
	margin-left: -4px;
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
	height: calc(100vh - 330px);
}
.big .tree, .big .ful .v-window-item, .big.bottom, .big .zone .content {
	height: calc(100vh - 330px);
}
.ful .v-window-item.v-window-item--active {
	background: #fff;
}
.big .ful .v-window-item.v-window-item--active {
	background: #fff;
	height: calc(100vh - 330px);
}
.filt {
	width: 200px;
	height: 36px;
	position: absolute;
	top: -6px;
	right: 0;
}
</style>
