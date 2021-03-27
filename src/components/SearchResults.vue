<template lang="pug">
.all
	Loader(v-if="loading")
	.searchgrid(v-else)
		.zero
			.alls
				.res {{ query }}:
				.find(v-if="total") найдено <span>{{ total }}</span> результатов
				.find(v-else) Ничего не найдено. Измените условия поиска.
		.sort
			.sele
				span Сортировать по:
				v-select(:items="sort" dense value="Релевантность")
			div
				v-btn(icon @click="grid = false")
					v-icon mdi-format-list-bulleted-square
				v-btn(icon @click="grid = true")
					v-icon mdi-table
			
		div(v-if="total && grid")
			Toolbar
			Grid
		div(v-if="total && !grid")
			listItem1(v-for="item in searchItemsResults" :item="item" :key="item.id" :zapros="query" @preview="preview = true")
 
		div(v-if="!total")
			.nothing
				img(src="@/assets/img/nothing.svg")
				.big Ничего не найдено
				.small Проверьте, нет ли опечаток. Попробуйте изменить запрос.
	Preview(:preview="preview" @preview="preview = false")
</template>

<script>
import listItem1 from '@/components/listItem1'
import Preview from '@/components/Preview'
import Loader from '@/components/Loader'
import CardInfo from '@/components/CardInfo'
import Grid from '@/components/Grid'
import Toolbar from '@/components/Toolbar'
// import items from '@/store/data.js'

export default {
	data() {
		return {
			grid: false,
			preview: false,
			sort: ['Релевантность', 'тип', 'размер', 'автор', 'срок'],
			bread: [
				{ text: 'Docsvison', href: '/' },
				{ text: 'Мои папки', href: '/' },
				{ text: 'Заявки', href: '/' },
			],
		}
	},
	computed: {
		query() {
			return this.$route.params.id
		},
		loading() {
			return this.$store.getters.loading
		},
		searchItemsResults() {
			return this.$store.getters.searchItemsResults
		},
		total() {
			return this.searchItemsResults.length
		},
		totaldoc() {
			return this.searchItemsResults.filter((item) => item.item.type === 'doc')
				.length
		},
		totaltask() {
			return this.searchItemsResults.filter((item) => item.item.type === 'task')
				.length
		},
		totaltask1() {
			return this.searchItemsResults.filter(
				(item) => item.item.typ === 'Группа заданий'
			).length
		},
		totalfile() {
			return this.searchItemsResults.filter((item) => item.item.type === 'file')
				.length
		},
		category() {
			let temp = 0
			if (this.totaldoc) {
				temp++
			}
			if (this.totaltask) {
				temp++
			}
			if (this.totaltask1) {
				temp++
			}
			if (this.totalfile) {
				temp++
			}
			return temp
		},
	},
	components: {
		listItem1,
		Preview,
		Loader,
		CardInfo,
		Grid,
		Toolbar,
	},
	methods: {
		setCheck(e) {
			let doc = [e]
			this.$store.commit('setChecked', doc)
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.searchgrid {
}
.zero {
	grid-column: 1/3;
	background: #fff;
	padding: 0.2rem 1rem;
	border-bottom: 1px solid #ccc;
	display: grid;
}
.res {
	font-size: 1.4rem;
	font-weight: bold;
}
.sort {
	margin-top: 2rem;
	grid-column: 1/3;
	display: flex;
	justify-content: space-between;
	font-size: 0.8rem;
	.sele {
		display: flex;
		align-items: center;
		span {
			margin-right: 15px;
			margin-top: -7px;
		}
		.v-input {
			width: 160px;
		}
	}
}
.alls {
	display: grid;
	align-items: flex-start;
	grid-template-columns: auto auto 1fr auto;
	padding: 1rem 0;
	grid-gap: 0.5rem;
	.v-chip {
		cursor: pointer;
		margin-right: 0.25rem;
		margin-bottom: 0.25rem;
		padding-left: 4px;
		.v-avatar {
			margin-right: 0.5rem;
		}
	}
}
.find {
	margin-top: 0.5rem;
	span {
		font-size: 1.6rem;
		line-height: 1rem;
	}
}
.nothing {
	padding-left: 100px;
	img {
		width: 200px;
	}
	.big {
		font-size: 1.3rem;
	}
	.small {
		font-size: 0.9rem;
	}
}
</style>
