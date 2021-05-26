<template lang="pug">
.help
	h3 Помощь по работе с гридом
	.grid
		Gif(:tema='id')

		ul.side
			li(
				@click='handle(item)',
				v-for='item in list',
				:key='item.id',
				:class='{ selected: item.id === id }'
			) {{ item.name }}
</template>

<script>
import Gif from '@/components/Gif.vue'

export default {
	components: { Gif },
	data() {
		return {
			list: [
				{ id: 0, name: 'Общие сведения' },
				{ id: 1, name: 'Тулбар' },
				{ id: 2, name: 'Левая панель' },
				{ id: 3, name: 'Список | таблица' },
				{ id: 4, name: 'Настройка колонок' },
				{ id: 5, name: 'Сортировка' },
				{ id: 6, name: 'Фильтрация' },
				{ id: 7, name: 'Группировка' },
				{ id: 8, name: 'Агрегаты' },
				{ id: 9, name: 'Групповые операции' },
				{ id: 10, name: 'Экспорт' },
			],
		}
	},
	computed: {
		id() {
			return parseInt(this.$route.params.id)
		},
	},
	methods: {
		handle(e) {
			this.$router.push(`/help/${e.id}`)
			this.sel = e
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.help {
	margin-top: 3rem;
}
h3 {
	font-size: 1.3rem;
	font-weight: 400;
	text-align: center;
}
.grid {
	margin: 2rem 5rem;
	display: grid;
	grid-template-columns: auto 250px;
	gap: 1rem;
}
.side {
	list-style: none;
	li {
		color: $link;
		cursor: pointer;
		padding: 0.2rem 1rem;
		&.selected {
			background: #d0e4f5;
			&:hover {
				background: #d0e4f5;
			}
		}
		&:hover {
			background: #e7e7e7;
		}
	}
}
</style>
