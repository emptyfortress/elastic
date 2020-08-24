<template lang="pug">
div
	.item(v-for="n in 7")
		.ic
			i.icon-doc
			.qua 5
		.attr.ml-5
			.status Задание
			.status На исполнение

		.txt
			.titul
				span Служебная 
				span.hl записка 
				span  о закупке канцелярии
			.attr
				.status Подготовка
				.status Автор: Иванов И.К.
				.status Изменено: 23.10.2020
			.finding 
				span laksjdlakjs
				span.hl laksjs
				span alskj lakjs lakjs lkaj slgk

			.file
				img(src="@/assets/img/filetype/doc.svg" width="12")
				.zg Служебная записка № 345 от 12.10.2020 о закупке канцелярии
			.file
				img(src="@/assets/img/filetype/doc.svg" width="12")
				.zg Служебная записка № 345 от 12.10.2020 о закупке канцелярии
			.more Еще

</template>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

span.hl {
	display: inline-block;
	background: $yellow;
	line-height: 110%;
}

.attr {
	display: flex;
	font-size: .8rem;
	color: #999;
	> div {
		margin-right: 2rem;
	}
	margin-bottom: .5rem;
}
.txt {
	margin: 0 1rem;
	.finding {
		margin-bottom: .5rem;
	}
	.titul {
		font-size: 1.2rem;
	}
	.file {
		display: flex;
		font-size: 0.9rem;
		img {
			display: inline-block;
			margin-right: .5rem;
		}
	}
	.zg {
		color: $link;
		&:hover {
			text-decoration: underline;
			
		}
	}
}

.item {
	width: 100%;
	background: #fff;
	margin-bottom: .5rem;
	border: 1px solid #dedede;
	border-radius: 3px;
	border-left: 5px solid $taskcolor;
	cursor: pointer;
	padding: .5rem;
	&:hover {
		border: 1px solid $link;
		border-left: 5px solid $taskcolor;
		
	}
}

.ic {
	float: right;
	position: relative;
	/* margin-left: 1rem; */
	i {
		font-size: 1.9rem;
		color: $blue-grey;
	}
	.qua {
		position: absolute;
		bottom: 5px;
		right: 5px;
		width: 15px;
		height: 15px;
		background: $blue-grey;
		text-align: center;
		color: #fff;
		line-height: 15px;
		border-radius: 15px;
		font-size: 13px;
	}
}
.more {
	font-size: 0.8rem;
	color: $link;
	margin-left: 1.5rem;
	&:hover {
		text-decoration: underline;
	}
}
</style>
