<template lang="pug">
table.full
	thead
		tr.toolbar
			th.sm
				v-simple-checkbox(:value="all" @input="setAll" :indeterminate="indeterminate" v-ripple).check
			th(v-for="column in columns"
				:class="{'sorting' : sortByIndex === column.id}")
				v-icon(v-if="sortByIndex === column.id" :class="{'sortup' : up}").sort mdi-arrow-down
				span {{ column.name }}
				v-icon(v-show="column.filter || column.addF" :class="adding").sort.ml-2 mdi-filter
				.over
					v-tooltip(top)
						template(v-slot:activator="{ on, attrs }")
							v-btn(icon small @click="sort(column.id)" v-bind="attrs" v-on="on")
								v-icon(:class="{'sortup' : up}") mdi-arrow-down
						span Сортировка

					v-tooltip(top)
						template(v-slot:activator="{ on, attrs }")
							v-btn(icon small @click="filterByIndex = column.id" v-bind="attrs" v-on="on")
								v-icon mdi-filter-outline
						span Фильтр

					v-tooltip(top)
						template(v-slot:activator="{ on, attrs }")
							v-btn(icon small @click="filterByIndex = null" v-bind="attrs" v-on="on")
								v-icon mdi-eye-off
						span Скрыть

				//- v-slide-y-transition
				//- 	v-card.quick.elevation-3(v-show="filterByIndex === column.id")
				//- 		v-text-field(clearable :key="column.id").mx-3
				//- 		v-card-actions
				//- 			v-btn(icon small color="primary" @click="removeFilter(column.id)")
				//- 				v-icon mdi-trash-can-outline
				//- 			v-btn(icon small color="primary" @click="addFilter(column.id)")
				//- 				v-icon mdi-plus-circle-outline
				//- 			v-spacer
				//- 			v-btn(text small color="primary" @click="setFilter(column.id)") Применить
	tbody(is="transition-group" name="list")
		tr( v-for="(item, i) in items" :key="item.item.id"  @contextmenu.prevent="$refs.ctxMenu.open").ro
			td(v-ripple).sm
				v-simple-checkbox(v-model="item.item.selected" color="primary").check
			td() {{ item.item.typ }}
			td()
				v-icon(small color="#dedede").star mdi-star-outline
				span {{ item.item.title }}
			td() {{ item.item.author }}
			td() {{ item.item.status }}

</template>

<script>
export default {
	data() {
		return {
			columns: [
				{ id: 0, name: 'Тип', filter: false, addF: false },
				{ id: 1, name: 'Название', filter: false, addF: false },
				{ id: 2, name: 'Автор', filter: false, addF: false },
				{ id: 3, name: 'Статус', filter: false, addF: false },
			],
			all: false,
			showByIndex: null,
			showByRow: null,
			showByFio: null,
			filterByIndex: null,
			addMode: false,
			sortByIndex: null,
			up: false,
		}
	},
	computed: {
		adding() {
			if (this.addMode) {
				return 'adding'
			} else return 'add'
		},
		items() {
			return this.$store.getters.searchItemsResults
		},
		indeterminate() {
			let sel = this.items.reduce((total, item) => {
				if (item.selected === true) {
					return total + 1
				} else return total
			}, 0)
			if (sel > 0 && !this.all) {
				return true
			} else return false
		},
	},
	methods: {
		setAll() {
			if (this.all) {
				this.items.map((item) => {
					item.selected = false
				})
				this.all = false
			} else {
				this.items.map((item) => {
					item.selected = true
				})
				this.all = true
			}
		},
	},
}
</script>

<style scoped lang="scss">
.full {
	width: 100%;
	background: #fff;
	transition: all 0.3s ease;
	margin-bottom: 100px;

	tr {
		background: #fff;
		&.toolbar th {
			top: 45px;
		}
	}
	th {
		cursor: pointer;
		background: #dadada;
		height: 2.5rem;
		position: sticky;
		z-index: 200;
		top: 0;
		font-weight: 400;
		font-size: 0.75rem;
		color: #555;
		text-align: left;
		padding: 0 1rem;
		&.sorting {
			font-weight: 600;
			color: #000;
		}
		&:hover {
			.over {
				display: block;
			}
		}
	}
	.ro {
		height: 3rem;
		position: relative;
		cursor: pointer;
		&:hover {
			background: #eee;
		}
		td {
			border-bottom: 1px solid #eee;
			padding: 6px 1rem;
			/* position: relative; */
		}
	}
}
.sm {
	text-align: center;
	width: 50px;
}
.over {
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	text-align: right;
	padding-right: 0.5rem;
	background: rgba(255, 255, 255, 0.6);
	line-height: 41px;
	i {
		color: #999;
		transition: 0.2s ease all;
		&:hover {
			color: black;
		}
	}
}
/* animation  */
.list-enter-active,
.list-leave-active {
	transition: all 0.3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
	opacity: 0;
	transform: translateX(-60px);
}
@keyframes pulse-blue {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(52, 172, 224, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);
	}
}
.adding {
	color: #0088ff;
	animation: pulse-blue 2s infinite;
}
.add {
	color: #b00;
}
.star {
	margin-right: 7px;
}
</style>
