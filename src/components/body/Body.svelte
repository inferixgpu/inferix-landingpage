<script lang="ts">
	import innovatedHeader from '$images/png/inferixInnovateHeader.png';
	import Saos from 'saos';
	import Industries from './Indus.svelte';
	import RoadMapDesktop from './RoadMapDesktop.svelte';
	import Actif3D from '$images/png/actif3D.svg';
	import House3D from '$images/png/House3D_white.svg';
	import MetaCity from '$images/png/metacity.png';
	import Nvidia from '$images/png/nvidia.png';
	import ZoneNine from '$images/png/ZoneNine.png';
	import DePINSurf from '$images/png/DePINSurf.png';
	import IoTex from '$images/png/IoTex.svg';
	import Network3 from '$images/png/Network3.png';
	import DeMR from '$images/png/DeMR.svg';
	import AIxBlock from '$images/png/AIxBlock.png';
	import Cudos from '$images/png/cudos.png';
	import IOPay from '$images/png/iopay.svg';
	import ForesightX from '$images/png/foresightx.png';
	import FutureMoney from '$images/png/futuremoney.png';

	import SystemArchitecture from '$components/body/System.svelte';
	import RoadMapMobile from '$components/body/RoadMapMobile.svelte';
	import ProvenTechnologies from '$components/body/ProvenTechnologies.svelte';
	import InferixIntro from '$videos/-6832-41e3-b4e4-f39f89c47ac3.mp4';
	import ProvenTech from '$components/body/ProvenTech.svelte';

	let screenSize: number;

	const partners = [
		{
			id: 1,
			title: 'House3D',
			img: { name: House3D, height: '70px', mobile_height: '40px' },
			href: 'https://house3d.com/'
		},
		{
			id: 2,
			title: 'DePIN Surf',
			img: { name: DePINSurf, height: '85px', mobile_height: '45px' },
			href: 'https://depin.surf'
		},
		{
			id: 3,
			title: 'IoTex',
			img: {
				name: IoTex,
				height: '85px',
				mobile_height: '54px'
			},
			href: 'https://iotex.io/'
		},
		{
			id: 4,
			title: 'Actif3d',
			img: { name: Actif3D, height: '85px', mobile_height: '44px' },
			href: 'https://actif3d.com/'
		},
		{
			id: 5,
			title: 'MetaCity',
			img: { name: MetaCity, height: '75px', mobile_height: '40px' },
			href: 'https://citiverse.io/'
		},
		{
			id: 6,
			title: 'Nvidia',
			img: { name: Nvidia, height: '85px', mobile_height: '52px' },
			href: 'https://www.nvidia.com/en-us/startups/'
		},
		{
			id: 7,
			title: 'ZoneNine',
			img: { name: ZoneNine, height: '85px', mobile_height: '50px' },
			href: 'https://zone9survival.com/'
		},
		{
			id: 8,
			title: 'Network3',
			img: { name: Network3, height: '85px', mobile_height: '40px' },
			href: 'https://network3.io/'
		},
		{
			id: 9,
			title: 'DeMR',
			img: { name: DeMR, height: '85px', mobile_height: '40px' },
			href: 'https://www.demr.xyz/#/'
		},
		{
			id: 10,
			title: 'AIxBlock',
			img: { name: AIxBlock, height: '85px', mobile_height: '40px' },
			href: 'https://aixblock.org/',
			is_half: true
		},
		{
			id: 11,
			title: 'Cudos',
			img: { name: Cudos, height: '85px', mobile_height: '40px' },
			href: 'https://www.cudos.org/',
			is_half: true
		},
		{
			id: 12,
			title: 'IOPay',
			img: { name: IOPay, height: '85px', mobile_height: '40px' },
			href: 'https://iopay.me/',
			is_half: true
		},
	];

	const partner_more = [
	{
			id: 14,
			title: 'FutureMoney',
			img: { name: FutureMoney, height: '85', mobile_height: '40px' },
			href: 'https://www.fmgroup.xyz/',
			is_half: true
		},
		 {
		 	id: 13,
		 	title: 'ForesightX',
		 	img: { name: ForesightX, height: '85px', mobile_height: '40px' },
		 	href: 'https://www.foresightx.net/#/',
		 	is_half: true
		 },
	];
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="bg-black">
	<div class="innovated">
		<div class="innovated-header">
			<img
				class="w-[256px] h-[52px] mt-[680px] max-md:w-[185px] max-md:h-[37px]"
				src={innovatedHeader}
			/>
			<div class="innovated-header-content">
				<p class="max-sm:hidden">An innovated platform for 3D rendering and AI</p>
				<p class="max-sm:hidden">inference using crowdsourced GPUs globally</p>
				<p class="sm:hidden px-[33px]">
					An innovated platform for 3D rendering and AI inference using crowdsourced GPUs globally
				</p>
			</div>
		</div>
		<div class="innovated-body">
			<video
				autoplay
				muted
				loop
				playsinline
				class="md:w-[1200px] max-md::w-full object-cover object-center h-[609px]"
			>
				<source src={InferixIntro} type="video/mp4" />
			</video>
		</div>
		<div class="innovated-footer" id="about" />
	</div>

	<ProvenTechnologies />
	<SystemArchitecture />
	<Industries />
	<div>
		<div
			id="partners"
			class="flex pb-0 lg:h-[288px] max-sm:w-full lg:w-[894px] md:flex gap-[48px] flex-col mx-auto justify-center items-center md:pb-[60px] mt-[80px] md:mt-[160px]"
		>
			<Saos
				once
				top="200"
				animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}
			>
				<p class="partner-header">Partner / Investor</p>
			</Saos>
			<Saos
				once
				top="300"
				animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}
			>
				<div class="partner-content">
					{#each partners as partner (partner.id)}
						{#if !partner.id}{#if screenSize > 1024}<div class="col-span-2"></div>{/if}{:else}<a
								class="partner-item"
								href={partner.href}
								target="_blank"
							>
								<img src={partner.img.name} />
							</a>{/if}
					{/each}
					{#each partner_more as partner (partner.id)}
						{#if !partner.id}{#if screenSize > 1024}<div></div>{/if}{:else}<a
								class="partner-item-last"
								href={partner.href}
								target="_blank"
								><div><img src={partner.img.name} /></div>
							</a>{/if}
					{/each}
				</div>
			</Saos>
		</div>
	</div>
	{#if screenSize > 768}
		<RoadMapDesktop />
	{:else}
		<RoadMapMobile />
	{/if}
	<!--	<Teams/>-->
</div>

<style lang="postcss">
	.partnerDiv {
		padding: 0px 35px;
		height: 235px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.partnerImg {
		background-color: #212023;
		width: 100%;
		height: 85px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		border-radius: 24px;
	}

	.partnerImg > a > img {
		margin: auto;
	}

	.partner-item:last-child > img {
		height: 100%;
		width: auto;
	}

	.partnerLink {
		display: flex;
		width: 33%;
		height: 100%;
		cursor: pointer;
	}

	.partner-mobile-div {
		height: 50px;
		display: flex;
		justify-content: center;
	}

	.partner-mobile-img {
		background-image: url('$images/png/PartnerAndInvestorMobile.png');
		background-repeat: no-repeat;
		width: 350px;
		height: 100%;
		display: flex;
		justify-content: space-between;
	}

	.partner-mobile-link {
		display: flex;
		width: 30%;
		height: 100%;
		cursor: pointer;
	}

	.innovated {
		@apply flex flex-col relative w-full items-center z-20;

		& > .innovated-header {
			@apply flex flex-col h-[1200px] lg:w-[90%] bg-cover max-md:bg-200 bg-center bg-no-repeat -mt-[300px] max-md:-mt-[580px] items-center gap-10 z-20
			bg-[url("$images/png/innovatedBackground.png")];
			& > .innovated-header-content {
				@apply text-[40px] max-md:text-[32px];
				text-align: center;
				font-style: normal;
				font-weight: 500;
				line-height: normal;
				background: linear-gradient(159deg, #fff -7.96%, rgba(255, 255, 255, 0) 124.67%);
				background-clip: text;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}

		& > .innovated-body {
			@apply -mt-[350px] max-md:-mt-[250px] z-10;
		}
	}
	.partner-header {
		@apply max-md:!text-[24px] !text-[32px];
		text-align: center;
		font-weight: 600;
		line-height: 48px; /* 150% */
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 8.85%, #fff 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin-bottom: 32px;
	}
	.partner-content {
		@apply lg:grid lg:grid-cols-6 flex flex-col gap-6;

		& > .partner-item {
			border: 1px solid var(--stroke-2, rgba(244, 244, 244, 0.3));
			background: var(
				--123,
				radial-gradient(
					100% 100% at 50% 0%,
					rgba(255, 255, 255, 0.12) 0%,
					rgba(255, 255, 255, 0) 100%
				)
			);
			@apply flex items-center justify-center h-[80px] w-[282px] px-[64px] py-4 cursor-pointer !filter-none col-span-2;
		}

		& > .partner-item-last {
			@apply flex col-span-3;
			justify-content: flex-end;
			div {
				border: 1px solid var(--stroke-2, rgba(244, 244, 244, 0.3));
				background: var(
					--123,
					radial-gradient(
						100% 100% at 50% 0%,
						rgba(255, 255, 255, 0.12) 0%,
						rgba(255, 255, 255, 0) 100%
					)
				);
				@apply flex items-center justify-center h-[80px] w-[282px] px-[64px] py-4 cursor-pointer !filter-none;
			}
		}

		& > .partner-item-last:last-child {
			justify-content: flex-start;
		}
	}

	@media screen and (max-width: 768px) {
		.innovated-header > img {
			margin-top: 600px;
		}
	}
</style>
