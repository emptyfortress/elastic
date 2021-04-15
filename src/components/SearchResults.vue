<template lang="pug">
.all
	Loader(v-if="loading")
	.searchgrid(v-else)
		.zero
			.alls
				.find(v-if="total") По запросу
				.find <span>{{ query }}</span>
				.find(v-if="total") найдено <span>{{ total }}</span> результатов
				.find(v-else) Ничего не найдено. Измените условия поиска.
				.spac
				v-btn(depressed color="dark" dark small).fl Очистить запрос

		.filt(v-show="sidebar")
			Filters(v-if="searchItemsResults.length")

		div(v-if="total" :class="{fil : !sidebar}")
			.foldhd Это заголовок текущей папки
			Toolbar(:total="total")
			div(v-if="total && grid" :class="{fil : !sidebar}")
				Grid(:zapros="query")
			div(v-if="total && !grid" :class="{fil : !sidebar}")
				listItem1(v-for="item in filterResults" :item="item" :key="item.id" :zapros="query" @preview="preview = true").mt-1

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
import Toolbar from '@/components/Toolbar.vue'
import Grid from '@/components/Grid.vue'
// import items from '@/store/data.js'

export default {
	data () {
		return {
			grid: true,
			sidebar: false,
			sdb: 0,
			preview: false,
			view: 0,
			chips: [],
			sort: ['Релевантность', 'тип', 'размер', 'автор', 'срок'],
		}
	},
	computed: {
		outline1 () {
			return !this.chips.includes(1)
		},
		outline2 () {
			return !this.chips.includes(2)
		},
		outline3 () {
			return !this.chips.includes(3)
		},
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
		Toolbar,
		Grid,
	},
	methods: {
		switchSidebar() {
			if (this.sidebar) {
				this.sidebar = false
				this.sdb = null
			 } else {
				this.sidebar = true
				this.sdb = 0
			}
		},
		setChip(e) {
			var index = this.chips.indexOf(e);
			if (index === -1) {
				this.chips.push(e);
			} else {
				this.chips.splice(index, 1);
			}
			this.$store.commit('setChecked', this.chips)
		},
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

/* .all { */
/* 	background: #ccc; */
/* 	height: 800px; */
/* 	overflow: auto; */
/* } */
.searchgrid {
	display: grid;
	grid-template-columns: 260px auto;
	grid-gap: 0rem .5rem;
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
.filt {
	grid-column: 1/2;
	grid-row: 2/8;
}
.sort {
	grid-column: 2/3;
	grid-row: 2/3;
	display: flex;
	margin-top: 1rem;
	justify-content: space-between;
	font-size: 0.8rem;
	&.sid {
		grid-column: 1/3;
	}
	.sele {
		display: flex;
		align-items: center;
		span {
			margin-right: 15px;
			margin-top: -7px;
		}
		.v-input {
			width: 160px;
			transform: translateY(6px);
		}
	}
}
.alls {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 1rem 0;
	grid-gap: .5rem;
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
	flex-basis: 203px;
	flex-grow: 1;
	flex-shrink: 1;
}
.fil {
	grid-column: 1/3;
}
.v-btn-toggle .v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before {
	opacity: 1;
}
.v-btn-toggle .v-btn--active > .v-btn__content .v-icon {
	color: #fff;
}

.v-btn-toggle .v-btn::before {
	background: $dark;
	border-radius: 4px;
}
.v-btn-toggle--group > .v-btn.v-btn {
	margin: 0;
}
.foldhd {
	margin-top: 2rem;
	margin-bottom: .5rem;
	font-size: 1.3rem;
}
.fl {
	align-self: flex-end;
}
.spac {
	flex-grow: 1;
}

</style>
