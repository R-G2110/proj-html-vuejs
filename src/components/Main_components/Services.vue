<script>

import { store } from '../../data/store';
import Card from '../partials/Card.vue';

export default {
	name: 'Services',
	components: {
		Card
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
	<section id="services">
		<div class="container-custom">
			<h6>MENS GROOMING</h6>
			<h2>Services</h2>
			<div class="cards-wrapper">
				
			<div 
				v-for="(service, index) in store.services"
				:key="index"
				class="card rg-card"
			>
				<div class="card-img" >
					<img 
						:src="`/img/main${service.image}`"  class="card-img-top" alt=""
					>
				</div>
				<div class="card-text">
					<h3>{{ service.name }}</h3>
					<p>{{ service.desc }}</p>
				</div>
			</div>
				
				

			</div>
			<button class="btn-custom-xl">READ ABOUT OUR SERVICES</button>
		</div>
		<div class="triangle">
			<img src="/img/triangle.svg" alt="">
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss';
	#services {
		height: 990px;
		position: relative;
		.container-custom {
			padding-top: 100px;
			flex-direction: column;
			align-items: center;
			.cards-wrapper {
				display: flex;
				width: 100%;
				margin-top: 70px;
				margin-bottom: 50px;
				justify-content: space-between;
				.card-img-top {
					width: 70px;
				}
				.rg-card:nth-of-type(2) .card-img-top{
					width: 90px;
				}
			}
		}
		.triangle {
			position: absolute;
			right: 0;
			left: 0;
			bottom: 0;
			filter: invert(.926);
		}
	}
</style>