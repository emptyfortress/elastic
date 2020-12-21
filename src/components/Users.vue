<template lang="pug">
div
	.mytab
		transition(name="slideYfade" mode="out-in")
			.spr(v-show="addUserMode")
				v-text-field(label="Поиск" prepend-inner-icon="mdi-magnify" solo dense clearable)
				v-btn(icon dark @click="book = true")
					v-icon mdi-book-open-page-variant-outline
		transition(name="slideYfade" mode="out-in")
			.filt(v-show="!addUserMode")
				v-text-field(v-model="filter" placeholder="Фильтр" prepend-icon="mdi-filter-outline" clearable dense)
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

	bookDialog(:book="book" @close="book = false")
</template>

<script>
import { users as raw } from '@/users'
import UserInfo from '@/components/UserInfo'
import bookDialog from '@/components/bookDialog'

export default {
	props: ['dep', 'addUserMode'],
	components: {
		UserInfo,
		bookDialog,
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
			book: false,
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
@import '@/assets/css/colors.scss';

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
	justify-content: flex-end;
	align-items: flex-start;
}
.filt {
	width: 200px;
	margin-right: 1rem;
	margin-top: 5px;
}
.centr {
	width: 50px;
	margin: 0 auto;
}
.spr {
	height: 48px;
	transition: .2s ease all;
	width: 100%;
	padding: 4px 10px;
	background: #1976d2;
	display: flex;
	align-items: flex-start;
	gap: 1rem;
}
</style>
