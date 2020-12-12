<template lang="pug">
div
	.mytab
		v-checkbox(v-model="flatlist" label="Плоский список")
		.filt
			v-text-field(v-model="filter" placeholder="Фильтр" prepend-icon="mdi-filter-outline" clearable)
	v-data-table(
		:headers="headers"
		:items="nodeUsers"
		:search="filter"
		:expanded.sync="expanded"
		:loading="loading"
		loading-text="------ Щаc все будет -------"
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
		template(v-slot:no-data)
			.nothing
				img(src="@/assets/img/firm.svg")
				.big Выберите организацию
				.small Для просмотра плоским списком, включите чекбокс вверху.

</template>

<script>
import { users } from '@/users'
import UserInfo from '@/components/UserInfo'

export default {
	props: ['dep'],
	components: {
		UserInfo,
	},
	data() {
		return {
			flatlist: false,
			loading: false,
			filter: '',
			expanded: [],
			windowHeight: window.innerHeight,
			notext: 'Ничего не найдено.',
			users,
			nodeUsers: [],
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
		},
		setUsers(val) {
			this.nodeUsers = this.users.filter(user => user.dep === val)
		}
	},
	watch: {
		dep: function(val) {
			this.loading = true
			if(val !== null) {
				setTimeout(() => {
					this.loading = false
					this.setUsers(val)
				},1000)
			} else return []
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
.mytab {
	height: 48px;
	display: flex;
	justify-content: space-between;
	/* align-items: flex-start; */
}
.filt {
	width: 200px;
	transform: translateY(-4px);
}
</style>
