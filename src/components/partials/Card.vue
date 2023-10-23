<script>
export default {
	name: 'Card',
	props:{
  	name: String,
  	desc: String,
  	image: String
  },

}
</script>

<template>
	<div class="card rg-card">
					<div class="card-img">
  					<img :src="`/img/main${image}`" class="card-img-top" alt="...">
					</div>
  				<div class="card-text">
						<h3>{{ name }}</h3>
    				<p>{{ desc }}</p>
  				</div>
				</div>
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss';

	.card-img {
		object-fit: cover;
		overflow: hidden;
			
	}
	.card-text {
		padding: 0 50px;
	}
</style>