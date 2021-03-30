<template lang="pug">
.home
	.inf
		ul
			li Это версия поиска со скроллами в агрегатах
			li См блок Вид задания

</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
	components: {
		HelloWorld
	}
}

</script>

<style scoped lang="scss">

.home {
	display: flex;
	height: 75vh;
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;
}
.inf {
	width: 750px;
	background: #fff;
	margin-top: 3rem;
	border: 1px solid #ddd;
	border-radius: 4px;
	padding: 1rem;
}
li span {
	color: red;
}
</style>
