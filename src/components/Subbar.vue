<template lang="pug">
.subbar
	.left
		.digit 23
		.res результата
	.result
		ul
			li(v-for="n in 23")
				.bread
					span Интер РАО ЕЭС
					span.space >
					span Электрогенерация
					span.space >
					span Гусиноозерская ГРЭС
					span.space >
					span Дирекция
					span.space >
					span Отдел кадров
				.user
					i.icon-user-1
					span Шпаков Аркадий Ильич
				v-btn(icon).go
					v-icon mdi-bullseye-arrow
	.right
		v-btn(depressed block) Очистить
		v-btn(depressed color="primary" block @click="$emit('close')") Закрыть
</template>

<script>

export default {
	data() {
		return {
			list: []
		}
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.result {
	height: 100%;
	flex-grow: 1;
	overflow: auto;
	ul {
		list-style: none;
		li {
			padding: .5rem .3rem;
			position: relative;
			&:hover {
				background: #eee;
				.go {
					display: block;
				}
			}
			.go {
				position: absolute;
				right: 1rem;
				top: 50%;
				transform: translateY(-50%);
				display: none;
			}
		}
	}
	.bread {
		font-size: .9rem;
		span {
			color: $link;
			cursor: pointer;
			&:hover {
				text-decoration: underline;
			}
		}
		span.space {
			color: #666;
			margin: 0 .5rem;
			&:hover {
				text-decoration: none;
			}
		}
	}
	
}

.subbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	height: 100%;
	div {
	}
}
.left {
	text-align: center;
	/* padding: .3rem; */
	margin-left: 1rem;
	.digit {
		font-size: 1.8rem;
	}
}
.right {
	width: 130px;
	/* padding: .4rem; */
	margin-right: 1rem;
	.v-btn {
		display: block;
		margin-bottom: .3rem;
	}
}


</style>
