<script lang="ts">
	import { onMount } from 'svelte';
	import Box from '$images/icons/Box.svg';
	import ProofOfRendering from '$images/icons/ProofOfRendering.svg';
	import DataHub from '$images/icons/DataHub.svg';
	import Vr from '$images/icons/Vr.svg';
	import House3D from '$images/png/House3D_white.svg';
	import Actif3D from '$images/png/actif3D.svg';
	import I from '$images/icons/I-uppercase.svg';
	import I_color from '$images/icons/I-uppercase-color.svg';
	import n from '$images/icons/n.svg';
	import n_color from '$images/icons/n-color.svg';
	import f from '$images/icons/f.svg';
	import f_color from '$images/icons/f-color.svg';
	import e from '$images/icons/e.svg';
	import e_color from '$images/icons/e-color.svg';
	import r from '$images/icons/r.svg';
	import r_color from '$images/icons/r-color.svg';
	import i from '$images/icons/i.svg';
	import i_color from '$images/icons/i-color.svg';
	import x from '$images/icons/X.svg';
	import x_color from '$images/icons/x-color.svg';
	import decentralized_render from '$images/png/decentralized_render.png';
	import proof_of_rendering from '$images/png/proof_of_rendering.png';
	import decentralized_3d_data_hub from '$images/png/decentralized_3d_data_hub.png';
	import webvr_auto_content from '$images/png/webvr_auto_content.png';
	import zerofrozr from '$images/png/zerofrozr.png';
	import fan from '$images/png/fan.png';
	import fan_x from '$images/icons/fan_X.png';
	import animated_x from '$images/icons/animated_x.svg';
	import ai from '$videos/ai.mp4';
	import BG_Left from '$images/png/BG-Left.png';
	import BG_Right from '$images/png/BG-Right.png';
	import line from '$images/icons/line.svg';
	import line_2 from '$images/icons/line_2.svg';
	import line_2_mobile from '$images/icons/line_2_mobile.svg';
	import gsap from 'gsap';

	let screenSize: number;
	const inferix = [
		{ id: 0, url: i },
		{ id: 1, url: n },
		{ id: 2, url: f },
		{ id: 3, url: e },
		{ id: 4, url: r },
		{ id: 5, url: i },
		{ id: 6, url: x }
	];
	const technologies = [
		{ id: 0, name: 'Decentralized Render', url: proof_of_rendering },
		{ id: 1, name: 'Proof of Rendering', url: decentralized_render },
		{ id: 2, name: 'Decentralized 3D Data Hub', url: decentralized_3d_data_hub },
		{ id: 3, name: 'WebVR Auto-content', url: webvr_auto_content }
	];

	onMount(async () => {});
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="pt-20 pb-10 bg-cover bg-center bg-[url('$images/photos/technologi_background.png')]">
	<div class="proven-container">
		<div class="container-left">
			<div class="inferix-logo">
				{#each inferix as char}
					<img src={char.url} />
				{/each}
			</div>
			<div class="graphics-card">
				<div class="card">
					<img class="absolute z-10" src={zerofrozr} />
					<div
						class="flex absolute z-20 items-center justify-center gap-[8.78px] top-[12px] left-[10px]"
					>
						<img class="h-[84.148px] w-[84.148px]" src={fan} />
						<img class="h-[84.148px] w-[84.148px]" src={fan} />
						<img class="h-[84.148px] w-[84.148px]" src={fan} />
					</div>
				</div>
				<div class="card">
					<img class="absolute z-10" src={zerofrozr} />
					<div
						class="flex absolute z-20 items-center justify-center gap-[8.78px] top-[12px] left-[10px]"
					>
						<img class="h-[84.148px] w-[84.148px]" src={fan} />
						<img class="h-[84.148px] w-[84.148px]" src={fan} />
						<img class="h-[84.148px] w-[84.148px]" src={fan} />
					</div>
				</div>
				<div class="card">
					<img class="absolute z-10" src={zerofrozr} />
					<div
						class="flex absolute z-20 items-center justify-center gap-[8.78px] top-[12px] left-[10px]"
					>
						<img class="h-[84.148px] w-[84.148px]" src={fan} />
						<img class="h-[84.148px] w-[84.148px]" src={fan} />
						<img class="h-[84.148px] w-[84.148px]" src={fan} />
					</div>
				</div>
				<div class="card">
					<img class="absolute z-10" src={zerofrozr} />
					<div
						class="flex absolute z-20 items-center justify-center gap-[8.78px] top-[12px] left-[10px]"
					>
						<img class="h-[84.148px] w-[84.148px]" src={fan} />
						<img class="h-[84.148px] w-[84.148px]" src={fan} />
						<img class="h-[84.148px] w-[84.148px]" src={fan} />
					</div>
				</div>
			</div>
			<div class="absolute top-[170px] left-[50px]">
				<img src={line} />
			</div>
		</div>
		<div class="container-right">
			<img class="absolute left-0 top-[160px] z-10" src={line_2} />
			<div class="technologies">
				<div class="tech-header">
					<img src={BG_Left} />
					<p>Proven Technologies</p>
					<img src={BG_Right} />
				</div>
				<div class="tech-body">
					{#each technologies as item}
						<div class="item">
							<img src={item.url} />
							<p>{item.name}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.proven-container {
		@apply flex flex-row items-center justify-between w-full max-w-[1200px] mx-auto;
		& > .container-left {
			@apply flex flex-col relative w-[40%] gap-10;
			& > .inferix-logo {
				@apply flex flex-row h-[73px] gap-4;
			}
			& > .graphics-card {
				@apply flex flex-col space-y-4;
				& > .card {
					@apply flex flex-row relative h-[177px];
				}
			}
		}
		& > .container-right {
			@apply flex flex-col -ml-1 w-full relative;
			& > .technologies {
				@apply flex flex-col gap-6 ml-[140px];
				border: 2px solid rgba(255, 255, 255, 0.05);
				backdrop-filter: blur(6px);
				& > .tech-header {
					@apply flex items-center justify-between gap-8;
					& > p {
						white-space: nowrap;
						text-align: center;
						font-size: 32px;
						font-style: normal;
						font-weight: 600;
						line-height: 48px;
						background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 8.85%, #fff 100%);
						background-clip: text;
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				}
				& > .tech-body {
					@apply flex flex-col mx-10 gap-6 mb-6;
					& > .item {
						display: flex;
						padding: 8px 16px 8px 8px;
						align-items: center;
						gap: 24px;
						border: 1px solid rgba(244, 244, 244, 0.56);
						background: var(
							--123,
							radial-gradient(
								100% 100% at 50% 0%,
								rgba(255, 255, 255, 0.12) 0%,
								rgba(255, 255, 255, 0) 100%
							)
						);
						& > p {
							color: #fff;
							font-size: 24px;
							font-style: normal;
							font-weight: 400;
							line-height: 48px; /* 200% */
						}
					}
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		.proven-tech > div {
			width: 100%;
		}
	}
</style>
