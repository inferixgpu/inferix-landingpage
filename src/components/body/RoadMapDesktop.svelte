<script lang="ts">
	import Dot from '$images/icons/Dot.svg';
	import In1 from '$images/png/industries/1.png';
	import RoadmapWorkaround from '$images/icons/Roadmap.svg';
	import RoadmapMobileWorkaround from '$images/icons/RoadmapMobile.svg';
	import Saos from 'saos';

	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="flex md:mt-0 xl:mt-0] justify-center">
	<div id="roadmap" class="md:block container w-100%">
		<Saos once top="200" animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
			<p class="roadmap-header">Roadmap</p>
		</Saos>

		<div class="flex flex-column justify-between mb-[80px] lg:mx-[40px] xl:mx-auto">
			<span class="roadmap-item flex flex-column w-[100%] border-[#373639]">
				<div><p class="title-timeline-item">From 2018 to Q2-2023</p></div>
				<div class="flex flex-row justify-between w-[50%] border-l-[1px] relative">
					<div class="flex flex-col justify-start gap-4 bg-[#2D2C30] p-6">
						<ul
							class="flex flex-col gap-3 opacity-60 text-[#FFF] text-[16px] font-normal leading-6 p-4"
						>
							<li>Build 3D/VR/AR core technologies</li>
							<li>Build House3D Cloud Rendering based on GPU</li>
							<li>100,000+ 3D design created and 1,000,000+ images rendered</li>
							<li>10,000+ active designers community built</li>
						</ul>
					</div>
					<div class="absolute">
						<img src={Dot} class="max-w-[24px] max-h-[24px]" />
					</div>
				</div>
			</span>
			<span class="roadmap-item flex flex-column w-[100%] border-[#373639]">
				<div class=" flex flex-row justify-end w-[50%] border-r-[1px] relative">
					<div class="flex flex-col justify-start gap-4 bg-[#2D2C30] p-6">
						<ul
							class="flex flex-col gap-3 opacity-60 text-[#FFF] text-[16px] font-normal leading-6 p-4"
						>
							<li>Inferix Team is formed with MVP concept</li>
							<li>Project planning</li>
							<li>Start the marketing & partnership activities</li>
							<li>Angel funding</li>
						</ul>
					</div>
					<div class="absolute">
						<img src={Dot} class="max-w-[24px] max-h-[24px]" />
					</div>
				</div>
				<div><p class="title-timeline-item">Q3-2023</p></div>
			</span>
			<span class="roadmap-item flex flex-column w-[100%] border-[#373639]">
				<div><p class="title-timeline-item">Q4-2023</p></div>
				<div class="flex flex-row justify-between w-[50%] border-l-[1px] relative">
					<div class="flex flex-col justify-start gap-4 bg-[#2D2C30] p-6">
						<ul
							class="flex flex-col gap-3 opacity-60 text-[#FFF] text-[16px] font-normal leading-6 p-4"
						>
							<li>Decentralized GPU MVP release</li>
							<li>Partnership with rendering & AI business</li>
							<li>Inferix Worker MVP</li>
						</ul>
					</div>
					<div class="absolute">
						<img src={Dot} class="max-w-[24px] max-h-[24px]" />
					</div>
				</div>
			</span>
			<span class="roadmap-item flex flex-column w-[100%] border-[#373639]">
				<div class="flex flex-row justify-end w-[50%] border-r-[1px] relative">
					<div class="flex flex-col justify-start gap-4 bg-[#2D2C30] p-6">
						<ul
							class="flex flex-col gap-3 opacity-60 text-[#FFF] text-[16px] font-normal leading-6 p-4"
						>
							<li>Rendering Service beta release</li>
							<li>Proof-of-Rendering and BMW model</li>
							<li>Inferix Console Beta</li>
							<li>Seed round & Strategic round funding</li>
						</ul>
					</div>
					<div class="absolute">
						<img src={Dot} class="max-w-[24px] max-h-[24px]" />
					</div>
				</div>
				<div><p class="title-timeline-item">Q1-2024 & Q2-2024</p></div>
			</span>
			<span class="roadmap-item flex flex-column w-[100%] border-[#373639]">
				<div><p class="title-timeline-item">Q3-2024</p></div>
				<div class="flex flex-row justify-between w-[50%] border-l-[1px] relative">
					<div class="flex flex-col justify-start gap-4 bg-[#2D2C30] p-6">
						<ul
							class="flex flex-col gap-3 opacity-60 text-[#FFF] text-[16px] font-normal leading-6 p-4"
						>
							<li>IDO/IEO campaign</li>
							<li>Payment & Reward system</li>
							<li>Actif3D and House3D integration</li>
							<li>Rendering Service official release</li>
						</ul>
					</div>
					<div class="absolute">
						<img src={Dot} class="max-w-[24px] max-h-[24px]" />
					</div>
				</div>
			</span>
			<span class="roadmap-item flex flex-column w-[100%] border-[#373639]">
				<div class="flex flex-row justify-end w-[50%] border-r-[1px] relative">
					<div class="flex flex-col justify-start gap-4 bg-[#2D2C30] p-6">
						<ul
							class="flex flex-col gap-3 opacity-60 text-[#FFF] text-[16px] font-normal leading-6 p-4"
						>
							<li>Stable Diffusion worker beta release</li>
							<li>Start R&D for LLM AI training & AI inference support</li>
							<li>Start Decentralized R&D activities</li>
						</ul>
					</div>
					<div class="absolute">
						<img src={Dot} class="max-w-[24px] max-h-[24px]" />
					</div>
				</div>
				<div><p class="title-timeline-item">Q4-2024</p></div>
			</span>
		</div>
	</div>
