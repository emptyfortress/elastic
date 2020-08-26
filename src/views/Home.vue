<template lang="pug">
.home
	.inf 
		ul
			li Поиск запускается в любой момент по иконке или с клавиатуры по клавише "/". 
			li Сразу после этого можно печатать - autofocus
			li Попробуйте набрать: <span>договор, алроса, орлов петров, цели, газпром, отпуск, 123, sit</span>
			li esc - убрать подсказку
			li Поддержка клавиатуры при перемещении по истории поиска - клавиши "вверх-вниз"
			li Enter - запускает поиск
			li Выбор места поиска - не работает
			li Предварительный выбор типа документа и тп - не работает
			li Фильтрация - работает частично

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
	display: flex;
	height: 75vh;
	justify-content: center;
	align-items: center;
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
