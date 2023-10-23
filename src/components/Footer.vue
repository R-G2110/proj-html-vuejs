<script>

import TopFooter from './Footer_components/TopFooter.vue'
import BottomFooter from './Footer_components/BottomFooter.vue'

export default {
	name: 'Footer',
	components: {
		TopFooter,
		BottomFooter
	}
}
</script>

<template>
	<footer>
		<TopFooter />
		<BottomFooter />
		
	</footer>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss';
</style>