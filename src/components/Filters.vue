<template lang="pug">
div
	.left
		.touch
			v-tabs.filt(v-model='tabs', fixed-tabs)
				v-tabs-slider
				v-tab(href='#tabs-2', :ripple='ripple')
					v-icon mdi-order-bool-descending
					span.mx-3 Группы
					span.badge(@click='counter = !counter', v-if='!counter') 4
					span.badge.count(@click='counter = !counter', v-else) 26

	v-tabs-items(v-model='tabs')
		v-tab-item(value='tabs-1')
			.common
				Aggregate(@aggregate='aggr = true', @reset='aggr = false')

		v-tab-item(value='tabs-2')
			.common
				Group(:counter='counter')
		v-tab-item(value='tabs-3')
			.common
				h3 Здесь запросы
</template>

<script>
import Group from '@/components/Group.vue'
import Aggregate from '@/components/Aggregate.vue'

export default {
	components: { Group, Aggregate },
	data() {
		return {
			tabs: null,
			aggr: false,
			counter: false,
			ripple: false,
		}
	},
	created() {
		this.$store.commit('setFilterResults', this.searchItemsResults)
	},
	methods: {
		test() {
			console.log('fuck')
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.left {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	/* height: 67px; */
}
.touch {
	font-size: 0.9rem;
	font-weight: bold;
	/* margin-bottom: .5rem; */
}
.common {
	height: calc(100vh - 260px);
	border-right: 1px solid silver;
	overflow-y: scroll;
	overflow-x: hidden;
	mask-image: linear-gradient(to top, transparent, black),
		linear-gradient(to left, transparent 17px, black 17px);
	mask-size: 100% 20000px;
	mask-position: left bottom;
	-webkit-mask-image: linear-gradient(to top, transparent, black),
		linear-gradient(to left, transparent 17px, black 17px);
	-webkit-mask-size: 100% 20000px;
	-webkit-mask-position: left bottom;
	transition: mask-position 0.3s, -webkit-mask-position 0.3s;
	&:hover {
		-webkit-mask-position: left top;
	}
	h3 {
		font-size: 1.2rem;
		font-weight: 400;
		text-align: center;
		margin-top: 4rem;
	}
}
.v-tab {
	min-width: 40px;
}
.v-tabs-slider-wrapper {
	top: 0;
}
.filt img {
	width: 18px;
}
.badge {
	border-radius: 4px;
	background: $link;
	color: #fff;
	padding: 0 4px;
	&.count {
		background: #999797;
	}
}
</style>
