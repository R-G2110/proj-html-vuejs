<script>

import { store } from '../../data/store';
import Card from '../partials/Card.vue';

export default {
	name: 'Blog',
	components: {
		Card
	},
	data() {
		return {
			store
		}
	},
}
</script>

<template>
	<section id="blog">
		<div class="triangle upside-down">
			<img src="/img/triangle.svg" alt="">
		</div>
		<div class="container-custom">
			<h6>TALES FROM THE BARBER SHOP</h6>
			<h2>Recent Blog Posts</h2>
			<div class="cards-wrapper">
				
				<Card 
					v-for="(blog, index) in store.blogs"
					:key="index"
					:image="blog.image"
					:name="blog.title"
					:desc="blog.overview"
				/>

			</div>
			<button class="btn-custom-xl">READ FROM OUR BLOG</button>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss';
	#blog {
		height: 1050px;
		background-color: #F5F5F5;
		position: relative;
		.container-custom {
			padding-top: 150px;
			flex-direction: column;
			align-items: center;
			
			.cards-wrapper {
				display: flex;
				width: 100%;
				margin-top: 70px;
				margin-bottom: 50px;
				justify-content: space-between;
				.card {
					background: #F5F5F5;
					.blog-image {
						width: 100%;
					}
					.card-text {
						padding: 0 30px;
					}
				}
			
			}
		}
		.triangle {
			top: 0;
		}
	}
</style>