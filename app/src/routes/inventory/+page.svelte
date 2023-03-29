<script>
    import {Modal, Sidebar, PageTitle, PageHeader, ProductRow} from "$lib/components"
    let modalDeleteOpen
</script>

<body class = "body bg-white dark:bg-[#0F172A] min-h-screen ">
    <Sidebar />

    <!-- Header -->
    <PageHeader header="Inventory Management" name="Add Product" link="/inventory/addProd"/>
    

    <!-- Content -->
    <!-- <div class = "content ml-12 transform ease-in-out duration-500 pt-5 px-2 md:px-5 pb-4"> -->
        
        <PageTitle title="Inventory" link="inventory" i="fa-solid fa-house pr-2"/>

        <!-- Inventory Table -->
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
                                        </th>
                                        <th
                                        class="px-5 py-3 border-b-2 border-gray-300  text-left text-xs font-bold text-slate-600 dark:text-slate-100 uppercase tracking-wider">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ProductRow />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
    <!-- </div> -->
    
</body>