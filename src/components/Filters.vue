<template lang="pug">
.filters
	.zg
		.z Фильтры
		.lin Сбросить все
	section
		.section(v-for="item in typecard") {{ item.section }}
			.item(v-for="prop in item.child")
				v-checkbox(dense :label="prop.name" :value="prop.id" v-model="checkedtype").my
				.badge {{ badge(prop.id) }}

</template>

<script>

export default {
	data () {
		return {
			docC: false,
			taskC: false,
			fileC: false,
			filter: [],
			checkedtype: [],
			typecard: [
				{
					section: 'Тип документа',
					child: [
						{ id: 1, name: 'Документ' },
						{ id: 2, name: 'Задание' },
						{ id: 3, name: 'Группа заданий' },
						{ id: 4, name: 'Файл' },
					]
				},
				{
					section: 'Вид карточки',
					child: [
						{ id: 4, name: 'Документ' },
						{ id: 6, name: 'Задание' },
						{ id: 7, name: 'Файл' },
					]
				},
			]
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
	},
	methods: {
		badge(e) {
			switch (e) {
			case 1:
				return this.searchItemsResults.filter( item => item.item.type === 'doc').length
			case 2:
				return this.searchItemsResults.filter( item => item.item.type === 'task').length
			case 3:
				return this.searchItemsResults.filter( item => item.item.type === 'file').length
			}
		}
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