</div>

<style lang="postcss">
	#roadmap {
		margin-top: 200px;
	}

	#roadmap > div:last-child {
		flex-direction: column;
	}
	.roadmap-header {
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

	.roadmap-item > div {
		flex: 1;
	}

	.roadmap-item > div:last-child > div:last-child {
		top: 50%;
		left: -12px;
		transform: translateY(-50%);
	}

	.roadmap-item:nth-child(2) > div:first-child > div:last-child,
	.roadmap-item:nth-child(4) > div:first-child > div:last-child,
	.roadmap-item:nth-child(6) > div:first-child > div:last-child {
		top: 50%;
		right: -12px;
		transform: translateY(-50%);
	}

	.roadmap-item:nth-child(1) > div:first-child,
	.roadmap-item:nth-child(3) > div:first-child,
	.roadmap-item:nth-child(5) > div:first-child {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 36px;
	}

	.roadmap-item:nth-child(2) > div:first-child,
	.roadmap-item:nth-child(4) > div:first-child,
	.roadmap-item:nth-child(6) > div:first-child {
		padding: 31px 36px 31px 0;
		border-color: rgba(244, 244, 244, 0.3);

		& > div:first-child {
			width: 540px;
			border: 1px solid rgba(244, 244, 244, 0.3);
			background: radial-gradient(
				100% 100% at 50% 0%,
				rgba(255, 255, 255, 0.12) 0%,
				rgba(255, 255, 255, 0) 100%
			);
		}
	}

	.roadmap-item:nth-child(1) > div:last-child,
	.roadmap-item:nth-child(3) > div:last-child,
	.roadmap-item:nth-child(5) > div:last-child {
		padding: 31px 0 31px 36px;
		border-color: rgba(244, 244, 244, 0.3);

		& > div:first-child {
			width: 540px;
			border: 1px solid rgba(244, 244, 244, 0.3);
			background: radial-gradient(
				100% 100% at 50% 0%,
				rgba(255, 255, 255, 0.12) 0%,
				rgba(255, 255, 255, 0) 100%
			);
		}
	}

	.roadmap-item:nth-child(2) > div:last-child,
	.roadmap-item:nth-child(4) > div:last-child,
	.roadmap-item:nth-child(6) > div:last-child {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding-left: 36px;
	}

	ul {
		list-style-type: none;
		padding: 5px;
	}

	li {
		position: relative;
		display: flex;
		align-items: center;
		padding-left: 1rem;
		color: #fff;
		font-size: 16px;
		opacity: 1;
	}

	li::before {
		content: '•';
		position: absolute;
		left: 0;
		font-size: 1.5rem;
		margin-right: 0.5rem; /* Adjust the spacing between the marker and text */
	}
	.title-timeline-item {
		font-size: 24px;
		font-weight: 700;
		background: var(--4, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
