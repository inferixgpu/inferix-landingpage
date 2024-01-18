<script lang="ts">
	import Frame from '$images/png/Frame.png';
	import Saos from 'saos';
	import Industries from './Industries.svelte';
	import RoadMapDesktop from './RoadMapDesktop.svelte';
	import Teams from './Teams.svelte';
	import MpvWalkthrough from './MpvWalkthrough.svelte';

	import Actif3D from '$images/png/actif3D.svg';
	import House3D from '$images/png/house3d.png';
	import MetaCity from '$images/png/metacity.png';
	import Nvidia from '$images/png/nvidia.png';
	import ZoneNine from '$images/png/ZoneNine.png';
	import SystemArchitecture from '$components/body/SystemArchitecture.svelte';
	import Technologies from '$components/body/Technologies.svelte';
	import RoadMapMobile from '$components/body/RoadMapMobile.svelte';

	let screenSize: number;

	const partners = [
		{
			id: 1,
			title: 'Actif3d',
			img: { name: Actif3D, height: '85px' },
			href: 'https://actif3d.com/'
		},
		{
			id: 2,
			title: 'MetaCity',
			img: { name: MetaCity, height: '75px' },
			href: 'https://citiverse.io/'
		},
		{
			id: 3,
			title: 'House3D',
			img: { name: House3D, height: '85px' },
			href: 'https://house3d.com/'
		},
		{
			id: 4,
			title: 'Nvidia',
			img: { name: Nvidia, height: '85px' },
			href: 'https://www.nvidia.com/en-us/startups/'
		},
		{
			id: 5,
			title: 'ZoneNine',
			img: { name: ZoneNine, height: '85px' },
			href: 'https://zone9survival.com/'
		}
	];
</script>

<svelte:window bind:innerWidth={screenSize} />

<div id="about" class="bg-[#212023]">
	<div class="Innovated-bg">
		<Saos top="200" once animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
			<div class="innovated-title">
				{#if screenSize > 768}
					<p
						class="md:text-center text-center text-xs md:text-[1.75rem] font-pre font-bold leading-default md:text-white text-textMobile"
					>
						An innovated platform for 3D rendering and AI inference using crowdsourced GPUs globally
					</p>
				{/if}
				{#if screenSize < 768}
					<p
						style="color: #FFF;text-align: center;font-size: 20px;font-style: normal;font-weight: 700;line-height: 30px;margin-top: 80px"
					>
						An innovated platform for 3D rendering and AI inference using crowdsourced GPUs globally
					</p>
				{/if}
			</div>
		</Saos>
		<Saos once top="200" animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
			<img src={Frame} class="mx-auto mt-[44px] md:flex pb-[60px]" alt="inferix circle" />
		</Saos>
		<!--		<Saos once top="100" animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>-->
		<!--			<img-->
		<!--					src={InferixInnovated}-->
		<!--					class="mx-auto mt-[44px] md:flex pb-[60px]"-->
		<!--					alt="inferix circle"-->
		<!--			/>-->
		<!--		</Saos>-->
	</div>

	<MpvWalkthrough />
	<SystemArchitecture />
	<Technologies />
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
				<div class="partnerDiv mx-auto">
					{#if screenSize > 900}
						<div class="partnerImg">
							{#each partners.slice(0, 3) as partner (partner.id)}
								<a class="partnerLink" target="_blank" href={partner.href}>
									<img
										src={partner.img.name}
										alt={partner.img.name}
										style={`height: ${partner.img.height}`}
									/>
								</a>
							{/each}
						</div>
						<div class="partnerImg mt-[65px]">
							{#each partners.slice(3, 5) as partner (partner.id)}
								<a class="partnerLink" target="_blank" href={partner.href}>
									<img
										src={partner.img.name}
										alt={partner.img.name}
										style={`height: ${partner.img.height}`}
									/>
								</a>
							{/each}
						</div>
					{:else}
						{#each partners as partner (partner.id)}
							<div class="partnerImg">
								<a class="partnerLink" target="_blank" href={partner.href}>
									<img src={partner.img.name} alt={partner.img.name} style={`height: ${partner.img.height}`}/>
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

	.innovated-title {
		@apply flex md:flex-row flex-col items-center mx-auto md:pt-[131px] pt-0 container box-border w-[912px];
		color: #fff;
		text-align: center;
		font-size: 32px;
		font-style: normal;
		line-height: 48px; /* 150% */
	}
	.Innovated-bg {
		display: flex;
		flex-direction: column;
		background: #212023;
		gap: 50px;
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
</style>
