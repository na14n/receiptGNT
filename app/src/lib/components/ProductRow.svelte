<script>
    import {Modal, Input} from "$lib/components"

    let modalUpdateOpen
    let modalDeleteOpen
    export let product 

    // let date = product.created.slice(0, product.created.indexOf(' '))
    // let time = product.created
    // console.log(date)
    // console.log(time)

    let createdDate = new Date(product.created)
    const cyear = createdDate.getFullYear();
    const cmonth = createdDate.getMonth() + 1; // add 1 to month value to get correct month (January is 0)
    const cday = createdDate.getDate();
    const created = `${cyear}-${cmonth < 10 ? '0' : ''}${cmonth}-${cday < 10 ? '0' : ''}${cday}`;

    let updatedDate = new Date(product.created)
    const uyear = updatedDate.getFullYear();
    const umonth = updatedDate.getMonth() + 1; // add 1 to month value to get correct month (January is 0)
    const uday = updatedDate.getDate();
    const updated = `${uyear}-${umonth < 10 ? '0' : ''}${umonth}-${uday < 10 ? '0' : ''}${uday}`;
    


</script>

<tr class="bg-white dark:bg-slate-600 ">
    <td class="px-3 py-5 border-b border-gray-200 text-sm dark:border-gray-500">
        <div class="flex items-center">
            
                <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap dark:text-neutral-50">
                        {product.id}
                    </p>
                </div>
            </div>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 text-sm dark:border-gray-500">
        <p class="text-gray-900 whitespace-no-wrap dark:text-neutral-50">
            {product.prod_name}
        </p>
    </td>
    <td class="px-3 py-5 border-b border-gray-200 text-sm dark:border-gray-500">
        <p class="text-gray-900 whitespace-no-wrap dark:text-neutral-50">
            ₱ {product.prod_price}
        </p>
    </td>
    <td class="px-1 py-5 border-b border-gray-200 text-sm dark:border-gray-500">
        <p class="text-gray-900 whitespace-no-wrap dark:text-neutral-50">
            {created}
        </p>
    </td>
    <td class="px-1 py-5 border-b border-gray-200 text-sm dark:border-gray-500">
        <p class="text-gray-900 whitespace-no-wrap dark:text-neutral-50">
            {updated}
        </p>
    </td> 
    <td class="py-5 border-b border-gray-200 text-sm dark:border-gray-500">
        <Modal label="update{product.prod_name}" checked={modalUpdateOpen}>
            <span slot="trigger" class="text-green-400 cursor-pointer dark:text-green-400">Edit <i class="fa-regular fa-pen-to-square"></i> </span>
            <div slot="heading">
                <h3 class="text-2xl mb-3">Edit {product.prod_name}</h3>
                <p class="text-base font-normal text-gray-500 italic">
                    Are you sure you want to update this product?
                </p>
            </div>
            <div slot="actions" class="flex w-full">
                
                <form action="?/updateProduct" method="POST" class="w-full">
                    <Input class="text-blue-600" type="text" name="prod_name" id="prod_name" label="Product Name" placeholder="Your Product's Name" i="fa-solid fa-boxes-stacked pr-3" is="color:#2563eb" value={product.prod_name}/>
                    <Input class="text-blue-600" type="text" name="prod_price" id="prod_price" label="Product Price" placeholder="The Product's Price" i="fa-solid fa-money-bill pr-3" is="color:#2563eb" value={product.prod_price}/>
                    <input type="hidden" name="id" value="{product.id}" />
                    <div class="flex justify-end gap-x-4 pr-5">
                        <label for="update{product.prod_name}" class="btn btn-ghost text-gray-500">Cancel</label>
                        <button class="btn btn-success hover:bg-emerald-300">Update</button>
                    </div>
                </form>
            </div>
        </Modal>
    </td>
    <td class="py-5 border-b border-gray-200 text-sm dark:border-gray-500">
        <Modal label="delete{product.id}" checked={modalDeleteOpen}>
            <span slot="trigger" class="text-red-500 cursor-pointer">Delete <i class="fa-regular fa-trash-can"></i> </span>
            <div slot="heading">
                <h3 class="text-2xl mb-3">Delete {product.prod_name}</h3>
                <p class="text-base font-normal text-gray-500 italic">
                    Are you sure you want to delete this product?
                </p>
                <p class="text-base font-normal text-gray-500 italic">
                    Once deleted, it cannot be recovered again.
                </p>
            </div>
            <div slot="actions" class="flex w-full">
                <form action="?/deleteProduct" method="POST" class="w-full">
                    <input type="hidden" name="id" value={product.id} />
                    <div class="flex justify-end gap-x-4 pr-5">
                        <label for="delete{product.id}" class="btn btn-ghost text-gray-500">Cancel</label>
                        <button class="btn btn-error hover:bg-rose-600">Delete</button>
                    </div>
                </form>
            </div>
        </Modal>
    </td>
</tr>