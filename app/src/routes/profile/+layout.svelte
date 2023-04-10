<script>
    import { Sidebar, PageTitle, PageHeader, ProductRow} from "$lib/components"
    import { page } from '$app/stores'


    const navigation = [
        {
            title: 'My Profile',
            href: '/profile/myProfile'
        },
        {
            title: 'Edit Profile',
            href: '/profile/editProfile'
        },
        {
            title: 'Account Settings',
            href: '/profile/myAccount'
        },
    ]

</script>

<body class = "body bg-white dark:bg-[#0F172A] min-h-screen overflow-hidden">

    <Sidebar />

    <PageHeader header="My Profile" hidden="true"/>

    <div class="content not-printable ml-12 transform ease-in-out duration-500 pt-5 px-2 md:px-5">
        <nav class = "flex justify-between px-5 py-3 white-700  rounded-lg bg-slate-200 dark:bg-[#1E293B]">
            <ol class = "inline-flex items-center space-x-1 md:space-x-3">
                <li class = "inline-flex items-center">
                    <a href="/profile" class = "flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:slate-100 dark:hover:text-slate-300">
                        <i class="fa-solid fa-user pr-2" />
                        User
                    </a>
                </li>
            </ol>
            <ol class = "inline-flex items-center space-x-1 md:space-x-3">
                
                {#each navigation as navItem }
                    <li class = "inline-flex items-center text-sm font-medium text-blue-500  dark:slate-100 dark:hover:text-slate-300">
                        <a href={navItem.href} id="print" class="px-3 hover:text-blue-600
                        {$page.url.pathname === navItem.href ? 'underline text-blue-600' : '' }"><i class="fa-solid fa-user-pen pr-2"/>{navItem.title}</a>
                    </li>
                {/each}
            </ol>
        </nav>
    </div>

    <div class="w-full">
        <slot />
    </div>
</body>