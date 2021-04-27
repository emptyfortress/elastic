<template lang="pug">
div
	.left
		.touch
			v-tabs(v-model="tabs" fixed-tabs).filt
				v-tabs-slider
				v-tab(href="#tabs-1")
					v-icon mdi-contrast
					span.mx-2 Агрегаты

	v-tabs-items(v-model="tabs")
		v-tab-item(value="tabs-1")
			.common.filters
				.zg
					.lin(@click="reset") Сбросить все
					.lin(@click="expand")
						span(v-show="panel.length <= 1") Распахнуть все
						span(v-show="panel.length > 1") Свернуть все
				section
					v-expansion-panels(accordion multiple v-model="panel")
						v-expansion-panel
							v-expansion-panel-header Тип карточки
							v-expansion-panel-content.tight
								.item(v-for="prop in child" v-if="badge(prop.id)")
									v-checkbox(color="primary" dense :label="prop.name" :value="prop.id" v-model="checked1").my
									.badge {{ badge(prop.id) }}

						v-expansion-panel
							v-expansion-panel-header Вид документа
							v-expansion-panel-content.tight
								.item(v-for="prop in child1" v-if="badge(prop.id)")
									v-checkbox(color="primary" dense :label="prop.name" :value="prop.id" v-model="checked1").my
									.badge {{ badge(prop.id) }}

						v-expansion-panel
							v-expansion-panel-header Вид задания
							v-expansion-panel-content.tight
								.item(v-for="prop in child2" v-if="badge(prop.id)")
									v-checkbox(color="primary" dense :label="prop.name" :value="prop.id" v-model="checked1").my
									.badge {{ badge(prop.id) }}
								.item(v-for="(n, index) in addition" v-show="more" :key="index")
									v-checkbox(color="primary" dense label="Свойство").my
									.badge 5
								.lin.mt-2(@click="addMore") Еще

						v-expansion-panel
							v-expansion-panel-header Дата регистрации (диапазон)
							v-expansion-panel-content.tight
								v-menu( v-model="menu2" :nudge-right="40" ref="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px" )
									template( v-slot:activator="{ on, attrs }" )
										v-text-field( v-model="dateRangeText" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" clearable).sm
									v-date-picker(v-model="dates" color="primary" show-current range )
										v-spacer
										v-btn(text color="primary" @click="menu2 = false") Cancel
										v-btn(text color="primary" @click="$refs.menu.save(dates)") OK
								.item
									v-checkbox(color="primary" dense value="9" label="Текущая неделя" v-model="checked1").my
									.badge 3
								.item
									v-checkbox(color="primary" dense value="10" label="Текущий месяц" v-model="checked1").my
									.badge 8
								.item
									v-checkbox(color="primary" dense value="11" label="Текущий квартал" v-model="checked1").my
									.badge 34

						v-expansion-panel(v-for="n in 10" :key="n")
							v-expansion-panel-header Заголовок {{ n }}
							v-expansion-panel-content.tight
								.item(v-for="m in 5")
									v-checkbox(color="primary" dense label="Свойство").my
									.badge 7

</template>

<script>
export default {
	data() {
		return {
			filter: [],
			tabs: null,
			checked1: [],
			dates: [],
			menu2: false,
			panel: [0],
			more: false,
			addition: 0,
			child: [
				{ id: 1, name: 'Документ' },
				{ id: 2, name: 'Задание' },
				{ id: 3, name: 'Группа заданий' },
				{ id: 4, name: 'Файл' },
			],
			child1: [
				{ id: 5, name: 'Приказ' },
				{ id: 6, name: 'Договор' },
				{ id: 7, name: 'Служебная записка' },
				{ id: 8, name: 'Заявление' },
			],
			child2: [
				{ id: 9, name: 'На согласование' },
				{ id: 10, name: 'На исполнение' },
				{ id: 11, name: 'На ознакомление' },
			],
		}
	},
	created() {
		this.filter = this.searchItemsResults
		this.$store.commit('setFilterResults', this.filter)
	},
	computed: {
		dateRangeText: {
			get() {
				return this.dates.join(' ~ ')
			},
			set() {},
		},
		checked() {
			return this.$store.getters.checked
		},
		searchItemsResults() {
			return this.$store.getters.searchItemsResults
		},
		showSecond() {
			if (this.badge(5) + this.badge(6) + this.badge(7) + this.badge(8)) {
				return true
			} else return false
		},
		showSecond1() {
			if (this.badge(9) + this.badge(10) + this.badge(11)) {
				return true
			} else return false
		},
	},
	methods: {
		expand() {
			if (this.panel.length <= 1) {
				this.panel = [0, 1, 2, 3]
			} else {
				this.panel = []
			}
		},
		reset() {
			this.checked1 = []
			this.dates = []
		},
		addMore() {
			this.more = true
			this.addition = this.addition + 10
		},
		badge(e) {
			switch (e) {
			case 1:
				return this.searchItemsResults.filter(
					(item) => item.item.type === 'doc'
				).length
			case 2:
				return this.searchItemsResults.filter(
					(item) => item.item.type === 'task'
				).length
			case 3:
				return this.searchItemsResults.filter(
					(item) => item.item.typ === 'Группа заданий'
				).length
			case 4:
				return this.searchItemsResults.filter(
					(item) => item.item.type === 'file'
				).length
			case 5:
				return this.searchItemsResults.filter(
					(item) => item.item.vid === 'Приказ'
				).length
			case 6:
				return this.searchItemsResults.filter(
					(item) => item.item.vid === 'Договор'
				).length
			case 7:
				return this.searchItemsResults.filter(
					(item) => item.item.vid === 'Служебная записка'
				).length
			case 8:
				return this.searchItemsResults.filter(
					(item) => item.item.vid === 'Заявление'
				).length
			case 9:
				return this.searchItemsResults.filter(
					(item) => item.item.vid === 'На согласование'
				).length
			case 10:
				return this.searchItemsResults.filter(
					(item) => item.item.vid === 'На исполнение'
				).length
			case 11:
				return this.searchItemsResults.filter(
					(item) => item.item.vid === 'На ознакомление'
				).length
			}
		},
	},
	watch: {
		checked: function() {
			this.checked1 = this.checked
		},
		checked1: function() {
			if (this.checked1.length) {
				if (this.checked1.includes(1) && this.checked1.includes(2)) {
					let temp = this.searchItemsResults.filter((item) => {
						return item.item.type === 'doc' || item.item.type === 'task'
					})
					this.$store.commit('setFilterResults', temp)
				} else if (this.checked1.includes(1)) {
					let temp = this.searchItemsResults.filter((item) => {
						return item.item.type === 'doc'
					})
					this.$store.commit('setFilterResults', temp)
				} else if (this.checked1.includes(2)) {
					let temp = this.searchItemsResults.filter((item) => {
						return item.item.type === 'task'
					})
					this.$store.commit('setFilterResults', temp)
				} else if (this.checked1.includes(3)) {
					let temp = this.searchItemsResults.filter((item) => {
						return item.item.typ === 'Группа заданий'
					})
					this.$store.commit('setFilterResults', temp)
				} else if (this.checked1.includes(4)) {
					let temp = this.searchItemsResults.filter((item) => {
						return item.item.type === 'file'
					})
					this.$store.commit('setFilterResults', temp)
				} else if (this.checked1.includes(5)) {
					let temp = this.searchItemsResults.filter((item) => {
						return item.item.vid === 'Приказ'
					})
					this.$store.commit('setFilterResults', temp)
				} else if (this.checked1.includes(6)) {
					let temp = this.searchItemsResults.filter((item) => {
						return item.item.vid === 'Договор'
					})
					this.$store.commit('setFilterResults', temp)
				} else if (this.checked1.includes(7)) {
					let temp = this.searchItemsResults.filter((item) => {
						return item.item.vid === 'Служебная записка'
					})
					this.$store.commit('setFilterResults', temp)
				} else if (this.checked1.includes(8)) {
					let temp = this.searchItemsResults.filter((item) => {
						return item.item.vid === 'Заявление'
					})
					this.$store.commit('setFilterResults', temp)
				} else if (this.checked1.includes(9)) {
					let temp = this.searchItemsResults.filter((item) => {
						return item.item.vid === 'На согласование'
					})
					this.$store.commit('setFilterResults', temp)
				} else if (this.checked1.includes(10)) {
					let temp = this.searchItemsResults.filter((item) => {
						return item.item.vid === 'На исполнение'
					})
					this.$store.commit('setFilterResults', temp)
				} else if (this.checked1.includes(11)) {
					let temp = this.searchItemsResults.filter((item) => {
						return item.item.vid === 'На ознакомление'
					})
					this.$store.commit('setFilterResults', temp)
				}
			} else {
				this.$store.commit('setFilterResults', this.searchItemsResults)
			}
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.left {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	/* height: 67px; */
}
.touch {
	font-size: 0.9rem;
	font-weight: bold;
	/* margin-bottom: .5rem; */
}
.common {
	/* padding-right: 9px; */
	height: calc(100vh - 260px);
	border-right: 1px solid silver;
	overflow-y: scroll;
	overflow-x: hidden;
	mask-image: linear-gradient(to top, transparent, black),
		linear-gradient(to left, transparent 17px, black 17px);
	mask-size: 100% 20000px;
	mask-position: left bottom;
	-webkit-mask-image: linear-gradient(to top, transparent, black),
		linear-gradient(to left, transparent 17px, black 17px);
	-webkit-mask-size: 100% 20000px;
	-webkit-mask-position: left bottom;
	transition: mask-position 0.3s, -webkit-mask-position 0.3s;
	&:hover {
		-webkit-mask-position: left top;
	}
	h3 {
		font-size: 1.2rem;
		font-weight: 400;
		text-align: center;
		margin-top: 4rem;
	}
}
.filters {
	padding: .5rem;
	font-size: 0.9rem;
}
.zg {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ccc;
	height: 32px;
	padding-left: 0.5rem;
}
.z {
	font-weight: bold;
}
.lin {
	font-size: 0.8rem;
	color: $link;
	cursor: pointer;
}
.section {
	margin-top: 1rem;
	margin-bottom: 0.5rem;
}
.my {
	margin: 0;
	padding: 0;
}
.item {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	/* .badge { */
	/* 	margin-bottom: -6px; */
	/* } */
}
.sm {
	margin: 0;
	padding: 0;
	height: 36px;
}

.theme--light.v-expansion-panels .v-expansion-panel {
	background: none;
	padding: 0;
}
.v-expansion-panel {
	&:before {
		box-shadow: none;
	}
}
.v-expansion-panel--active > .v-expansion-panel-header {
	min-height: 48px;
}
.v-expansion-panel-header {
	padding: 16px 4px;
}
.v-tab {
	min-width: 40px;
}
.v-tabs-slider-wrapper {
	top: 0;
}
.filt img {
	width: 18px;
}
</style>
