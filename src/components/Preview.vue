<template lang="pug">
v-dialog(v-model="preview" max-width="680" persistent)
	v-card.preview
		div.text-align__center
			v-card-title Здесь превью файла
			v-btn(@click="$emit('preview')" depressed block) Отмена

</template>

<script>
export default {
	props: ['preview'],
	data() {
		return {}
	},
}
</script>

<style scoped lang="scss">
.preview {
	height: 800px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
