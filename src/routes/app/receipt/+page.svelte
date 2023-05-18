<script>
    import { Sidebar, PageTitle, PageHeader, ReceiptRow} from "$lib/components"
    import { createSearchStore, searchHandler } from '$lib/stores/search'
	import { onDestroy } from "svelte";

    export let data

    const searchReceipt = data.receipts.map((receipt) => ({
        ...receipt,
        searchTerms: `${receipt.c_name} ${receipt.c_contact} ${receipt.c_address}`
    }));

    const searchStore = createSearchStore(searchReceipt);

    const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

    onDestroy(() => {
        unsubscribe();
    });

</script>

<body class = "body bg-white dark:bg-[#0F172A] min-h-screen ">

    <!-- Header -->
    <PageHeader header="Receipt Logs" name="New receipt" link="/addReceipt"/>

    <PageTitle title="Receipt" link="receipt" i="fa-solid fa-receipt pr-2"/>

    

    <div class="pt-5 pr-20 pl-28 rounded-md dark:bg-dark-700">
        <div class=" flex flex-col justify-center items-start">  
            <h4 class="font-bold text-slate-600">Search/Filter</h4>
            <input type="search" class="py-2 w-1/4 text-slate-700 px-3 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 bg-slate-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" placeholder="Search..." bind:value={$searchStore.search} />
        </div>
        <div class="grid grid-cols-4 gap-4">
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
                        class="pl-5 pr-1 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                    </th>
                    <th
                    class="pr-1 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
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
                                <p class="text-center text-m py-6">You have no Receipts.</p>
                            </td>
                        </tr>
                            {:else}
                                {#each $searchStore.filtered as receipt }
                                <ReceiptRow {receipt}/>
                        {/each}
                    {/if}
                </tbody>
            </table>
            </div>
        </div>
</body>