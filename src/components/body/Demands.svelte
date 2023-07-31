<script>
	import arrowRight from '$videos/ArrowRight.mp4';

	const growingDemand = [
		{
			title: 'Underutilized Resources',
			description:
				'Many GPU owners do not fully utilize their GPUs, leading to underutilized resources and missed income opportunities.'
		},
		{
			title: 'Complex Management & Maintenance ',
			description:
				'With traditional models like PaaS or laaS, users need to manage and maintain their platform or infrastructure, which can be time- consuming and technically challenging. High Access and Cost Barriers Businesses, researchers, and developers needing high-performance GPU processing often face prohibitive costs, both for initial investment and maintenance. The high financial barrier restricts access to necessary computational resources.'
		},
		{
			title: 'High Access and Cost Barriers ',
			description:
				'Businesses, researchers, and developers needing high-performance GPU processing often face prohibitive costs, both for initial investment and maintenance. The high financial barrier restricts access to necessary computational resources.'
		}
	];

	const cloudSource = [
		{
			title: 'Maximize utilizaton & Earning',
			description:
				'Inferix provides a platform for GPU owners to share their idle GPU power,allowing them to earn GOPU tokens, thereby creating a new revenue stream.'
		},
		{
			title: 'Ease of Use & Management ',
			description:
				"With GOPU's FaaS model, users do not have to worry about setting up, managing, and maintaining their own GPU infrastructure. This drastically simplifies the process and allows users to focus on their core tasks."
		},
		{
			title: 'Democratize Access & Lower Costs',
			description:
				'Inferix allows users needing GPU power to access these resources on a pay-as-you-go basis, significantly lowering the financial barriers to entry. This also means users only pay for the resources they actually use, leading to more efficient spending.'
		}
	];
</script>

<div id="neywork" class="container">
	<div
		class="grid md:grid-cols-[auto_200px_auto] grid-cols-1 md:grid-rows-1 grid-rows-[auto_264px_auto] items-center gap-10 text-black mx-auto md:mt-[193px] mt-[100px]"
	>
		<div class="box-border md:p-10 p-6 !py-10 bg-secondary rounded-3xl">
			<p class="text-2xl font-bold">The Growing demand for GPU power</p>
			<ul class="mt-8 flex flex-col gap-4">
				{#each growingDemand as demand (demand.title)}
					<li class="">
						<h2 class="font-suit md:text-base text-lg font-bold">{demand.title}</h2>
						<p class="mt-4 font-suit font-normal md:text-base text-sm">{demand.description}</p>
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex flex-col justify-center items-center gap-6">
			<p class="text-secondary md:text-[2.5rem] text-[2rem] text-center font-bold font-outfit">
				Inferix
			</p>
			<div class="w-[200px] h-[125px] relative md:rotate-0 md:mt-0 mt-6 rotate-90">
				<video width="200" height="125" autoplay muted loop Playsinline>
					<source src={arrowRight} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<div class="absolute w-[200px] h-[125px] top-0 bottom-0 left-0 right-0 overlay" />
			</div>
		</div>
		<div class="box-border h-full md:p-10 p-6 !py-10 bg-secondary rounded-3xl">
			<p class="text-2xl font-bold">Cloud sourced GPU for on-demand</p>
			<ul class="mt-8 flex flex-col gap-4">
				{#each cloudSource as cloud (cloud.title)}
					<li>
						<h2 class="font-suit font-bold">{cloud.title}</h2>
						<p class="mt-4 font-suit font-normal">{cloud.description}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style lang="postcss">
	.overlay {
		background: black;
		opacity: 0;
	}
	h2:before {
		content: '\2022'; /* Unicode for bullet point */
		color: black; /* or any color you want */
		font-weight: bold;
		display: inline-block;
		width: 10px;
	}
</style>
