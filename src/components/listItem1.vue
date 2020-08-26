<template lang="pug">
.item(:class="item.item.type")
	.attr.first
		.status {{ item.item.typ }}
		.status {{ item.item.vid }}
		v-spacer
		.status {{ item.item.status }}
	.txt(v-if="item.item.type !== 'file'")
		TextHighlight(:queries="queries").titul {{ item.item.title }}
		.attr
			TextHighlight(:queries="queries").status Автор: {{ item.item.author }}
			TextHighlight(:queries="queries").status Изменено: {{ item.item.changed }}
			.status
		TextHighlight(:queries="queries") {{ item.item.digest }}

		.ic(v-if="item.item.file")
			i.icon-doc
			.qua {{ item.item.num }}
		.files(v-if="item.item.file" @click="$emit('preview')")
			img(src="@/assets/img/filetype/doc.svg" width="12")
			TextHighlight(:queries="queries").zg {{ item.item.file }}
		.more(v-if="item.item.file") Еще...
	.txt(v-else)
		.fille
			img(src="@/assets/img/filetype/doc.svg" height="64")
			TextHighlight(:queries="queries").zg {{ item.item.file }}
			.attr
				TextHighlight(:queries="queries").status Автор: {{ item.item.author }}
				TextHighlight(:queries="queries").status Изменено: {{ item.item.changed }}
				v-spacer
				.status 28kB
			TextHighlight(:queries="queries").finding {{ item.item.digest }}
	.card(v-if="item.item.type === 'file'") Родительская карточка:
		TextHighlight(:queries="queries").ml-5.mylink {{ item.item.title }}

</template>

<script>
import TextHighlight from 'vue-text-highlight'

export default {
	props: ['item', 'zapros' ],
	data () {
		return {
		}
	},
	computed: {
		queries () {
			return this.zapros.split(' ')
		}
	},
	components: {
		TextHighlight,
	},
	methods: {
		// ttt () {
		// 	console.log(this.queries)
		// }
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';


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
.txt {
	margin-left: 1rem;
	.files {
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
.titul {
	font-size: 1.2rem;
}
.hl {
	display: inline-block;
	background: $yellow;
	line-height: 110%;
}
.titul .zg {
	font-size: 1.0rem;
	color: $link;
}
.ic {
	float: right;
	position: relative;
	margin-left: 1rem;
	margin-top: 2.3rem;
	i {
		font-size: 1.5rem;
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
	&:hover {
		text-decoration: underline;
	}
}
.fille {
	display: grid;
	grid-template-columns: 70px auto;
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
.mylink {
	color: $link;
	&:hover {
		text-decoration: underline;
	}
}
</style>
