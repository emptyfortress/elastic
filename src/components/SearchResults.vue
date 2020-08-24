<template lang="pug">
.all
	v-skeleton-loader(v-if="loading" type="card-avatar, article, actions")
	.searchgrid(v-else)
		.zero
			v-breadcrumbs(:items="bread")
			.alls
				.res {{ query }}:
				div найдено 345 результатов в 2 категориях &mdash;
				div
					v-chip(color="docolor" dark)
						v-avatar 234
						|Документы
				div
					v-chip(color="taskcolor" dark ) 
						v-avatar 37
						|Задания
				v-spacer
				v-btn(depressed color="blue-grey" dark small) Искать глобально
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
			
		.one 
			Filters
		.one
			listItem
			//- p(v-for="n in 100") laskdj
	//- .zag searchresults {{ $route.params.id }}

</template>

<script>
import Filters from '@/components/Filters'
import listItem from '@/components/listItem'

export default {
	data () {
		return {
			query: this.$route.params.id,
			bread: [
				{text: 'Docsvison', href: '/'},
				{text: 'Мои папки', href: '/'},
				{text: 'Заявки', href: '/'},
			],
		}
	},
	computed: {
		loading () {
			return this.$store.getters.loading
		}
	},
	components: {
		Filters,
		listItem
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.searchgrid {
	display: grid;
	grid-template-columns: 300px auto;
	grid-gap: 2rem;
}
.one {
	/* background: #fff; */
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
	display: flex;
	align-items: center;
	padding: 1rem 0;
	div {
		margin-right: 1rem;
	}
}
.v-chip {
	cursor: pointer;
}

</style>
