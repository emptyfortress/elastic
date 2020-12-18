<template lang="pug">
.roles
	tree(:data="treeData" :options="treeOptions"
		ref="roletree"
		@node:checked="onCheckNode"
		@node:unchecked="onUnCheckNode"
		@node:selected="onSelectNode")
		.node-container(slot-scope="{ node }" @contextmenu.prevent="rightClick(node)")
			.tree-text
				i(:class="node.data.icon")
				span {{ node.text }}
</template>

<script>
import LiquorTree from 'liquor-tree'
import { roles } from '@/roles.js'

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
			return this.$refs.roletree.findAll({state: {checked: true}})
		},
	},
	created() {
		this.treeData = roles
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

.roles {
	height: 100%;
}
.tree-text {
	span {
		margin-left: 4px;
	}
}
</style>
