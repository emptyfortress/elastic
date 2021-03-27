<template lang="pug">
.home
	.inf
		ul
			li Это упрощенная версия поиска
			li Убрана цветовая дифференциация 
			li В результатах есть выбор между гридом и лентой
			li Добавлена сортировка
			li При ширине окна > 1800 грид растягивается на все доступное место
			li Агрегатов нет
			li Хинтов нет
			li Ничего нет

</template>

<script>
export default {
	components: {},
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
