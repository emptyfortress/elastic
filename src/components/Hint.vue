<template lang="pug">
v-slide-y-transition(mode="out-in")
	.hint(v-show="searchMode")
		v-checkbox(dense label="Документы" v-model="doc" :disabled="sotr" :class="md ? 'my' : '' ")
		v-checkbox(dense label="Задания" v-model="task" :disabled="sotr")
		v-checkbox(dense label="Файлы" v-model="task" :disabled="sotr")
		.vert
		v-checkbox(dense label="Я - автор" :disabled="sotr")
		v-checkbox(dense label="По организации" :disabled="sotr")
		.vert(v-shodense w="!sotr")
		v-checkbox(dense label="Точное совпадение" )

</template>

<script>

export default {
	props: ['searchMode'],
	data () {
		return {
			
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.hint {
	background: #fff;
	width: 100%;
	padding: 0 2rem;
	display: flex;
	flex-wrap: wrap;
	border-bottom: 1px solid #B0BEC5;
	.v-input--selection-controls {
		margin: 0;
		padding: 0;
		margin-top: .9rem;
		margin-right: 2rem;
		margin-bottom: 0;

	}
}
.vert {
	height: 26px;
	width: 1px;
	background: #ccc;
	margin-right: 2rem;
	margin-top: 11px;
}

</style>
