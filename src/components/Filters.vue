<template lang="pug">
.filters
	.zg
		.z Фильтры
		.lin Сбросить все
	section
		.section Тип карточки
		.item
			v-checkbox(dense label="Документ" v-model="docC").my
			.badge {{ doc }}
		.item
			v-checkbox(dense label="Задание" v-model="taskC").my
			.badge {{ task }}
		.item
			v-checkbox(dense label="Группа заданий" v-model="fileC").my
			.badge {{ file }}
	section
		.section Вид документа
		.item
			v-checkbox(dense label="Документ").my
			.badge {{ doc }}

</template>

<script>

export default {
	data () {
		return {
			docC: false,
			taskC: false,
			fileC: false,
			filter: [],
		}
	},
	created () {
		this.filter = this.searchItemsResults
		this.$store.commit('setFilterResults', this.filter)
	},
	computed: {
		searchItemsResults () {
			return this.$store.getters.searchItemsResults
		},
		doc () {
			return this.searchItemsResults.filter( item => item.item.type === 'doc').length
		},
		task () {
			return this.searchItemsResults.filter( item => item.item.type === 'task').length
		},
		file () {
			return this.searchItemsResults.filter( item => item.item.type === 'file').length
		},
	},
	watch: {
		docC: function() {
			if (this.docC) {
				let temp = this.searchItemsResults.filter( item => item.item.type === 'doc')
				this.$store.commit('setFilterResults', temp)
			} else this.$store.commit('setFilterResults', this.filter)
		},
		taskC: function() {
			if (this.taskC) {
				let temp = this.searchItemsResults.filter( item => item.item.type === 'task')
				this.$store.commit('setFilterResults', temp)
			} else this.$store.commit('setFilterResults', this.filter)
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
