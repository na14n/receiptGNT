<script>
    import {ReceiptProdRow, Modal, Input} from "$lib/components"
    import {enhance} from '$app/forms' 
    import toast from "svelte-french-toast";

    export let data

    
    let loading = false
    const submitAdd = () => {
        loading =  true
        return async ({ result, update}) => {
            switch (result.type) {
                case 'success':
                    modalAdd = false;
                    await update()
                    break;
                case 'invalid':
                    toast.error('Invalid credentials')
                    await update()
                    break;
                case 'error':
                    toast.error(result.error.message) 
                    break;
                default:
                    await update()
            }
            loading = false; 
        };
    }
    
    let modalAdd

    
</script>


<body class = "body bg-white dark:bg-[#0F172A] min-h-screen ">

    
    <div class = "w-full bg-white dark:bg-[#0F172A] pt-5 pb-1">
        <div class = "logo mt-8 ml-12 dark:text-slate-200   transform ease-in-out duration-500 h-full flex-col px-10">
            <div class=" text-xl text-gray-700 mb-2 font-semibold"><i class="fa-regular fa-square-plus "></i> Add Products to the Receipt</div>
            <div><p class="text-s text-gray-500 dark:text-gray-600 italic">Add some products in your inventory here.</p></div>
        </div>
        <div class = "grow h-full flex items-center justify-center"></div>
        <div class = "flex-none h-full text-center flex items-center justify-center"></div>
    </div>

    <div class="pt-10 pr-20 pl-28 rounded-md dark:bg-dark-700">
        <div class=" flex items-center justify-between pb-6">
        </div>
            <div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto shadow-lg shadow-slate-800/500 rounded-lg">
                    <div class="inline-block min-w-full rounded-lg overflow-hidden">
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
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                                    </th>
                                    <th
                                    class="px-5 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
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
                                            <ReceiptProdRow {product}/>
                                        {/each}
                                {/if}
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>

        <div class="pt-8 pr-20 pl-28 rounded-md dark:bg-dark-700">
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

        <div class="pt-10 pr-20 pl-28 flex justify-end mr-25">
            <Modal label="modalAdd" checked={modalAdd}>
                <span slot="trigger" class="btn btn-success text-gray-700 cursor-pointer px-10"><i class="fa-regular fa-square-plus pr-2"></i><p>Add Products</p></span>
                <div slot="heading">
                    <h3 class="text-2xl mb-3">Add A Product</h3>
                    <p class="text-base font-normal text-gray-500 italic">
                        Add this product to the customer's cart.
                    </p>
                </div>
                <div slot="actions" class="flex w-full">
                    
                    <form action="?/addProduct" method="POST" class="w-full" use:enhance={submitAdd}>
                        <div class="block mb-2 text-sm text-gray-700 dark:text-gray-400">
                            <label for="" class="label font-semibold pb-1">
                                <span><i class="fa-solid fa-boxes-stacked pr-3" style="color:#2563eb"></i>Choose a Product</span>
                            </label>
                            <select name="product" class="w-full px-3 py-2 placeholder-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 bg-slate-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500">
                                {#each data.inventory as inventory}
                                <option value={inventory.id}>
                                    {inventory.prod_name}
                                </option>
                                {/each}
                            </select>
                        </div>
                        <Input class="text-blue-600" type="number" name="qty" id="qty" label="qty" placeholder="Product Quantity" i="fa-solid fa-hashtag pr-3" is="color:#2563eb" value=""/>
                        <div class="flex justify-end gap-x-4 pt-7 pr-5">
                            <label for="modalAdd" class="btn btn-ghost text-gray-500">Cancel</label>
                            <button class="btn btn-success hover:bg-emerald-300">Add Product</button>
                        </div>
                    </form>
                </div>
            </Modal>  
        </div>

        <div class="pt-8 pr-20 pl-28 rounded-md dark:bg-dark-700">
            <div class="content flex justify-end w-full ml-12 transform ease-in-out duration-500 px-2 md:px-5">
                <div class = "flex-col px-10">
                    <form action="?/saveProd" method="POST">
                        <input type="hidden" name="total" value={data.total}>
                        <button class="btn bg-blue-600 hover:bg-blue-500 text-sky-100 border-0">Save Products</button>
                    </form>
                </div>
            </div>
        </div>
        



</body>