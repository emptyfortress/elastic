<template lang="pug">
v-dialog(v-model="more1" max-width="480" persistent)
	v-card.preview
		.zg Переходим в карточку
		v-divider.mx-4
		v-card-actions
			v-spacer
			v-btn(@click="$emit('more1')" depressed ) Закрыть
			v-spacer

</template>

<script>
export default {
	props: ['more1'],
	data() {
		return {}
	},
	components: {},
}
</script>

<style scoped lang="scss">
.preview {
	padding: 0.5rem;
}
.zg {
	font-size: 1.3rem;
	text-align: center;
	margin: 0.5rem;
	/* height: 800px; */
	/* display: flex; */
	/* justify-content: center; */
	/* align-items: center; */
}
</style>
