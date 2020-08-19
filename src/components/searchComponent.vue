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
				)
			.closeIcon(v-show="query.length > 0" @click="reset") &times;
			v-list(v-show="query.length > 0 && searchResultsVisible" v-model="history" dense).complete
				v-list-item-group
					v-list-item
						v-list-item-icon
							v-icon mdi-history
						v-list-item-content Some text here
				.noresult Нет предыдущих поисков с '{{ query }}'
					
		v-btn(outlined color="#fff" @click="show = !show").ml-2 Найти
</template>

<script>

export default {
	data () {
		return {
			scope: [  'Везде', 'В текущей папке', 'В моих папках' ],
			// searchMode: true,
			history: 1,
			holder: 'Номер, содержание, ФИО участников, текст документов и др.',
			query: '',
			searchResultsVisible: false,
		}
	},
	computed: {
		searchMode() { return this.$store.getters.searchMode },
	},
	methods: {
		reset () {
			this.query = ''
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
	box-shadow: 0 2px 6px rgba(0,0,0,.3);
	overflow: auto;
}
.noresult {
	padding: 1rem;
}
.closeIcon {
	position: absolute;
	top: 3px;
	right: 1rem;
	font-size: 1.4rem;
	cursor: pointer;
}
</style>
