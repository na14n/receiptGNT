<script>
    import { page } from '$app/stores'

    // {id: 1, i: 'fa-solid fa-house', url: '/dashboard', title: 'Dashboard'},
    // {id: 2, i: 'fa-solid fa-folder-open', url: '/inventory', title: 'Inventory'},
    // {id: 3, i: 'fa-solid fa-receipt', url: '/receipt', title: 'Receipt'},
    // {id: 4, i: 'fa-solid fa-circle-user', url: '/profile', title: 'Profile'},

    const navigation = [
        {
            title: 'Dashboard',
            href: '/app/dashboard',
            i: 'fa-solid fa-house'
        },
        {
            title: 'Products',
            href: '/app/inventory',
            i: 'fa-solid fa-folder-open'
        },
        {
            title: 'receipt',
            href: '/app/receipt',
            i: 'fa-solid fa-receipt'
        },
    ]

</script>

<body class = "body bg-white dark:bg-[#0F172A] min-h-screen">

    <div id="sidebar" class="min-h-screen bg-slate-100 dark:bg-[#1E293B] fixed pt-7">
        <div class="sidebar h-screen w-[3.35rem]">
          <div class="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
              <div class="w-max p-2.5">
                <img src="" class="" alt="">
              </div>
    
              <div class="mt-6 space-y-2">
                <div class="min-w-max">
                  {#each navigation as navItem}
                    <a
                      href="{navItem.href}"
                      class="flex shrink-0 justify-center items-center space-x-4 px-4 py-4 mb-3 text-slate-400 text-xl
                      hover:text-blue-600 dark:text-slate-600
                      {$page.url.pathname == navItem.href ? 'text-slate-50 bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-slate-50' : '' }"
                      >
                    <i class="{navItem.i}"></i>
                    </a>
                  {/each}
                </div>
              </div>


            </div>
    
            <div class="w-max -mb-3">
              <form action="/logout" method="POST" class="group flex items-center space-x-4 rounded-md px-4 pb-12 text-gray-600">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 group-hover:fill-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                  </svg>
                </button>
                </form>
            </div>
            
          </div>
        </div>
    </div>


    <slot />


</body>