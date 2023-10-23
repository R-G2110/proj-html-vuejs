<script>

import { store } from '../../data/store.js'
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, Thumbs, A11y, } from 'swiper/modules'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css'

export default {
	name: 'Shop',
	components: {
		Swiper,
    SwiperSlide
	},
	data() {
		return {
			store
		}
	},
	setup() {
		const thumbsSwiper = ref(null);
      const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
      };

    const onSwiper = (swiper) => {
      console.log(swiper);
    };

    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
			modules: [Autoplay, Navigation, Pagination, Thumbs, A11y],
    };
  },
}
</script>

<template>
	<section id="shop">
		<div class="container-custom">
			<h6>WE HAVE YOU COVERED</h6>
			<h2>Avada Grooming Products</h2>
			<swiper
				:width="1000"
    		:slidesPerView="3"
    		:spaceBetween="130"
  		  :loop="true"
  		  :modules="modules"
  		  class="mySwiper"
  		>
  		  <swiper-slide
				v-for="(item, index) in store.shopItems"
				:key="index"
				>
					<div class="item">
						<img :src="`/img/main/main-shop/${item.image}`" alt="">	
						<div class="slide-info">
							<h3>{{ item.name }}</h3>
							<h6>€{{ item.price }}</h6>
						</div>
					</div>
				</swiper-slide>
  		
  		</swiper>
			<button class="btn-custom-xl">SHOP OUR PRODUCT RANGE</button>
		</div>
		<!-- <div class="featured-product">
			<div class="featured-product-img">
				<img src="../../assets/img/shaving_butter.png" alt="">
			</div>
			<div class="featured-product-text">
				<h6>THIS MONTH'S FEATURED PRODUCT</h6>
				<h2>Shaving Butter</h2>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempora minima animi eligendi delectus hic laboriosam consequatur nihil, magnam ea quisquam veritatis asperiores sit beatae voluptate, dolorum porro qui odio?</p>
				<button class="btn-custom">BUY NOW</button>
			</div>
		</div> -->

	</section>
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss';
	#shop {
		position: relative;
		height: 970px;
		background-image: url('/img/main/main-shop/avadabarbers-reviewsbackground.jpg');
		background-size: cover;

		.container-custom { 
			flex-direction: column;
			padding: 80px 0;
			align-items: center;
			width: 1200px;
			margin: 0 auto;
			overflow: hidden;
			.item {
				width: 250px;
				text-align: center;
			}
		}
		.featured-product {
			background-color: #121413;
			display: flex;
			left: 50%;
			transform: translate(-50%);
			bottom: -10px;
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
				background-image: url('../../assets/img/main/avadabarbers-cta-background.jpg');
				background-size: cover;
				img{
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