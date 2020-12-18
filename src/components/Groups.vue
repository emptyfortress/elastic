<template lang="pug">
.groups
	tree(:data="treeData" :options="treeOptions"
		ref="grouptree"
		@node:checked="onCheckNode"
		@node:unchecked="onUnCheckNode"
		@node:selected="onSelectNode")
		.node-container(slot-scope="{ node }" @contextmenu.prevent="rightClick(node)")
			.tree-text
				i(:class="node.data.icon")
				span {{ node.text }}
	context-menu(ref="ctxMenu" :node="node")
		MyMenu(@editNode = "editNode(node)" @deleteNode="removeNode(node)" @snack="snackbar = true" @addNode = "addChildNode(node)" @infoNode = "infoNode(node)")
</template>

<script>
import LiquorTree from 'liquor-tree'
import { groups } from '@/groups.js'
import contextMenu from 'vue-context-menu'
import MyMenu from '@/components/MyMenu'

export default {
	data() {
		return {
			selectedNode: null,
			snackbar: false,
			addednode: false,
			drag: false,
			treeData: [],
			node: null,
			nodes: [],
			treeOptions: {
				dnd: true,
				checkbox: true,
			},
		}
	},
	computed: {
		checkedItems () {
			return this.$refs.grouptree.findAll({state: {checked: true}})
		},
	},
	created() {
		this.treeData = groups
	},
	components: {
		tree: LiquorTree,
		MyMenu,
		contextMenu,
	},
	methods: {
		onSelectNode (e) {
			this.$emit('selectNode', e)
		},
		onUnCheckNode (e) {
			this.$emit('uncheckNode', e)
		},
		onCheckNode (e) {
			this.$emit('checkNode', e)
		},
		rightClick(e) {
			this.$refs.ctxMenu.open()
			this.node = e
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
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';
.groups {
	height: 100%;
}
.tree-text {
	span {
		margin-left: 4px;
	}
}
.node-container {
	width: 100%;
}
</style>
