<template lang="pug">
div
	v-data-table(
		v-model="selected"
		:headers="headers"
		:items="selectedItems"
		loading-text="------ Секундочку -------"
		show-select
		disable-pagination hide-default-footer fixed-header
		:height="calcHeight").usertable
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
			selected: [],
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
		// this.selected = this.selectedItems
		this.$nextTick(() => {
			window.addEventListener('resize', this.onResize);
		})
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
		}
	},
	watch: {
		selected: function (val) {
			if (val) {
				this.$store.commit('setItems', val)
			}
		}
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
