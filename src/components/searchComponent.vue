<template lang="pug">
v-scale-transition(origin="center right" mode="out-in")
	v-card(v-show="searchMode").searchbox
		.where
			v-select(:items="scope" dark dense value="Везде" hide-detail)
		input(placeholder="Номер, содержание, ФИО участников, текст документов и др.")
		v-btn(outlined color="#fff").ml-2 Найти
</template>

<script>

export default {
	data () {
		return {
			scope: [  'Везде', 'В текущей папке', 'В моих папках' ]
		}
	},
	computed: {
		searchMode() { return this.$store.getters.searchMode },
	},
	methods: {
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
	input {
		border: none;
		width: 69%;
		outline: none;
		background: #fff;
		border-radius: 4px;
		/* width: 400px; */
		height: 39px;
		color: #000;
		padding: 0 .5rem;
	}
}
</style>
