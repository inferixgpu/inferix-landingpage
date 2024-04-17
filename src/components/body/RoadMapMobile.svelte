<script lang="ts">
	import Saos from 'saos';
	import Dot from '$images/icons/Dot.svg';

	let screenSize: number;

	let roadmap = [
		{
			title: 'From 2018 to Q2-2023',
			contents: [
				'Build 3D/VR/AR core technologies',
				'Build House3D Cloud Rendering based on GPU',
				'100,000+ 3D design created and 1,000,000+ images rendered',
				'10,000+ active designers community built'
			]
		},
		{
			title: 'Q3-2023',
			contents: [
				'Inferix Team is formed with MVP concept',
				'Project planning',
				'Start the marketing & partnership activities',
				'Angel funding'
			]
		},
		{
			title: 'Q4-2023',
			contents: [
				'Decentralized GPU MVP release',
				'Partnership with rendering & AI business',
				'Inferix Worker MVP'
			]
		},
		{
			title: 'Q1-2024 & Q2-2024',
			contents: [
				'Rendering Service beta release',
				'Proof-of-Rendering and BMW model',
				'Inferix Console Beta',
				'Seed round & Strategic round funding'
			]
		},
		{
			title: 'Q3-2024',
			contents: [
				'IDO/IEO campaign',
				'Rendering Service official release',
				'Actif3D and House3D integration',
				'Rendering Service official release'
			]
		},
		{
			title: 'Q4-2024',
			contents: [
				'Stable Diffusion worker beta release',
				'Start R&D for LLM AI training & AI inference support',
				'Start Decentralized R&D activities'
			]
		}
	];
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="md:mt-[120px] mt-[120px]">
	<div id="roadmap" class="md:block container mx-auto w-100%">
		<Saos once top="200" animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
			<p
				id="text-title"
				class="md:text-center text-center font-pre font-extrabold md:text-[48px] text-[32px] mb-[80px]"
			>
				Roadmap
			</p>
		</Saos>

		<div class="flex flex-col mb-[80px] border-l-[2px] border-[#373639]">
			{#each roadmap as rm}
				<div class="flex flex-row p-4 relative gap-10">
					<div class="roadmap-item bg-[#2D2C30] p-4 w-full">
						<div class="absolute flex justify-start items-start left-[-13px] top-[16px]">
							<img src={Dot} class="max-w-[24px] max-h-[24px]" />
						</div>
						<div class="basis-1/12" />
						<div class="basis-11/12">
							<p class="title-timeline-item">{rm.title}</p>
							<ul
								class="flex flex-col gap-3 opacity-60 text-[#FFF] text-[16px] font-normal leading-6 p-2"
							>
								{#each rm.contents as content}
									<li>{content}</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	ul {
		list-style-type: '· ';
	}

	.title-timeline-item {
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: 40px; /* 166.667% */
		background: var(--4, linear-gradient(45deg, #00d6d9 0%, #00c085 100%));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	@media screen and (max-width: 768px) {
		#text-title {
			text-align: center;
			font-size: 32px;
			font-weight: 600;
			line-height: 48px; /* 150% */
			background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 8.85%, #fff 100%);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		.roadmap-item {
			border: 1px solid var(--stroke-2, rgba(244, 244, 244, 0.3));
			background: var(
				--123,
				radial-gradient(
					100% 100% at 50% 0%,
					rgba(255, 255, 255, 0.12) 0%,
					rgba(255, 255, 255, 0) 100%
				)
			);
		}
	}
</style>
