<template lang="pug">
v-navigation-drawer(v-model="drawer" dark color="docolor" clipped app :mini-variant.sync="mini" )
	v-list
		v-list-item(link @click="goTo(item.url)" v-for="item in menu" :key="item.text"
			:class="path === item.url ? 'active' : ''")
			v-list-item-icon
				v-icon {{ item.icon }}
			v-list-item-content
				v-list-item-title {{ item.text }}

	v-btn.mini(@click="toggleMini" icon)
		v-icon mdi-backburger
</template>

<script>

export default {
	data() {
		return {
			size: {
				width: 50,
				height: 24,
			},
			menu: [
				{ url: '/', icon: 'mdi-home-roof', text: 'Главная' },
				{ url: '', icon: 'mdi-folder-outline', text: 'Папка' },
				{ url: '', icon: 'mdi-folder-outline', text: 'Папка' },
				{ url: '', icon: 'mdi-folder-outline', text: 'Папка' },
				{ url: '', icon: 'mdi-folder-outline', text: 'Папка' },
				{ url: '', icon: 'mdi-folder-outline', text: 'Папка' },
				{ url: '', icon: 'mdi-folder-outline', text: 'Папка' },
			],
		}
	},
	methods: {
		goTo(e) {
			this.$router.push(e)
			this.$store.commit('setSearchMode', false)
		},
		toggleMini() {
			if (this.mini === true) {
				this.$store.commit('setMini', false)
			} else this.$store.commit('setMini', true)
		},
	},
	computed: {
		path() {
			return this.$route.path
		},
		drawer: {
			get() {
				return this.$store.getters.drawer
			},
			set() {},
		},
		mini: {
			get() {
				return this.$store.getters.mini
			},
			set () {},
		},
	},
	components: {
	},
}

</script>

<style scoped lang="scss">
.theme--dark.v-list {
	background: transparent;

}
.mini {
	position: absolute;
	bottom: 1rem;
	left: .5rem;
	cursor: pointer;
}
.min {
	font-size: .9rem;
}
.ic {
	font-size: 1.3rem;
}
.v-application--is-ltr .v-list-item__icon:first-child {
	margin-right: 1rem;
}
.v-navigation-drawer--mini-variant .v-list-item > *:first-child {
	margin-left: 0;
	margin-right: 0;
}
.theme--light .active {
	background: rgba(0,0,0,.1);
	color: black;
}
.theme--dark .active {
	background: rgba(255,255,255,.07);
}
</style>
