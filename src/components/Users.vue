<template lang="pug">
v-data-table(
	:headers="headers" 
	:items="nodeUsers" 
	:search="filter" 
	:expanded.sync="expanded"
	single-expand
	show-expand
	disable-pagination hide-default-footer fixed-header 
	:no-results-text="notext"
	:height="calcHeight").usertable
	template(v-slot:expanded-item="{ headers, item }")
		td(:colspan="headers.length")
			UserInfo(:user="item")
	template(v-slot:no-results)
		.nothing
			img(src="@/assets/img/nothing.svg")
			.big Ничего не найдено
			.small Проверьте, нет ли опечаток. Попробуйте изменить запрос.

</template>

<script>
import { users } from '@/users'
import UserInfo from '@/components/UserInfo'

export default {
	props: ['filter'],
	components: {
		UserInfo,
	},
	data() {
		return {
			expanded: [],
			windowHeight: window.innerHeight,
			notext: 'Ничего не найдено.',
			users,
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
	mounted() {
		this.$nextTick(() => {
			window.addEventListener('resize', this.onResize);
		})
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onResize); 
	},
	computed: {
		nodeUsers() {
			return this.users
			// return this.users.filter(user => user.lastname === 'Кузнецов')
		},
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
.nothing {
	padding-top: 2rem;
	img {
		width: 100px;
	}
	.big {
		font-size: 1.3rem;
	}
	.small {
		font-size: 0.9rem;
	}
}
</style>
