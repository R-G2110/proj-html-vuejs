<script>
export default {
	name: 'Hero'
}
</script>

<template>
	<main >
		<section id="hero">
			<div class="bg-hero">	
				<!-- <img src="../assets/img/hero/avadabarbers-homepage-hero-bg.jpg" alt="hero-bg"> -->
			</div>
				<div class="container-custom">
					<div class="hero-title">
						<h1>Barber Shop</h1>
						<h5>The Pinnacle Of Male Grooming</h5>
						<button class="btn-custom">LEARN MORE</button>
					</div>
					<div class="hero-img">
						<img src="/img/hero/avadabarbers_hero_focalmirror-400x550.png" alt="">
					</div>
				</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss';
	#hero {
		height: 970px;
		background-image: url('/img/hero/avadabarbers-homepage-hero-bg.jpg');
		background-size: cover;
		position: relative;
		.container-custom {
			position: absolute;
			padding-top: 80px;
			justify-content: space-between;
			margin: 0 380px;
			top: 0;
			.hero-title {
				padding-top: 240px;
				h1 {
					// font-size: 85px;
					color: white;
					&::after {
						content: '';
						margin: 30px 0;
						display: block;
						width: 250px;
						border-bottom: 4px solid #BE9359;
					}
				}

				h5 {
					color: #BE9359
				}
				.btn-custom:hover {
					cursor: pointer;
					background-color: #BE9359;
					color: black;
				}
				
			}
			.hero-img {
				width: 550px;;
				
			}
		}
		
		.bg-hero {
			

			
		}
	}
</style>