<template lang="pug">
v-dialog(v-model="more" max-width="680" persistent)
	v-card.preview
		v-card-title Имя файла
		v-card-subtitle Автор, Изменено
		v-card-text
			div( v-for="n in 5").mb-2
				TextHighlight(queries="sit").smtxt  ...Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua...

		v-divider.mx-4
		v-card-actions
			v-btn(small @click="$emit('more')" depressed) Отмена
			v-spacer
			v-btn(small @click="$emit('more')" depressed color="primary") Просмотреть файл
			v-btn(small @click="$emit('more')" depressed color="primary") Открыть
			v-btn(small @click="$emit('more')" depressed color="primary") Скачать

</template>

<script>
import TextHighlight from 'vue-text-highlight'

export default {
	props: ['more'],
	data() {
		return {}
	},
	components: {
		TextHighlight,
	},
}
</script>

<style scoped lang="scss">
.preview {
	padding: 0.5rem;
}
</style>
