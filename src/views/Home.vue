<template lang="pug">
.home
	.inf
		ul
		li Это средняя версия поиска
		li Убрана цветовая дифференциация 
			li В результатах есть выбор между гридом и лентой
			li Добавлена сортировка
			li Добавлены агрегаты
			li Агрегатов сворачиваются
			li
				span Тулбар не работает, сортировки тоже

</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
	components: {
		HelloWorld
	}
}

</script>

<style scoped lang="scss">

.home {
	display: flex;
	height: 75vh;
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;
}
.inf {
	width: 750px;
	background: #fff;
	margin-top: 3rem;
	border: 1px solid #ddd;
	border-radius: 4px;
	padding: 1rem;
}
li span {
	color: red;
}
</style>
