<script lang="ts">
    import Saos from 'saos';

    import FreddieNguyen from '$images/avatars/freddie_nguyen.png';
    import NguyenBui from '$images/avatars/nguyen_bui.png';
    import LeMinh from '$images/avatars/le_minh.png';
    import PavenDo from '$images/avatars/paven_do.png';
    import EricTa from '$images/avatars/eric_ta.png';
    import HarryDuong from '$images/avatars/harry_duong.png';
    import AntheaNguyen from '$images/avatars/athena_nguyen.png';
    import JayDo from '$images/avatars/yay_do.png';
    import SteveVu from '$images/avatars/steve_vu.png';
    import DavidNgo from '$images/avatars/david_ngo.png';
    import ThanhLe from '$images/avatars/thanh_le.svg';
    import JennyHanhNguyen from '$images/avatars/jenny_hanh_nguyen.png';
    import DuongPa from '$images/avatars/DuongPa.png';
    import ThomasPham from '$images/avatars/thomas_pham.png';

    let screenSize: number;

    const teamLeaders = [
        {
            title: 'Freddie Nguyen',
            avatar: FreddieNguyen,
            name: 'Freddie Nguyen',
            position: 'CEO/CTO',
            description: [
                'Founder, Actif3D, House3D',
                '3D/VR plafform, 15+ years of experience in software development',
                '8 years experience in GPU rendering techs'
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
                '6 years experience in growing web3 businesses globally',
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
                'High experience in business operation: cxview.ai, eway.vn, osp.vn'
            ]
        },
        {
            title: 'Paven Do',
            avatar: PavenDo,
            name: 'Paven Do',
            position: 'BLOCKCHAIN TECH ADVISOR',
            description: [
                'Head of Development, FPT Blockchain Labs',
                'PhD in Applied Mathematics, HKUST, Hong Kong',
                '5 years experience in developing blockchain consensus algorithms'
            ]
        },
        {
            title: 'Eric Ta',
            avatar: EricTa,
            name: 'Eric Ta',
            position: 'PRINCIPAL ENGINNEER',
            description: [
                'PhD in Computer Science, University de Lorraine, France',
                '8 years of LLVM & compiler programming experience',
                'High experience in AI & data science'
            ]
        },
    ];
    const teamMembers = [
        {
            title: 'Harry Duong',
            avatar: HarryDuong,
            name: 'Harry Duong',
            position: 'AI TEAM LEAD',
            description: []
        },
        {
            title: 'Anthea Nguyen',
            avatar: AntheaNguyen,
            name: 'Anthea Nguyen',
            position: 'PRODUCT MANAGER',
            description: []
        },
        {
            title: 'Jay Do',
            avatar: JayDo,
            name: 'Jay Do',
            position: 'SENIOR DEVELOPER',
            description: []
        },
        {
            title: 'Steve Vu',
            avatar: SteveVu,
            name: 'Steve Vu',
            position: 'UI/UX TEAM LEAD',
            description: []
        },


        {
            title: 'Thomas Pham',
            avatar: ThomasPham,
            name: 'Thomas Pham',
            position: 'BLOCKCHAIN DEVELOPER',
            description: []
        },
        {
            title: 'David Ngo',
            avatar: DavidNgo,
            name: 'David Ngo',
            position: 'BACKEND TEAM LEAD',
            description: []
        },
        {
            title: 'Jenny Hanh Nguyen',
            avatar: JennyHanhNguyen,
            name: 'Jenny Hanh Nguyen',
            position: 'MARKETING TEAM LEAD',
            description: []
        },
        {
            title: '',
            avatar: '',
            name: '',
            position: '',
            description: []

        }
    ];
</script>

<svelte:window bind:innerWidth={screenSize}/>

