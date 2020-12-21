<template lang="pug">
v-dialog(v-model="book" width="500")
	v-card
		v-card-title.myheadline
			v-icon mdi-book-open-page-variant-outline
			span Справочник сотрудников
		v-card-text.mt-3.body-1 Здесь наш диалог выбора из справочника
		v-divider
		v-card-actions
			v-spacer
			v-btn(text color="primary" @click="$emit('close')") Понятно

</template>

<script>

export default {
	props: ['book'],
	data() {
		return {
		}
	},
}

</script>

<style scoped lang="scss">
.myheadline span {
	margin-left: 1rem;
}
</style>
