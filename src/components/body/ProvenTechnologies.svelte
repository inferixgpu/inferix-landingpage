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
	import gsap from 'gsap';
	import lo from 'lodash';

	let screenSize: number;

	function setDefaultStyle() {
		const device = document.querySelector('.proven-device > img');
		let fans = document.querySelectorAll('.proven-device > img:nth-child(n + 2):nth-child(-n + 4)');
		return;
		for (let i = 0; i < fans.length; i++) {
			fans[i].width = `${(device.width * 85) / 300}px`;
		}
	}

	function drawCustomLine() {
		const dr = document.querySelector('#dr');
		const por = document.querySelector('#por');
		const d3dh = document.querySelector('#d3dh');
		const wac = document.querySelector('#wac');
		const text = document.querySelector('.proven-text');

		const line1 = document.querySelector('#custom_line_1');
		const line2 = document.querySelector('#custom_line_2');
		const line3 = document.querySelector('#custom_line_3');
		const line4 = document.querySelector('#custom_line_4');
		const line5 = document.querySelector('#custom_line_5');
		var cl = gsap.timeline();
		cl.fromTo(
			line1,
			{
				height: '500px',
				top: `${
					dr.offsetTop - dr.offsetParent.offsetTop + dr.offsetHeight / 2 - text.offsetHeight
				}px`,
				left: '449px'
			},
			{
				height: '500px',
				top: `${
					dr.offsetTop - dr.offsetParent.offsetTop + dr.offsetHeight / 2 - text.offsetHeight
				}px`,
				duration: 0
			}
		);

		cl.fromTo(
			line2,
			{
				height: '1px',
				width: '10px',
				top: `${
					dr.offsetTop - dr.offsetParent.offsetTop + dr.offsetHeight / 2 - text.offsetHeight
				}px`,
				left: '449px'
			},
			{
				height: '1px'
			}
		);
		cl.play();
	}

	function sleep(milisecond) {
		return new Promise((resolve) => setTimeout(resolve, milisecond));
	}

	async function setTextAnimation() {
		let ch = document.querySelectorAll('.proven-text > div > img:first-child');
		let ch_color = document.querySelectorAll('.proven-text > div > img:last-child');

		for (let i = 0; i < lo.size(ch); i++) {
			gsap.to(ch[i], {
				opacity: 1,
				duration: 0.3,
				ease: 'none',
				onComplete: () => {
					gsap.to(ch[i], {
						opacity: 0.5,
						duration: 0,
						ease: 'none'
					});
				}
			});
			await sleep(250);
			gsap.to(ch_color[i], {
				opacity: 1,
				duration: 0.4,
				ease: 'none',
				onComplete: () => {
					gsap.to(ch_color[i], {
						opacity: 0,
						duration: 0.3,
						ease: 'none'
					});
				}
			});
		}
		await sleep(700);
		gsap.to(ch, {
			opacity: 1,
			duration: 0.5
		});
		await sleep(500);
		gsap.to(ch_color, {
			opacity: 1,
			duration: 0.5,
			onComplete: () => {
				gsap.to(ch_color, {
					opacity: 0,
					duration: 0.5,
					onComplete: () => {
						gsap.to(ch_color, {
							opacity: 1,
							duration: 0.5,
							onComplete: async () => {
								await sleep(200);
								gsap.to(ch_color, {
									opacity: 0,
									duration: 0
								});
								gsap.to(ch, {
									opacity: 0.5,
									duration: 0
								});
							}
						});
					}
				});
			}
		});
		await sleep(2350);
		await setTextAnimation();
	}

	async function setDefaultAnimation() {
		//drawCustomLine();
		let fans = document.querySelectorAll('.proven-device > img:nth-child(n + 2):nth-child(-n + 4)');
		for (let i = 0; i < fans.length; i++) {
			gsap.to(fans[i], {
				rotation: 360,
				duration: 1.5,
				ease: 'none',
				repeat: -1
			});
		}
		const animated_x = document.querySelector('#animated_x');
		const tl = gsap.timeline({ repeat: -1 });
		//const container = document.querySelector('')
		tl.to(animated_x, {
			left: 289 + 50 - 103,
			duration: 0.8,
			ease: 'none'
		})
			.to(animated_x, {
				top: 125 + 70,
				duration: 0.8,
				ease: 'none'
			})
			.to(animated_x, {
				left: 289 + 50 - 290,
				duration: 1.1,
				ease: 'none'
			})
			.to(animated_x, {
				top: 125 + 70 + 188,
				duration: 1.2,
				ease: 'none'
			})
			.to(animated_x, {
				left: 289 + 50 - 103,
				duration: 1.1,
				ease: 'none'
			})
			.to(animated_x, {
				top: 125 + 70 + 385,
				duration: 1.2,
				ease: 'none'
			})
			.to(animated_x, {
				left: 289 + 50 - 290,
				duration: 1.2,
				ease: 'none'
			})
			.to(animated_x, {
				top: 125 + 70 + 483,
				duration: 0.6,
				ease: 'none'
			})
			.to(animated_x, {
				left: 289 + 50,
				duration: 1.5,
				ease: 'none'
			})
			.to(animated_x, {
				top: 95,
				duration: 2.2,
				ease: 'none'
			});
		await setTextAnimation();
	}

	onMount(async () => {
		await setTimeout(() => {}, 0);
		setDefaultStyle();
		setDefaultAnimation();
	});
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="pt-20 pb-10 bg-cover bg-[url('$images/photos/technologi_background.png')]">
	<div class="flex w-full proven-container">
		<div class="proven-infor">
			<div class="proven-img">
				<div class="proven-text">
					<div class="characters">
						<img src={I} alt="I_uppercase" />
						<img src={I_color} alt="I_uppercase_color" />
					</div>
					<div class="characters">
						<img src={n} alt="n" />
						<img src={n_color} alt="n_color" />
					</div>
					<div class="characters">
						<img src={f} alt="f" />
						<img src={f_color} alt="f_color" />
					</div>
					<div class="characters">
						<img src={e} alt="e" />
						<img src={e_color} alt="e_color" />
					</div>
					<div class="characters">
						<img src={r} alt="r" />
						<img src={r_color} alt="r_color" />
					</div>
					<div class="characters">
						<img src={i} alt="i" />
						<img src={i_color} alt="i_color" />
					</div>
					<div class="characters">
						<img src={x} alt="x" />
						<img src={x_color} alt="x_color" />
					</div>
				</div>
				<div>
					<div class="proven-device">
						<img src={zerofrozr} alt="zerofrozr" />
						<img src={fan} alt="fan" />
						<img src={fan} alt="fan" />
						<img src={fan} alt="fan" />
						<img src={fan_x} alt="fan-x" />
						<img src={fan_x} alt="fan-x" />
						<img src={fan_x} alt="fan-x" />
					</div>
					<div class="proven-device">
						<img src={zerofrozr} alt="zerofrozr" />
						<img src={fan} alt="fan" />
						<img src={fan} alt="fan" />
						<img src={fan} alt="fan" />
						<img src={fan_x} alt="fan-x" />
						<img src={fan_x} alt="fan-x" />
						<img src={fan_x} alt="fan-x" />
					</div>
					<div class="proven-device">
						<img src={zerofrozr} alt="zerofrozr" />
						<img src={fan} alt="fan" />
						<img src={fan} alt="fan" />
						<img src={fan} alt="fan" />
						<img src={fan_x} alt="fan-x" />
						<img src={fan_x} alt="fan-x" />
						<img src={fan_x} alt="fan-x" />
					</div>
					<div class="proven-device">
						<img src={zerofrozr} alt="zerofrozr" />
						<img src={fan} alt="fan" />
						<img src={fan} alt="fan" />
						<img src={fan} alt="fan" />
						<img src={fan_x} alt="fan-x" />
						<img src={fan_x} alt="fan-x" />
						<img src={fan_x} alt="fan-x" />
					</div>
					<img src={line} alt="line" />
					<img id="animated_x" src={animated_x} alt="animated-x" />
					<div id="custom_line_1" />
					<div id="custom_line_2" />
					<div id="custom_line_3" />
					<div id="custom_line_4" />
					<div id="custom_line_5" />
					<img src={line_2} alt="line_2" />
				</div>
			</div>
			<div>
				<div>
					<div class="proven-header">
						<img src={BG_Left} alt="BG-left" />
						<div><div>Proven Technologies</div></div>
						<img src={BG_Right} alt="BG-right" />
					</div>
					<div class="proven-tech">
						<div id="dr">
							<img src={decentralized_render} alt="decentralized-render" />
							<div>Decentralized Render</div>
						</div>
						<div id="por">
							<img src={proof_of_rendering} alt="proof_of_rendering" />
							<div>Proof Of Rendering</div>
						</div>
						<div id="d3dh">
							<img src={decentralized_3d_data_hub} alt="decentralized_3d_data_hub" />
							<div>Decentralized 3D Data Hub</div>
						</div>
						<div id="wac">
							<img src={webvr_auto_content} alt="webvr_auto_content" />
							<div>WebVR Auto-content</div>
						</div>
					</div>
				</div>
				<div>
					<div class="proven-video">
						<video autoplay controls muted playsinline loop>
							<source src={ai} type="video/mp4" />
						</video>
					</div>
					<div>
						<img src={House3D} alt="house-3d" />
						<img src={Actif3D} alt="actif-3d" />
					</div>
				</div>
			</div>
		</div>

		<div class="proven-more-infor">
			<div>
				<div class="infor-title">260,000+ USER</div>
				<div class="infor-desc">from Southeast Asia and India</div>
			</div>
			<div>
				<div class="infor-title">20,000+ pro</div>
				<div class="infor-desc">active professional designers</div>
			</div>
			<div>
				<div class="infor-title">1,000,000+ designs</div>
				<div class="infor-desc">design renderings per year using H3D Distributed Rendering</div>
			</div>
			<div>
				<div class="infor-title">500,000+ 3D models</div>
				<div class="infor-desc">of furniture and home accessories already inputted</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.proven-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 24px;
	}

	.proven-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5); /* Màu đen với độ trong suốt 50% */
	}

	.proven-infor {
		//width: 100%;
		width: 1200px;
		display: flex;
		flex-direction: row;
	}

	.proven-infor > div:first-child {
		flex: 1;
	}

	.proven-infor > div:last-child {
		width: 60%;
		display: flex;
		flex-direction: column;
		gap: 24px;
		position: relative;
	}

	.proven-infor > div:last-child > div:first-child {
		border: 2px solid rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(6px);
	}

	.proven-header {
		height: 72px;
		width: 100%;
		display: flex;
	}

	.proven-header > div {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.proven-header > div > div {
		text-align: center;
		font-size: 32px;
		font-weight: 600;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 8.85%, #fff 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.proven-tech {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 23px;
		padding: 40px;
	}

	.proven-tech > div {
		display: flex;
		gap: 24px;
		align-items: center;
		padding: 8px;
		border: 1px solid rgba(244, 244, 244, 0.56);
		background: radial-gradient(
			100% 100% at 50% 0%,
			rgba(255, 255, 255, 0.12) 0%,
			rgba(255, 255, 255, 0) 100%
		);
	}

	.proven-tech > div > div {
		color: #fff;
		font-size: 24px;
		font-weight: 400;
	}

	.proven-video {
		width: 256px;
		height: 256px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.proven-video > video {
		height: 256px;
		max-width: none;
	}

	.proven-infor > div:last-child > div:last-child {
		display: flex;
		gap: 24px;
	}

	.proven-infor > div:last-child > div:last-child > div:last-child {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 32px;
		border: 1px solid rgba(244, 244, 244, 0.12);
		background: radial-gradient(
			100% 100% at 50% 0%,
			rgba(255, 255, 255, 0.12) 0%,
			rgba(255, 255, 255, 0) 100%
		);
	}

	.proven-text {
		display: flex;
		gap: 13px;
		padding: 20px 0;
	}

	.proven-text > div {
		display: flex;
		align-items: flex-end;
		position: ralative;
	}

	.proven-text > div > img:first-child {
		opacity: 0.5;
	}

	.proven-text > div > img:last-child {
		position: absolute;
		opacity: 0;
	}

	.proven-img > div:last-child {
		padding: 65px 0;
		display: flex;
		flex-direction: column;
		gap: 60px;
		position: relative;
	}

	.proven-device {
		width: 300px;
		position: relative;
		z-index: 5;
	}

	.proven-device > img:nth-child(n + 2):nth-child(-n + 4) {
		width: calc(calc(100%) * 85 / 300);
		position: absolute;
		top: 12px;
	}

	.proven-device > img:nth-child(2) {
		left: 11px;
	}

	.proven-device > img:nth-child(3) {
		left: 104px;
	}

	.proven-device > img:nth-child(4) {
		left: 197px;
	}

	.proven-device > img:nth-child(n + 5):nth-child(-n + 7) {
		width: calc(calc(100%) * 23 / 300);
		position: absolute;
		top: 44px;
	}

	.proven-device > img:nth-child(5) {
		left: 42px;
	}

	.proven-device > img:nth-child(6) {
		left: 135px;
	}

	.proven-device > img:nth-child(7) {
		left: 228px;
	}

	.proven-img > div:last-child > img:nth-child(5) {
		position: absolute;
		top: 125px;
		left: 50px;
		z-index: 1;
	}

	.proven-img > div:last-child > img:nth-child(6) {
		width: 60px;
		position: absolute;
		z-index: 2;
		top: 95px;
		left: calc(289px + 50px);
		transform: translate(-50%, 0);
	}

	.proven-img > div:last-child > div:nth-child(n + 7):nth-child(-n + 11) {
		width: 1px;
		height: 0;
		position: absolute;
		z-index: 10;
		//background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 8.85%, #fff 100%);
		background: #fff;
	}

	.proven-img > div:last-child > img:last-child {
		position: absolute;
		top: 80px;
		left: 340px;
		z-index: 10;
	}

	.proven-more-infor {
		width: 1200px;
		display: flex;
		justify-content: space-between;
	}

	.proven-more-infor > div {
		display: flex;
		flex-direction: column;
		width: 282px;
		height: 120px;
		padding: 16px;
		border: 1px solid rgba(244, 244, 244, 0.15);
		background: radial-gradient(
			100% 100% at 50% 0%,
			rgba(255, 255, 255, 0.12) 0%,
			rgba(255, 255, 255, 0) 100%
		);
	}

	.infor-title {
		color: #fff;
		font-size: 22px;
		font-weight: 700;
		line-height: 50px; /* 227.273% */
		text-transform: uppercase;
	}

	.infor-desc {
		color: #fff;
		font-size: 16px;
		font-weight: 400;
		line-height: normal;
		opacity: 0.6;
	}
</style>
