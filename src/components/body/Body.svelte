<script lang="ts">
	import Frame from '$images/png/Frame.png';
	import innovatedHeader from '$images/png/inferixInnovateHeader.png';
	import Saos from 'saos';
	import Industries from './Industries.svelte';
	import RoadMapDesktop from './RoadMapDesktop.svelte';
	import Teams from './Teams.svelte';
	import MpvWalkthrough from './MpvWalkthrough.svelte';

	import Actif3D from '$images/png/actif3D.svg';
	import House3D from '$images/png/House3D_white.svg';
	import MetaCity from '$images/png/metacity.png';
	import Nvidia from '$images/png/nvidia.png';
	import ZoneNine from '$images/png/ZoneNine.png';
	import DePINSurf from '$images/png/DePINSurf.png';
	import IoTex from '$images/png/IoTex.svg';
	import Network3 from '$images/png/Network3.png';
	import DeMR from '$images/png/DeMR.svg';
	import SystemArchitecture from '$components/body/SystemArchitecture.svelte';
	import RoadMapMobile from '$components/body/RoadMapMobile.svelte';
	import ProvenTechnologies from '$components/body/ProvenTechnologies.svelte';
	import InferixIntro from '$videos/-6832-41e3-b4e4-f39f89c47ac3.mp4';

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
			img: {name: DeMR, height: '85px', mobile_height: '40px'},
			href: 'https://www.demr.xyz/#/'
		}
	];
</script>

<svelte:window bind:innerWidth={screenSize} />

<div id="about" class="bg-black">
	<div class="innovated">
		<div class="innovated-header">
			<img class="w-[256px] h-[52px] mt-[680px]" src={innovatedHeader} />
			<div class="innovated-header-content">
				<p>An innovated platform for 3D rendering and AI</p>
				<p>inference using crowdsourced GPUs globally</p>
			</div>
		</div>
		<div class="innovated-body">
			<video autoplay muted loop playsinline class="object-cover mx-auto w-[1200px] h-[609px]">
				<source src={InferixIntro} type="video/mp4" />
			</video>
		</div>
		<div class="innovated-footer" />
	</div>

	<MpvWalkthrough />
	<SystemArchitecture />
	<!--	<Technologies />-->
	<ProvenTechnologies />
	<Industries />
	<div>
		<div
				class="pb-0 h-[288px] w-[894px] md:flex gap-[48px] flex-col mx-auto md:pb-[60px] mt-[80px] md:mt-[160px]"
		>
			<Saos
				once
				top="200"
				animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}
			>
				<p class="partner-header">
					Partner / Investor
				</p>
			</Saos>
			<Saos
				once
				top="300"
				animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}
			>
				<div class="partner-content">
					{#each partners as partner (partner.id)}
						<a class="partner-item" href="{partner.href}" target="_blank">
							<img src="{partner.img.name}"/>
						</a>
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
	<Teams />
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
		@apply flex flex-col relative w-full;
		& > .innovated-header {
			@apply flex flex-col h-[1200px] w-[1288px] mx-auto bg-cover bg-center -mt-[430px] items-center  gap-10 z-20;
			background-image: url('$images/png/innovatedBackground.png');
			& > .innovated-header-content {
				text-align: center;
				font-size: 40px;
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
			@apply -mt-[350px] z-10;
		}
	}

	.partner-header {
		text-align: center;
		font-size: 32px;
		font-style: normal;
		font-weight: 600;
		line-height: 48px;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.30) 8.85%, #FFF 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.partner-content {
		@apply grid grid-cols-3 gap-6;
		& > .partner-item {
			border: 1px solid var(--stroke-2, rgba(244, 244, 244, 0.30));
			background: var(--123, radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%));
			@apply flex items-center justify-center h-[80px] w-[282px] px-[64px] py-4 cursor-pointer !filter-none;
		}
	}
	@media screen and (max-width: 900px) {
		.partnerDiv {
			width: 100%;
			height: auto;
			flex-direction: column;
			align-items: center;
			padding: 0px 10px;
		}

		.partnerImg {
			width: 100%;
			height: 150px;
			margin-bottom: 15px;
		}

		.partnerImg > a {
			width: 100%;
		}
	}

	@media screen and (max-width: 480px) {
		.partnerImg {
			width: 100%;
			height: 100px;
			margin-bottom: 15px;
		}
	}
</style>
