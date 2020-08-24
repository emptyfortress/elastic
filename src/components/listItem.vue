<template lang="pug">
div
	.item(v-for="n in 7")

</template>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.item {
	width: 100%;
	height: 150px;
	background: #fff;
	margin-bottom: .5rem;
	border: 1px solid #dedede;
	border-radius: 3px;
	cursor: pointer;
	&:hover {
		border: 1px solid $link;
		
	}

}
</style>
