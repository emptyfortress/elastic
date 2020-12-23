<template>
	<content-loader
		:width="1200"
		:height="159"
		:speed="2"
		primaryColor="#f2f2f2"
		secondaryColor="#e8e8e8"
		>
		<path d="M 0 0 h 642 v 19 H 0 z M 0 70 h 642 v 19 H 0 z M 0 140 h 642 v 19 H 0 z M 0 35 h 949 v 19 H 0 z M 0 104 h 949 v 19 H 0 z" />
	</content-loader>
</template>

<script>
import { ContentLoader } from "vue-content-loader"

export default {
	components: {
		ContentLoader
	}
}

</script>
