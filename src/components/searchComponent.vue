<template lang="pug">
v-scale-transition(origin="center right" mode="out-in")
	v-card(v-show="searchMode" tile).searchbox
		.where
			v-select(:items="scope" dark dense :value="scope[0]" hide-detail)
		.place
			input(:placeholder="holder"
				v-model="query"
				@focus="searchResultsVisible = true"
				@keydown.esc="searchResultsVisible = false"
				@input="softReset"
				ref="search"
				@keyup="performSearch"
				@keydown.up.prevent="hightlightPrev"
				@keydown.down.prevent="hightlightNext"
				@keydown.enter="goToLink(highlightedIndex)"
				)
			.closeIcon(v-show="query.length > 0" @click="reset") &times;
			v-list(v-show="query.length > 0 && searchResultsVisible" v-model="history" dense elevation="1").complete
				v-list-item-group
					v-list-item(v-for="(post, index) in searchResults" :key="index"
						href=""
						@mousedown.prevent="searchResultsVisible = true"
						:class="{'selection' : index === highlightedIndex}"
						ref="results"
						@click="goToLink(index)"
						)
						v-list-item-icon
							v-icon(size="20" color="#aaa") mdi-clock-time-two-outline
						v-list-item-content {{ post.item.txt }}
				.noresult(v-show="searchResults.length === 0") Нет предыдущих поисков с '{{ query }}'
					
		v-btn(outlined color="#fff" @click="find" :disabled="!query.length" dark).ml-2 Найти
		searchFocus(@keyup="focusSearch")
</template>

<script>
import searchFocus from '@/components/searchFocus'
import axios from 'axios'
import items from '@/store/data.js'
import {users} from '@/users.js'


