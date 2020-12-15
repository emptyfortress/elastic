<template lang="pug">
div
	v-data-table(
		v-model="selected"
		:headers="headers"
		:items="selectedUsers"
		:expanded.sync="expanded"
		loading-text="------ Секундочку -------"
		single-expand
		show-expand
		show-select
		disable-pagination hide-default-footer fixed-header
		:height="calcHeight").usertable
			template(v-slot:expanded-item="{ headers, item }")
				td(:colspan="headers.length")
					UserInfo(:user="item")
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
			expanded: [],
			help: false,
			windowHeight: window.innerHeight,
			headers: [
				{
					text: 'Фамилия',
					align: 'start',
					filterable: true,
					value: 'lastname',
				},
				{ text: 'Инициалы', value: 'short'},
				{ text: 'Должность', value: 'title' },
			],
		}
	},
	mounted () {
		this.selected = this.selectedUsers
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
		selectedUsers () {
			return this.$store.getters.selectedUsers
		}
	},
	watch: {
		selected: function (val) {
			if (val) {
				this.$store.commit('setUsers', val)
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
