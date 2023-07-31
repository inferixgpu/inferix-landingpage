<script>
	import DeviderMobile from '$images/icons/DividerMobile.svg';
	import Dot from '$images/icons/Dot.svg';

	const roadMap = [
		{
			title: 'Inferix is born',
			description: [],
			mark: '23.3Q'
		},
		{
			title: 'MVP',
			description: ['Decentralized GPU farm', 'Cloud based 3D redering'],
			mark: '23.4Q'
		},
		{
			title: 'Close beta & Blockchain',
			description: [
				'Close beta service',
				'Chain(TBD) integration(Testnet)',
				'GPU provider package',
				'TGE'
			],
			mark: '24.1Q'
		},
		{
			title: 'Official Launching',
			description: [
				'Ready to serve',
				'Chain integration(Mainnet)',
				'Al inference open market',
				'Payment & Reward'
			],
			mark: '24.2Q'
		}
	];
</script>

<div id="roadmap" class="mt-[200px] w-full mx-auto md:hidden block">
	<p class="text-secondary text-[2.5rem] text-center font-bold font-outfit">Roadmap</p>
	<div class="w-full mt-[41px] relative z-10 mx-auto">
		<div class="flex flex-col justify-center items-center gap-10 mx-auto w-full">
			{#each roadMap as map (map.title)}
				<div class="gridContainer gap-4">
					<p class="text-left text-base text-secondary font-outfit mt-[-2px]">{map.mark}</p>
					<div>
						<img src={DeviderMobile} alt="devider" class="h-5 w-[105px]" />
						<div class="divider w-full flex items-end">
							{#if map == roadMap[roadMap.length - 1]}
								<img src={Dot} alt="dot" class=" w-[7px] h-[7px] mb-[-3.5px] ml-[-4px]" />
							{/if}
						</div>
					</div>
					<div class="flex flex-1 lg:gap-4 gap-2">
						<div class="flex box-border">
							<div class="flex flex-col lg:gap-[28px] gap-4 lg:text-base text-sm font-outfit">
								<p class="font-bold">{map.title}</p>
								<ul class="flex flex-col">
									{#each map.description as desc (desc)}
										<li>
											<p class="font-outfit font-normal box-border pr-5">{desc}</p>
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.gridContainer {
		grid-template-columns: 45px 105px 165px;
		display: grid;
		width: fit-content;
		max-width: 100%;
	}
	li > p:before {
		content: '\2022';
		color: white;
		font-weight: bold;
		display: inline-block;
		width: 10px;
	}
	.divider {
		border-left: 1px solid var(--green);
		height: calc(100% + 40px);
		margin-left: 7.5px;
		margin-top: -5px;
	}
</style>
