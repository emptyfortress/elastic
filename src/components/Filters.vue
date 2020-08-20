<template lang="pug">
.filters
	.zg
		.z Фильтры
		.lin Сбросить все
	section
		.section Тип карточки
		.item
			v-checkbox(dense label="Документ").my
			.badge 7
		.item
			v-checkbox(dense label="Задание").my
			.badge 7
		.item
			v-checkbox(dense label="Группа заданий").my
			.badge 7
	section
		.section Вид документа

</template>

<script>

export default {
	data () {
		return {
			
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.zg {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ccc;
	
}
.z {
	font-weight: bold;
}
.lin {
	font-size: .8rem;
	color: $link;
	cursor: pointer;
}
.filters {
	font-size: 0.9rem;
}
.section {
	margin-top: 1rem;
	margin-bottom: .5rem;

}
.my {
	margin: 0;
	padding: 0;
}
.item {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
