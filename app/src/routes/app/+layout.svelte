<script>
    import { page } from '$app/stores'

    const navigation = [
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
            


            <div class="w-max mb-3">
              <div class="w-max mb-3">
                <a
                        href="/profile"
                        class="flex shrink-0 justify-center items-center space-x-4 px-4 py-4 mb-3 text-slate-400 text-xl
                        hover:text-blue-600 dark:text-slate-600
                        "
                        >
                      <i class="fa-solid fa-circle-user"></i>
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


    <slot />


</body>