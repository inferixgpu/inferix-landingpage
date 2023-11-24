<script lang="ts">
	import Saos from 'saos';

	import FreddieNguyen from '$images/avatars/freddie_nguyen.svg';
	import NguyenBui from '$images/avatars/nguyen_bui.svg';
	import LeMinh from '$images/avatars/le_minh.svg';
	import PavenDo from '$images/avatars/paven_do.svg';
	import EricTa from '$images/avatars/eric_ta.svg';
	import HarryDuong from '$images/avatars/harry_duong.svg';
	import AntheaNguyen from '$images/avatars/anthea_nguyen.svg';
	import JayDo from '$images/avatars/yay_do.svg';
	import SteveVu from '$images/avatars/steve_vu.svg';
	import DavidNgo from '$images/avatars/david_ngo.svg';
	import ThanhLe from '$images/avatars/thanh_le.svg';
	import JennyHanhNguyen from '$images/avatars/jenny_hanh_nguyen.svg';
	import DuongPa from '$images/avatars/DuongPa.svg';

	let screenSize: number;

	const teams = [
		{
			title: 'Freddie Nguyen',
			avatar: FreddieNguyen,
			name: 'Freddie Nguyen',
			position: 'CEO/CTO',
			description: [
				'Founder, Actif3D, House3D',
				'3D/VR plafform, 15+ years of experience in software development'
			]
		},
		{
			title: 'Nguyen Bui',
			avatar: NguyenBui,
			name: 'Nguyen Bui',
			position: 'CGO',
			description: [
				'Co-Founder at DeGa Labs',
				'Ex-CMO at TomoChain/Coin 98',
				'MBA at NTU, Singapore'
			]
		},
		{
			title: 'Le Minh',
			avatar: LeMinh,
			name: 'Le Minh',
			position: 'COO',
			description: [
				'Serial Entrepreneur',
				'Bachelor of Computer Science, Hanoi University of Technology'
			]
		},
		{
			title: 'Paven Do',
			avatar: PavenDo,
			name: 'Paven Do',
			position: 'Blockchain Tech Advisor',
			description: [
				'Head of Development, FPT Blockchain Labs',
				'PhD in Applied Mathematics, HKUST, Hong Kong',
				'Blockchain Consensus Researcher'
			]
		},
		{
			title: 'Eric Ta',
			avatar: EricTa,
			name: 'Eric Ta',
			position: 'Principal Enginneer',
			description: [
				'PhD in Computer Science, University de Lorraine, France',
				'Programming Algorirthm expert',
				'10 years working as Principal Engineer in Deep techs startups'
			]
		},
		{
			title: 'Harry Duong',
			avatar: HarryDuong,
			name: 'Harry Duong',
			position: 'AI Expert',
			description: [
				'15 years working as technical leader of several startups in Cloud computing, AI and Blockchain'
			]
		},
		{
			title: 'Anthea Nguyen',
			avatar: AntheaNguyen,
			name: 'Anthea Nguyen',
			position: 'Frontend & Application Senior',
			description: ['7 years working in 3D front end development']
		},
		{
			title: 'Jay Do',
			avatar: JayDo,
			name: 'Jay Do',
			position: '3D Rendering Expert',
			description: ['Solution Architects, 3D/VR Application programming senior']
		},
		{
			title: 'Steve Vu',
			avatar: SteveVu,
			name: 'Steve Vu',
			position: 'UI/UX Design Expert',
			description: [
				'An expert in UI/UX and artwork creating',
				'15 years working experience through big projects'
			]
		},
		{
			title: 'David Ngo',
			avatar: DavidNgo,
			name: 'David Ngo',
			position: 'Application Programming Senior',
			description: ['High work experience in app programing in FPT, Viettel corporations']
		},
	
		{
			title: 'Duong PA',
			avatar: DuongPa,
			name: 'Duong PA',
			position: 'Blockchain Dev Senior',
			description: [
				'High work experience in Blockchain and DApp development',
			]
		},
		{
			title: 'Jenny Hanh Nguyen',
			avatar: JennyHanhNguyen,
			name: 'Jenny Hanh Nguyen',
			position: 'Marketing Team Lead',
			description: [
				'Marketing & Business Development',
				'10 years working experience through web2 and web3 projects'
			]
		}
	];
	const number_desktop = [0, 1, 2,3];
	const number_tablet = [0, 1, 2, 3];
	const number_tablet2 = [0, 1, 2, 3, 4, 5];
	const number_mobile = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="bg-darkGrey">
	<div id="team" class="md:block pt-[220px] container mx-auto">
		<Saos once top="200" animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
			<p class="text-center font-pre font-extrabold md:text-[2.5rem] text-2xl">Team</p>
		</Saos>
		<Saos once top="350" animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
			<div class="flex mx-auto teams-table">
				{#if screenSize > 1800}
					{#each number_desktop as n}
						<div class="flex teams-table-row">
							{#each teams.slice(n * 4, (n + 1) * 4) as t (t.title)}
								<div class="flex teammate">
									<img src={t.avatar} alt={t.avatar} class="h-full" />
									<div class="teammate-name">{t.name}</div>
									<div class="teammate-position">{t.position}</div>
									<div class="flex box-border mt-[24px] ml-[20px] teammate-description">
										<ul
											class="flex flex-col font-outfit font-normal text-left text-base leading-default"
										>
											{#each t.description as desc (desc)}
												<li>
													<p>
														{@html desc}
													</p>
												</li>
											{/each}
										</ul>
									</div>
								</div>
							{/each}
						</div>
					{/each}
				{:else if screenSize > 1280}
					{#each number_tablet as n}
						<div class="flex teams-table-row">
							{#each teams.slice(n * 3, (n + 1) * 3) as t (t.title)}
								<div class="flex teammate">
									<img src={t.avatar} alt={t.avatar} class="h-full" />
									<div class="teammate-name">{t.name}</div>
									<div class="teammate-position">{t.position}</div>
									<div class="flex box-border mt-[24px] ml-[20px] teammate-description">
										<ul
											class="flex flex-col font-outfit font-normal text-left text-base leading-default"
										>
											{#each t.description as desc (desc)}
												<li>
													<p>
														{@html desc}
													</p>
												</li>
											{/each}
										</ul>
									</div>
								</div>
							{/each}
						</div>
					{/each}
				{:else if screenSize > 768}
					{#each number_tablet2 as n}
						<div class="flex teams-table-row">
							{#each teams.slice(n * 2, (n + 1) * 2) as t (t.title)}
								<div class="flex teammate">
									<img src={t.avatar} alt={t.avatar} class="h-full" />
									<div class="teammate-name">{t.name}</div>
									<div class="teammate-position">{t.position}</div>
									<div class="flex box-border mt-[24px] ml-[20px] teammate-description">
										<ul
											class="flex flex-col font-outfit font-normal text-left text-base leading-default"
										>
											{#each t.description as desc (desc)}
												<li>
													<p>
														{@html desc}
													</p>
												</li>
											{/each}
										</ul>
									</div>
								</div>
							{/each}
						</div>
					{/each}
				{:else}
					{#each number_mobile as n}
						<div class="flex teams-table-row">
							{#each teams.slice(n, n + 1) as t (t.title)}
								<div class="flex teammate">
									<img src={t.avatar} alt={t.avatar} class="h-full" />
									<div class="teammate-name">{t.name}</div>
									<div class="teammate-position">{t.position}</div>
									<div class="flex box-border mt-[24px] ml-[20px] teammate-description">
										<ul
											class="flex flex-col font-outfit font-normal text-left text-base leading-default"
										>
											{#each t.description as desc (desc)}
												<li>
													<p>
														{@html desc}
													</p>
												</li>
											{/each}
										</ul>
									</div>
								</div>
							{/each}
						</div>
					{/each}
				{/if}
			</div>
		</Saos>
	</div>
</div>

<style lang="postcss">
	ul {
		list-style-type: '· ';
	}

	@media screen and (max-width: 768px) {
		.teams-table > .teams-table-row {
			justify-content: center;
		}
	}
</style>
