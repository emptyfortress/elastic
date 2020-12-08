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
						tree(:data="treeData")
							span.tree-text(slot-scope="{ node }")
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

</template>

<script>
import { dragZone, dragHandle, dragContent } from 'vue-drag-zone'
import LiquorTree from 'liquor-tree'
import {departments} from '@/treedata.js'

export default {
	data() {
		return {
			leftTab: null,
			treeData: [],
			tabs: ['Подразделения', 'Группы', 'Роли', 'Должности'],
		}
	},
	components: {
		dragZone,
		dragHandle,
		dragContent,
		tree: LiquorTree,
	},
	mounted() {
		this.treeData = departments
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

</style>
