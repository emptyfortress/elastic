<template lang="pug">
.all
	v-skeleton-loader(v-if="loading" type="card-avatar, article, actions")
	.searchgrid(v-else)
		.zero
			v-breadcrumbs(:items="bread")
			.alls
				.res {{ query }}:
				div.find найдено {{ total }} результатов в {{ category }} категориях &mdash;
				div
					v-chip(color="docolor" dark)
						v-avatar {{ totaldoc }}
						|Документы
					v-chip(color="taskcolor" dark ) 
						v-avatar {{ totaltask}}
						|Задания
					v-chip(color="dark" dark ) 
						v-avatar {{ totalfile }}
						|Файлы
				.dow
					v-btn(depressed color="blue-grey" dark small) Искать всюду
		.sort
			.d-flex
				v-checkbox(label="Сначала результаты со мной" dense).my
				span Сортировать по:
				.nk релевантность
				.nk дата
				.nk тип
				.nk состояние
			div
				v-icon mdi-format-list-bulleted
				v-icon mdi-view-grid
			
		div
			Filters
		div
			listItem1(v-for="item in searchItemsResults" :item="item" :key="item.id" :zapros="query")

</template>

<script>
import Filters from '@/components/Filters'
import listItem1 from '@/components/listItem1'

export default {
	data () {
		return {
			bread: [
				{text: 'Docsvison', href: '/'},
				{text: 'Мои папки', href: '/'},
				{text: 'Заявки', href: '/'},
			],
		}
	},
	computed: {
		query () {
			return this.$route.params.id
		},
		loading () {
			return this.$store.getters.loading
		},
		searchItemsResults () {
			return this.$store.getters.searchItemsResults
		},
		total () {
			return this.searchItemsResults.length
		},
		totaldoc () {
			return this.searchItemsResults.filter( item => item.item.type === 'doc').length
		},
		totaltask () {
			return this.searchItemsResults.filter( item => item.item.type === 'task').length
		},
		totalfile () {
			return this.searchItemsResults.filter( item => item.item.type === 'file').length
		},
		category () {
			let temp = 0;
			if (this.totaldoc) {
				temp ++
			} else if (this.totaltask) {
				temp ++
			} else if (this.totalfile) {
				temp ++
			}
			return temp
		}
	},
	components: {
		Filters,
		listItem1
	},
	methods: {
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
