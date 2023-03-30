<script src="$lib/html2canvas.js">
    import {ReceiptViewRow} from "$lib/components" 

   export let data

</script>

<style> 
    @media print {
        .not-printable {display: none;}
    }
</style>


<body class = "body bg-white dark:bg-[#0F172A] min-h-screen" >

    <div class="content not-printable ml-12 transform ease-in-out duration-500 pt-5 px-2 md:px-5">
        <nav class = "flex justify-between px-5 py-3 white-700  rounded-lg bg-slate-200 dark:bg-[#1E293B]">
            <ol class = "inline-flex items-center space-x-1 md:space-x-3">
                <li class = "inline-flex items-center">
                    <a href="../receipt" class = "flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:slate-100 dark:hover:text-slate-300">
                        <i class="fa-solid fa-receipt pr-2" />
                        Receipts
                    </a>
                </li>
            </ol>
            <ol class = "inline-flex items-center space-x-1 md:space-x-3">
                <li class = "inline-flex items-center text-sm font-medium text-blue-600  dark:slate-100 dark:hover:text-slate-300">
                    <button id="print" class="px-3 hover:text-sky-500" on:click={() => window.print() }><i class="fa-solid fa-print pr-2"/>Print</button>
                </li>
            </ol>
        </nav>
    </div>

    <!-- Printable Starts Here -->
    <div class="px-5">
        <div class="flex flex-col px-5 py-3">
            <div>
                <span>
                    <img src="/logo.png" class="h-10 mb-1" alt="logo" />
                </span>
            </div>
            <div class="text-center text-2xl uppercase font-bold text-gray-700 mb-2">
                payment receipt
            </div>
            <div class=" w-full my-5 h-48 flex justify-around">
                <div class="w-1/3 outline outline-2 outline-sky-500 p-3 rounded-md shrink-0">
                    <div class="mb-2 text-blue-600 text-l font-bold">
                        Seller's Details
                    </div>
                    <div class="mb-2 text-slate-500 text-m font-medium uppercase">
                        from
                    </div>
                    <div class="mb-4 text-slate-700 text-s font-bold">
                       {data.user.b_name}
                    </div>
                    <div class="mb-1 text-slate-700 text-s font-medium">
                        {data.user.b_address}
                     </div>
                     <div class="text-slate-700 text-s font-medium">
                        {data.user.b_contact}
                     </div>
                </div>
                <div class="w-1/3 outline outline-2 outline-sky-500 p-3 rounded-md shrink-0">
                    <div class="mb-2 text-blue-600 text-l font-bold">
                        Buyer's Details
                    </div>
                    <div class="mb-2 text-slate-500 text-m font-medium uppercase">
                        to
                    </div>
                    <div class="mb-4 text-slate-700 text-s font-bold">
                       {data.record.c_name}
                    </div>
                    <div class="mb-1 text-slate-700 text-s font-medium">
                        {data.record.c_address}
                     </div>
                     <div class="text-slate-700 text-s font-medium">
                        {data.record.c_contact}
                     </div>
                </div>
            </div>

            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto shadow-lg shadow-slate-800/500 rounded-lg">
                <div class="inline-block min-w-full rounded-lg overflow-hidden outline outline-gray-100">
                    <table class="min-w-full leading-normal bg-gray-100 dark:bg-gray-700 font-semibold">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                                    Product Code
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                                    Product Name
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                                    Price
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                                    Quantity
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                                    Subtotal
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {#if data.products.length === 0}
                            <tr>
                                <td colspan="100"><p class="text-center text-xl py-5">You have no products.</p></td>
                            </tr>
                                {:else}
                                    {#each data.products as product }
                                        <ReceiptViewRow {product}/>
                                    {/each}
                            {/if}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="pt-4 pr-20 pl-28 rounded-md dark:bg-dark-700">
                <div class="content flex justify-end w-full ml-12 transform ease-in-out duration-500 px-2 md:px-5">
                    <div class = "flex-col px-10">
                            <div class="mb-4 flex items-center text-xl">
                                <i class="fa-solid fa-money-bills pr-2" style="color:#059669"></i>
                                    <p class="text-gray-700 dark:text-slate-200 font-semibold">Total Price</p>
                            </div>
                            <div class="flex justify-end w-full white-700 px-10 py-1 rounded-lg bg-slate-200 dark:bg-[#1E293B]"> 
                                <p class="text-gray-700 dark:text-green-400 font-semibold italic">₱ {data.total}</p>
                            </div>
                    </div>
                </div>
            </div>


        </div>    
    </div>
    
</body>
