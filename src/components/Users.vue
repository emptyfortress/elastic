<template lang="pug">
div
	.mytab
		v-checkbox(v-model="flatlist" label="Плоский список")
		.filt
			v-text-field(v-model="filter" placeholder="Фильтр" prepend-icon="mdi-filter-outline" clearable)
	v-data-table(
		v-model="selected"
		:headers="headers"
		:items="nodeUsers"
		:search="filter"
		:expanded.sync="expanded"
		:loading="loading"
		loading-text="------ Секундочку -------"
		single-expand
		show-expand
		show-select
		disable-pagination hide-default-footer fixed-header
		:no-results-text="notext"
		no-data-text="Выберите организацию"
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
			selected: [],
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
		selectedItems () {
			return this.$store.getters.selectedItems
		},
		filt() {
			return ''
		},
		search() {
			return this.$store.getters.searchMode
		},
		calcHeight() {
			return this.search ? (this.windowHeight - 380) : (this.windowHeight - 240)
		}
	},
	methods: {
		onResize() {
			this.windowHeight = window.innerHeight
		},
		setItems(val) {
			if(val.dep === -1 && this.flatlist) {
				this.nodeUsers = this.users
			} else this.nodeUsers = this.users.filter(user => user.dep === val.dep && user.firm === val.firm)
		}
	},
	watch: {
		dep: {
			immediate: true,
			handler (val) {
				this.loading = true
				if(val !== null) {
					setTimeout(() => {
						this.loading = false
						this.setItems(val)
					},1000)
				} else return []
			}
		},
		flatlist: function (val) {
			if(val) {
				this.setItems(this.dep)
			}
		},
		selected: function (val) {
			if (val) {
				this.$store.commit('setItems', val)
			}
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
