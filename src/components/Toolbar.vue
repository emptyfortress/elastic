<template lang="pug">
.all(:class="{ edit : editMode}")
	hr.line
	.tool(v-if="!editMode")
		.d-flex
			v-btn(icon @click="switchSidebar")
				v-icon(v-show="sidebar") mdi-backburger
				v-icon(v-show="!sidebar") mdi-forwardburger
			v-slide-x-transition(mode="out-in" hide-on-leave)
				.total
					span Всего:
					span.font-weight-bold.ml-3 {{ total }}
					v-slide-x-transition(mode="out-in" hide-on-leave)
						v-btn(depressed small v-if="filtered && !addMode" @click="$emit('reset')").ml-5 Показать все
					v-slide-x-transition(mode="out-in" hide-on-leave)
						v-btn(depressed small v-if="addMode" @click="$emit('app')").ml-5 Применить фильтры
			v-slide-x-reverse-transition(mode="out-in")
				.total(v-if="selected > 0")
					span Выбрано:
					v-btn(icon small @click="$emit('reset2')").mx-3
						v-icon mdi-close
					span.font-weight-bold {{ selected }}
					.ml-6
						v-btn(depressed small) Прочитать
						v-btn(depressed small).ml-2 В работу
						v-btn(depressed small).ml-2 Делегировать
						v-btn(icon small).ml-4
							v-icon mdi-dots-vertical

		.d-flex
			v-btn-toggle(icon v-model="view" mandatory dense group) 
				v-btn(icon @click="grid(0)")
					v-icon mdi-table
				v-btn(icon @click="grid(1)")
					v-icon mdi-format-list-bulleted-square


		.toolcontent
			v-menu(offset-y="50" transition="slide-y-transition" bottom)
				template(v-slot:activator="{attrs, on}")
					v-btn(icon v-bind="attrs" v-on="on")
						v-icon mdi-sort-variant
				v-list(dense)
					v-list-item-group(v-model="srtSelected" color="primary")
						v-list-item( v-for="(item, index) in sort" :key="index" link @click="setSort(index)")
							v-list-item-icon()
								v-icon(small v-if="item.srt") mdi-arrow-down
							v-list-item-title {{ item.title }}

			template(v-for="(item, index) in buttons")
				v-tooltip( bottom )
					template(v-slot:activator="{ on }")
						v-btn(icon v-on="on" @click="click(item.click)")
							img(:src="require(`@/assets/img/${item.icon}.svg`)").ic
					span {{item.text}}
	.tool(v-if="editMode").pr-3
		.total.text-uppercase Редактирование таблицы
		.toolcontent
			v-btn(depressed text @click="$emit('edit')") Отмена
			v-btn(depressed text @click="$emit('edit')") Сохранить
</template>

<script>
export default {
	props: ['selected', 'filtered', 'addMode', 'total'],
	data() {
		return {
			num: 100,
			view: 0,
			srtSelected: 0,
			buttons: [
				{ id: 1, text: 'Прочитать все', icon: 'readAll', click: '' },
				// { id: 2, text: 'Группировка', icon: 'multi', click: 'groupped' },
				{ id: 3, text: 'Обновить', icon: 'reload', click: '' },
				{ id: 4, text: 'Экспорт', icon: 'xls', click: '' },
				{ id: 5, text: 'Reset', icon: 'reset', click: '' },
				{ id: 6, text: 'Настройки', icon: 'setup', click: '' },
				{ id: 7, text: 'Редактировать', icon: 'edit', click: 'edit' },
			],
			views: [
				'Это представление',
				'Просрочено',
				'Все скопром',
				'Настроено в УД',
			],
			sort: [
				{ srt: true, title: 'Релевантность' },
				{ srt: false, title: 'Тип' },
				{ srt: false, title: 'Автор' },
				{ srt: false, title: 'Срок' },
				{ srt: false, title: 'Статус' },
			]
		}
	},
	computed: {
		sidebar () {
			return this.$store.getters.sidebar
		},
		editMode() {
			return this.$store.getters.editMode
		},
		but() {
			if (this.smallFilter !== null) {
				return 'click'
			} else return ''
		},
		pages() {
			return Math.floor((this.num * 48) / this.windHeight)
		},
		windHeight() {
			return document.documentElement.clientHeight - 114
		},
	},
	methods: {
		setSort(e) {
			this.srtSelected = e
			this.sort.map((item) => {
				item.srt = false
				return item
			})
			this.sort[e].srt = true
		},
		switchSidebar() {
			if (this.sidebar) {
				this.$store.commit('setSidebar', false)
			 } else {
				this.$store.commit('setSidebar', true)
			}
		},
		grid (e) {
			if (e === 0) {
				this.$store.commit('setGrid', true)
			} else this.$store.commit('setGrid', false)
		},
		topage(e) {
			this.$vuetify.goTo(e * this.windHeight)
		},
		click(e) {
			this.$emit(e)
		},
		// calcIcon(e) {
		// }
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.page {
	font-size: 1rem;
	font-weight: 400;
	background: #e4e4e0;
	padding: 10px 25px;
	height: 44px;
	text-align: right;
	padding-right: 0;
}
.pag {
	font-size: 0.8rem;
	border: 1px solid #ccc;
	margin-right: 3px;
	padding: 4px 5px;
	cursor: pointer;
	border-radius: 2px;
	&:first-child {
		margin-left: 1rem;
	}
	&.active {
		background: #fff;
		font-size: 1rem;
		padding: 5px 7px;
		border-color: #aaa;
	}
}
.all {
	background: #e4e4e0;
	/* border-top: 1px solid #ccc; */
	position: sticky;
	z-index: 200;
	top: 0;
	&.edit {
		background: pink;
	}
}
.tool {
	display: flex;
	justify-content: space-between;
	.toolcontent {
		height: 44px;
		line-height: 44px;
		.v-btn {
			margin-right: 0.7rem;
		}
		.ic {
			width: 18px;
			opacity: 0.6;
			margin: 0 auto;
		}
	}
	.view {
		height: 44px;
		width: 300px;
		transform: translateY(5px);
		/* background: red; */
	}
}
.line {
	border: 0;
	height: 0;
	border-top: 1px solid rgba(0, 0, 0, 0.23);
	border-bottom: 1px solid rgba(255, 255, 255, 0.6);
}
.total {
	line-height: 42px;
	padding: 0 1rem;
	display: flex;
	align-items: center;
}
.big {
	font-size: 1.3rem;
}
.click {
	padding: 2px 5px;
	line-height: 20px;
	border: 1px dotted $info;
	color: $link;
	border-radius: 5px;
	cursor: pointer;
	background: #f6f6f4;
	&:hover {
		background: #fff;
	}
	&:active {
		background: #f3f4f4;
	}
}
.v-btn-toggle--group > .v-btn.v-btn {
	margin-left: 0;
	margin-right: 0;
}
.v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
	margin-right: 5px;
}
</style>
