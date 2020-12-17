<template lang="pug">
div
	v-data-table(
		:value="selectedItems"
		:headers="headers"
		:items="selectedItems"
		loading-text="------ Секундочку -------"
		show-select
		disable-pagination hide-default-footer fixed-header
		:height="calcHeight").usertable
		template( v-slot:body="{ items }" )
			tbody
				tr(v-for="item in selectedItems" :key="item.fio")
					td
						v-simple-checkbox(:value="item.checked || item.isSelected" v-ripple @input="uncheck(item)" color="primary")
					td
						i(:class="item.icon" v-if="item.icon").mr-1
						i( v-else).icon-user-1.mr-1
						span {{ item.fio }}
					td
	.action
		v-btn(depressed color="primary" small) Добавить в раздел
		//- v-btn(depressed color="deep-orange" dark small) Удалить из раздела
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
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onResize); 
	},
	computed: {
		users () {
			return this.$store.getters.users
		},
		search() {
			return this.$store.getters.searchMode
		},
		calcHeight() {
			return this.search ? (this.windowHeight - 380) : (this.windowHeight - 246)
		},
		selectedItems () {
			let selectedUser = this.users.filter( item => item.isSelected)
			return [ ...this.$store.getters.checked, ...selectedUser ]
		},
	},
	methods: {
		uncheck (e) {
			if (e.isSelected === true) {
				e.isSelected = false
			} else {
				this.$emit('uncheck', e.fio)
			}
		},
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
