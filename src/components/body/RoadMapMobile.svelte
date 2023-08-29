<script>
	import DeviderMobile from '$images/icons/DividerMobile.svg';
	import Dot from '$images/icons/Dot.svg';

	const roadMap = [
        {
            title: 'Inferix is born',
            description: [],
            mark: '23.3Q'
        },
        {
            title: 'MVP',
            description: ['Decentralized GPU farm', 'Cloud based 3D redering'],
            mark: '23.4Q'
        },
        {
            title: 'Close beta & Blockchain',
            description: [
                'Close beta service',
                'Chain(TBD) integration(Testnet)',
                'GPU provider package',
                'TGE'
            ],
            mark: '24.1Q'
        },
        {
            title: 'Official Launching',
            description: [
                'Ready to serve',
                'Chain integration(Mainnet)',
                'Al inference open market',
                'Payment & Reward'
            ],
            mark: '24.2Q'
        }
    ];
</script>

<div
        id="roadmap"
        class="pt-[48px] w-full bg-darkGrey mx-auto md:hidden block md:px-0 px-5 box-border pb-[100px]"
>
    <p class="text-secondary text-base text-center font-bold font-outfit">Roadmap</p>
    <div class="container mt-[39px] relative z-10">
        <div class="flex flex-col justify-center items-center gap-10 mx-auto w-ful contentContainer">
            {#each roadMap as map (map.title)}
                <div class="gridContainer gap-4">
                    <p class="text-left text-base text-secondary font-outfit mt-[-2px]">{map.mark}</p>
                    <div>
                        <img src={DeviderMobile} alt="devider" class="h-5 ml-1 w-[105px]"/>
                        <div class="divider w-full flex items-end">
                            {#if map == roadMap[roadMap.length - 1]}
                                <img src={Dot} alt="dot" class=" w-[7px] h-[7px] mb-[-3.5px] ml-[-4px]"/>
                            {/if}
                        </div>
                    </div>
                    <div class="flex flex-1 lg:gap-4 gap-2">
                        <div class="flex flex-1 box-border">
                            <div class="flex flex-col font-outfit box-border pl-4 linear">
                                <p class="font-bold text-sm">{map.title}</p>
                                <ul class="flex flex-col mt-2 list-none text-[#B9B9B9]">
                                    {#each map.description as desc (desc)}
                                        <li>
                                            <p class="font-normal text-[0.625rem] leading-[17px]">{desc}</p>
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style lang="postcss">
    .gridContainer {
        grid-template-columns: 45px 20% 165px;
        display: grid;
        width: fit-content;
        max-width: 100%;
    }

    li > p:before {
        content: '·';
        font-weight: bold;
        display: inline-block;
        width: 10px;
    }

    .divider {
        border-left: 1px solid var(--green);
        height: calc(100% + 40px);
        margin-left: 7.5px;
        margin-top: -5px;
    }

    .linear {
        flex: 1;
        border-radius: 8px;
        background: linear-gradient(106deg, #282d29 0%, #1c1c1c 100%);
    }

    .contentContainer > div:nth-child(1) .linear {
        padding-top: 6px;
    }

    .contentContainer > div:nth-child(2) .linear {
        padding-top: 14px;
        padding-bottom: 13px;
    }

    .contentContainer > div:nth-child(3) .linear,
    .contentContainer > div:nth-child(4) .linear {
        padding-top: 17px;
        padding-bottom: 17px;
    }

    @media screen and (max-width: 390px) {
        .gridContainer {
            width: 100%;
        }
    }
</style>
