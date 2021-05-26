<template lang="pug">
.pic
	h4 {{ tema.name }}
	.desc Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона.
	img.imag.sh(src='@/assets/img/image-0.png', v-if='id === 0')
	img.sh(src='@/assets/img/image-1.png', v-if='id === 1')
	img.sh(src='@/assets/img/image-2.png', v-if='id === 2')
</template>

<script>
export default {
	data() {
		return {
			list: [
				{ id: 0, name: 'Общие сведения', src: '@/assets/img/image-0.png' },
				{ id: 1, name: 'Тулбар' },
				{ id: 2, name: 'Левая панель' },
				{ id: 3, name: 'Список | таблица' },
				{ id: 4, name: 'Настройка колонок' },
				{ id: 5, name: 'Сортировка' },
				{ id: 6, name: 'Фильтрация' },
				{ id: 7, name: 'Группировка' },
				{ id: 8, name: 'Агрегаты' },
				{ id: 9, name: 'Групповые операции' },
				{ id: 10, name: 'Экспорт' },
			],
		}
	},
	computed: {
		id() {
			return parseInt(this.$route.params.id)
		},
		tema() {
			return this.list[this.id]
		},
	},
}
</script>

<style scoped lang="scss">
.pic {
}
.imag {
	width: 100%;
}
.sh {
	box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.2), -2px -3px 6px rgba(0, 0, 0, 0.2);
}
.desc {
	font-size: 0.9rem;
	margin-bottom: 0.5rem;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
	position: absolute;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
