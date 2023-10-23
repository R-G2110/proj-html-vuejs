<script>
export default {
	name: 'BottomFooter'
}
</script>

<template>
	<section id="bottom-footer">
		<div class="container-custom d-flex">
			<p>Copyright 2012 - 2023 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</p>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss';
	#bottom-footer {
		height: 120px;
		background-color: #161718;
		.container-custom {
			justify-content: center;
			align-items: center;
			color: #B0B0B0;
		}
	}
</style>