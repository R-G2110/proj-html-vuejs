<script>
export default {
	name: 'Header'
}
</script>

<template>
	<header>
		<div class="fixed">
			<div class="container-custom d-flex">
				<div class="logo">
					<img src="/img/logo/avadabarbers-logo-x2.png" alt="logo">
				</div>
				<div class="nav-menu d-flex ">
					<i class="fa-solid fa-cart-shopping"></i>
					<i class="fa-solid fa-bars"></i>
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss';

header {

	
	.fixed {
		position: absolute;
		height: 80px;
		width: 100%;
		z-index: 999;

		.container-custom {
			align-items: center;
			justify-content: space-between;
			padding-top: 35px;
			.logo {
				width: 180px;
			}
			.nav-menu {
				width: 60px;
				justify-content: space-between;
				font-size: 1.2rem;
				i {
					padding: 0 15px;
					font-size: 25px;
					color: white;
				}
			}
			
		}
	}

	
	

}
</style>