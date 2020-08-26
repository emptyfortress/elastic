<template>
<content-loader :width="1151" :height="1023" :speed="2" primaryColor="#ffffff" secondaryColor="#efefef">
	<rect x="293" y="198" rx="8" ry="8" width="858" height="194" /> 
	<rect x="293" y="403" rx="8" ry="8" width="858" height="194" /> 
	<rect x="293" y="608" rx="8" ry="8" width="858" height="194" /> 
	<rect x="293" y="813" rx="8" ry="8" width="858" height="194" /> 
	<path d="M 0 127 h 217 v 20 H 0 z M 293 127 h 363 v 20 H 293 z M 1090 127 h 61 v 32 h -61 z M 0 198 h 73 v 15 H 0 z M 182 198 h 79 v 15 h -79 z M 0 236 h 261 v 103 H 0 z M 0 351 h 261 v 103 H 0 z M 0 472 h 261 v 211 H 0 z M 0 43 h 343 v 28 H 0 z" /> 
	<rect x="386" y="39" rx="16" ry="16" width="123" height="32" /> 
	<rect x="513" y="39" rx="16" ry="16" width="105" height="32" /> 
	<rect x="622" y="39" rx="16" ry="16" width="124" height="32" /> 
	<path d="M 1019 43 h 132 v 28 h -132 z" />
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
