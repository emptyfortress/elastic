<template lang="pug">
.all
	v-btn.owl(depressed, small, dark, color='link', @click='help')
		img(src='@/assets/img/owl.svg')
		span Помощь
	hr.line
	.tool
		.d-flex
			v-btn(icon, @click='switchSidebar')
				v-icon(v-show='sidebar') mdi-backburger
				v-icon(v-show='!sidebar') mdi-forwardburger
			v-slide-x-transition(mode='out-in', hide-on-leave)
				.total
					span Всего:
					span.font-weight-bold.ml-3 {{ total }}
					v-slide-x-transition(mode='out-in', hide-on-leave)
						v-btn.ml-5(
							depressed,
							small,
							v-if='filtered && !addMode',
							@click='$emit("reset")'
						) Показать все
					v-slide-x-transition(mode='out-in', hide-on-leave)
						v-btn.ml-5(depressed, small, v-if='addMode', @click='$emit("app")') Применить фильтры
			v-slide-x-reverse-transition(mode='out-in')
				.total(v-if='selected > 0')
					span Выбрано:
					v-btn.mx-3(icon, small, @click='$emit("reset2")')
						v-icon mdi-close
					span.font-weight-bold {{ selected }}
					.ml-6
						v-btn(depressed, small) Прочитать
						v-btn.ml-2(depressed, small) В работу
						v-btn.ml-2(depressed, small) Делегировать
						v-btn.ml-4(icon, small)
							v-icon mdi-dots-vertical

		.d-flex
			v-btn-toggle(icon, v-model='view', mandatory, dense, group) 
				v-btn(icon, @click='grid(0)')
					v-icon mdi-table
				v-btn(icon, @click='grid(1)')
					v-icon mdi-format-list-bulleted-square

		//- .zaglush(v-show="!tools")

		.toolcontent
			v-menu(offset-y, transition='slide-y-transition', bottom)
				template(v-slot:activator='{ on: menu, attrs }')
					v-tooltip(top, open-delay='500')
						template(v-slot:activator='{ on: tooltip }')
							v-btn(icon, v-bind='attrs', v-on='{ ...menu, ...tooltip }')
								v-icon mdi-sort-variant
						span Сортировка
				v-list(dense)
					v-list-item-group(v-model='srtSelected', color='primary')
						v-list-item(
							v-for='(item, index) in sort',
							:key='index',
							link,
							@click='setSort(item, index)'
						)
							v-list-item-icon(@click.stop='revert = !revert')
								v-icon(small, v-if='item.srt', :class='{ rot: revert }') mdi-arrow-down
							v-list-item-title {{ item.title }}

			template(v-for='(item, index) in buttons')
				v-tooltip(top, open-delay='500')
					template(v-slot:activator='{ on }')
						v-btn(icon, v-on='on', @click='click(item.click)')
							img.ic(:src='require(`@/assets/img/${item.icon}.svg`)')
					span {{ item.text }}

			v-tooltip(top, open-delay='500')
				template(v-slot:activator='{ on: tooltip }')
					v-btn(icon, v-on='{ ...tooltip }', @click='mode')
						v-icon mdi-help-circle-outline
				span Help mode
</template>

<script>
export default {
	props: ['selected', 'filtered', 'addMode', 'total'],
	data() {
		return {
			num: 100,
			// tools: false,
			view: 0,
			srtSelected: 0,
			revert: false,
			buttons: [
				{ id: 1, text: 'Прочитать все', icon: 'readAll', click: '' },
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
			],
		}
	},
	computed: {
		sidebar() {
			return this.$store.getters.sidebar
		},
		// editMode() {
		// 	return this.$store.getters.editMode
		// },
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
		mode() {
			this.$store.commit('toggleHelpMode')
		},
		help() {
			this.$router.push('/help/0')
			this.$store.commit('setSearchMode', false)
		},
		setSort(item, index) {
			if (this.srtSelected !== index) {
				this.srtSelected = index
				this.sort.map((item) => {
					item.srt = false
					return item
				})
				this.sort[index].srt = true
			}
		},
		switchSidebar() {
			if (this.sidebar) {
				this.$store.commit('setSidebar', false)
			} else {
				this.$store.commit('setSidebar', true)
			}
		},
		grid(e) {
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
	background: #fff;
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
.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
	margin-right: 5px;
}
.rot {
	transform: rotate(180deg);
}
.zaglush {
	width: 330px;
	text-align: center;
	background: url(../assets/img/dots.png) no-repeat right 0 center;
}
.owl {
	padding: 3px 10px;
	background: #fff;
	position: absolute;
	top: -28px;
	right: 0;
	img {
		width: 24px;
		margin-right: 5px;
	}
}
</style>
