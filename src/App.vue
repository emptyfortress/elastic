<template lang="pug">
v-app
	SvgSprite
	Drawer(:maincolor="maincolor")
	v-app-bar(app :color="maincolor" flat collapse-on-scroll clipped-left :class="calcWidth()" elevation="2" ).pr-2
		v-app-bar-nav-icon(color="#fff" @click="$store.commit('toggleDrawer')")
		.logo(v-show="logo && !$vuetify.breakpoint.mobile")
			v-btn(icon v-if="$route.name === 'results'" dark large @click="$router.push('/')")
				v-icon mdi-arrow-left-circle-outline
			span(v-if="$route.name === 'results'") Поиск
			span(v-else) Docsvision
		v-spacer
		searchComponent(:active="active")
		v-btn( href="" icon  v-show="offsetTop" @click="toggleSearch").mr-3
			v-icon(color="#fff") mdi-magnify
		v-avatar(color="blue lighten-4" size="35" v-show="offsetTop" v-ripple @click="pri")
			img(src="@/assets/img/user0.svg")
	v-main(v-scroll="handleScroll")
		v-container().cont
			transition(name="slide-fade" mode="out-in")
				div
					Hint(:searchMode="searchMode")
					v-slide-x-transition(mode="out-in")
						router-view
</template>

<script>
import Drawer from './components/Drawer'
import searchComponent from '@/components/searchComponent'
import Hint from '@/components/Hint'
import SvgSprite from '@/components/SvgSprite.vue'

export default {
	name: 'App',
	components: {
		Drawer,
		searchComponent,
		Hint,
		SvgSprite,
	},
	data () {
		return {
			offsetTop: true,
			scroll: false,
			logo: true,
			doc: true,
			task: true,
			sotr: false,
			scope: [  'Везде', 'В текущей папке', 'В моих папках' ],
			active: false,
		}
	},
	computed: {
		drawer() { return this.$store.getters.drawer },
		mini() { return this.$store.getters.mini },
		searchMode() { return this.$store.getters.searchMode },
		maincolor() {
			let name = this.$route.name
			switch (name) {
			case 'results':
				return 'purple'
			case 'advanced':
				return 'purple'
			case 'doc':
				return 'docolor'
			case 'task':
				return 'taskcolor'
			case 'folder':
				return 'dark'
			case 'Home':
				return 'dark'
			default: return 'dark'
			}
		}
	},
	watch: {
		sotr: function() {
			let that = this
			if (this.sotr) {
				that.doc = false
				that.task = false
			} else { that.doc = true }
		}
	},
	methods: {
		pri () {
			console.log(this.$route.name)
		},
		calcWidth() {
			const po = window.pageYOffset
			if (this.drawer && !this.mini && po > 0) {
				return 'drawer'
			} if (this.drawer && this.mini && po > 0) {
				return 'mid'
			} return 'sm'
		},
		toggleSearch() {
			this.$store.commit('toggleSearchMode')
			this.active = !this.active
		},
		handleScroll() {
			if (window.pageYOffset > 300) {
				this.scroll = true
			} else if (window.pageYOffset > 0 && this.mini) {
				this.offsetTop = false
				this.logo = false
			} else if (window.pageYOffset > 0) {
				this.offsetTop = false
				this.logo = true
			} else {
				this.offsetTop = true
				this.scroll = false
				this.logo = true
			}
		},

	}
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.rel {
	position: relative;
}
.v-main {
	background: #efefef;
}
.cont {
	padding: 0 1rem;
	transition: .2s all ease;
	/* margin-top: -32px; */
}

.logo {
	color: #fff;
	font-size: 1.4rem;
	width: 250px;
}

.v-toolbar.v-toolbar--collapsed {
	max-width: 260px;
	&.sm {
		max-width: 48px;
	}
	&.mid {
		max-width: 82px;
	}
}
.icon-user, .icon-search, .icon-search-scan {
	font-size: 1.2rem;
	margin-left: -4px;
}
.leftmargin {
	margin-left: 40px;
	div {
		margin-right: 40px;
	}
}
.v-sheet.v-card:not(.v-sheet--outlined) {
	box-shadow: none;
	background: transparent;
	height: 39px;
}


</style>
