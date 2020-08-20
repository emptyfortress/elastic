<template lang="pug">
.pa-6
	h2 searchresults {{ query }}
</template>

<script>

export default {
	data () {
		return {
			query: this.$route.params.query
			
		}
	}
}

</script>
