<template lang="pug">
v-dialog(v-model="add" max-width="600")
	v-card
		v-card-title.headline.grey.lighten-2 
			span {{ node.text }}
			v-spacer
			v-icon(large) mdi-folder-plus-outline
		v-card-text.mt-3.body-1 Добавить раздел в {{ node.text }}?
		form.px-5
			v-text-field(label="Название" autofocus v-model="text" dense ref="input" clearable)
			v-radio-group( v-model="type" row )
				v-radio(label="Папка" value="folder")
				v-radio(label="Организация" value="org")
				v-radio(label="Подразделение" value="dep")
		v-divider
		v-card-actions.pa-5
			v-spacer
			v-btn(text color="primary" @click="$emit('close')") Отмена
			v-btn(depressed :disabled="!text" color="primary" @click="$emit('close')") Сохранить

</template>

<script>

export default {
	props: ['add', 'node'],
	data() {
		return {
			text: '',
			type: 'dep'
		}
	},
}

</script>

<style scoped lang="scss">

</style>
