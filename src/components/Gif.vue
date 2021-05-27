<template lang="pug">
.pic
	h4 {{ tema.name }}
	.desc {{ tema.desc }}
	img.imag.sh(src='@/assets/img/image-0.png', v-if='id === 0')
	img.sh(src='@/assets/img/image-1.png', v-if='id === 1')
	.top
		img.sh(src='@/assets/img/image-2.png', v-if='id === 2')
		img.sh(src='@/assets/img/image-3.png', v-if='id === 2')
	img.sh(src='@/assets/img/list.png', v-if='id === 3')
	img.sh(src='@/assets/img/image-4.png', v-if='id === 4')
	img.sh(src='@/assets/img/image-5.png', v-if='id === 5')
	img.sh(src='@/assets/img/image-6.png', v-if='id === 6')
	.top
		img.sh(src='@/assets/img/image-7.png', v-if='id === 7')
		img.sh(src='@/assets/img/image-8.png', v-if='id === 7')
	img.sh(src='@/assets/img/image-9.png', v-if='id === 8')
	img.sh(src='@/assets/img/image-10.png', v-if='id === 9')
	img.sh(src='@/assets/img/image-11.png', v-if='id === 10')
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					id: 0,
					name: 'Общие сведения',
					desc:
						'Грид состоит из собственно таблицы, тулбара и дополнительной панели. ',
				},
				{
					id: 1,
					name: 'Тулбар',
					desc:
						'Тулбар содержит кнопки переключения видов, кнопки операций и кнопку скрытия левой панели.',
				},
				{
					id: 2,
					name: 'Левая панель',
					desc:
						'В левой панели могут находится контролы группировки или фильтрации результатов. Панель можно свернуть / развернуть по кнопке в тулбаре.',
				},
				{
					id: 3,
					name: 'Список | таблица',
					desc: 'Это переключатель видов таблица | список',
				},
				{
					id: 4,
					name: 'Настройка колонок',
					desc:
						'Вы можете настроить ширину и порядок колонок простым перетаскиванием.',
				},
				{
					id: 5,
					name: 'Сортировка',
					desc:
						'Исходная сортировка содержится в настройках вида. По клику на иконку сортировки происходит сортировка по данной колонке. Чтобы вернуться к исходной сортировке надо нажать кнопку Reset.',
				},
				{
					id: 6,
					name: 'Фильтрация',
					desc: 'Быстрая фильтрация позволяет показать данные по условию.',
				},
				{
					id: 7,
					name: 'Группировка',
					desc:
						'Данные могут быть сгруппированы по различным атрибутам. Для группировки перетащите заголовок колонки в левую панель в область группировки.',
				},
				{
					id: 8,
					name: 'Агрегаты',
					desc:
						'Агрегаты - это предустановленные фильтры по различным атрибутам. Они позволяют быстро переключаться между разными наборами данных',
				},
				{
					id: 9,
					name: 'Групповые операции',
					desc:
						'Выберите строки для выполнения одной операции над ними одновременно.',
				},
				{
					id: 10,
					name: 'Экспорт',
					desc: 'Текущий вид может быть экспортирован в Microsoft Excel.',
				},
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
	font-size: 1rem;
	margin-bottom: 2rem;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
	position: absolute;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.top img {
	vertical-align: top;
	margin-right: 1rem;
}
</style>
