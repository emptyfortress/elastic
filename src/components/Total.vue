<template lang="pug">
.multi(:class="{ big : big }")
	.row
		v-btn(icon @click="clear")
			v-icon mdi-close
		.tot {{ total }}
		.arr &rarr;
		v-btn(v-for="bt in btn" depressed small color="#fff" @click="bt.action" :key="bt.label").action {{ bt.label }}
		.up
		v-btn(icon @click="setbig").chev
			v-icon mdi-chevron-up
	.row.bottom
		v-btn( depressed small v-for="n in 4" v-show="!delegation" :key="n").action Кнопка действий
		p(v-show="delegation") здесь выбор из справочника сотрудников
</template>

<script>
export default {
	props: ['total'],
	data() {
		return {
			big: false,
			delegation: false,
			btn: [
				{ label: 'Делегировать', action: this.deleg },
				{ label: 'Прочитать', action: this.empty},
				{ label: 'Завершить', action: this.empty },
			]
		}
	},
	methods: {
		setbig () {
			this.delegation = false
			this.big = !this.big
		},
		empty () {
			return
		},
		deleg () {
			this.big = !this.big
			this.delegation = !this.delegation
		},
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
	height: 50px;
	width: 100%;
	background: #e4e4e0;
	padding: 0 .5rem;
	transition: .3s ease all;
	.row {
		padding: .5rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		&.bottom {
			margin-left: 84px;
		}
	}
	border-radius: 15px 15px 0 0;
	box-shadow: 0 -2px 6px rgba(0, 0, 0, .2);
	border: 1px solid #ccc;
	border-bottom: none;
	&.big {
		height: 150px;
	}
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
.chev {
	transition: .2s ease all;
	.big & {
		transform: rotate(180deg);
	}
}
</style>
