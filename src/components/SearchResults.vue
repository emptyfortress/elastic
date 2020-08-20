<template lang="pug">
.all
	h2 searchresults {{ $route.params.id }}
</template>

<script>

export default {
	data () {
		return {
			// query: this.$route.params.id
			
		}
	},
	// computed: {
	// 	query () {
	// 		return this.$route.params.query
	// 	}
	// }
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.all {
	margin-top: 4rem;
}
</style>
