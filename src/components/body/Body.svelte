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
	import Aethir from '$images/png/aethir.png';
	import IOPay from '$images/png/iopay.svg';
	import ForesightX from '$images/png/foresightx.png';
	import FutureMoney from '$images/png/futuremoney.png';
	import Icetea from '$images/png/icetea-io.svg';
	import Wayru from '$images/png/wayru.png';
	import MindNetwork from '$images/png/MindNetwork.png';
	import DePHY from '$images/png/DePHY.png';
	import Loxodrome from '$images/png/loxodrome.svg';
	import PowerPod from '$images/png/powerpod.png';
	import Shima from '$images/png/shima-capital.png';
	import Parameter from './Parameter.svelte';
	import CardItem from './CardItem.svelte';
	import CardModel from './CardModel.svelte';
	import IndustrieUI from './IndustrieUI.svelte';
	import BackgroundCard from './BackgroundCard.svelte';

	import SystemArchitecture from '$components/body/System.svelte';
	import Map from '$components/body/Map.svelte';
	import MapLaptop from '$components/body/MapLaptop.svelte';
	import MapMobile from '$components/body/MapMobile.svelte';
	import MapTablet from '$components/body/MapTablet.svelte';
	import RoadMapMobile from '$components/body/RoadMapMobile.svelte';
	import ProvenTechnologies from '$components/body/ProvenTechnologies.svelte';
	import Events from '$components/body/Events.svelte';
	import InferixIntro from '$videos/inferix-intro.mp4';
	import node_sale_img from '$images/png/node-sale-img.png';

	let screenSize: number;
	const partners = [
		{
			id: 23,
			title: 'ShimaCapital',
			img: { name: Shima, height: '85px' },
			href: 'https://shima.capital/'
		},
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
			id: 15,
			title: 'Aethir',
			img: { name: Aethir, height: '85px', mobile_height: '40px' },
			href: 'https://aethir.com/',
			is_half: true
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

		// {
		// 	id: 12,
		// 	title: 'IOPay',
		// 	img: { name: IOPay, height: '85px', mobile_height: '40px' },
		// 	href: 'https://iopay.me/',
		// 	is_half: true
		// },
		{
			id: 16,
			title: 'Icetea Labs',
			img: { name: Icetea, height: '85px', mobile_height: '40px' },
			href: 'https://icetea.io/',
			is_half: true
		},
		{
			id: 17,
			title: 'Wayru',
			img: { name: Wayru, height: '85px', mobile_height: '40px' },
			href: 'https://www.wayru.io/',
			is_half: true
		},
		{
			id: 18,
			title: 'Mind Network',
			img: { name: MindNetwork, height: '85px', mobile_height: '40px' },
			href: 'https://mindnetwork.xyz/',
			is_half: true
		},
		{
			id: 19,
			title: 'DePHY',
			img: { name: DePHY, height: '85px', mobile_height: '40px' },
			href: 'https://dephy.io/',
			is_half: true
		},
		{
			id: 7,
			title: 'ZoneNine',
			img: { name: ZoneNine, height: '85px', mobile_height: '50px' },
			href: 'https://zone9survival.com/'
		},
		{
			id: 20,
			title: 'Loxodrome',
			img: { name: Loxodrome, height: '85px', mobile_height: '40px' },
			href: 'https://loxodrome.xyz/',
			is_half: true
		},
		{ id: '' },

		{
			id: 21,
			title: 'PowerPod',
			img: { name: PowerPod, height: '85px', mobile_height: '40px' },
			href: 'https://www.powerpod.pro/',
			is_half: true
		},
		{
			id: 22,
			title: 'Witnesschain',
			img: {
				name: 'https://static.wixstatic.com/media/0acb05_c0d489e8ed144cdba367d426ac53500b~mv2.png/v1/fill/w_174,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-on-black_edited.png',
				height: '85px',
				mobile_height: '40px'
			},
			href: 'https://www.witnesschain.com/',
			is_half: true
		}
	];
	const partner_more = [];
</script>

