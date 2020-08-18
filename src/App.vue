<template lang="pug">
v-app 
	Drawer
	v-app-bar(app color="docolor" flat collapse-on-scroll clipped-left :class="calcWidth()" dark elevation="2").pr-2
		v-app-bar-nav-icon
		.logo Docsvision
	v-content
		v-container.rel
			transition(name="slide-fade" mode="out-in")
				div
					v-slide-x-transition(mode="out-in")
						router-view
</template>

<script>
import Drawer from './components/Drawer'

export default {
	name: 'App', 
	components: { 
		Drawer
	}, 
	data () {
		return {
			
		}
	},
	methods: {
		calcWidth() {
			const po = window.pageYOffset
			if (this.drawer && !this.mini && po > 0) {
				return 'drawer'
			} if (this.drawer && this.mini && po > 0) {
				return 'mid'
			} return 'sm'
		},
		
	}
}
</script>

<style scoped lang="scss">
.rel {
		/* background: #ccc; */
}
.v-content {
		background: #efefef;
}

.logo {
		color: #fff;
		font-size: 1.4rem;
}


</style>
