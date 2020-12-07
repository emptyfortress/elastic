<template lang="pug">
.all
	.top
	.bottom
		drag-zone.zone
			drag-content.content.c1
				tree(:data="treeData")
			drag-handle.hand
				div
			drag-content.content.c1
				.item item 1
</template>

<script>
import { dragZone, dragHandle, dragContent } from 'vue-drag-zone'
import LiquorTree from 'liquor-tree'

export default {
	data() {
		return {
			treeData: [
				{ text: 'Item 1' },
				{ text: 'Item 2' },
				{ text: 'Item 3', state: { selected: true } },
				{ text: 'Item 4', children: [
					{ text: 'Item 5.1', state: { disabled: true } },
					{ text: 'Item 5.2', state: { selectable: false } }
				] }
			]
		}
	},
	components: {
		dragZone,
		dragHandle,
		dragContent,
		tree: LiquorTree,
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.top {
	height: 200px;
	background: pink;
}
.bottom {
	margin-top: 1rem;
}
.zone {
	width: 100%;
	/* height: 100%; */
	margin: 0 auto;
	position: relative;
	display: flex;
	height: 300px;
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
	height: 300px;
	overflow: hidden;
	background: #fff;
}
.zone .item {
	width: 100%;
	user-select: none;
}

</style>
