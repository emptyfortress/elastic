<template lang="pug">
.information
	.d-flex
		v-avatar(color="pink lighten-2").mr-3
			img(src="@/assets/img/user0.svg")
		div
			.fio {{ user.lastname }}
			.name {{ user.name }} {{ user.middle }}
		div(style="flex-grow: 1")
		v-btn(icon)
			v-icon mdi-pencil
	v-divider.mt-2
	table
		tr(v-for="contact in contacts")
			td.label {{ contact.label }}:
			td(:class="{'slink' : contact.link}").val {{ contact.value }}
	
</template>

<script>

export default {
	props: ['user'],
	data() {
		return {
			contacts: [
				{ label: 'Табельный номер', value: '3453-3221' },
				{ label: 'Организация', value: '<company_name>' },
				{ label: 'Подразделение', value: '<department_name>' },
				{ label: 'Должность', value: `${this.user.title}`  },
				{ label: 'Руководитель', value: 'Шпак Илларион Аполлонович', link: true  },
				{ label: 'Телефон', value: '(812) 123-45-67' },
				{ label: 'Email', value: 'name@gmail.com', link: true },
			]
		}
	},
	computed: {
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';
.information {
	padding: .7rem 0;
}
.fio {
	text-transform: uppercase;
	font-size: 1.1rem;
}
.name {
	font-size: 1.0rem;
}
table {
	font-size: .8rem;
}
.label {
	text-align: right;
	color: #777;
}
.val {
	padding-left: 1rem;
}
.slink {
	color: $link;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
}

</style>
