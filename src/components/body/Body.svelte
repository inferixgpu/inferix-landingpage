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
	import SystemArchitecture from '$components/body/SystemArchitecture.svelte';
	import RoadMapMobile from '$components/body/RoadMapMobile.svelte';
	import ProvenTechnologies from '$components/body/NewProven.svelte';
	import InferixIntro from "$videos/-6832-41e3-b4e4-f39f89c47ac3.mp4";

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
			id: 8,
			title: 'IoTex',
			img: {
				name: IoTex,
				height: '85px',
				mobile_height: '54px'
			},
			href: 'https://iotex.io/'
		},
		{
			id: 3,
			title: 'Actif3d',
			img: { name: Actif3D, height: '85px', mobile_height: '44px' },
			href: 'https://actif3d.com/'
		},
		{
			id: 4,
			title: 'MetaCity',
			img: { name: MetaCity, height: '75px', mobile_height: '40px' },
			href: 'https://citiverse.io/'
		},
		{
			id: 5,
			title: 'Nvidia',
			img: { name: Nvidia, height: '85px', mobile_height: '52px' },
			href: 'https://www.nvidia.com/en-us/startups/'
		},
		{
			id: 6,
			title: 'ZoneNine',
			img: { name: ZoneNine, height: '85px', mobile_height: '50px' },
			href: 'https://zone9survival.com/'
		},
		{
			id: 7,
			title: 'Network3',
			img: { name: Network3, height: '85px', mobile_height: '40px' },
			href: 'https://network3.io/'
		}
	];
</script>

<svelte:window bind:innerWidth={screenSize} />

<div id="about" class="bg-black">
	<div class="innovated">
		<div class="innovated-header">
			<img class="w-[256px] h-[52px] mt-[680px]" src="{innovatedHeader}"/>
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
		<div class="innovated-footer"></div>
	</div>

	<MpvWalkthrough />
	<SystemArchitecture />
	<!--	<Technologies />-->
	<ProvenTechnologies />
	<Industries />
	<div class="bg-[#212023]">
		<div
			class="pb-0 bg-[#212023] md:flex flex-col mx-auto container md:pb-[60px] mt-[80px] md:mt-[160px]"
		>
			<Saos
				once
				top="200"
				animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}
			>
				<p class="text-center font-pre font-extrabold md:text-[48px] text-[32px] mb-[65px]">
					Partner / Investor
				</p>
			</Saos>
			<Saos
				once
				top="300"
				animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}
			>
				<div class="partnerDiv mx-auto md:mt-[65px]">
					{#if screenSize > 900}
						<div class="partnerImg">
							{#each partners.slice(0, 3) as partner (partner.id)}
								<a class="partnerLink" target="_blank" href={partner.href}>
									<img
										src={partner.img.name}
										alt={partner.img.name}
										style={`height: ${partner.img.height};object-fit:scale-down`}
									/>
								</a>
							{/each}
						</div>
						<div class="partnerImg mt-[65px]">
							{#each partners.slice(3, 6) as partner (partner.id)}
								<a class="partnerLink" target="_blank" href={partner.href}>
									<img
										src={partner.img.name}
										alt={partner.img.name}
										style={`height: ${partner.img.height}; object-fit:scale-down`}
									/>
								</a>
							{/each}
						</div>
						<div class="partnerImg mt-[65px]">
							{#each partners.slice(6, 8) as partner (partner.id)}
								<a class="partnerLink" target="_blank" href={partner.href}>
									<img
										src={partner.img.name}
										alt={partner.img.name}
										style={`height: ${partner.img.height}; max-width:350px; object-fit:scale-down`}
									/>
								</a>
							{/each}
						</div>
					{:else if screenSize > 480}
						{#each partners as partner (partner.id)}
							<div class="partnerImg">
								<a class="partnerLink" target="_blank" href={partner.href}>
									<img
										src={partner.img.name}
										alt={partner.img.name}
										style={`height: ${partner.img.height};object-fit:scale-down`}
									/>
								</a>
							</div>
						{/each}
					{:else}
						{#each partners as partner (partner.id)}
							<div class="partnerImg">
								<a class="partnerLink" target="_blank" href={partner.href}>
									<img
										src={partner.img.name}
										alt={partner.img.name}
										style={`height: ${partner.img.mobile_height};object-fit:scale-down`}
									/>
								</a>
							</div>
						{/each}
					{/if}
				</div>
				<!-- <img src={PartnerAndInvestor} alt="Partner / Investor" class="mt-[60px] mx-auto"/> -->
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
		@apply flex flex-col relative w-full ;
		& > .innovated-header {
			@apply flex flex-col h-[1200px] w-[1288px] mx-auto bg-cover bg-center -mt-[430px] items-center  gap-10 z-20;
			background-image: url("$images/png/innovatedBackground.png");
			& > .innovated-header-content {
				text-align: center;
				font-size: 40px;
				font-style: normal;
				font-weight: 500;
				line-height: normal;
				background: linear-gradient(159deg, #FFF -7.96%, rgba(255, 255, 255, 0.00) 124.67%);
				background-clip: text;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}
		& > .innovated-body {
			@apply -mt-[350px] z-10;
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
