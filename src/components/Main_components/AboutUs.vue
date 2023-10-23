<script>
export default {
	name: 'AboutUs'
}
</script>

<template>
	<section id="about-us">
		<div class="container-custom">
			<h6>AWARD WINNING</h6>
			<h2>Pro Barbers</h2>
			<button class="btn-custom">MEET YOUR NEW BARBER</button>
		</div>
		<div class="triangle">
			<img src="/img/triangle.svg" alt="">
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss';
	#about-us {
		position: relative;
		height: 600px;
		background-image: url('/img/main/main-about-us/avadabarbers-about-introbackground.jpg');
		background-size: cover;
		.container-custom {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.triangle {
			position: absolute;
			right: 0;
			left: 0;
			bottom: 0;
		
		}
	}
</style>