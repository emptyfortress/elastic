<template lang="pug">
.subbar
	.result
		v-list(two-line)
			v-list-item-group(v-model="selectedItem" color="primary")
				v-list-item(v-for="(item, i) in items" :key="item.item.id")
					v-list-item-avatar(color="blue lighten-4" size="32")
						.av {{ i + 1}}
					v-list-item-content
						v-list-item-subtitle
							.bread
								span АК "Алроса" ПАО
								span.space >
								span(v-text="calculate(item)")
								span.space >
								span(v-text="calculate1(item)")
						v-list-item-title.mytitle
							v-simple-checkbox(v-ripple color="primary" v-model="check[i]" :key="i" @input="setuser(item)")
							svg-icon(icon="user")
							TextHighlight(:queries="queries") {{ item.item.lastname}} {{ item.item.name}} {{ item.item.middle }}
		div(v-if="items.length === 0")
			.nothing
				img(src="@/assets/img/nothing.svg")
				.big Ничего не найдено
				.small Проверьте, нет ли опечаток. Попробуйте изменить запрос.
	.right
		.digit {{ items.length }}
		.mb-6 найдено
		.actions
			v-btn(outlined fab x-small color="link")
				v-icon mdi-arrow-down-bold-outline
			v-btn(outlined fab x-small color="link" @click="$emit('close')")
				v-icon mdi-arrow-up-bold-outline
</template>

<script>
import TextHighlight from 'vue-text-highlight'

export default {
	props: ['items'],
	data() {
		return {
			list: [],
			check: [],
			selectedItem: '',
		}
	},
	components: {
		TextHighlight,
	},
	computed: {
		queries () {
			return this.$store.getters.query
		}
	},
	watch: {
		selectedItem (val) {
			if (val !== undefined) {
				let user = this.items[val].item
				this.$emit('clickUser', user)
			} else return
		}
	},
	methods: {
		calculate (e) {
			let dep = e.item.dep
			switch (dep) {
			case 0: return 'Горно-обогатительные комбинаты'
			case 1: return 'Производственная инфраструктура'
			case 2: return 'Геологоразведочные подразделения'
			case 3: return 'Социальный комплекс'
			case 4: return 'Представительства и филиалы'
			case 5: return 'Сбыт алмазов'
			case 6: return 'Сбыт бриллиантов'
			case 7: return 'Дочерние организации'
			default: return ''
			}
		},
		calculate1 (e) {
			let dep = e.item.dep
			let firm = e.item.firm
			switch (dep) {
			case 0: {
				switch (firm) {
				case 0: return 'Мирнинский ГОК'
				case 1: return 'Айхальский ГОК'
				case 2: return 'Нюрнбинский ГОК'
				case 3: return 'Удачнинский ГОК'
				default: return ''
				}
			}
			case 1: {
				switch (firm) {
				case 0: return 'Авиационное предприятие МУАД'
				case 1: return 'Управление капитального строительства'
				case 2: return 'СТ "Алмазавтоматика"'
				case 3: return 'Управление материально-технического снабжения'
				case 4: return 'Институт "Якутнипроалмаз"'
				default: return ''
				}
			}
			case 2: {
				switch (firm) {
				case 0: return 'Научно-исследовательское геологическое предприятие'
				case 1: return 'Вилюйская геологоразведочная экспедиция'
				default: return ''
				}
			}
			case 3: {
				switch (firm) {
				case 0: return 'Медицинский центр'
				case 1: return 'Культурно-спортивный комплекс'
				case 2: return 'Центр подготовки кадров'
				default: return ''
				}
			}
			case 4: {
				switch (firm) {
				case 0: return 'Филиал АК «АЛРОСА» в Республике Ангола'
				case 1: return 'ALROSA Mumbai (г. Мумбай, Индия)'
				case 2: return 'Филиал во Владивостоке'
				default: return ''
				}
			}
			case 5: {
				switch (firm) {
				case 0: return 'Предприятие «Коммерал»'
				case 1: return 'Филиал «Якутское предприятие по торговле алмазами» (ЯПТА)(г. Мумбай, Индия)'
				case 2: return 'Центр сортировки алмазов'
				default: return ''
				}
			}
			case 6: {
				switch (firm) {
				case 0: return 'Филиал "Бриллианты Алроса"'
				default: return ''
				}
			}
			case 7: {
				switch (firm) {
				case 0: return 'ООО «Бриллианты АЛРОСА»'
				case 1: return 'Горнорудное общество «Катока Лтд.»'
				case 2: return 'АО «Алмазы Анабара»'
				case 3: return 'ПАО «Севералмаз»'
				case 4: return 'ПАО «АЛРОСА-Нюрба»'
				default: return ''
				}
			}

			default: return ''
			}
		},
		setuser (e) {
			let user = {}
			user.fio = e.item.fio
			user.isSelected = true
			user.icon = 'icon-user-1'
			this.$store.commit('addItemToSelection', user)
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.result {
	height: 100%;
	flex-grow: 1;
	overflow: auto;
	ul {
		list-style: none;
		li {
			padding: .5rem .3rem;
			position: relative;
			&:hover {
				background: #eee;
				.go {
					display: block;
				}
			}
			.go {
				position: absolute;
				right: 1rem;
				top: 50%;
				transform: translateY(-50%);
				display: none;
			}
		}
	}
	.bread {
		font-size: .9rem;
		span {
			color: $link;
			cursor: pointer;
			&:hover {
				text-decoration: underline;
			}
		}
		span.space {
			color: #666;
			margin: 0 .5rem;
			&:hover {
				text-decoration: none;
			}
		}
	}
}

.subbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
}
.right {
	text-align: center;
	margin: 1rem;
	.digit {
		font-size: 1.8rem;
	}
}
.user {
	display: flex;
	.name {
		margin-left: .5rem;
	}
}
.av {
	font-size: 1.2rem;
	text-align: center;
	margin: 0 auto;
	color: #fff;
}
.mytitle {
	display: flex;
	align-items: center;
	.icon {
		margin-left: 1rem;
		margin-right: .5rem;
	}
}
.actions {
	display: flex;
	gap: .2rem;
}
.nothing {
	text-align: center;
	img {
		width: 100px;
	}
	.big {
		font-size: 1.3rem;
	}
	.small {
		font-size: 0.9rem;
	}
}

</style>
