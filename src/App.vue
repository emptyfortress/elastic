<template lang="pug">
v-app 
	v-app-bar( app color="primary" dark )
		p test

	HelloWorld
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
	name: 'App', 
	components: { 
		HelloWorld,
	}, 
	data () {
		return {
			
		}
	}
}
</script>