export default {
	props: ['active'],
	data () {
		return {
			history: 1,
			query: '',
			searchResultsVisible: false,
			posts: [],
			items,
			users,
			searchResults: [],
			highlightedIndex: null,
			options: {
				shouldSort: true,
				includeMatches: true,
				threshold: 0.4,
				location: 0,
				distance: 500,
				maxPatternLength: 32,
				minMatchCharLength: 1,
				keys: ['txt'],
			},
			options1: {
				shouldSort: true,
				includeMatches: true,
				threshold: 0.1,
				location: 0,
				distance: 1000,
				tokenize: true,
				maxPatternLength: 32,
				minMatchCharLength: 1,
				keys: ['title', 'author', 'digest', 'file'],
			},
			options2: {
				shouldSort: true,
				includeMatches: true,
				threshold: 0.1,
				location: 0,
				distance: 1000,
				tokenize: true,
				maxPatternLength: 32,
				minMatchCharLength: 1,
				keys: ['title', 'lastname', 'name', 'middle'],
			}
		}
	},
	created () {
		axios.get('/history.json')
			.then(response => {
				this.posts = response.data
			})
		this.setfocus()
	},
	components: {
		searchFocus
	},
	computed: {
		searchMode() { return this.$store.getters.searchMode },
		searchItemsResults() { return this.$store.getters.searchItemsResults},
		holder() {
			return this.$route.name === 'catalog' ? 'Название, ИНН, ФИО сотрудника' : 'Номер, содержание, ФИО участников, текст документов и др.'
		},
		scope() {
			if(this.$route.name === 'catalog') {
				return [  'Организация', 'Сотрудник' ]
			} else return [  'Везде', 'В текущей папке', 'В моих папках' ]
		}
	},
	methods: {
		reset () {
			this.query = ''
			this.highlightedIndex = null
		},
		softReset () {
			this.searchResultsVisible = true
			this.highlightedIndex = null
		},
		setfocus () {
			let that = this
			setTimeout(function() {
				that.$refs.search.focus()
			},500)
		},
		focusSearch (e) {
			if (e.key === '/' || e.key === '.') {
				this.$store.commit('toggleSearchMode')
				this.query = ''
				let that = this
				setTimeout(function() {
					that.$refs.search.focus()
				},500)
			}
		},
		performSearch () {
			this.$search(this.query, this.posts, this.options)
				.then(results => {
					this.searchResults = results
				})
		},
		hightlightPrev () {
			if (this.highlightedIndex === null) {
				this.highlightedIndex = this.searchResults.length -1
				this.scrollIntoView()
			} else if (this.highlightedIndex > 0) {
				this.highlightedIndex = this.highlightedIndex - 1
				this.scrollIntoView()
			}
		},
		hightlightNext () {
			if (this.highlightedIndex === null) {
				this.highlightedIndex = 0
			} else if (this.highlightedIndex < this.searchResults.length - 1) {
				this.highlightedIndex = this.highlightedIndex + 1
				this.scrollIntoView()
			}
		},
		scrollIntoView () {
			this.$refs.results[this.highlightedIndex].$el.scrollIntoView({ block: 'nearest' })
		},
		goToLink (e) {
			let that = this
			this.$store.commit('setLoading', true)
			this.searchResultsVisible = false
			this.$store.commit('setMini', true)
			let tot = '/results/' + this.query
			if (this.query === "!!") {
				this.$store.commit('setLoading', false)
				this.$store.commit('toggleSearchMode')
				this.$router.push('/advanced')
				this.query = ''
			} else if (e === null) {
				this.$router.push(tot)
				this.$search(this.query, this.items, this.options1)
					.then(results => {
						this.$store.commit('setSearchItemsResults', results)
					})
			} else {
				this.query = this.searchResults[e].item.txt
				let tut = '/results/' + this.query
				this.$router.push(tut)
				this.$search(this.query, this.items, this.options1)
					.then(results => {
						this.$store.commit('setSearchItemsResults', results)
					})
			}
			setTimeout( function() {
				that.$store.commit('setLoading', false)
			}, 2000)
		},
		find () {
			let query = this.query.trim()
			let that = this
			this.$store.commit('setLoading', true)
			this.searchResultsVisible = false
			this.$store.commit('setMini', true)

			if (this.$route.name === 'catalog') {
				this.$store.commit('setUserSearch', true)
				this.$store.commit('setLoading', true)
				this.$search(query, this.users, this.options2)
					.then(results => {
						this.$store.commit('setSearchItemsResults', results)
					})
			}

			else if (query === '!!') {
				this.$store.commit('setLoading', false)
				this.$router.push('/advanced')
				this.query = ''
			} else if (query === this.$route.params.id) {
				this.$store.commit('setLoading', false)
				return
			} else {
				let tot = '/results/' + query
				this.$router.push(tot)
				this.$search(query, this.items, this.options1)
					.then(results => {
						this.$store.commit('setSearchItemsResults', results)
					})
			}
			setTimeout( function() {
				that.$store.commit('setLoading', false)
			}, 2000)
		},
	},
	watch: {
		active: function() {
			if (this.active) {
				let that = this
				setTimeout(function() {
					that.$refs.search.focus()
				},500)
			}
		}
	}
}

</script>

<style scoped lang="scss">

.searchbox {
	width: 100%;
	display: flex;
	margin-left: 6rem;
	align-items: center;
	.where {
		height: 24px;
		width: 200px;
		margin-right: 1rem;
	}
	.place {
		width: 60%;
		position: relative;
	}
	input {
		border: none;
		width: 100%;
		outline: none;
		background: #fff;
		border-radius: 4px;
		height: 39px;
		color: #000;
		padding: 0 .8rem;
	}
}
.complete {
	position: absolute;
	top: 40px;
	left: 0;
	width: 100%;
	max-height: 300px;
	background: #fff;
	overflow: auto;
}
.noresult {
	padding-left: 1rem;
	color: #aaa;
	/* padding: 1rem; */
}
.closeIcon {
	position: absolute;
	top: 3px;
	right: 1rem;
	font-size: 1.4rem;
	cursor: pointer;
}
.v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
	margin-right: 1rem;
}
.v-list-item:hover {
	background: #efefef;
}
.selection {
	background: #efefef;
}
</style>
