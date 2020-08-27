<template lang="pug">
.preview
	div
		i.icon-hourglass
		p превью
	.inf
		.type {{ item.item.typ }}
		.type {{ item.item.vid }}
		.type.pod {{ item.item.status }}
		.main {{ item.item.title }}
		.type Автор: {{ item.item.author }}
		.type {{ item.item.changed }}

</template>

<script>

export default {
	props: ['item'],
	data () {
		return {
			
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.preview {
	width: 200px;
	height: 260px;
	background: #fff;
	margin: auto;
	border-radius: 4px;
	border: 1px solid #dedede;
	cursor: pointer;
	display: flex;
	justify-content: center;
	color: #ccc;
	align-items: center;
	text-align: center;
	position: relative;
	i {
		font-size: 1.3rem;
	}
	&:hover {
		border-color: $link;
		.inf {
			display: block;
		}
	}
	.inf {
		text-align: left;
		position: absolute;
		width: 100%;
		height: 100%;
		background: #ffffffaa;
		display: none;
		padding: .5rem;
		color: #666;
		font-size: 0.8rem;
	}
}
.main {
	font-size: 1.0rem;
	color: black;
	line-height: 110%;
	margin-top: 1rem;
	margin-bottom: 1rem;
	color: $link;
	&:hover {
		text-decoration: underline;
	}
}
.pod {
	margin-top: 1rem;
	text-transform: uppercase;
}

</style>
