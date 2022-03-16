<template lang="pug">
.help
	.flex
		v-tooltip(top, open-delay='500')
			template(v-slot:activator='{ on }')
				v-btn(icon, x-large, v-on='on', @click='back')
					v-icon(big) mdi-arrow-left-circle-outline
			span Вернуться
		h3 Быстрая помощь по работе с гридом
	.txt Посмотрите короткий ролик о работе с гридом, либо выберите интересующий вас раздел в меню:
	.grid
		ul.side
			li(
				@click='handle(item.id)',
				v-for='item in list',
				:key='item.id',
				:class='{ selected: item.id === id }'
			) {{ item.name }}
		Artplayer(@get-instance="getInstance" :option="option" :style="style")
</template>

<script>
import Artplayer from 'artplayer/examples/vue/Artplayer'

export default {
	components: {
		Artplayer,
	},
	data() {
		return {
			ins: null,
			hide: false,
			list: [
				{ id: 0, name: '0:00 - Общие сведения' },
				{ id: 1, name: '0:05 - Тулбар' },
				{ id: 2, name: '0:10 - Левая панель' },
				{ id: 3, name: '0:15 - Список | таблица' },
				{ id: 4, name: '0:20 - Настройка колонок' },
				{ id: 5, name: '0:25 - Сортировка' },
				{ id: 6, name: '0:30 - Фильтрация' },
				{ id: 7, name: '0:35 - Группировка' },
				{ id: 8, name: '0:40 - Агрегаты' },
				{ id: 9, name: '0:45 - Групповые операции' },
				{ id: 10, name: '0:50 - Экспорт' },
			],
			option: {
				url: 'Guide.mp4',
				// poster: 'poster.jpg',
				volume: 0.5,
				muted: false,
				autoplay: false,
				pip: true,
				autoSize: true,
				screenshot: true,
				setting: true,
				loop: true,
				playbackRate: true,
				aspectRatio: true,
				fullscreen: true,
				fullscreenWeb: true,
				mutex: true,
				contextmenu: [
					{
						html: 'Custom menu',
						click: function(contextmenu) {
							console.info('You clicked on the custom menu')
							contextmenu.show = false
						},
					},
				],
				highlight: [
					{ time: 15, text: 'Тулбар' },
					{ time: 30, text: 'Левая панель' },
					{ time: 45, text: 'Список - таблица' },
					{ time: 60, text: 'Настройка колонок' },
				],
				subtitle: {
					url: 'srt.srt',
					style: {
						color: '#fff',
						background: '#0000008f',
						'font-size': '30px',
					},
				},
			},
			style: {
				width: '100%',
				height: '600px',
				margin: '0 auto',
			},
		}
	},
	computed: {
		id() {
			return parseInt(this.$route.params.id)
		},
	},
	methods: {
		getInstance(art) {
			this.ins = art
		},
		handle(e) {
			if (this.ins.playing) {
				this.ins.pause()
			}
			this.ins.seek = e * 5
			this.ins.play()
		},
		back() {
			this.$router.push({ name: 'results', params: { id: 'sit' } })
		},
	},
	watch: {
		hide: function() {
			this.$store.commit('hideBt')
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.help {
	/* background: #ccc; */
	padding-top: 3rem;
}
h3 {
	font-size: 1.3rem;
	font-weight: 400;
	text-align: center;
	margin: 0 2rem;
	position: relative;
	.back {
		position: absolute;
		left: 0;
		top: -8px;
		span {
			margin-left: 5px;
		}
	}
}
.grid {
	margin: 2rem 0;
	display: grid;
	grid-template-columns: 270px auto;
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
.flex {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	border-bottom: 1px solid #ccc;
}
.txt {
	margin-top: 1rem;
	margin-left: 0.5rem;
}
</style>
