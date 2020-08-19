<template lang="pug">
.home
	.zag Это дашборд или папка

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

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.home {
	margin-top: 6rem;
}
.zag {
	font-size: 1.8rem;
	color: #666;
}
</style>
