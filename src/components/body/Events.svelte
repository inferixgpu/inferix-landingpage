<script lang="ts">
	import { onMount } from 'svelte';

	import r3alworld from '$images/png/events/r3alworld.png';
	import depin_meetup from '$images/png/events/depin_meetup.png';
	import depin_house from '$images/png/events/depin_house.png';
	import depin_hh from '$images/png/events/depin_hh.png';
	import depin_house_ethcc from '$images/png/events/depin_house_ethcc.png';
	import chat_team from '$images/png/events/chat_team.png';
	import dimo from '$images/png/events/dimo.png';
	import depin_mainstream from '$images/png/events/depin_mainstream.png';
	import depin_state from '$images/png/events/depin_state.png';

	let screenSize: number;

	const EVENTS = [
		{
			id: 1,
			title: 'R3al World at ETHDenver',
			time: 'Feb 2024',
			img: r3alworld,
			href: 'https://x.com/InferixGPU/status/1763027628666286199'
		},
		{
			id: 2,
			title: 'VietNam DePIN Meetup',
			time: 'Apr 2024',
			img: depin_meetup,
			href: 'https://x.com/InferixGPU/status/1784508015988932962'
		},
		{
			id: 3,
			title: 'R3al World DePIN House at Consensus2024',
			time: 'May 2024',
			img: depin_house,
			href: 'https://x.com/InferixGPU/status/1796107569347387890'
		},
		{
			id: 4,
			title: 'VietNam DePIN Happy Hour',
			time: 'JUN 2024',
			img: depin_hh,
			href: 'https://x.com/InferixGPU/status/1800132006959038688'
		},
		{
			id: 5,
			title: 'R3al World DePIN House EthCC',
			time: 'JUL 2024',
			img: depin_house_ethcc,
			href: 'https://x.com/iotex_io/status/1811485883951939860'
		},
		{
			id: 6,
			title: 'InferiX Co-Founders chat with IoTex team on R3AL...',
			time: 'Apr 2024',
			img: chat_team,
			href: 'https://www.youtube.com/watch?v=Zc_VzUnJPSw'
		},
		{
			id: 7,
			title: 'DePINs: DIMO Does What? - by WOLF Web',
			time: 'Apr 2024',
			img: dimo,
			href: 'https://x.com/InferixGPU/status/1785563153763565889'
		},
		{
			id: 8,
			title: 'Bringing DePIN to the mainstream: DePIN Coho...',
			time: 'Apr 2024',
			img: depin_mainstream,
			href: 'https://x.com/iotex_io/status/1793306757407654388'
		},
		{
			id: 9,
			title: 'Inferix & Distributed GPUs - WHere Ya Gonna Render...',
			time: 'Apr 2024',
			img: depin_state,
			href: 'https://www.youtube.com/watch?v=ybT9VJKxBNM'
		}
	];

	onMount(async () => {
		addEventScrollRoadmap();
	});

	let scrolling = false;
	let startX = 0;

	function addEventScrollRoadmap() {
		const content = document.getElementById('content-mobile');
		if (!content) return;
		content.addEventListener('mousedown', (e) => {
			scrolling = true;
			startX = e.pageX + content.scrollLeft;
		});

		content.addEventListener('mousemove', (e) => {
			if (!scrolling) return;
			const x = startX - e.pageX;
			content.scrollLeft = x;
		});

		content.addEventListener('mouseup', () => {
			scrolling = false;
		});

		content.addEventListener('mouseleave', () => {
			scrolling = false;
		});
	}
</script>

