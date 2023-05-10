<script>
    import {DashboardReceipt, PageTitle, PageHeader, DashboardProd} from "$lib/components"

    export let data

    const today = data.receipts.today.items
    const recent = data.receipts.recent.items

    const top = data.products.top
    const least = data.products.least
    
</script>

<body class = "body bg-white dark:bg-[#0F172A] min-h-screen">

    
    <!--HEADER-->
    <PageHeader header="Hello User" hidden="true" />
    
    <PageTitle title="Dashboard" link="dashboard" i="fa-solid fa-house pr-2"/>
    <!-- CONTENT -->

    <div class = "content ml-12 transform ease-in-out duration-500 px-2 md:px-5 pb-4">

        <!-- PAGE CONTENT TITLE -->
       
        

      <!--WEEKLY SALES-->
      <div class="relative flex items-center p-3 mt-5 rounded-xl border border-gray-200 text-white">
    
        <div class="p-4 w-screen bg-gray-50 shadow-lg rounded-2xl dark:bg-[#1E293B]">
          <div class="flex items-center">
            <span class="relative px-4 bg-purple-200 rounded-xl">
              <i class="fa-solid fa-peso-sign text-purple-500"></i>
            </span>
              <p class="ml-2 text-black text-md font-semibold dark:text-white">
              Weekly Sales
              </p>
          </div>             
            <div class="flex flex-col justify-start">
            <p class="my-4 text-4xl font-bold text-left text-gray-700 dark:text-gray-100 light:text-black-100">
                {data.weeklysales.weeklysales}
            </p>
            <div class="flex items-center text-sm text-gray-400">
              <p>
                from {data.weeklysales.weekdate}
              </p>
            </div>  
        </div>     
      </div>
      
       <!--TOP SELLING-->
      <div class="relative p-4 w-screen mx-2 bg-gray-50 shadow-lg rounded-2xl dark:bg-[#1E293B] h-">
        <div class="flex items-center">
          <span class="relative px-4 bg-green-200 rounded-xl">
            <i class="fa-solid fa-star text-green-500"></i>
          </span>
            <p class="ml-2 text-black text-md font-semibold dark:text-white">
            Top Selling 
            </p>
        </div>             
          <div class="flex flex-col justify-start">
          <p class="mt-4 mb-3 text-4xl font-bold text-left text-gray-700 dark:text-gray-100">
              {top.prod_name}
          </p>
          <p class="text-m text-left opacity-75 text-green-500 dark:text-green-300">
            sold <span class="font-bold">{top.total_orders >= 0 ? `${top.total_orders}` : '0'} times</span>
        </p>
        </div>
        </div>

        <!--LEAST SELLING-->
        <div class="relative p-4 w-screen bg-gray-50 shadow-lg rounded-2xl dark:bg-[#1E293B] h-">
          <div class="flex items-center">
            <span class="relative px-4 bg-red-200 rounded-xl">
              <i class="fa-solid fa-caret-down text-red-500"></i>
            </span>
              <p class="ml-2 text-black text-md font-semibold dark:text-white">
              Least Selling
              </p>
          </div>             
            <div class="flex flex-col justify-start">
              <p class="mt-4 mb-3 text-4xl font-bold text-left text-gray-700 dark:text-gray-100">
                {least.prod_name}
            </p>
            <p class="text-m text-left opacity-75 text-red-500 dark:text-red-300">
              sold <span class="font-bold">{least.total_orders >= 0 ? `${least.total_orders}` : '0'} times</span>
          </p>
          </div>
          </div>

      

      
    </div>

    

    

    




        <!-- TOP PRODUCTS -->


        <!--CONTAINER HOLDER-->
        <div class="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4 mt-5 rounded-xl border border-gray-200 text-white">
        <!--div class="px-1 pt-6 auto:container">
        <--div class="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
        <--div class="md:col-span-2 lg:col-span-1" >
        

        <! --INFO-->
        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-[#1E293B] w-full shadow-lg rounded-xl mt-5">
            <div class="rounded-t mb-0 px-0 pt-1 border-0">
              <div class="flex flex-wrap items-center px-4 py-2">
                <div class="relative w-full max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50">Top Products</h3>
                </div>
              </div>

            <!--1ST COLUMN-->
              <div class="col-span-12 w-50 overflow-x-auto">
                <table class="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <td class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Product Name</td>
                      <td class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Price</td>
                      <td class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></td>
                    </tr>
                  </thead>
                  <tbody>
                    

                    {#if data.products.list.length === 0}
                      <tr>
                        <td colspan="100"><p class="text-center text-m py-10 text-slate-600">You have no products.</p></td>
                      </tr>
                    {:else}
                        {#each data.products.list.slice(0,10) as product }
                          <DashboardProd {product}/>
                        {/each}
                    {/if}


                  </tbody>
                </table>
              </div>
            </div>
          </div>


        
        

        
        <!--RECENT RECEIPT-->

        <!--CONTAINER HOLDER-->
        <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-[#1E293B] w-full shadow-lg rounded-xl mt-5">
            <div class="rounded-t mb-0 px-0 pt-1 border-0">
              <div class="flex flex-wrap items-center px-4 py-2">
                <div class="relative w-full max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50">Recent Receipt Logs</h3>
                </div>
              </div>

            
          <!-- INFO -->
          <div class="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
            <div class="rounded-t mb-0 px-0 border-0">
              <div class="block w-full">
                <div class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Today
                </div>
                <ul class="my-1">

                
                {#if today.length === 0}
                      <p class="text-center text-m py-3 text-slate-600">You have no receipts for today.</p>
                {:else}
                    {#each today as receipt }
                      <DashboardReceipt {receipt}/>
                     {/each}
                 {/if}
                </ul>

                 {#if today.length === 0}
                 <div class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Recent Receipts
                </div>
                <ul class="my-1">
                  {#if recent.length === 0}
                  <p class="text-center text-m py-3 text-slate-600">You have no recent receipts. </p>
                  {/if}
                  {#each recent.slice(0,5) as receipt }
                    <DashboardReceipt {receipt}/>
                  {/each}
                </ul> 
                {:else}
                  {#if today.length >= 4}
                  <div class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    PREVIOUS RECEIPTS
                  </div>
                  <ul class="my-1">
                    {#each recent.slice(0,3) as receipt }
                      <DashboardReceipt {receipt}/>
                    {/each}
                  </ul> 
                  {:else if recent.length === 0}
                  <div class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    PREVIOUS RECEIPTS
                  </div>
                  <p class="text-center text-m py-3 text-slate-600">You have no other recent receipts.</p>
                  {:else}
                  <div class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    PREVIOUS RECEIPTS
                  </div>
                  <ul class="my-1">
                    {#each recent.slice(0,4) as receipt }
                      <DashboardReceipt {receipt}/>
                    {/each}
                  </ul> 
                  {/if}
                {/if}
                
                <!-- <div class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Yesterday
                </div>
                <ul class="my-1">
                  <li class="flex px-4">
                    <div class="w-9 h-9 rounded-full flex-shrink-0 bg-green-500 my-2 mr-3">
                      <svg class="w-9 h-9 fill-current text-light-blue-50" viewBox="0 0 36 36"><path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z"></path></svg>
                    </div>
                    <div class="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                        <div class="flex-grow flex justify-between items-center">
                          <div class="self-center">
                            <a class="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100" href="#0" style="outline: none;">Buyer_3</a> purchased <a class="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100" href="#0" style="outline: none;">Product #3</a>- 17:00
                          </div>
                          <div class="flex-shrink-0 ml-2">
                            <a class="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500" href="#0" style="outline: none;">
                              View<span><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" class="transform transition-transform duration-500 ease-in-out"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>

                </ul>
              </div>
            </div>
          </div> -->
          <!-- ./Recent Receipt -->



        <!--div class = "p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
        <span class = "font-medium">Info alert!</span> Change a few things up and try submitting again.
        <div-->

        
    </div>
    </body>