<template lang="pug">
v-dialog(v-model="drag" width="500")
	v-card
		v-card-title.myheadline
			span Изменить структуру
			v-spacer
			img(src="@/assets/img/structure.svg" width="40")
		v-card-text.mt-3.body-1 Вы собираетесь изменить структуру организации или подразделения. Отменить действие будет невозможно. Продолжить?
		v-divider
		v-card-actions
			v-spacer
			v-btn(text color="primary" @click="$emit('close')") Отмена
			v-btn(text color="primary" @click="$emit('close')") Продолжить

</template>

<script>

export default {
	props: ['drag'],
	data() {
		return {
		}
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

</style>