<svelte:window bind:innerWidth={screenSize} />
<div class="events">
	<div class="title">Events & Spaces</div>
	<div class="content">
		{#each EVENTS as event (event.id)}
			<div class="event-item">
				<img src={event.img} />
				<div>{event.time}</div>
				<div>{event.title}</div>
				<div style="flex: 1;"></div>
				<div><a href={event.href} target="_blank">Viewmore ⟶</a></div>
			</div>
		{/each}
	</div>
	<div class="content-mobile" id="content-mobile">
		<div class="moved_events" id="moved_roadmap">
			{#each EVENTS as event (event.id)}
				<div class="event-item">
					<img src={event.img} />
					<div>{event.time}</div>
					<div>{event.title}</div>
					<div style="flex: 1;"></div>
					<div><a href={event.href} target="_blank">Viewmore ⟶</a></div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.events {
		width: 100%;
		max-width: 1180px;
		margin: auto;
		font-family: Inter, sans-serif;
		margin-top: 190px;

		.title {
			text-align: left;
			font-size: 72px;
			font-weight: 600;
			line-height: 108px;
			color: #ffffff;
			margin-bottom: 40px;
		}

		.content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			gap: 16px;

			.event-item {
				width: 380px;
				height: 396px;
				background: radial-gradient(
					100% 100% at 0% 0%,
					rgba(0, 214, 217, 0.2) 0%,
					rgba(0, 192, 133, 0) 100%
				);
				border: 3px solid rgba(0, 214, 217, 0.2);

				display: flex;
				flex-direction: column;
				padding: 24px;
				letter-spacing: 0.5px;

				> img {
					width: 100%;
					margin-bottom: 24px;
				}

				> div:nth-child(2) {
					font-size: 16px;
					font-weight: 600;
					line-height: 24px;
					color: #888888;
					text-transform: uppercase;
					margin-bottom: 5px;
				}

				> div:nth-child(3) {
					font-size: 24px;
					font-weight: 700;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}

				> div:nth-child(5) {
					> a {
						font-size: 16px;
						font-weight: 600;
						line-height: 24px;
						color: #00f3ff;
						transition: opacity 0.2s ease-in-out;

						&:hover {
							opacity: 0.8;
						}
					}
				}
			}
		}
	}

	#content-mobile {
		display: none;
	}

	@media screen and (max-width: 1280px) {
		.events {
			max-width: 1200px;
			margin: 0;
			padding: 0 40px;

			.content {
				.event-item {
					width: 330px;
				}
			}
		}
	}

	@media screen and (max-width: 1120px) {
		.events {
			.content {
				.event-item {
					width: 295px;
				}
			}
		}
	}

	@media screen and (max-width: 1024px) {
		.events {
			.title {
				font-size: 56px;
				line-height: 84px;
			}
			> .content {
				display: none;
			}
		}

		#content-mobile {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 16px;
			overflow: scroll;
			-ms-overflow-style: none;
			scrollbar-width: none;
			cursor: default;
			user-select: none;

			> .moved_events {
				display: flex;
				gap: 16px;

				> .event-item {
					width: 369px;
					height: 396px;
					background: radial-gradient(
						100% 100% at 0% 0%,
						rgba(0, 214, 217, 0.2) 0%,
						rgba(0, 192, 133, 0) 100%
					);
					border: 3px solid rgba(0, 214, 217, 0.2);

					display: flex;
					flex-direction: column;
					padding: 24px;
					letter-spacing: 0.5px;

					> img {
						width: 100%;
						margin-bottom: 24px;
					}

					> div:nth-child(2) {
						font-size: 16px;
						font-weight: 600;
						line-height: 24px;
						color: #888888;
						text-transform: uppercase;
						margin-bottom: 15px;
					}

					> div:nth-child(3) {
						flex: 1;
						font-size: 24px;
						font-weight: 700;
					}

					> div:nth-child(4) {
						> a {
							font-size: 16px;
							font-weight: 600;
							line-height: 24px;
							color: #00f3ff;
							transition: opacity 0.2s ease-in-out;

							&:hover {
								opacity: 0.8;
							}
						}
					}
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		.events {
			padding: 0 10px;
			.title {
				font-size: 32px;
				line-height: 48px;
			}

			#content-mobile {
				> .moved_events {
					> .event-item {
						width: 340px;
						height: 368px;
						> img {
							margin-bottom: 15px;
						}

						> div:nth-child(2) {
							font-size: 14px;
							font-weight: 600;
							line-height: 21px;
							color: #888888;
							text-transform: uppercase;
							margin-bottom: 10px;
						}

						> div:nth-child(3) {
							flex: 1;
							font-size: 20px;
							font-weight: 700;
						}

						> div:nth-child(4) {
							> a {
								font-size: 14px;
								font-weight: 600;
								line-height: 24px;
								color: #00f3ff;
								transition: opacity 0.2s ease-in-out;

								&:hover {
									opacity: 0.8;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
