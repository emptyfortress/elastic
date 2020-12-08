<template lang="pug">
.all
	.top
		.zag Справочник сотрудников
	.bottom
		drag-zone.zone
			drag-content.content.c1
				v-tabs(v-model="leftTab")
					v-tab(v-for="tab in tabs" :key="tab") {{ tab }}
				v-tabs-items(v-model="leftTab")
					v-tab-item
						tree(:data="treeData" :options="treeOptions" @node:dragging:finish="dragFinish" ref="tree")
							.node-container(slot-scope="{ node }" @contextmenu.prevent="rightClick(node)")
								.tree-text
									i(:class="node.data.icon")
									span {{ node.text }}
					v-tab-item
						tree(:data="treeData")
					v-tab-item()
						h3 Роли
					v-tab-item()
						h3 Должности
			drag-handle.hand
				div
			drag-content.content.c1
				v-tabs
					v-tab Сотрудники

	dragDialog(:drag="drag" @close="drag = false")
	context-menu(ref="ctxMenu" :node="node")
		MyMenu(@editNode = "editNode(node)" @deleteNode="removeNode(node)")

</template>

<script>
import { dragZone, dragHandle, dragContent } from 'vue-drag-zone'
import LiquorTree from 'liquor-tree'
import {departments} from '@/treedata.js'
import dragDialog from '@/components/dragDialog'
import contextMenu from 'vue-context-menu'
import MyMenu from '@/components/MyMenu'



export default {
	data() {
		return {
			leftTab: null,
			drag: false,
			treeData: [],
			node: null,
			treeOptions: {
				dnd: true,
			},
			tabs: ['Подразделения', 'Группы', 'Роли', 'Должности'],
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
	},
	mounted() {
		this.treeData = departments
	},
	methods: {
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
	.zag {
		margin-top: 2rem;
	}
}
.bottom {
	margin-top: 1rem;
}
.zone {
	width: 100%;
	margin: 0 auto;
	position: relative;
	display: flex;
	/* height: 300px; */
	.hand {
		width: 20px;
		div {
			width:10px;
			height: 100%;
			transform: translateX(8px);
		}
		&:hover {
			div { border-left: 3px dotted #333; }
		}
	}
}
.zone .content {
	width: calc((100% - 20px) / 2);
}
.zone .item {
	width: 100%;
	user-select: none;
}
.tree-text i {
	margin-right: 6px;
	margin-left: -4px;
}

.node-container {
	width: 100%;
	/* background: #ccc; */
}
</style>
