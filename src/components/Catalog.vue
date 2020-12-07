<template lang="pug">
.all
	.top
	.bottom
		drag-zone.zone
			drag-content.content.c1
				.item item 1
			drag-handle.hand
				div
			drag-content.content.c1
				.item item 1
</template>

<script>
import { dragZone, dragHandle, dragContent } from 'vue-drag-zone'

export default {
	data() {
		return {
		}
	},
	components: {
		dragZone,
		dragHandle,
		dragContent
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.top {
	height: 300px;
	background: pink;
}
.bottom {
	margin-top: 2rem;
}
.zone {
	width: 100%;
	/* height: 100%; */
	margin: 0 auto;
	position: relative;
	display: flex;
	height: 300px;
	background: #ccc;
	.hand {
		width: 20px;
		div {
			width:10px;
			height: 100%;
			transform: translateX(5px);
		}
		&:hover {
			div { border-left: 3px dotted #333; }
		}
	}
}
/* .zone { */
/* 	width: 100%; */
/* 	height: 180px; */
/* 	line-height: 180px; */
/* 	margin: 0 auto; */
/* 	position: relative; */
/* 	clear: both; */
/* 	text-align: center; */
/* 	color: white; */
/* 	background: #eee; */
/* 	display: flex; */
/* 	justify-content: space-between; */
/* 	background: #ccc; */
/* } */
/* .zone .handle { */
/* 	width: 10px; */
/* 	height: 180px; */
/* 	background: #2196f3; */
/* } */
.zone .content {
	width: calc((100% - 30px) / 4);
	height: 180px;
	overflow: hidden;
}
.zone .item {
	width: 100%;
	user-select: none;
}
.zone .item.i1 {
	background: #999;
}
.zone .item.i2 {
	background: #777;
}

</style>
