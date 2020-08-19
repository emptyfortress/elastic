<template lang="pug">
.home
	.zag Это дашборд или папка
	.inf 
		ul
			li Поиск запускается в любой момент по иконке или с клавиатуры по клавише "/". 
			li Сразу после этого можно печатать - autofocus
			li Попробуйте набрать: договор, алроса, цели, газпром, отпуск, задание, 123
			li esc - убрать подсказку
			li Поддержка клавиатуры при перемещении по истории поиска - клавиши "вверх-вниз"
			li Enter - запускает поиск

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
.inf {
	width: 750px;
	background: #fff;
	margin-top: 3rem;
	border: 1px solid #ddd;
	border-radius: 4px;
	padding: 1rem;
}
</style>
