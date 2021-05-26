<template lang="pug">
.pic
	p {{ tema.name }}
	img.imag(src='@/assets/img/image-0.png', v-if='tema.id === 0')
	img(src='@/assets/img/image-1.png', v-if='tema.id === 1')
	img(src='@/assets/img/image-2.png', v-if='tema.id === 2')
</template>

<script>
export default {
	props: ['tema'],
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
}
</script>

<style scoped lang="scss">
.pic {
}
.imag {
	width: 100%;
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
