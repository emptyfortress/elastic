<template lang="pug">
.inf(:style="calcHeight")
	v-progress-linear(indeterminate v-show="loading")
	.caption.pa-3.grey--text Клик по значению копирует его.
	table.pa-3
		tr(v-for="item in items")
			td.label {{ item.label}}:
			td(:class="{'slink' : item.link}" @click="$emit('copy')").val {{ item.val }}
	v-btn(depressed small).center Копировать все атрибуты
</template>

<script>

export default {
	props: ['dep'],
	data() {
		return {
			loading: false,
			snackbar: false,
			windowHeight: window.innerHeight,
			items: [
				{ label: 'ИНН', val: 4562211304340592},
				{ label: 'Краткое название', val: 'Алроса'},
				{ label: 'Полное название', val: 'АК Алроса ПАО'},
				{ label: 'Форма собственности', val: 'Акционерная компания'},
				{ label: 'Юридический адрес', val: 'Россия, Москва, ул.Горького, 2'},
				{ label: 'Email', val: '<email>'},
				{ label: 'Телефон', val: '<телефон>'},
				{ label: 'Руководитель', val: 'Шпаков Иван Ильич', link: true},
				{ label: 'Гл.бухгалтер', val: 'Петрова Анна Владимировна', link: true},
				{ label: '<field>', val: '<value>'},
				{ label: '<field>', val: '<value>'},
				{ label: '<field>', val: '<value>'},
				{ label: '<field>', val: '<value>'},
			]
		}
	},
	mounted() {
		this.$nextTick(() => {
			window.addEventListener('resize', this.onResize);
		})
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onResize); 
	},
	computed: {
		search() {
			return this.$store.getters.searchMode
		},
		calcHeight() {
			if (this.search) {
				return 'height:' + (this.windowHeight - 380) + 'px'
			} else return 'height:' + (this.windowHeight - 195) + 'px'
		}
	},
	methods: {
		onResize() {
			this.windowHeight = window.innerHeight
		},
	},
	watch: {
		dep: {
			immediate: true,
			handler (val) {
				this.loading = true
				if(val) {
					setTimeout(() => {
						this.loading = false
					},1000)
				} else return []
			}
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.inf {
	overflow-y: auto;
	position: relative;
}
.plus {
	position: absolute;
	right: 1rem;
	bottom: 1rem;
}
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
.label {
	text-align: right;
	color: #777;
}
.val {
	padding-left: 1rem;
}
.slink {
	color: $link;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
}
.center {
	display: block;
	margin: 1rem auto;
}
</style>
