<template lang="pug">
v-data-table(:headers="headers" :items="users" :search="filt" disable-pagination hide-default-footer fixed-header :height="calcHeight").usertable
</template>

<script>
import { users } from '@/users'

export default {
	data() {
		return {
			windowHeight: window.innerHeight,
			users,
			headers: [
				{
					text: 'Фамилия',
					align: 'start',
					filterable: true,
					value: 'lastname',
				},
				{ text: 'Имя', value: 'name'},
				{ text: 'Отчество', value: 'middle'},
				{ text: 'Должность', value: 'title' },
			],
		}
	},
	mounted() {
		this.$nextTick(() => {
			window.addEventListener('resize', this.onResize);
		})
	},
	beforeDestroy() { 
		window.removeEventListener('resize', this.onResize); 
	},
	computed: {
		filt() {
			return ''
		},
		search() {
			return this.$store.getters.searchMode
		},
		calcHeight() {
			return this.search ? (this.windowHeight - 330) : (this.windowHeight - 195)
		}
	},
	methods: {
		onResize() {
			this.windowHeight = window.innerHeight
		}
	}
}

</script>

<style scoped lang="scss">
</style>
