<template lang="pug">
v-dialog(v-model="add" max-width="600")
	v-card
		v-card-title.myheadline
			span {{ title }}
			v-spacer
			v-icon(large) mdi-folder-plus-outline
		v-card-text.mt-3.body-1 Добавить раздел в {{ title }} ?
		form.px-5
			v-text-field(label="Название" autofocus v-model="text" dense clearable)
			.myflex
				div(v-if="tab !== 2") Тип:
				v-radio-group( v-model="type" row v-if="tab === 0")
					v-radio(label="Папка" value="icon-folder-outline")
					v-radio(label="Организация" value="icon-firm")
					v-radio(label="Подразделение" value="icon-dep")
				v-radio-group( v-model="type1" row v-if="tab === 1")
					v-radio(label="Организация" value="icon-firm")
					v-radio(label="Подразделение" value="icon-dep")
					v-radio(label="Группа" value="icon-group")
					v-radio(label="Роль" value="icon-role")
		v-divider
		v-card-actions.pa-5
			v-spacer
			v-btn(text color="primary" @click="$emit('close')") Отмена
			v-btn(depressed :disabled="!text" color="primary" @click.prevent="adding") Сохранить

</template>

<script>

export default {
	props: ['add', 'node', 'tab'],
	data() {
		return {
			text: '',
			type: 'icon-dep',
			type1: 'icon-group',
		}
	},
	computed: {
		title() {
			if (this.node) {
				return this.node.text
			} else return ''
		},
		item() {
			let tip = 'icon-role'
			switch(this.tab) {
			case 0: 
				tip = this.type
				break
			case 1: 
				tip = this.type1
				break
			default:
				tip = 'icon-role'
			}
			return {
				text: this.text,
				data: {
					icon: tip
				}
			}
		}
	},
	methods: {
		adding () {
			this.$emit('add', this.item)
			this.$emit('close')
		}
	}
}

</script>
<style scoped lang="scss">
.myflex {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
}

</style>
