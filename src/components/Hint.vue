<template lang="pug">
v-slide-y-transition(mode="out-in")
	.hint(v-show="searchMode && !($route.name === 'catalog')")
		div.one
			v-checkbox(dense :color="col" label="Документы" v-model="doc" )
		div.two
			v-checkbox(dense :color="col" label="Задания" v-model="task" )
		div.three
			v-checkbox(dense :color="col" label="Файлы" v-model="file" )
		div.four
			v-checkbox(dense :color="col" label="Я - автор"  v-model="author")
		div.five
			v-checkbox(dense :color="col" label="По организации" v-model="org")
		div.six
			v-checkbox(dense :color="col" label="Точное совпадение" v-model="exact")

</template>

<script>

export default {
	props: ['searchMode'],
	data () {
		return {
			doc: '',
			task: '',
			file: '',
			author: '',
			org: '',
			exact: '',
		}
	},
	computed: {
		col () {
			if (this.$route.name === 'results') {
				return 'purple'
			} else return ''
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.one {
	grid-column: 1/2;
	grid-row: 1;
}
.two {
	grid-column: 2/3;
	@media screen and (max-width: 1260px) {
		grid-column: 1/2;
		grid-row: 2;
	}
}
.three {
	grid-column: 3/4;
	@media screen and (max-width: 1260px) {
		grid-column: 2/3;
		grid-row: 1;
	}
}
.four {
	grid-column: 4/5;
	@media screen and (max-width: 1260px) {
		grid-column: 3/4;
		grid-row: 2;
	}
}
.hint {
	background: #fff;
	width: 100%;
	padding: .5rem 1rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
	grid-template-rows: auto;
	grid-gap: 0 .25rem;
	border-bottom: 1px solid #B0BEC5;
	.v-input--selection-controls {
		margin: 0;
		padding: 0;
		height: 24px;
		margin-right: 2rem;
		margin-bottom: 0;
		white-space: nowrap;
	}
}

</style>
