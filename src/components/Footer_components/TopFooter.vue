<script>
export default {
	name: 'TopFooter'
}
</script>

<template>
	<section id="top-footer">
		<div class="container-custom">
			<div class="container-fluid">
				<div class="row">

					<div class="col-4">
						<img src="/img/footer/avadabarbers_footer_shop_image-800x624.png" alt="">
						<button class="btn-custom">SHOP OUR RANGE NOW</button>
					</div>

					<div class="col-4">

						<div class="logo-footer">
							<img src="/img/logo/avadabarbers-logo-x1.png" alt="">
						</div>

						<div class="contacts">
							<p>Avada Barbers</p>
							<p>123 New York Street New York City</p>
							<p>info@yourwebsite.com</p>
							<p>+1 (555)555-1212</p>
						</div>

						<div class="socials">
							<h6>FOLLOW US</h6>
							<nav>
								<ul class="">
									<li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
									<li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
									<li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
									<li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
								</ul>
							</nav>
						</div>
					</div>

					<div class="col-4">
						<img src="/img/footer/avadabarbers_footer_appointment_image-800x624.png" alt="">
						<button class="btn-custom">BOOK YOUR APPOINTMENT</button>
					</div>

				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss';
	#top-footer {
		height: 485px;
		background-color: #121314;
		.container-custom {
			justify-content: center;
			align-items: center;
			color: #B0B0B0;
			.row {
				height: 100%;
				.col-4 {
					display: flex;
					flex-direction: column;
					padding: 80px 20px;
					height: 100%;
					align-items: center;
					text-align: center;
					
					.logo-footer {
						width: 170px;
						margin-bottom: 50px;
					}
					.socials{
						width: 120px;
						
						ul {
							padding-left: 0;
							display: flex;
							width: 100%;
							justify-content: space-between;
							a {
								font-size: 1.1rem;
								color: #BEBDBD;
								&:hover{
									color: #BE9359;
								}
							}
						}
					}
					
				}
			}

		}
	}
</style>