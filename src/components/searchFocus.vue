<template lang="pug">
div
</template>

<script>
export default {
	mounted () {
		this.handler = event => {
			this.$emit('keyup', event)
		}
		window.addEventListener('keyup', this.handler)
	},
	beforeDestroy () {
		window.removeEventListener('keyup', this.handler)
	}
}
</script>

<style scoped lang="scss">
div {
	display: none;
}
</style>
