<template lang="pug">
div
	li
		v-icon mdi-information-outline
		span Информация
	li(@click.stop="$emit('editNode')")
		v-icon mdi-pencil
		span Редактировать
	li(@click="$emit('snack')")
		v-icon mdi-content-copy
		span Копировать
	li(@click="$emit('snack')")
		v-icon mdi-content-cut
		span Вырезать
	li.disabled
		v-icon mdi-content-paste
		span Вставить
	li(@click="$emit('addNode')").first
		v-icon mdi-plus-circle-outline
		span Создать
	li(@click="$emit('deleteNode')")
		v-icon mdi-trash-can-outline
		span Удалить

</template>

<script>

export default {
	data() {
		return {
		}
	},
	methods: {
	}
}

</script>

<style scoped lang="scss">

</style>

