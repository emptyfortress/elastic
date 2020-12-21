<template lang="pug">
div
	.mytab
		v-spacer
		.filt
			v-text-field(v-model="filter" placeholder="Фильтр" prepend-icon="mdi-filter-outline" clearable v-if="!addMode")
	v-data-table(
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
		:height="calcHeight").usertable
		template(v-slot:top v-if="addMode")
			.top This is content above the actual table
		template( v-slot:no-data )
			.pa-10.text-center
				.overline Показать вложенные разделы
				v-switch(v-model="flatlist").centr
		template(v-slot:item.data-table-select="{ item }")
			v-simple-checkbox(color="primary" v-ripple :value="item.isSelected" @input="select(item)")
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
import { users as raw } from '@/users'
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
			users: [],
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
		this.users = raw
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
			return this.search ? (this.windowHeight - 380) : (this.windowHeight - 240)
		}
	},
	methods: {
		select (e) {
			e.isSelected ? e.isSelected = false : e.isSelected = true
			this.$store.commit('setUsers', this.users)
		},
		onResize() {
			this.windowHeight = window.innerHeight
		},
		setItems(val) {
			if(val && this.flatlist) {
				this.nodeUsers = this.users.filter( user => user.dep === val.dep )
			} else this.nodeUsers = this.users.filter(user => user.dep === val.dep && user.firm === val.firm)
		}
	},
	watch: {
		dep: {
			immediate: true,
			handler (val) {
				this.flatlist = false
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
				this.loading = true
				setTimeout(() => {
					this.loading = false
					this.setItems(this.dep)
				},1000)
			}
		},
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
.centr {
	width: 50px;
	margin: 0 auto;
}
.usertable {
	position: relative;
}
.top {
	height: 50px;
	background: red;
}
</style>
