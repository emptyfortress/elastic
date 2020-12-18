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
	//- v-btn(fab color="primary" small).plus
	//- 	v-icon mdi-plus
</template>

<script>
import LiquorTree from 'liquor-tree'
import { groups } from '@/groups.js'

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
		}
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
</style>
