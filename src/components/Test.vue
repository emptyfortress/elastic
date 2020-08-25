<template lang="pug">
.test
	.zag Test
	br
	listItem1(v-for="item in items" :item="item" :key="item.id" :zapros="'ttt'")
	//- p(v-for="item in items") falksdjlaksj alksdj

</template>

<script>
import items from '@/store/data.js'
import listItem1 from '@/components/listItem1'

export default {
	data () {
		return {
			items,
		}
	},
	components: {
		listItem1
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.test {
	width: 800px;
	/* background: #ccc; */
}
</style>
