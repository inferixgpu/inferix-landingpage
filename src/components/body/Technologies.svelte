<script lang="ts">
	import Box from '$images/icons/Box.svg';
	import ProofOfRendering from '$images/icons/ProofOfRendering.svg';
	import DataHub from '$images/icons/DataHub.svg';
	import Vr from '$images/icons/Vr.svg';

	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div
	class="py-[87px] bg-[#212023] flex justify-center relative bg-cover bg-[url('$images/photos/Technologies.png')]"
>
	<div class="flex flex-col md:flex-row m-[14px] gap-[24px]">
		<div class="flex items-center">
			<p class="md:text-[48px] text-[32px] font-bold">Technologies</p>
		</div>

		<div class="flex flex-col gap-[100px] md:ml-[136px]">
			<div class="flex flex-row">
				<img src={Box} alt="Box" />
				<div class="flex flex-col ml-[24px]">
					<span class="text-[24px] font-bold">Decentralized Render</span>
					<p class="text-[14px] font-light opacity-50">
						Creating virtual farms by harnessing decentralized resources across various locations,
						effectively allocating and handling rendering tasks
					</p>
				</div>
			</div>
			<div class="flex flex-row">
				<img src={ProofOfRendering} alt="Proof Of Rendering" />
				<div class="flex-col ml-[24px]">
					<span class="text-[24px] font-bold">Proof of Rendering</span>
					<p class="text-[14px] font-light opacity-50">
						Analysis, consensus and validation algorithms for the rendering work of GPU resource
						providers
					</p>
				</div>
			</div>
			<div class="flex flex-row">
				<img src={DataHub} alt="Data Hub" />
				<div class="flex-col ml-[24px]">
					<span class="text-[24px] font-bold">Decentralized 3D Data Hub</span>
					<p class="text-[14px] font-light opacity-50">
						Data processing and data storage solutions for decentralized 3D models
					</p>
				</div>
			</div>
			<div class="flex flex-row">
				<img src={Vr} alt="Vr" />
				<div class="flex-col ml-[24px]">
					<span class="text-[24px] font-bold">WebVR Auto-content</span>
					<p class="text-[14px] font-light opacity-50">
						Automated WebVR content creation from any kind of 3D data using Inferix GPU lightmap
						baking solution
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
