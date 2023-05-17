<script>
    import { PageTitle, PageHeader, ProductRow} from "$lib/components"
    import { createSearchStore, searchHandler } from '$lib/stores/search'
	import { onDestroy } from "svelte";
    
    export let data

    const searchReceipt = data.products.map((product) => ({
        ...product,
        searchTerms: `${product.prod_name} ${product.prod_price}`
    }));

    const searchStore = createSearchStore(searchReceipt);

    const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

    onDestroy(() => {
        unsubscribe();
    });


</script>


<body class = "body bg-white dark:bg-[#0F172A] min-h-screen ">
    
    <!-- Header -->
    <PageHeader header="Products List" name="Add Product" link="/addProd"/>
    

    <!-- Content -->
    <!-- <div class = "content ml-12 transform ease-in-out duration-500 pt-5 px-2 md:px-5 pb-4"> -->
        
        <PageTitle title="Products List" link="inventory" i="fa-solid fa-folder-open pr-2"/>

        <!-- Inventory Table -->
        <div class="pt-10 pr-20 pl-28 rounded-md dark:bg-dark-700">
            <div class=" flex flex-col justify-center items-start gap-3 pb-6">  
                <h4 class="font-bold">Search/Filter</h4>
                <input type="search" class="input w-1/4" placeholder="Search..." bind:value={$searchStore.search} />
            </div>
            <div class=" flex items-center justify-between pb-6">
            </div>
                <div>
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto shadow-lg shadow-slate-800/500 rounded-lg">
                        <div class="inline-block min-w-full rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal bg-gray-100 dark:bg-gray-700 font-semibold">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-3 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                                            Product Code
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                                            Product Name
                                        </th>
                                        <th
                                            class="px-3 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th
                                            class="py-1 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                                            Created
                                        </th>
                                        <th
                                            class="py-1 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                                            Updated
                                        </th>
                                        <th
                                            class="py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                                        </th>
                                        <th
                                        class="py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {#if data.products.length === 0}
                                        <tr>
                                            <td colspan="100">
                                                <p class="text-center text-m py-6">You have no products.</p>
                                            </td>
                                            
                                        </tr>
                                            {:else}
                                                {#each $searchStore.filtered as product }
                                                <ProductRow {product}/>
                                        {/each}
                                    {/if}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
    <!-- </div> -->
    
</body>