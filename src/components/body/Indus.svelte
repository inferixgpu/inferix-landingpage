<script lang="ts">
	import ArrowDown from '$images/icons/ArrowDown.svg';
	import ArrowDownMobile from '$images/icons/ArrowDownMobile.svg';
	import EllipseBackground from '$images/png/EllipseBackground.png';
	import In1 from '$images/png/industries/1.png';
	import In2 from '$images/png/industries/2.png';
	import In3 from '$images/png/industries/3.png';
	import In4 from '$images/png/industries/4.png';
	import In5 from '$images/png/industries/5.png';
	import Saos from 'saos';
	import IndustryListDesktop from './IndustryListDesktop.svelte';
	import industry_line from '$images/icons/industry_line.svg';
	import animated_circle from '$images/png/AnimatedCircle.png';
	import line_industry_mobile from '$images/icons/line_industry_mobile.svg';

	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

{#if screenSize > 768}<div class="industry pb-[48px] mx-auto w-100% container mt-[160px] div-room">
		<div><img src={industry_line} alt="industry_line" /></div>
		<div class="industry-content">
			<div>
				<div><div>Industries</div></div>
				<div>
					<img src={animated_circle} alt="animated-circle" />
				</div>
				<div class="in-images">
					<img src={In1} alt="image1" />
					<div>
						<div>Entertainment & Media</div>
					</div>
				</div>
			</div>
			<div>
				<div class="in-images">
					<img src={In2} alt="image2" />
					<div>
						<div>Architecture & Design</div>
					</div>
				</div>
				<div class="in-images">
					<img src={In3} alt="image3" />
					<div>
						<div>Animation & VFX</div>
					</div>
				</div>
			</div>
			<div>
				<div class="in-images">
					<img src={In4} alt="image4" />
					<div>
						<div>AR & VR</div>
					</div>
				</div>
				<div class="in-images">
					<img src={In5} alt="image5" />
					<div>
						<div>Game Content</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="in-mobile">
		<img src={line_industry_mobile} alt="in" />
		<div class="in-mobile-content">
			<div>
				<div class="moved-in">
					<img src={In1} alt="in1" />
					<img src={In2} alt="in1" />
					<img src={In3} alt="in1" />
					<img src={In4} alt="in1" />
					<img src={In5} alt="in1" />
					<img src={In1} alt="in1" />
					<img src={In2} alt="in1" />
					<img src={In3} alt="in1" />
					<img src={In4} alt="in1" />
					<img src={In5} alt="in1" />
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.industry {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 1199px;
	}

	.industry > div:first-child {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.industry-content {
		position: absolute;
		top: 131px;
		left: 153px;
		width: 894px;
		height: 861px;
		display: flex;
	}

	.industry-content > div {
		width: 282px;
		padding: 1px;
	}

	.industry-content > div:first-child {
		padding: 10px 0 113px;
		display: flex;
		flex-direction: column;
	}

	.industry-content > div:first-child > div:first-child {
		& > div {
			text-align: center;
			font-size: 32px;
			font-weight: 600;
			line-height: 48px; /* 150% */
			background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 8.85%, #fff 100%);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			transform: translate(-68px, -14px);
		}
	}

	.industry-content > div:first-child > div:nth-child(2) {
		margin-top: 35px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		height: 269px;
	}

	.industry-content > div:first-child > div:last-child {
		margin-top: 24px;
	}

	.in-images {
		width: 100%;
		height: 362px;
		position: relative;
		border: 1px solid rgba(244, 244, 244, 0.3);

		& > img {
			width: 100%;
			height: 100%;
		}

		& > div {
			width: 100%;
			height: 69px;
			position: absolute;
			left: 0;
			bottom: 0;
			background: linear-gradient(
				180deg,
				rgba(49, 91, 91, 0) -1.11%,
				rgba(49, 86, 91, 0.44) 23.83%,
				#31595b 99.56%
			);
			stroke-width: 1px;
			stroke: rgba(255, 255, 255, 0);
			backdrop-filter: blur(10px);
			display: flex;
			justify-content: center;
			align-items: center;
			border-top: 1px solid rgba(255, 255, 255, 0.3);

			& > div {
				color: #fff;
				font-feature-settings: 'clig' off, 'liga' off;
				font-size: 16px;
				font-weight: 600;
				line-height: 36px; /* 225% */
			}
		}
	}

	.industry-content > div:nth-child(2) {
		padding: 93px 0 0 0;
		margin-left: 24px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.industry-content > div:nth-child(3) {
		margin-left: 23px;
		margin-top: -1px;
		width: 283px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.rooms {
		animation: textMove 5s linear infinite;
	}
	.div-room {
		overflow: hidden;
	}
	@keyframes textMove {
		0% {
			/* left: 0; */
			transform: translateX(200%);
		}
		100% {
			/* left: -100%; */
			transform: translateX(-200%);
		}
	}

	@media screen and (max-width: 1380px) and (min-width: 1280px) {
		.industry-content {
			left: calc(calc(100vw - 160px) / 1199 * 153);
			top: calc(calc(100vw - 160px) / 1199 * 131);
		}
		.industry-content > div {
			width: calc(calc(100vw - 160px) / 1199 * 282);
		}

		.industry-content > div:nth-child(1) > div:nth-child(2) {
			margin-top: calc(calc(100vw - 160px) / 1199 * 33);
			height: calc(calc(100vw - 160px) / 1199 * 269);
		}

		.industry-content > div:nth-child(1) > div:nth-child(3) {
			margin-top: calc(calc(100vw - 160px) / 1199 * 24);
		}

		.industry-content > div:nth-child(2) {
			margin-left: calc(calc(100vw - 160px) / 1199 * 24);
			padding-top: calc(calc(100vw - 160px) / 1199 * 93);
			gap: calc(calc(100vw - 160px) / 1199 * 24);
		}

		.industry-content > div:nth-child(3) {
			margin-left: calc(calc(100vw - 160px) / 1199 * 24);
			gap: calc(calc(100vw - 160px) / 1199 * 24);
			width: calc(calc(100vw - 160px) / 1199 * 282);
		}
	}

	@media screen and (max-width: 1280px) {
		.industry-content {
			left: calc(calc(100vw - 100px) / 1199 * 153);
			top: calc(calc(100vw - 100px) / 1199 * 131);
		}
		.industry-content > div {
			width: calc(calc(100vw - 100px) / 1199 * 282);
		}

		.industry-content > div:nth-child(1) > div:nth-child(2) {
			margin-top: calc(calc(100vw - 100px) / 1199 * 33);
			height: calc(calc(100vw - 100px) / 1199 * 269);
		}

		.industry-content > div:nth-child(1) > div:nth-child(3) {
			margin-top: calc(calc(100vw - 100px) / 1199 * 24);
		}

		.industry-content > div:nth-child(2) {
			margin-left: calc(calc(100vw - 100px) / 1199 * 24);
			padding-top: calc(calc(100vw - 100px) / 1199 * 93);
			gap: calc(calc(100vw - 100px) / 1199 * 24);
		}

		.industry-content > div:nth-child(3) {
			margin-left: calc(calc(100vw - 100px) / 1199 * 24);
			gap: calc(calc(100vw - 100px) / 1199 * 24);
			width: calc(calc(100vw - 100px) / 1199 * 282);
		}
	}

	@media screen and (max-width: 768px) {
		.in-mobile {
			display: flex;
			justify-content: center;
			width: 100%;
			position: relative;
		}
		.in-mobile-content {
			position: absolute;
			top: 160px;
			left: 50%;
			transform: translate(-50%, 0);
		}

		.in-mobile-content > div {
			width: 283px;
			height: 361px;
			display: flex;
			overflow: hidden;
		}

		.in-mobile-content > div > div {
			width: 1415px;
			height: 396px;
			overflow: hidden;
			display: flex;
			animation: moved 10s ease-in-out;
		}

		.in-mobile-content > div > div > img {
			width: 283px;
		}

	}
</style>
