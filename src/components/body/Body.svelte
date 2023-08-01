<script lang="ts">
	import GpuFunction from './GpuFunction.svelte';
	import RoadMapDesktop from './RoadMapDesktop.svelte';
	import RoadMapMobile from './RoadMapMobile.svelte';
	import Demands from './Demands.svelte';
	import InferixCircle from '$images/photos/InferixCircle.png';
	import InferixToken from '$images/photos/InferixToken.png';
	import InferixCicleMobile from '$images/photos/InferixCircleMobile.png';
	import InferixTokenMobile from '$images/photos/InferixTokenMobile.png';
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
	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div id="about" class="container mx-auto">
	<p
		class="text-center md:text-2xl text-base font-suit font-normal md:mt-6 mt-4 max-w-[1060px] mx-auto"
	>
		An innovated platform using the power of Blockchain and Web3 technologies to redefin how we use
		and share GPU resoruce globally.
	</p>
	<img src={InferixCircle} class="mx-auto mt-[70px] md:flex hidden" alt="inferix circle" />
	<img src={InferixCicleMobile} class="mx-auto mt-[40px] md:hidden flex" alt="inferix circle" />
	<Demands />
	<GpuFunction />
	<img
		src={InferixToken}
		alt="Inferix token"
		class="mt-[200px] !w-[800px] mx-auto md:flex hidden"
	/>
	<img
		src={InferixTokenMobile}
		alt="Inferix token"
		class="!w-[800px] mt-[115px] mx-auto md:hidden flex"
	/>
	{#if screenSize > 768}
		<RoadMapDesktop />
	{:else}
		<RoadMapMobile />
	{/if}
</div>

<style lang="postcss">
</style>
