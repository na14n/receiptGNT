<script>
    import {Modal, Input} from "$lib/components"
    import {enhance} from '$app/forms' 
	import toast from "svelte-french-toast";

    let modalUpdateOpen
    let modalDeleteOpen
    export let product
    
    let loading = false
    const submitUpdate = () => {
        loading =  true
        return async ({ result, update}) => {
            switch (result.type) {
                case 'success':
                    modalUpdateOpen = false
                    toast.success(`Product updated successfully`)
                    await update()
                    break;
                case 'invalid':
                    toast.error('Invalid input')
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
    const submitDelete = () => {
        loading =  true
        return async ({ result, update}) => {
            switch (result.type) {
                case 'success':
                    modalDeleteOpen = false
                    toast.success(`Product deleted successfully`)
                    location.reload()
                    await update()
                    break;
                case 'invalid':
                    toast.error('Invalid input')
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
</script>

<tr>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
            
                <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                        {product.id}
                    </p>
                </div>
            </div>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">
            {product.expand.product.prod_name}
        </p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">
            ₱ {product.expand.product.prod_price}
        </p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">
            {product.qty}
        </p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">
            ₱ {product.subtotal}
        </p>
    </td>
    
    <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
        <Modal label="{product.id}" checked={modalUpdateOpen}>
            <span slot="trigger" class="text-green-400 cursor-pointer">Edit<i class="fa-regular fa-pen-to-square pl-2"></i> </span>
            <div slot="heading">
                <h3 class="text-2xl mb-3">Update {product.expand.product.prod_name} Quantity</h3>
                <p class="text-base font-normal text-gray-500 italic">
                    Are you sure you want to update this product?
                </p>
            </div>
            <div slot="actions" class="flex w-full">
                <form action="?/updateProduct" method="POST" class="w-full" use:enhance={submitUpdate}>
                    <Input class="text-blue-600" type="number" name="qty" id="qty" label="qty" placeholder="Product Quantity" i="fa-solid fa-money-bill pr-3" is="color:#2563eb" value={product.qty}  />
                    <input type="hidden" name="id" value="{product.id}" />
                    <input type="hidden" name="product" value="{product.product}" />
                    <div class="flex justify-end gap-x-4 pr-5">
                        <label for="{product.id}" class="btn btn-ghost text-gray-500">Cancel</label>
                        <button class="btn btn-success hover:bg-emerald-300">Update</button>
                    </div>
                </form>
            </div>
        </Modal>
    </td>
    <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
        <Modal label="{product.expand.product.id}" checked={modalDeleteOpen}>
            <span slot="trigger" class="text-red-500 cursor-pointer" use:enhance={submitDelete}>Delete<i class="fa-regular fa-trash-can pl-2"></i> </span>
            <div slot="heading">
                <h3 class="text-2xl mb-3">Delete {product.expand.product.prod_name}</h3>
                <p class="text-base font-normal text-gray-500 italic">
                    Are you sure you want to delete this product?
                </p>
                <p class="text-base font-normal text-gray-500 italic">
                    Once deleted, it cannot be recovered again.
                </p>
            </div>
            <div slot="actions" class="flex w-full">
                <form action="?/deleteProduct" method="POST" class="w-full">
                    <input type="hidden" name="id" value="{product.id}" />
                    <div class="flex justify-end gap-x-4 pr-5">
                        <label for="{product.expand.product.id}" class="btn btn-ghost text-gray-500">Cancel</label>
                        <button class="btn btn-error hover:bg-rose-600">Delete</button>
                    </div>
                </form>
            </div>
        </Modal>
    </td>
</tr>