<div class="bg-[#212023]">
    <div id="team" class="md:block container overflow-hidden mx-auto">
        <Saos once top="200" animation={'puff-in-center 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
            <p class="md:text-center text-center font-pre font-extrabold md:text-[48px] text-[32px]">Team</p>
        </Saos>
        <div class="w-full h-full mt-[80px]">
            <div class="team-leader grid lg:grid-cols-5 md:grid-cols-6 grid-cols-1 gap-y-20 mb-20">
                {#each teamLeaders as tl, index (index)}
                    {#if screenSize < 1024 && screenSize > 767}
                        {#if index < 3}
                            <div class="col-span-2 flex flex-col items-center gap-6 md:w-[180px] xl:w-[200px] max-w-[328px] mx-auto">
                                <img src="{tl.avatar}" class="w-[160px] h-[160px]">
                                <div class="flex flex-col gap-1">
                                    <p class="text-center text-[20px] leading-[30px] font-bold">{tl.name}</p>
                                    <p class="text-center font-normal text-[12px] leading-[20px]">{tl.position}</p>
                                </div>
                                <ul class="flex flex-col gap-2">
                                    {#each tl.description as des}
                                        <li>{des}</li>
                                    {/each}
                                </ul>
                            </div>
                        {:else }
                            <div class="col-span-3 flex flex-col items-center gap-6 md:w-[180px] xl:w-[200px] max-w-[328px] mx-auto">
                                <img src="{tl.avatar}" class="w-[160px] h-[160px]">
                                <div class="flex flex-col gap-1">
                                    <p class="text-center text-[20px] leading-[30px] font-bold">{tl.name}</p>
                                    <p class="text-center font-normal text-[12px] leading-[20px]">{tl.position}</p>
                                </div>
                                <ul class="flex flex-col gap-2">
                                    {#each tl.description as des}
                                        <li>{des}</li>
                                    {/each}
                                </ul>
                            </div>

                        {/if}
                    {:else }
                        <div class="col-span-1 flex flex-col items-center gap-6 md:w-[180px] xl:w-[200px] max-w-[328px] mx-auto">
                            <img src="{tl.avatar}" class="w-[160px] h-[160px]">
                            <div class="flex flex-col gap-1">
                                <p class="text-center text-[20px] leading-[30px] font-bold">{tl.name}</p>
                                <p class="text-center font-normal text-[12px] leading-[20px]">{tl.position}</p>
                            </div>
                            <ul class="flex flex-col gap-2">
                                {#each tl.description as des}
                                    <li>{des}</li>
                                {/each}
                            </ul>
                        </div>
                    {/if}
                {/each}
            </div>
            <div class="team-member grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 xl:gap-y-15 md:gap-y-5">
                {#each teamMembers as tm}
                    {#if tm.title}
                        {#if screenSize > 350}
                            <div class="flex flex-col items-center gap-6 py-6">
                                <img src="{tm.avatar}" class="h-[120px] w-[120px]"/>
                                <div class="flex flex-col gap-1">
                                    <p class="text-center text-[20px] leading-[30px] font-bold">{tm.name}</p>
                                    <p class="text-center font-normal text-[12px] leading-[20px] whitespace-nowrap">{tm.position}</p>
                                </div>
                            </div>
                        {:else }
                            <div class="flex flex-col items-center gap-6 py-6">
                                <img src="{tm.avatar}" class="h-[80px] w-[80px]"/>
                                <div class="flex flex-col gap-1">
                                    <p class="text-center text-[20px] leading-[30px] font-bold ">{tm.name}</p>
                                    <p class="text-center font-normal text-[12px] leading-[20px]">{tm.position}</p>
                                </div>
                            </div>
                        {/if}
                    {:else }
                        {#if screenSize > 380}
                            <div class="flex justify-center py-6">
                                <div class="flex lg:w-[220px] md:w-full flex-col justify-center lg:items-center border-[2px] border-[#2D2C30] rounded-[40px]">
                                    <p class="text-[20px] text-center font-bold leading-[30px] self-stretch p-7">and 10+
                                        members more</p>
                                </div>
                            </div>
                        {:else }
                            <div class="flex justify-center py-6">
                                <div class="flex w-[100px] md:w-full flex-col justify-center lg:items-center border-[2px] border-[#2D2C30] rounded-[40px]">
                                    <p class="text-[20px] text-center font-bold leading-[30px] self-stretch p-1">and 10+
                                        members more</p>
                                </div>
                            </div>
                        {/if}
                    {/if}
                {/each}
            </div>
        </div>

    </div>
</div>

<style lang="postcss">
    ul {
        list-style-type: none;
    }

    li {
        position: relative;
        display: flex;
        padding-left: 1rem;
        color: #FFF;
        font-size: 14px;
        opacity: 0.6;
        font-style: normal;
        font-weight: 100;
        line-height: 20px;
    }

    li::before {
        content: "•";
        position: absolute;
        left: 0;
        font-size: 1.5rem;
        margin-right: 0.5rem; /* Adjust the spacing between the marker and text */
    }
</style>
