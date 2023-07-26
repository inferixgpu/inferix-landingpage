<script>
	import RoadMap from '$components/static/images/icons/roadMap.svg';
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
</script>

<div class="mt-[200px] mx-auto">
	<p class="text-secondary text-[2.5rem] text-center font-bold font-outfit">Roadmap</p>
	<div class="relative w-[1319px] mx-auto">
		<img src={RoadMap} alt="road map" class="mt-10 mx-auto" />
		<div class="grid grid-cols-4 mx-auto w-[1319px] absolute top-0">
			{#each roadMap as map (map.title)}
				<div class="flex box-border">
					<div class="flex flex-col ml-12 gap-[28px] text-base font-outfit">
						<p class="font-bold">{map.title}</p>
						<ul class="flex flex-col ml-7">
							{#each map.description as desc (desc)}
								<li class="list-disc">
									<p class="font-outfit text-base font-normal">{desc}</p>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
</style>
