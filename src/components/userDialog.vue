<template lang="pug">
v-dialog(v-model="dialog" width="800")
	v-card
		v-card-title.headline.grey.lighten-2 
			v-avatar(color="pink lighten-2").mr-3
				img(src="@/assets/img/user0.svg")
			span {{ user.fio }}
			v-spacer
			v-btn(icon @click="$emit('close')")
				v-icon mdi-close
		v-tabs(v-model="userTabs")
			v-tab(v-for="tab in tabs" :key="tab") {{ tab }}

			v-tabs-items(v-model="userTabs")
				v-tab-item
					v-card-text.mt-3.body-1 Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.
				v-tab-item
					v-card-text.mt-3.body-1 Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.
				v-tab-item
					v-card-text.mt-3.body-1 Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.
		v-divider
		v-card-actions
			v-btn(text color="primary" @click="$emit('close')") Редактировать
			v-spacer
			v-btn(text  @click="$emit('close')") Отмена
			v-btn(text color="primary" @click="$emit('close')") Сохранить

</template>

<script>

export default {
	props: ['dialog', 'user'],
	data() {
		return {
			userTabs: null,
			tabs: ['Раздел 1', 'Раздел 2', 'Раздел 3'],
		}
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

</style>
