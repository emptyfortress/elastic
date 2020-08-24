<template lang="pug">
v-slide-y-transition(mode="out-in")
	.hint(v-show="searchMode")
		div.one
			v-checkbox(dense label="Документы" v-model="doc" :disabled="sotr" :class="md ? 'my' : '' ")
		div.two
			v-checkbox(dense label="Задания" v-model="task" :disabled="sotr")
		div.three
			v-checkbox(dense label="Файлы" v-model="task" :disabled="sotr")
		div.four
			v-checkbox(dense label="Я - автор" :disabled="sotr")
		div.five
			v-checkbox(dense label="По организации" :disabled="sotr")
		div.six
			v-checkbox(dense label="Точное совпадение" )

</template>

<script>

export default {
	props: ['searchMode'],
	data () {
		return {
			
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
