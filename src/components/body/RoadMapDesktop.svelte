<script>
    import Devider from '$images/icons/Divider.svg';
    import Dot from '$images/icons/Dot.svg';
    import Saos from "saos";

    const roadMap = [
        {
            title: 'Inferix is born',
            description: ['Research cloud GPU market for \n' +
            '  shortage of GPU in AI & Media processing ', 'Engage with Blockchain experts for\n' +
            '  Decentralized GPU solution \n', 'Talked with other founders about \n' +
            '  forming the Inferix team ']
        },
        {
            title: 'MVP',
            description: ['Inferix Team is formed with MVP \nconcept', 'Finalize the MVP release date', 'Start the marketing & partnership \n' +
            '  activities. \n', 'Start the seed phase of funding']
        },
        {
            title: 'Close beta & Blockchain',
            description: [
                'Decentralized GPU MVP release', 'Cloud-based 3D rendering MVP', 'Increase the partners in rendering & AI'
            ]
        },
        {
            title: 'Official Launching',
            description: [
                'Beta service release', 'Chain integration(Mainnet)', 'GPU for AI inference', 'Payment & Reward system '
            ]
        }
    ];
    const markers = ['Q2, 2023', 'Q3, 2023', 'Q4, 2023', 'Q1, 2024'];
</script>

<div class="bg-darkGrey">
    <div id="roadmap" class="md:block hidden pt-[220px] container mx-auto">
        <Saos once top="200" animation={"puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
            <p class="text-secondary text-[2.5rem] text-center font-bold font-outfit">Roadmap</p>
        </Saos>
        <Saos once top="250" animation={"puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
            <div
                    class="w-full lg:max-w-[1331px] max-w-full h-[1px] bg-secondary mt-[240px] relative mx-auto"
            >
                <div class="grid grid-cols-4 mx-auto absolute bottom-[-11px]">
                    {#each roadMap as map (map.title)}
                        <div class="flex lg:gap-4 gap-2">
                            <img src={Devider} alt="devider" class="h-full"/>
                            <div class="flex box-border mt-[24px] mr-[3px]">
                                <ul class="flex flex-col font-outfit font-normal text-left text-base leading-default">
                                    {#each map.description as desc (desc)}
                                        <li class="">
                                            <p
                                                    class={`${
													map == roadMap[roadMap.length - 1] ? 'whitespace-nowrap' : ''
												}`}
                                            >
                                                {@html desc}
                                            </p>
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        </div>
                    {/each}
                    <div class="grid grid-cols-4 mx-auto absolute bottom-[-30px] w-full">
                        {#each markers as marker (marker)}
                            <p class="text-left text-base text-secondary font-outfit">{marker}</p>
                        {/each}
                    </div>
                </div>
                <img src={Dot} alt="dot" class="absolute right-[-6.5px] bottom-[-6.5px]"/>
            </div>
        </Saos>
    </div>
</div>

<style lang="postcss">
    ul {
        list-style-type: '· ';
    }
</style>
