<script>
    import { Sidebar, PageTitle, PageHeader, ReceiptRow} from "$lib/components"

    export let data
</script>

<body class = "body bg-white dark:bg-[#0F172A] min-h-screen ">

    <!-- Header -->
    <PageHeader header="Receipt Logs" name="New receipt" link="/addReceipt"/>

    <PageTitle title="Receipt" link="receipt" i="fa-solid fa-receipt pr-2"/>

    <div class="pt-10 pr-20 pl-28 rounded-md dark:bg-dark-700">
        <div class=" flex items-center justify-between pb-6">  
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto shadow-lg shadow-slate-800/500 rounded-lg">
            <div class="inline-block min-w-full rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal bg-gray-100 dark:bg-gray-700 font-semibold">
                 <thead>
                    <tr>
                        <th
                        class="px-3 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                        Receipt Code
                    </th>
                    <th
                        class="px-3 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                        Client Name
                    </th>
                    <th
                        class="px-5 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                        Client Contact
                    </th>
                    <th
                        class="px-5 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                        Client Address
                    </th>
                    <!-- <th
                        class="px-3 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                        Total Price
                    </th> -->
                    <th
                        class="px-1 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                        Created
                    </th>
                    <th
                        class="px-1 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                        Updated
                    </th>
                    <th
                        class=" py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                    </th>
                    <th
                    class=" py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                    </th>
                    <th
                    class=" py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                    </th>                         
                    </tr>
                </thead>
                <tbody>
                    {#if data.receipts.length === 0}
                        <tr>
                            <td colspan="100">
                                <p class="text-center text-xl pt-3">You have no Receipts</p>
                            </td>
                        </tr>
                            {:else}
                                {#each data.receipts as receipt }
                                <ReceiptRow {receipt}/>
                        {/each}
                    {/if}
                </tbody>
            </table>
            </div>
        </div>
</body>