<template lang="pug">
.help
	h3 Помощь по работе с гридом
	.grid
		.pic

		ul.side
			li.selected Общие сведения
			li Тулбар
			li Левая панель
			li Список | таблица
			li Настройка колонок
			li Сортировка
			li Фильтрация
			li Группировка
			li Агрегаты
			li Групповые операции
			li Экспорт
</template>

<script>
export default {
	data() {
		return {
			item: 0,
			list: [
				{ name: 'Общие сведения' },
				{ name: 'Тулбар' },
				{ name: 'Левая панель' },
				{ name: 'Список | таблица' },
				{ name: 'Настройка колонок' },
				{ name: 'Сортировка' },
				{ name: 'Фильтрация' },
				{ name: 'Группировка' },
				{ name: 'Агрегаты' },
				{ name: 'Групповые операции' },
				{ name: 'Экспорт' },
			],
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.help {
	margin-top: 3rem;
}
h3 {
	font-size: 1.3rem;
	font-weight: 400;
	text-align: center;
}
.grid {
	margin: 2rem 5rem;
	display: grid;
	grid-template-columns: auto 250px;
	gap: 1rem;
	div {
		background: #ccc;
		height: 300px;
	}
}
.pic {
}
.side {
	list-style: none;
	li {
		color: $link;
		cursor: pointer;
		padding: 0.2rem 1rem;
		&.selected {
			background: #d0e4f5;
			&:hover {
				background: #d0e4f5;
			}
		}
		&:hover {
			background: #e7e7e7;
		}
	}
}
</style>
