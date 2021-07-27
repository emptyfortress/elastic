<template lang="pug">
.item(:class="itemClass")
	.txt(v-if="item.item.type !== 'file'")
		.titul(@click="$emit('more1')")
			v-simple-checkbox(v-model="item.item.selected" color="primary" :disabled="item.item.inactive").check.mr-2
			TextHighlight(:queries="queries") {{ item.item.title }}
		.attr
			TextHighlight(:queries="queries").status Автор: {{ item.item.author }}
			TextHighlight(:queries="queries").status Изменено: {{ item.item.changed }}
			.status

		.files(v-if="item.item.file" v-for="n in 2")
			img(src="@/assets/img/filetype/doc.svg" width="26")
			.expand
				div( @click.stop="$emit('preview')" )
					TextHighlight(:queries="queries").zg {{ item.item.file }}
				.plotno
					TextHighlight(:queries="queries").smtxt {{ item.item.digest }}
					.smtxt.mylink.ml-3(@click="$emit('more')") Больше...
			div
				v-tooltip(bottom)
					template( v-slot:activator="{ on, attrs }" )
						v-btn(icon small v-bind="attr" v-on="on")
							v-icon(small) mdi-cloud-download-outline
					span Загрузить
				v-tooltip(bottom)
					template( v-slot:activator="{ on, attrs }" )
						v-btn(icon small v-bind="attr" v-on="on")
							v-icon(small) mdi-open-in-new
					span Открыть

		.files(v-if="item.item.more " v-for="n in 3")
			img(src="@/assets/img/filetype/doc.svg" width="26")
			.expand
				div(@click.stop="$emit('preview')" )
					TextHighlight(:queries="queries").zg {{ item.item.file }}
				.plotno
					TextHighlight(:queries="queries").smtxt {{ item.item.digest }}
			div
				v-btn(icon small)
					v-icon(small) mdi-cloud-download-outline
				v-btn(icon small)
					v-icon(small) mdi-open-in-new
		.more(v-if="!item.item.more" @click="item.item.more = !item.item.more") Еще файлы...
		.more(v-if="item.item.more" @click="item.item.more = !item.item.more") Меньше...

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
	props: ['item', 'zapros'],
	data() {
		return {}
	},
	computed: {
		itemClass() {
			let base = this.item.item.type
			if (this.item.item.inactive) {
				return 'inactive' + ' ' + base
			} else if (this.item.item.selected) {
				return 'selected' + ' ' + base
			} else return base
		},
		queries() {
			return this.zapros.split(' ')
		},
	},
	components: {
		TextHighlight,
	},
	methods: {
		// ttt () {
		// 	console.log(this.queries)
		// }
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.item {
	width: 100%;
	background: #fff;
	margin-bottom: 0.5rem;
	border: 1px solid #dedede;
	border-radius: 3px;
	cursor: pointer;
	padding: 0.5rem;
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
	&.selected {
		background: #e0f1ff;
	}
	&.inactive {
		color: #ccc;
		border-left: 5px solid #ccc;
		.zg,
		.smtxt {
			color: #ccc !important;
		}
		&:hover {
			border-color: #ccc;
			cursor: not-allowed;
		}
	}
}
.attr {
	display: flex;
	flex-direction: column;
	font-size: 0.8rem;
	color: #999;
	&.first {
		margin-left: 17px;
	}
	> :first-child {
		margin-right: 2rem;
	}
	> :last-child {
		margin-right: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 2px;
		font-size: 0.7rem;
	}
	margin-bottom: 0.5rem;
}
.txt {
	margin-left: 1rem;
	.files {
		display: flex;
		align-items: flex-center;
		margin-top: 1rem;
		.expand {
			flex-grow: 1;
		}
		img {
			display: inline-block;
			margin-right: 0.8rem;
		}
	}
	.zg {
		color: $link;
		font-size: 0.9rem;
		&:hover {
			text-decoration: underline;
		}
	}
	.smtxt {
		font-size: 0.85rem;
		/* color: #666; */
		line-height: 1;
		display: inline;
	}
	.plotno {
		margin-top: -4px;
	}
}
.titul {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 1.2rem;
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
	margin-top: 1rem;
	&:hover {
		text-decoration: underline;
	}
}
.fille {
	display: grid;
	grid-template-columns: 70px auto;
	img {
		grid-column: 1/2;
		grid-row: span 3;
	}
}
.card {
	font-size: 0.9rem;
	margin-top: 1rem;
	margin-left: 17px;
}
.mylink {
	color: $link;
	display: inline-block;
	&:hover {
		text-decoration: underline;
	}
}
.mor {
	display: inline;
}
.butt {
}
</style>
