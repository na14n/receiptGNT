<script>
    import {Modal, Input} from "$lib/components"

    let modalUpdateOpen
    let list 
</script>

<tr>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
            
                <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                        <!-- {list.id} -->
                    </p>
                </div>
            </div>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">
            <!-- {list.prod_name} -->
        </p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">
            ₱ 999,999
            <!-- ₱ {list.prod_price} -->
        </p>
    </td>
    <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
        <Modal label="modalUpdateOpen" checked={modalUpdateOpen}>
            <span slot="trigger" class="btn btn-success">Edit</span>
            <div slot="heading">
                <h3 class="text-2xl">Edit Product</h3>
                <p class="text-base font-normal">
                    Are you sure you want to update this product?
                </p>
            </div>
            <div slot="actions" class="flex w-full">
                
                <form action="?/updateProduct" method="POST" class="w-full">
                    <Input />
                    <Input />
                    <input type="hidden" name="id" value="" />
                    <div class="flex justify-end gap-x-8">
                        <label for="modalUpdateOpen" class="btn btn-outline">Cancel</label>
                        <button class="btn btn-success">Update</button>
                    </div>
                </form>
            </div>
        </Modal>
    </td>
    <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
        TWO TD
    </td>
</tr>


<Modal label="modalUpdateOpen" checked={modalUpdateOpen}>
    <div slot="heading">
        <h3 class="text-2xl">Edit Product</h3>
        <p class="text-base font-normal">
            Are you sure you want to update this product?
        </p>
    </div>
    <div slot="actions" class="flex w-full items-center justify-center space-x-2">
        
        <form action="?/updateProduct" method="POST">
             
            <input type="hidden" name="id" value="" />
            <label for="modalUpdateOpen" class="btn btn-outline">Cancel</label>
            <button class="btn">Update</button>
        </form>
    </div>
</Modal>