<svelte:window bind:innerWidth={screenSize} />
<div class="bg-black">
	<div class="node-sale">
		<div>
			<div>
				<div class="title">Node Sale</div>
				<div class="content">
					Revolutionizing the Visual Computing Industry with Decentralized GPU and PoR DePIN
					Verification.
				</div>
				<div class="btn-buy-node">
					<a
						on:click={() => window.open('https://verifier.inferix.io/')}
						class="whitespace-nowrap cursor-pointer"
						aria-label="Read more">Buy Now</a
					>
				</div>
				<img src={node_sale_img} />
			</div>
		</div>
	</div>

	<div class="width-text" id="about">
		<div class="text-landing">
			An innovated platform for 3D rendering and decentralized AI using crowdsourced GPUs globally
		</div>
	</div>

	{#if screenSize > 1440}
		<Map />
	{:else if screenSize > 1024}
		<MapLaptop />
	{:else if screenSize > 768}
		<MapTablet />
	{:else}
		<MapMobile />
	{/if}
	<!-- <ProvenTechnologies /> -->
	<!-- <SystemArchitecture /> -->
	<!-- <Industries /> -->
	<CardItem />
	<Parameter />
	<CardModel />
	<Events />
	<IndustrieUI />
	<BackgroundCard />
	<div>
		<div
			id="partners"
			class="flex pb-[50px] max-sm:w-full lg:max-w-[1136px] md:flex xl:gap-[48px] flex-col mx-auto justify-center items-center md:pb-[60px] mt-[20px] md:mt-[10px]"
		>
			<Saos
				once
				top="200"
				animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}
			>
				<p class="partner-header">Partner / Investor</p>
			</Saos>
			<div
				once
				top="300"
				animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}
			>
				<div class="partner-content">
					{#each partners as partner (partner.id)}
						{#if !partner.id}{#if screenSize >= 1024}<div
									class="col-span-2 max-xl:hidden"
								></div>{/if}{:else}<a
								class={partner.id === 100 ? 'partner-item-none' : 'partner-item'}
								href={partner.href}
								target="_blank"
								aria-label="Read more"
							>
								<img
									src={partner.img.name}
									alt={partner.title}
									width="152"
									height={partner.id === 22 ? partner.img.height : 'auto'}
									loading="lazy"
									style={`${partner.id == 23 && 'max-width: 200%; width: auto; height: 30px;'}`}
								/>
							</a>{/if}
					{/each}
					{#each partner_more as partner (partner.id)}
						{#if !partner.id}{#if screenSize > 1024}<div></div>{/if}{:else}<a
								class="partner-item-last"
								href={partner.href}
								target="_blank"
								><div>
									<img
										src={partner.img.name}
										alt={partner.title}
										width="152"
										height="auto"
										loading="lazy"
									/>
								</div>
							</a>{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
	<!--{#if screenSize > 768}-->
	<!--	<RoadMapDesktop />-->
	<!--{:else}-->
	<!--	<RoadMapMobile />-->
	<!--{/if}-->
	<!--	<Teams/>-->
</div>

<style lang="postcss">
	.partner-item:last-child > img {
		height: auto;
		width: auto;
	}

	.width-text {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-bottom: 50px;
	}

	.text-landing {
		font-size: 64px;
		width: 1136px;
		font-family: Inter;
		font-weight: 500;
		line-height: 80px;
		background: linear-gradient(45deg, #00d6d9 0%, #00c085 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-align: center;
	}

	@media (max-width: 1339px) {
		.text-landing {
			font-size: 56px;
			width: 784px;
		}
	}

	.node-sale {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 50px;
		padding-bottom: 180px;
		overflow: hidden;
		font-family: Inter, sans-serif;

		> div {
			width: 1136px;
			height: 650px;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;

			> div {
				width: 1130px;
				height: 650px;
				background: radial-gradient(
					100% 100% at 0% 0%,
					rgba(0, 214, 217, 0.2) 0%,
					rgba(0, 192, 133, 0) 100%
				);
				position: absolute;
				border: 3px solid #003935;
				padding: 48px;
				display: flex;
				flex-direction: column;

				> .title {
					font-size: 72px;
					font-weight: 600;
					line-height: 150%;
				}

				> .content {
					width: 70%;
					font-size: 40px;
					font-weight: 500;
					line-height: 60px;
					text-align: left;
					color: #888888;
					margin-bottom: 48px;
				}

				> .btn-buy-node {
					position: relative;
					z-index: 10;
					width: fit-content;
					@apply flex justify-center h-[48px]  items-center text-black py-4 text-[16px] font-[500];
					padding: 0 15px;
					border-radius: 2px;
					background: var(--12, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
					&:hover {
						box-shadow: 0 0 10px #00d6d9;
						/* &::before {
					content: '';
					position: absolute;
					inset: -5px;
					transform: translate(10px, 8px);
					z-index: 0;
					background: linear-gradient(45deg, #00d6d9 0%, #fcc142 100%);
					filter: blur(10px);
				} */
					}
					> a {
						font-family: Inter;
						font-size: 20px;
						font-weight: 700;
						line-height: 24px;
						text-align: left;
					}
				}

				> img {
					width: 70%;
					position: absolute;
					right: 0;
					bottom: 0;
					transform: rotate(0deg) translate(25%, 20%);
				}
			}
		}
	}

	.innovated {
		@apply flex flex-col relative w-full items-center z-20;

		& > .innovated-header {
			width: 100%;
			padding: 0 30px;
			@apply flex flex-col h-[1200px] lg:w-[100%] bg-cover max-md:bg-200 bg-center bg-no-repeat -mt-[300px] max-md:-mt-[580px] items-center gap-10 z-20
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
		@apply font-[Inter] xl:text-[72px] lg:text-[56px] text-[32px];
		text-align: center;
		font-weight: 600;
		line-height: 150%;
		color: #ffffff;
		margin: 32px 0;
	}
	.partner-content {
		@apply lg:grid lg:grid-cols-4 xl:grid-cols-8 flex flex-col gap-6;

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

		& > .partner-item-none {
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

	@media screen and (max-width: 1440px) {
		.node-sale > div {
			width: 80%;

			> div {
				width: 100%;
				height: 600px;
				gap: 30px;

				> .title {
					font-size: 5vw;
				}

				.content {
					font-size: 30px;
				}

				> img {
					width: 65%;
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		.innovated-header > img {
			margin-top: 600px;
		}

		.text-landing {
			font-size: 32px;
			width: 345px;
			line-height: 48px;
		}

		.node-sale {
			padding-top: 0px;
			> div {
				> div {
					padding: 8px 16px;
					height: 500px;
					.title {
						font-size: 28px;
					}
					.content {
						width: 100%;
						font-size: 22px;
						line-height: 150%;
					}

					> img {
						width: 75%;
						transform: translate(50%, 40%);
						right: 50%;
						bottom: 0;
					}
				}
			}
		}
	}

	@media screen and (max-width: 515px) {
		#partners {
			padding: 0 24px;
			padding-bottom: 50px;
			> div:nth-child(2) {
				width: 100%;
			}
		}
		.partner-content {
			> .partner-item {
				width: 100%;
			}
		}
	}
</style>
