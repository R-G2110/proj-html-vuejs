<script>

import { store } from '../data/store'
import Dropdown from './partials/Dropdown.vue';

export default {
	name: 'Header',
	components: {
		Dropdown
	},
	data() {
		store
	}
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
					
					<div class="aselect" :data-value="value" :data-list="list">
	    <div class="selector" @click="toggle()">
	        <div class="label">
				    <span>{{ value }}</span>
	        </div>
			<div class="arrow" :class="{ expanded : visible }"></div>
	        <div :class="{ hidden : !visible, visible }">
	            <ul>
	                <li 
										:class="{ current : item === value }" 
										v-for="(item, index) in list" 
										:key="index"
										@click="select(item)"
									>{{ item }}</li>
	            </ul>
	        </div>
	    </div>
	</div>

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