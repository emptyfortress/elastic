<template lang="pug">
v-dialog(v-model="help" width="500")
	v-card
		v-card-title.headline.grey.lighten-2 
			span Добавить / Удалить
			v-spacer
			img(src="@/assets/img/structure.svg" width="40")
		v-card-text.mt-3.body-1 Выберите раздел слева (организацию, подразделение, группу или роль) куда надо добавить или откуда удалить сотрудников. Карточки сотрудников при этом не удаляются. Данное действие невозможно отменить.
		v-divider
		v-card-actions
			v-spacer
			v-btn(text color="primary" @click="$emit('close')") Понятно

</template>

<script>

export default {
	props: ['help'],
	data() {
		return {
		}
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

</style>
