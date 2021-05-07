<template lang="pug">
.group
	.drop(@click='group = !group')
		.task(v-if='!group') Перетащите сюда заголовок колонки для группировки
		.a(v-else)
			span Группа 1
			span.b &rarr;
			span Группа 2
			span.b &rarr;
			span Группа 3
			span.b &rarr;
			span Группа 4
			v-btn.ml-3(icon, small, color='error')
				v-icon(small) mdi-close

	v-slide-x-transition(mode='out-in')
		tree.tree(v-show='group', :data='items', :options='treeOptions')
			span.tree-text(slot-scope='{ node }')
				template
					.flex
						div {{ node.text }}
						.count(v-if='!counter') {{ node.data.count }}
						.count.grey(v-else) {{ node.data.count1 }}
</template>

<script>
import LiquorTree from 'liquor-tree'

export default {
	props: ['counter'],
	data() {
		return {
			group: false,
			items: [
				{ text: 'Группа 1', data: { count1: 5 } },
				{ text: 'Группа 2', data: { count1: 8 } },
				{
					text: 'Группа 3',
					data: { count: 3, count1: 23 },
					children: [
						{ text: 'Группа 3.1', data: { count1: 10 } },
						{ text: 'Группа 3.2', data: { count1: 9 } },
						{ text: 'Группа 3.3', data: { count1: 4 } },
					],
				},
				{
					text: 'Группа 4',
					data: { count: 2, count1: 7 },
					children: [
						{ text: 'Группа 4.1', data: { count1: 11 } },
						{ text: 'Группа 4.2', data: { count1: 25 } },
					],
				},
			],
			treeOptions: {
				checkbox: false,
				parentSelect: true,
				dnd: true,
				multiple: false,
				filter: {
					plainList: 0,
				},
			},
		}
	},
	components: {
		tree: LiquorTree,
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.group {
	padding: 0.5rem;
	padding-right: 1px;
}
.drop {
	border: 1px dotted $link;
	width: 100%;
	padding: 0.5rem;
	font-size: 0.9rem;
	font-style: italic;
	color: $link;
	.a {
		font-style: normal;
		.b {
			margin: 0 3px;
			color: black;
		}
	}
}
.tit {
	text-transform: uppercase;
	text-align: center;
	font-size: 0.8rem;
	span {
		margin-right: 2rem;
	}
	.v-btn {
		transform: translateY(-3px);
	}
}
.tree {
	font-size: 0.85rem;
}
.tree-text {
	width: 100%;
}
.flex {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
}
.count {
	padding: 0 4px;
	background: $link;
	line-height: 120%;
	border-radius: 4px;
	color: #fff;
	font-size: 0.8rem;
	&.grey {
		background: #999797;
	}
}
</style>
