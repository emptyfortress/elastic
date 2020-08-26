<template lang="pug">
.all
	Loader(v-if="loading")
	.searchgrid(v-else)
		.zero
			v-breadcrumbs(:items="bread")
			.alls
				.res {{ query }}:
				.find(v-if="total") найдено <span>{{ total }}</span> результатов в {{ category }} категориях &mdash;
				.find(v-else) Ничего не найдено. Измените условия поиска.
				div
					v-chip(v-if="totaldoc" color="docolor" dark @click="setCheck(1)")
						v-avatar {{ totaldoc }}
						|Документы
					v-chip(v-if="totaltask" color="taskcolor" dark @click="setCheck(2)") 
						v-avatar {{ totaltask}}
						|Задания
					v-chip(v-if="totaltask1" color="taskcolor" dark @click="setCheck(3)") 
						v-avatar {{ totaltask1}}
						|ГЗ
					v-chip(v-if="totalfile" color="dark" dark @click="setCheck(4)") 
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
				v-btn(icon @click="grid = false")
					v-icon mdi-format-list-bulleted-square
				v-btn(icon @click="grid = true")
					v-icon mdi-view-grid
			
		div
			Filters(v-if="searchItemsResults.length")
		div(v-if="total && !grid")
			listItem1(v-for="item in filterResults" :item="item" :key="item.id" :zapros="query" @preview="preview = true")
		div(v-if="total && grid").boxcont
			.box(v-for="item in filterResults")
				.preview
					div
						i.icon-hourglass
						p превью
 
		div(v-if="!total")
			.nothing
				img(src="@/assets/img/nothing.svg")
				.big Ничего не найдено
				.small Проверьте, нет ли опечаток. Попробуйте изменить запрос.
	Preview(:preview="preview" @preview="preview = false")
</template>

<script>
import Filters from '@/components/Filters'
import listItem1 from '@/components/listItem1'
import Preview from '@/components/Preview'
import Loader from '@/components/Loader'
// import items from '@/store/data.js'

export default {
	data () {
		return {
			grid: false,
			preview: false,
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
		filterResults () {
			return this.$store.getters.filterResults
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
		totaltask1 () {
			return this.searchItemsResults.filter( item => item.item.typ === 'Группа заданий').length
		},
		totalfile () {
			return this.searchItemsResults.filter( item => item.item.type === 'file').length
		},
		category () {
			let temp = 0;
			if (this.totaldoc) {
				temp ++
			} 
			if (this.totaltask) {
				temp ++
			} 
			if (this.totaltask1) {
				temp ++
			} 
			if (this.totalfile) {
				temp ++
			}
			return temp
		}
	},
	components: {
		Filters,
		listItem1,
		Preview,
		Loader,
	},
	methods: {
		setCheck (e) {
			let doc = [e]
			this.$store.commit('setChecked', doc)
		}
		// searchAll () {
		// 	this.$store.commit('setFilterResults', this.items)
		// }
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
		padding-left: 4px;
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
.boxcont {
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
}
.box {
	/* background: #cecece; */
	flex-basis: 203px;
	flex-grow: 1;
	flex-shrink: 1;
	.preview {
		width: 200px;
		height: 260px;
		background: #fff;
		margin: auto;
		border-radius: 4px;
		border: 1px solid #dedede;
		cursor: pointer;
		display: flex;
		justify-content: center;
		color: #ccc;
		align-items: center;
		text-align: center;
		i {
			font-size: 1.3rem;
		}
		&:hover {
			border-color: $link;
		}
	}
}

</style>
