<template lang="pug">
.noUse
	.nothing(v-if="scope === 'user'")
		img(src="@/assets/img/employee.svg" style="height: 70px")
		.big Для просмотра сотрудников
		.small выберите организацию
	.nothing(v-if="scope === 'selected'")
		img(src="@/assets/img/nothing.svg")
		.big Ничего не выбрано
		//- .small для просмотра информации о ней
	.nothing(v-if="scope === 'firm'")
		img(src="@/assets/img/firm.svg")
		.big Выберите организацию
		.small для просмотра информации о ней
</template>

<script>

export default {
	props: ['scope'],
	data() {
		return {
		}
	},
}

</script>

<style scoped lang="scss">

.noUse {
	height: calc(100vh - 195px);
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
}
.big .noUse {
	height: calc(100vh - 380px);
}
.nothing {
	color: #999;
	text-align: center;
	margin: 0;
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
</style>
