<script>
import { store } from '../../data/store.js'
export default {
	name: 'OurTeam',
	data() {
		return {
			store
		}
	},
}
</script>

<template>
	<section id="our-team">
		<div class="featured-product">
			<div class="featured-product-img">
				<img :src="`/img/main${store.featuredProduct.image}`" alt="">
			</div>
			<div class="featured-product-text">
				<h6>THIS MONTH'S FEATURED PRODUCT</h6>
				<h2>{{store.featuredProduct.name}}</h2>
				<p>{{store.featuredProduct.desc}}</p>
				<button class="btn-custom">BUY NOW</button>
			</div>
		</div>
		<div class="container-custom">
			<h6>WHAT PEOPLE SAY</h6>
			<h1>Reviews</h1>
			<div class="cards-wrapper">

				<div 
					v-for="(member, index) in store.team"
					:key="index"
					class="card rg-card"
				>
  				<div class="card-body">
    				<p>{{ member.overview }}</p>
  				</div>
					<div class="team-photo">
  					<img :src="`/img/main/main-team/${member.photo}`" class="card-img-top" alt="...">
					</div>
					<h5 class="team-name">{{ member.name }}</h5>
				</div>
		
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss';
	#our-team {
		height: 1250px;
		position: relative;
		.container-custom {
			padding-top: 500px;
			flex-direction: column;
			align-items: center;
			.cards-wrapper {
				display: flex;
				width: 100%;
				margin-top: 70px;
				margin-bottom: 50px;
				justify-content: space-between;
				.card-body {
					padding: 0 50px;
				}

				.team-photo {
					width: 120px;
					height: 120px;
					margin: 10px 0;
					overflow: hidden;
					border-radius: 50% !important;
					object-fit: cover;
				}
				.team-name {
					color: #BE9359;
					font-weight: 600;
					font-style: italic;
				}
			}
		}
		.featured-product {
			background-color: #121413;
			display: flex;
			left: 50%;
			transform: translate(-50%);
			bottom: 830px;
			position: absolute;
			width: 1150px;
			height: 470px;
			border-top: 4px solid #BE9359;
			.featured-product-img {
				flex-basis: 40%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				background-image: url('/img/main/main-shop/avadabarbers-cta-background.jpg');
				background-size: cover;
				img {
					width: 350px;
				}
			}
			.featured-product-text {
				flex-basis: 60%;
				padding: 50px;
				color: white;
			}
		}
	}
</style>