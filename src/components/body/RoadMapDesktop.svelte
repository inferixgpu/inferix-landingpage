<script>
	import Devider from '$images/icons/Divider.svg';
	import Dot from '$images/icons/Dot.svg';

	const roadMap = [
		{
			title: 'Inferix is born',
			description: []
		},
		{
			title: 'MVP',
			description: ['Decentralized GPU farm', 'Cloud based 3D redering']
		},
		{
			title: 'Close beta & Blockchain',
			description: [
				'Close beta service',
				'Chain(TBD) integration(Testnet)',
				'GPU provider package',
				'TGE'
			]
		},
		{
			title: 'Official Launching',
			description: [
				'Ready to serve',
				'Chain integration(Mainnet)',
				'Al inference open market',
				'Payment & Reward'
			]
		}
	];
	const markers = ['23.3Q', '23.4Q', '24.1Q', '24.2Q'];
</script>

<div id="roadmap" class="md:block hidden mt-[220px] w-[90%] mx-auto">
	<p class="text-secondary text-[2.5rem] text-center font-bold font-outfit">Roadmap</p>
	<div class="w-full h-[1px] bg-secondary mt-[240px] relative mx-auto">
		<div class="grid grid-cols-4 mx-auto absolute bottom-[-11px]">
			{#each roadMap as map (map.title)}
				<div class="flex lg:gap-4 gap-2">
					<img src={Devider} alt="devider" class="h-full" />
					<div class="flex box-border">
						<div class="flex flex-col lg:gap-[28px] gap-4 lg:text-base text-sm font-outfit">
							<p class="font-bold">{map.title}</p>
							<ul class="flex flex-col ml-7">
								{#each map.description as desc (desc)}
									<li class="list-disc">
										<p
											class={`${
												map == roadMap[roadMap.length - 1] ? 'whitespace-nowrap' : ''
											} font-outfit font-normal`}
										>
											{desc}
										</p>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			{/each}
			<div class="grid grid-cols-4 mx-auto absolute bottom-[-30px] w-full">
				{#each markers as marker (marker)}
					<p class="text-left text-base text-secondary font-outfit">{marker}</p>
				{/each}
			</div>
		</div>
		<img src={Dot} alt="dot" class="absolute right-[-6.5px] bottom-[-6.5px]" />
	</div>
</div>

<style lang="postcss">
</style>
