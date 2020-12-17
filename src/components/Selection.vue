<template lang="pug">
div
	v-data-table(
		v-model="selectedItems"
		:headers="headers"
		:items="selectedItems"
		loading-text="------ Секундочку -------"
		show-select
		disable-pagination hide-default-footer fixed-header
		:height="calcHeight").usertable
		template(v-slot:item.data-table-select="{ isSelected, select }")
			v-simple-checkbox(color="green" v-ripple :value="isSelected" @input="select($event)")
	.action
		v-btn(depressed color="primary" small) Добавить в раздел
		v-btn(depressed color="deep-orange" dark small) Удалить из раздела
		v-btn(icon @click="help = true")
			v-icon(color="primary") mdi-help-circle-outline

	helpDialog(:help="help" @close="help = false")

</template>

<script>
import UserInfo from '@/components/UserInfo'
import helpDialog from '@/components/helpDialog'


export default {
	components: {
		UserInfo,
		helpDialog,
	},
	data() {
		return {
			help: false,
			windowHeight: window.innerHeight,
			headers: [
				{
					text: 'Название / ФИО',
					align: 'start',
					filterable: true,
					value: 'fio',
				},
				{ text: 'Подразделение/организация', value: ''},
			],
		}
	},
	mounted () {
		this.$nextTick(() => {
			window.addEventListener('resize', this.onResize);
		})
		console.log(this.selectedItems)
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onResize); 
	},
	computed: {
		search() {
			return this.$store.getters.searchMode
		},
		calcHeight() {
			return this.search ? (this.windowHeight - 380) : (this.windowHeight - 246)
		},
		selectedItems () {
			return this.$store.getters.selectedItems
		},
	},
	watch: {
		// selectedItems: function (val) {
		// 	if (val) {
		// 		this.selected = [...this.checked, ...val]
		// 		// this.$nextTick(() => {
		// 		// 	this.selected = [ ...this.checked, ...this.selectedItems ]
		// 		// })
		// 		this.$store.commit('setItems', val)
		// 	}
		// },
		// checked: function (val) {
		// 	if (val) {
		// 		this.selected = []
		// 		// this.$nextTick(() => {
		// 		// 	this.selected = [ ...this.checked, ...this.selectedItems ]
		// 		// })
		// 		this.$store.commit('setChecked', val)
		// 	}
		// }
	},
	methods: {
		onResize() {
			this.windowHeight = window.innerHeight
		},
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';
.action {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 12px 5px;
	gap: 1rem;
}

</style>
