<script>
	import background from '$images/png/header_register.png';
	import logo from '$images/icons/HeaderLogo.svg';
</script>

<div class="header-register">
	<img src={background} alt="background" />
	<img src={logo} alt="logo" />
</div>

<style lang="postcss">
	.header-register {
		position: relative;
		width: 100%;
		padding: 50px 155px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.header-register > img:first-child {
		width: 100%;
		height: 56px;
	}

	.header-register > img:last-child {
		position: absolute;
		height: 24px;
	}

	@media screen and (max-width: 1280px) {
		.header-register {
			padding: 30px 100px;
		}
	}
	@media screen and (max-width: 1024px) {
		.header-register {
			padding: 16px;
		}
	}

	@media screen and (max-width: 768px) {
		.header-register {
			padding: 16px;
		}
	}
</style>
