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
			br
			li Выбор места поиска - не работает
			li Предварительный выбор типа документа и тп - не работает
			li Фильтрация - работает частично. Нужно продумать список фильтров.
			br
			li Постраничный просмотр отсутствует. Показываем 50 результатов с ленивой подгрузкой.
			br
			li Мобильная версия - работает частично. Нужно время на доработку.
	.inf
		h4 Как должно работать?
		br
		ul
			li По умолчанию поисковая строка разбирается на атрибуты (если они там есть) и запускается атрибутивный поиск
			li В результатах включаются соответствующие фильтры
			li Учитывается морфология - <span>[договора, договоры]</span>, но <span>[договорные]</span>
			br
			li Перейти на страницу поиска по атрибутам - ввести <span>!!</span>

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
