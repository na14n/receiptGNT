<script>
  import { page } from '$app/stores'
  const links = [
    {id: 1, i: 'fa-solid fa-house', url: '/dashboard', title: 'Dashboard'},
    {id: 2, i: 'fa-solid fa-folder-open', url: '/inventory', title: 'Inventory'},
    {id: 3, i: 'fa-solid fa-receipt', url: '/receipt', title: 'Receipt'},
    {id: 4, i: 'fa-solid fa-circle-user', url: '/profile', title: 'Profile'},
  ]

  let linker = $page.url.pathname;

  console.log(linker)
</script>

<div class="min-h-screen bg-slate-100 dark:bg-[#1E293B] fixed pt-7">
    <div class="sidebar h-screen w-[3.35rem]">
      <div class="flex h-screen flex-col justify-between pt-2 pb-6">
        <div>
          <div class="w-max p-2.5">
            <img src="" class="" alt="">
          </div>

          <!-- <ul class="mt-6 space-y-2">
            {#each links as link, index}
            <li class="min-w-max">
              <a href="{link.url}" class="flex shrink-0 justify-center items-center space-x-4 px-4 py-4 text-cyan-400 text-xl hover:text-blue-600
              {activeIndex === index ? 'bg-gray-800 text-white' : ''}
              "
              on:click|preventDefault="{() => handleClick(index)}"
              >
                <i class="{link.i}"></i>
              </a>
            </li>
            {/each}
          </ul> -->

          <div class="mt-6 space-y-2">
            <div class="min-w-max">
              {#each links as link}
                <a
                  href="{link.url}"
                  class="flex shrink-0 justify-center items-center space-x-4 px-4 py-7 text-slate-400 text-xl
                  hover:text-blue-600 dark:text-slate-600"
                  >
                <i class="{link.i}"></i>
                </a>
              {/each}
            </div>
          </div>
          


          <!-- <ul class="mt-6 space-y-2">

            <li class="min-w-max">
              <a href="/dashboard" title="Dashboard" class="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white">
                <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" class="fill-current text-cyan-400 dark:fill-slate-600"></path>
                  <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" class="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                  <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" class="fill-current group-hover:text-sky-300"></path>
                </svg>
              </a>
            </li>

            <li class="min-w-max">
              <a href="/inventory" title="Inventory" class="bg group flex items-center space-x-4 rounded-full px-4 py-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path class="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                  <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                </svg>
              </a>
            </li>

            <li class="min-w-max">
              <a href="/receipt" title="Receipt" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                  <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
              </a>
            </li>

            <li class="min-w-max">
                <a href="/profile" title="Profile" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 group-hover:fill-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>
                </a>
              </li>

         
                
          </ul> -->
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