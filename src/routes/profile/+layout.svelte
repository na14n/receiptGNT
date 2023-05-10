<script>
    import {PageHeader} from "$lib/components"
    import { page } from '$app/stores'


    const pages = [
        {
            title: 'dashboard',
            href: '/app/dashboard',
            i: 'fa-solid fa-house'
        },
        {
            title: 'products',
            href: '/app/inventory',
            i: 'fa-solid fa-folder-open'
        },
        {
            title: 'receipt',
            href: '/app/receipt',
            i: 'fa-solid fa-receipt'
        },
    ]

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

    <div id="sidebar" class="min-h-screen bg-slate-100 dark:bg-[#1E293B] fixed pt-7">
        <div class="sidebar h-screen w-[3.35rem]">
          <div class="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
              <div class="w-max p-2.5">
                <img src="" class="" alt="">
              </div>
    
              <div class="mt-6 space-y-2">
                <div class="min-w-max">
                  {#each pages as navItem}
                    <a
                      data-sveltekit-prefetch
                      href="{navItem.href}"
                      class="flex shrink-0 justify-center items-center space-x-4 px-4 py-4 mb-3 text-slate-400 text-xl
                      hover:text-blue-600 dark:text-slate-600
                      {$page.url.pathname == navItem.href ? 'text-slate-50 bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-slate-50 dark:text-slate-50' : '' }"
                      >
                    <i class="{navItem.i}"></i>
                    </a>
                  {/each}
                </div>
              </div>


            </div>
            


            <div class="w-max mb-3">
              <div class="w-max mb-3">
                <a
                        data-sveltekit-prefetch
                        href="/profile"
                        class="flex shrink-0 justify-center items-center space-x-4 px-4 py-4 mb-3 text-slate-50 bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-slate-50 text-xl
                        hover:text-blue-600 dark:text-slate-600
                        "
                        >
                      <i class="fa-solid fa-circle-user dark:text-slate-50"></i>
                      </a>
              </div>
                <form action="/logout" method="POST" class="group flex items-center space-x-4 rounded-md px-4 pb-12 text-gray-600 ">
                    <button class="hover:text-blue-600">
                        <i class="fa-solid fa-right-from-bracket"></i>
                    </button>
                </form>
            </div>
            
          </div>
        </div>
    </div>

    <PageHeader header="Profile" hidden="true"/>

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
            <ol class = "inline-flex items-center space-x-1 md:space-x-3 ">
                
                {#each navigation as navItem }
                    <li class = "inline-flex items-center text-sm font-medium text-slate-500 dark:slate-100 dark:hover:text-slate-300">
                        <a href={navItem.href} id="print" class="px-3 hover:text-blue-600
                        {$page.url.pathname === navItem.href ? 'underline text-blue-600 dark:text-blue-500' : '' }"><i class="fa-solid fa-user-pen pr-2"/>{navItem.title}</a>
                    </li>
                {/each}
            </ol>
        </nav>
    </div>

    <div class="w-full">
        <slot />
    </div>
</body>