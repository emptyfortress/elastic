<template lang="pug">
.filters
	.zg
		.z Фильтры
		.lin Сбросить все
	section
		.section Тип карточки
			.item(v-for="prop in child" v-if="badge(prop.id)")
				v-checkbox(dense :label="prop.name" :value="prop.id" v-model="checked1").my
				.badge {{ badge(prop.id) }}
		.section(v-if="showSecond") Вид документа
			.item(v-for="prop in child1" v-if="badge(prop.id)")
				v-checkbox(dense :label="prop.name" :value="prop.id" v-model="checked1").my
				.badge {{ badge(prop.id) }}
		.section Дата регистрации

</template>

<script>

export default {
	data () {
		return {
			filter: [],
			checked1: [],
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
		}
	},
	created () {
		this.filter = this.searchItemsResults
		this.$store.commit('setFilterResults', this.filter)
	},
	computed: {
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
		}
	},
	methods: {
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
				else if (this.checked5.includes(5)) {
					let temp = this.searchItemsResults.filter( item => {
						return (item.item.vid === 'Приказ')
					})
					this.$store.commit('setFilterResults', temp)
				}
				else if (this.checked6.includes(6)) {
					let temp = this.searchItemsResults.filter( item => {
						return (item.item.vid === 'Договор')
					})
					this.$store.commit('setFilterResults', temp)
				}
				else if (this.checked7.includes(7)) {
					let temp = this.searchItemsResults.filter( item => {
						return (item.item.vid === 'Служебная записка')
					})
					this.$store.commit('setFilterResults', temp)
				}
				else if (this.checked8.includes(8)) {
					let temp = this.searchItemsResults.filter( item => {
						return (item.item.vid === 'Заявление')
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
</style>
