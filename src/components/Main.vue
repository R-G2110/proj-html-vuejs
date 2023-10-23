<script>

import { store } from '../data/store';
import AboutUs from './Main_components/AboutUs.vue';
import Services from './Main_components/Services.vue'
import Shop from './Main_components/Shop.vue'
import OurTeam from './Main_components/OurTeam.vue'
import Blog from './Main_components/Blog.vue'


export default {
	name: 'Main',
	components: {
		AboutUs,
		Services,
		Shop,
		OurTeam,
		Blog
	},
	data() {
		return {
			store
		}
	},
	methods: {
		getImagePath(img){
			return new URL(`/img/main${img}`,import.meta.url).href;
		}
	},
}
</script>

<template>
	<main>
		<AboutUs />
		<Services @getImagePath="getImagePath()"/>
		<Shop />
		<OurTeam />
		<Blog />
	</main>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss';

.triangle {
	height: 100px;
}
img {
	height: 100%;
  width: 100%;
	filter: invert(1);
}
.upside-down {
	transform: rotateX(180deg);
}
</style>