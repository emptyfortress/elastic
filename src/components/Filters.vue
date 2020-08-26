<template lang="pug">
.filters
	.zg
		.z Фильтры
		.lin(@click="reset") Сбросить все
	section
		.section Тип карточки
			.item(v-for="prop in child" v-if="badge(prop.id)")
				v-checkbox(color="purple" dense :label="prop.name" :value="prop.id" v-model="checked1").my
				.badge {{ badge(prop.id) }}
		.section(v-if="showSecond") Вид документа
			.item(v-for="prop in child1" v-if="badge(prop.id)")
				v-checkbox(color="purple" dense :label="prop.name" :value="prop.id" v-model="checked1").my
				.badge {{ badge(prop.id) }}
		.section(v-if="showSecond1") Вид задания
			.item(v-for="prop in child2" v-if="badge(prop.id)")
				v-checkbox(color="purple" dense :label="prop.name" :value="prop.id" v-model="checked1").my
				.badge {{ badge(prop.id) }}
		.section.mt-5 Дата регистрации (диапазон)
			v-menu( v-model="menu2" :nudge-right="40" ref="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px" )
				template( v-slot:activator="{ on, attrs }" )
					v-text-field( v-model="dateRangeText" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" clearable).sm
				v-date-picker(v-model="dates" color="purple" show-current range )
					v-spacer
					v-btn(text color="primary" @click="menu2 = false") Cancel
					v-btn(text color="primary" @click="$refs.menu.save(dates)") OK
			.item
				v-checkbox(color="purple" dense value="9" label="Текущая неделя" v-model="checked1").my
				.badge 3
			.item
				v-checkbox(color="purple" dense value="10" label="Текущий месяц" v-model="checked1").my
				.badge 8
			.item
				v-checkbox(color="purple" dense value="11" label="Текущий квартал" v-model="checked1").my
				.badge 34

</template>

<script>

export default {
	data () {
		return {
			filter: [],
			checked1: [],
			dates: [],
			menu2: false,
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
	created () {
		this.filter = this.searchItemsResults
		this.$store.commit('setFilterResults', this.filter)
	},
	computed: {
		dateRangeText: {
			get () {
				return this.dates.join(' ~ ')
			},
			set () {}
		},
		checked () {
			return this.$store.getters.checked
		},
		searchItemsResults () {
			return this.$store.getters.searchItemsResults
		},
		showSecond () {
			if (this.badge(5) + this.badge(6) + this.badge(7) + this.badge(8)) {
				return true
			} else return false
		},
		showSecond1 () {
			if (this.badge(9) + this.badge(10) + this.badge(11)) {
				return true
			} else return false
		}
	},
	methods: {
		reset () {
			this.checked1 = []
			this.dates = []
		},
		badge(e) {
			switch (e) {
			case 1:
				return this.searchItemsResults.filter( item => item.item.type === 'doc').length
			case 2:
				return this.searchItemsResults.filter( item => item.item.type === 'task').length
			case 3:
				return this.searchItemsResults.filter( item => item.item.typ === 'Группа заданий').length
			case 4:
				return this.searchItemsResults.filter( item => item.item.type === 'file').length
			case 5:
				return this.searchItemsResults.filter( item => item.item.vid === 'Приказ').length
			case 6:
				return this.searchItemsResults.filter( item => item.item.vid === 'Договор').length
			case 7:
				return this.searchItemsResults.filter( item => item.item.vid === 'Служебная записка').length
			case 8:
				return this.searchItemsResults.filter( item => item.item.vid === 'Заявление').length
			case 9:
				return this.searchItemsResults.filter( item => item.item.vid === 'На согласование').length
			case 10:
				return this.searchItemsResults.filter( item => item.item.vid === 'На исполнение').length
			case 11:
				return this.searchItemsResults.filter( item => item.item.vid === 'На ознакомление').length
			}
		}
	},
	watch: {
		checked: function() {
			this.checked1 = this.checked
		},
		checked1: function() {
			if (this.checked1.length) {
				if (this.checked1.includes(1) && this.checked1.includes(2)) {
					let temp = this.searchItemsResults.filter( item => {
						return (item.item.type === 'doc' || item.item.type === 'task')
					})
					this.$store.commit('setFilterResults', temp)
				} 
				else if (this.checked1.includes(1)) {
					let temp = this.searchItemsResults.filter( item => {
						return (item.item.type === 'doc')
					})
					this.$store.commit('setFilterResults', temp)
				}
				else if (this.checked1.includes(2)) {
					let temp = this.searchItemsResults.filter( item => {
						return (item.item.type === 'task')
					})
					this.$store.commit('setFilterResults', temp)
				}
				else if (this.checked1.includes(3)) {
					let temp = this.searchItemsResults.filter( item => {
						return (item.item.typ === 'Группа заданий')
					})
					this.$store.commit('setFilterResults', temp)
				}
				else if (this.checked1.includes(4)) {
					let temp = this.searchItemsResults.filter( item => {
						return (item.item.type === 'file')
					})
					this.$store.commit('setFilterResults', temp)
				}
				else if (this.checked1.includes(5)) {
					let temp = this.searchItemsResults.filter( item => {
						return (item.item.vid === 'Приказ')
					})
					this.$store.commit('setFilterResults', temp)
				}
				else if (this.checked1.includes(6)) {
					let temp = this.searchItemsResults.filter( item => {
						return (item.item.vid === 'Договор')
					})
					this.$store.commit('setFilterResults', temp)
				}
				else if (this.checked1.includes(7)) {
					let temp = this.searchItemsResults.filter( item => {
						return (item.item.vid === 'Служебная записка')
					})
					this.$store.commit('setFilterResults', temp)
				}
				else if (this.checked1.includes(8)) {
					let temp = this.searchItemsResults.filter( item => {
						return (item.item.vid === 'Заявление')
					})
					this.$store.commit('setFilterResults', temp)
				}
				else if (this.checked1.includes(9)) {
					let temp = this.searchItemsResults.filter( item => {
						return (item.item.vid === 'На согласование')
					})
					this.$store.commit('setFilterResults', temp)
				}
				else if (this.checked1.includes(10)) {
					let temp = this.searchItemsResults.filter( item => {
						return (item.item.vid === 'На исполнение')
					})
					this.$store.commit('setFilterResults', temp)
				}
				else if (this.checked1.includes(11)) {
					let temp = this.searchItemsResults.filter( item => {
						return (item.item.vid === 'На ознакомление')
					})
					this.$store.commit('setFilterResults', temp)
				}

			} else {
				this.$store.commit('setFilterResults', this. searchItemsResults)
			}
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.zg {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ccc;
}
.z {
	font-weight: bold;
}
.lin {
	font-size: .8rem;
	color: $link;
	cursor: pointer;
}
.filters {
	font-size: 0.9rem;
}
.section {
	margin-top: 1rem;
	margin-bottom: .5rem;

}
.my {
	margin: 0;
	padding: 0;
}
.item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	.badge {
		margin-bottom: -6px;
	}
}
.sm {
	margin: 0;
	padding: 0;
	height: 36px;
}
</style>
