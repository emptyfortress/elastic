<template lang="pug">
div( class="home" )
	HelloWorld
	p(v-for="n in 50") lorem ipsum

</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
	data () {
		return {
			
		}
	},
	components: {
		HelloWorld
	}
}

</script>
