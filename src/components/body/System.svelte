<script lang="ts">
	import WorksGroup from '$images/icons/WorksGroup.svg';
	import WorksGroupMobile from '$images/png/WorkgroupMobile.png';
	import Blender from '$images/photos/applications/blender.png';
	import House3d from '$images/photos/applications/house3d.png';
	import ThreeDMax from '$images/photos/applications/3dmax.png';
	import SketchUp from '$images/photos/applications/sketchup.png';
	import Babylon from '$images//photos/applications/babylon.png';
	import ThreeJs from '$images/photos/applications/threejs.png';
	import Unreal from '$images/photos/applications/unreal.png';
	import Unity from '$images/photos/applications/unity.png';
	import Worker from '$images/icons/Worker.svg';
	import Arrow1 from '$images/icons/Arrow1.svg';
	import Arrow2 from '$images/icons/Arrow2.svg';
	import Arrow3 from '$images/icons/Arrow3.svg';
	import how_work_1 from '$images/png/how_work_1.png';
	import how_work_2 from '$images/png/how_work_2.png';
	import prev_grey from '$images/icons/prev-grey.svg';
	import prev_light from '$images/icons/prev-light.svg';
	import next_grey from '$images/icons/next-grey.svg';
	import next_light from '$images/icons/next-light.svg';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let screenSize: number;
	let index = 1;
	let intervalId;

	function handlePrev() {
		prevSlide();
		if (index == 2) index--;
		else index = 2;
		setDefault();
		resetInterval();
	}

	function prevSlide() {
		if (index == 2) {
			const img1 = document.querySelector('.system-content-img > img:first-child');
			const img2 = document.querySelector('.system-content-img > img:last-child');
			gsap.to(img2, {
				opacity: 0,
				duration: 0.5,
				ease: 'none'
			});
			gsap.to(img1, {
				opacity: 1,
				duration: 0.5,
				ease: 'none'
			});
		} else {
			const img2 = document.querySelector('.system-content-img > img:first-child');
			const img1 = document.querySelector('.system-content-img > img:last-child');
			gsap.to(img2, {
				opacity: 0,
				duration: 0.5,
				ease: 'none'
			});
			gsap.to(img1, {
				opacity: 1,
				duration: 0.5,
				ease: 'none'
			});
		}
	}

	function handleNext() {
		prevSlide();
		if (index == 1) index++;
		else index = 1;
		setDefault();
		resetInterval();
	}

	function setDefault() {
		const dot1 = document.getElementById('slide-dot-1');
		const dot2 = document.getElementById('slide-dot-2');
		if (index == 1) {
			dot1.style.backgroundColor = '#fefefe';
			dot2.style.backgroundColor = 'black';
		} else {
			dot1.style.backgroundColor = 'black';
			dot2.style.backgroundColor = '#fefefe';
		}
	}

	function resetInterval() {
		clearInterval(intervalId);
		autoAnimate();
	}

	function autoAnimate() {
		intervalId = setInterval(() => {
			prevSlide();
			if (index == 1) index++;
			else index = 1;
			setDefault();
		}, 5000);
	}

	onMount(() => {
		// window.onbeforeunload = function () {
		// 	window.scrollTo(0, 0);
		// };
		setDefault();
		autoAnimate();
	});
</script>

<svelte:window bind:innerWidth={screenSize} />
<div class="mx-auto box-border container md:mt-[160px] mt-[80px] md:mb-[160px] mb-[80px]">
	<div class="overflow-hidden mx-auto relative">
		<div
			class="flex md:justify-center justify-center font-bold mb-[20px] md:text-[48px] text-[32px]"
		>
			<p class="system-title">How Inferix Works</p>
		</div>
	</div>
	<div class="system-content">
		<div class="system-content-img">
			<img src={how_work_1} alt="how_work_1" loading="lazy" />
			<img src={how_work_2} alt="how_work_2" loading="lazy" />
		</div>
		<div class="how-work-btn">
			<div role="button" tabindex="0" class="prev" on:click={() => handlePrev()}>
				<img src={prev_grey} alt="prev-grey" />
				<img src={prev_light} alt="prev-light" />
			</div>
			<div class="slide">
				<div id="slide-dot-1" />
				<div id="slide-dot-2" />
			</div>
			<div role="button" tabindex="0" class="next" on:click={() => handleNext()}>
				<img src={next_grey} alt="next-grey" />
				<img src={next_light} alt="next-light" />
			</div>
		</div>
	</div>
</div>

<style>
	.system-title {
		text-align: center;
		font-size: 32px;
		font-weight: 600;
		line-height: 48px; /* 150% */
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 8.85%, #fff 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.system-content {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.system-content-img {
		@apply lg:mx-40px xl:mx-auto;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;

		& > img:last-child {
			position: absolute;
			top: 50%;
			left: 50%;
			opacity: 0;
			transform: translate(-50%, -50%);
		}
	}

	.how-work-btn {
		display: flex;
		width: 30%;
		margin-top: 55px;
		display: flex;
		justify-content: space-between;
	}

	.prev,
	.next {
		position: relative;
		cursor: pointer;
		height: 100%;
		display: flex;
		align-items: center;

		&:hover > img:last-child {
			opacity: 1;
		}
	}

	.prev > img:last-child,
	.next > img:last-child {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	.slide {
		display: flex;
		gap: 15px;
		margin: auto;
	}

	.slide > div {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 1px solid #ddd;
	}

	@media screen and (max-width: 768px) {
		.system-title {
			font-size: 24px;
		}
	}

	@media screen and (max-width: 600px) {
		.slide {
			gap: 5px;
		}
		.slide > div {
			width: 3vw;
			height: 3vw;
		}
		.prev > img,
		.next > img {
			width: 6vw;
			height: 6vw;
		}
	}
</style>
