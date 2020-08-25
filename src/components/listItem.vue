<template lang="pug">
div
	.item.task
		.attr.first
			.status Задание
			.status На исполнение
			v-spacer
			.status В работе
		.txt
			.titul
				span Служебная 
				span.hl записка 
				span  о закупке канцелярии
			.attr
				.status Автор: Иванов И.К.
				.status Изменено: 23.10.2020
				.status
			.finding 
				span laksjdlakjs
				span.hl laksjs
				span alskj lakjs lakjs lkaj slgk

			.ic
				i.icon-doc
				.qua 5
			.file
				img(src="@/assets/img/filetype/doc.svg" width="12")
				.zg Служебная записка № 345 от 12.10.2020 о закупке канцелярии
			.more Еще

	.item.doc
		.attr.first
			.status Документ
			.status Заявка
			v-spacer
			.status На согласовании
		.txt
			.titul
				span Служебная 
				span.hl записка 
				span  о закупке канцелярии
			.attr
				.status Автор: Иванов И.К.
				.status Изменено: 23.10.2020
				.status
			.finding 
				span laksjdlakjs
				span.hl laksjs
				span alskj lakjs lakjs lkaj slgk

			.ic
				i.icon-doc
				.qua 5
			.file
				img(src="@/assets/img/filetype/doc.svg" width="12")
				.zg Служебная записка № 345 от 12.10.2020 о закупке канцелярии
			.more Еще

	.item.file
		.attr.first
			.status Файл
			.status Основной
			.status
		.txt
			.fille
				img(src="@/assets/img/filetype/doc.svg" height="64")
				.zg
					span Служебная 
					span.hl записка 
					span  о закупке канцелярии
				.attr
					.status Автор: Иванов И.К.
					.status Изменено: 23.10.2020
					v-spacer
					.status 28kB
				.finding 
					span laksjdlakjs
					span.hl laksjs
					span alskj lakjs lakjs lkaj slgk
		.card Родительская карточка:
			a(href="").ml-5 Задание на ознакомление

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
	&.first {
		margin-left: 17px;
	}
	> :first-child {
		margin-right: 2rem;
	}
	> :last-child {
		margin-right: .5rem;
		text-transform: uppercase;
		letter-spacing: 2px;
		font-size: 0.7rem;
	}
	margin-bottom: .5rem;
}
.titul {
	font-size: 1.2rem;
}
.titul .zg {
	font-size: 1.0rem;
	color: $link;
}
.txt {
	margin-left: 1rem;
	.file {
		display: flex;
		align-items: flex-start;
		margin-top: 1.0rem;
		img {
			display: inline-block;
			margin-right: .5rem;
		}
	}
	.zg {
		color: $link;
		font-size: 0.9rem;
		line-height: 110%;
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
	cursor: pointer;
	padding: .5rem;
	&.task {
		border-left: 5px solid $taskcolor;
		&:hover {
			border: 1px solid $link;
			border-left: 5px solid $taskcolor;
		}
	}
	&.doc {
		border-left: 5px solid $docolor;
		&:hover {
			border: 1px solid $link;
			border-left: 5px solid $docolor;
		}
	}
	&.file {
		border-left: 5px solid $dark;
		&:hover {
			border: 1px solid $link;
			border-left: 5px solid $dark;
		}
	}
}

.ic {
	float: right;
	position: relative;
	margin-left: 1rem;
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
.fille {
	display: grid;
	grid-template-columns: 60px auto;
	img {
		grid-column: 1/2;
		grid-row: span 3
	}
}
.card {
	font-size: 0.9rem;
	margin-top: 1rem;
	margin-left: 17px;
}
</style>
