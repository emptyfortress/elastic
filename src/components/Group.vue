<template lang="pug">
.group
	.tit
		span Группировка
		v-btn(x-small icon @click="group = !group")
			v-icon mdi-power
	.drop(@click="group = !group")
		.task(v-if="!group") Перетащите сюда заголовок колонки для группировки
		.a(v-else)
			span Группа 1
			span.b &rarr;
			span Группа 2
			span.b &rarr;
			span Группа 3

	v-slide-x-transition(mode="out-in")
		tree(v-show="group" :data="items" :options="treeOptions").tree
</template>

<script>
import LiquorTree from 'liquor-tree'

export default {
	data() {
		return {
			group: false,
			items: [
				{text: 'Группа 1'},
				{text: 'Группа 2'},
				{text: 'Группа 3', children: [
					{text: 'Группа 3.1'},
					{text: 'Группа 3.2'}
				]}
			],
			treeOptions: {
				checkbox: false,
				parentSelect: true,
				dnd: true,
				multiple: false,
				filter: {
					plainList: 0
				}
			},
		}
	},
	components: {
		tree: LiquorTree
	}

}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.group {
	padding: .5rem;
	padding-right: 1px;
}
.drop {
	border: 1px dotted $link;
	width: 100%;
	padding: .5rem;
	font-size: .9rem;
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
</style>
