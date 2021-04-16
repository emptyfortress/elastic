<template lang="pug">
.multi
	v-btn(icon @click="clear")
		v-icon mdi-close
	.tot {{ total }}
	.arr &rarr;
	v-btn(v-for="bt in btn" depressed small color="#fff").action {{ bt }}
	.up
	v-btn(icon)
		v-icon mdi-chevron-up
</template>

<script>
export default {
	props: ['total'],
	data() {
		return {
			btn: [
				'Делегировать',
				'Прочитать',
				'Завершить',
			]
		}
	},
	methods: {
		clear() {
			this.$emit('clear')
		}
	}
}
</script>

<style scoped lang="scss">
.multi {
	position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0 .5rem;
	height: 50px;
	line-height: 50px;
	width: 100%;
	background: #e4e4e0;
	border-radius: 15px 15px 0 0;
	box-shadow: 0 -2px 6px rgba(0, 0, 0, .2);
	border: 1px solid #ccc;
	border-bottom: none;
}
.tot {
	font-size: 1.1rem;
	font-weight: bold;
}
.arr {
	margin: 0 1rem;
}
.action {
	margin: 0 .25rem;
}
.up {
	flex-grow: 1;
}
</style>
