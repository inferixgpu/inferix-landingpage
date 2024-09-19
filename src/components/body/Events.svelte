<script lang="ts">
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
			href: 'https://www.youtube.com/watch?v=PjISsxUgWbU'
		},
		{ id: 2, title: 'VietNam DePIN Meetup', time: 'Apr 2024', img: depin_meetup, href: '' },
		{
			id: 3,
			title: 'R3al World DePIN House at Consensus2024',
			time: 'May 2024',
			img: depin_house,
			href: ''
		},
		{ id: 4, title: 'VietNam DePIN Happy Hour', time: 'JUN 2024', img: depin_hh, href: '' },
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
</script>

<svelte:window bind:innerWidth={screenSize} />
<div class="events">
	<div class="title">Events</div>
	<div class="content">
		{#each EVENTS as event (event.id)}
			<div class="event-item">
				<img src={event.img} />
				<div>{event.time}</div>
				<div>{event.title}</div>
				<div><a href={event.href} target="_blank">Viewmore ⟶</a></div>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.events {
		width: 100%;
		max-width: 1136px;
		margin: auto;

		.title {
			text-align: center;
			font-size: 32px;
			font-weight: 600;
			line-height: 48px;
			background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 8.85%, #fff 100%);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			margin-bottom: 40px;
		}

		.content {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			flex-wrap: wrap;
			gap: 5px;

			.event-item {
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
				justify-content: space-between;

				> img {
					width: 100%;
				}

				> div:nth-child(2) {
					font-size: 16px;
					font-weight: 600;
					line-height: 24px;
					color: #888888;
				}

				> div:nth-child(3) {
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

	@media screen and (max-width: 1280px) {
		.events {
			width: 90%;

			.content {
				.event-item {
					width: 330px;
				}
			}
		}
	}
</style>
