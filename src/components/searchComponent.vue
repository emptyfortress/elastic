<template lang="pug">
v-scale-transition(origin="center right" mode="out-in")
	v-card(v-show="searchMode" tile).searchbox
		.where
			v-select(:items="scope" dark dense value="Везде" hide-detail)
		.place
			input(:placeholder="holder"
				v-model="query"
				@blur="searchResultsVisible = false"
				@focus="searchResultsVisible = true"
				@keydown.esc="searchResultsVisible = false"
				@input="softReset"
				ref="search"
				@keyup="performSearch"
				)
			.closeIcon(v-show="query.length > 0" @click="reset") &times;
			v-list(v-show="query.length > 0 && searchResultsVisible" v-model="history" dense elevation="1").complete
				v-list-item-group
					v-list-item(v-for="post in searchResults" 
						href="/#/results"
						@mousedown.prevent="searchResultsVisible = true"
						)
						v-list-item-icon
							v-icon(size="20" color="#aaa") mdi-clock-time-two-outline
						v-list-item-content {{ post.item.txt }}
				.noresult(v-show="searchResults.length === 0") Нет предыдущих поисков с '{{ query }}'
					
		v-btn(outlined color="#fff" @click="show = !show").ml-2 Найти
		searchFocus(@keyup="focusSearch")
</template>

<script>
import searchFocus from '@/components/searchFocus'
import axios from 'axios'

export default {
	props: ['active'],
	data () {
		return {
			scope: [  'Везде', 'В текущей папке', 'В моих папках' ],
			history: 1,
			holder: 'Номер, содержание, ФИО участников, текст документов и др.',
			query: '',
			searchResultsVisible: false,
			posts: [],
			searchResults: [],
			options: {
				shouldSort: true,
				includeMatches: true,
				threshold: 0.4,
				location: 0,
				distance: 500,
				maxPatternLength: 32,
				minMatchCharLength: 1,
				keys: ['txt'],
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
	},
	methods: {
		reset () {
			this.query = ''
		},
		softReset () {
			this.searchResultsVisible = true
		},
		setfocus () {
			this.$refs.search.focus()
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
	margin-left: 8rem;
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
</style>
