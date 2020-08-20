<template lang="pug">
.all
	v-skeleton-loader(v-if="loading" type="card-avatar, article, actions")
	template(v-else)
		.zero lsdkj
		.one 
			p ljljl
		.one
			p(v-for="n in 100") laskdj
	//- .zag searchresults {{ $route.params.id }}

</template>

<script>

export default {
	data () {
		return {
			// query: this.$route.params.id
			
		}
	},
	computed: {
		loading () {
			return this.$store.getters.loading
		}
	}
}

</script>

<style scoped lang="scss">
/* @import '@/assets/css/colors.scss'; */

.all {
	margin-top: 4rem;
	display: grid;
	grid-template-columns: 300px auto;
	grid-gap: 1rem;
}
.one {
	height: 100%;
	background: #ccc;
}
.zero {
	grid-column: 1/3;
	background: red;
	
}

</style>
