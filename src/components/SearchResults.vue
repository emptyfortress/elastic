<template lang="pug">
.all
	v-skeleton-loader(v-if="loading" type="card-avatar, article, actions")
	.searchgrid(v-else)
		.zero
			v-breadcrumbs(:items="bread")
			.alls
				.res {{ query }}:
				div.find найдено 345 результатов в 3 категориях &mdash;
				div
					v-chip(color="docolor" dark)
						v-avatar 234
						|Документы
					v-chip(color="taskcolor" dark ) 
						v-avatar 37
						|Задания
					v-chip(color="dark" dark ) 
						v-avatar 9
						|Файлы
				.dow
					v-btn(depressed color="blue-grey" dark small) Искать всюду
		.sort
			.d-flex
				v-checkbox(label="Сначала результаты со мной" dense).my
				span Сортировать по:
				.nk дата
				.nk тип
				.nk алфавит
				.nk состояние
			div
				v-icon mdi-format-list-bulleted
				v-icon mdi-view-grid
			
		div
			Filters
		div
			listItem1(v-for="item in items" :item="item" :key="item.id")
			//- listItem
			//- p(v-for="n in 100") laskdj
	//- .zag searchresults {{ $route.params.id }}

</template>

<script>
import Filters from '@/components/Filters'
import listItem1 from '@/components/listItem1'
import items from '@/store/data.js'

export default {
	data () {
		return {
			query: this.$route.params.id,
			bread: [
				{text: 'Docsvison', href: '/'},
				{text: 'Мои папки', href: '/'},
				{text: 'Заявки', href: '/'},
			],
			items,
		}
	},
	computed: {
		loading () {
			return this.$store.getters.loading
		}
	},
	components: {
		Filters,
		listItem1
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.searchgrid {
	display: grid;
	grid-template-columns: 260px auto;
	grid-gap: 2rem;
}
.zero {
	grid-column: 1/3;
	background: #fff;
	padding: .2rem 1rem;
	border-bottom: 1px solid #ccc;
	display: grid;
}
.res {
	font-size: 1.4rem;
	font-weight: bold;
}
.sort {
	grid-column: 1/3;
	display: flex;
	justify-content: space-between;
	font-size: 0.8rem;
}
.nk {
	margin: 0 .5rem;
	color: $link;
	cursor: pointer;
}
.my {
	height: 24px;
	margin: 0;
	padding: 0;
	margin-right: 5rem;
}
.v-breadcrumbs {
	padding: 0;
	background: #fff;
	
}
.alls {
	display: grid;
	align-items: flex-start;
	grid-template-columns: auto auto 1fr auto;
	padding: 1rem 0;
	grid-gap: .5rem;
	.v-chip {
		cursor: pointer;
		margin-right: .25rem;
		margin-bottom: .25rem;
		.v-avatar {
			margin-right: .5rem;
		}
	}
}
.dow {
	align-self: flex-end;
}
.find {
	margin-top: .5rem;
}

</style>
