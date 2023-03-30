<script>
    import {Modal, Input} from "$lib/components"

    let modalUpdateOpen
    let modalDeleteOpen

    export let receipt
</script>

<tr>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
            
                <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                        {receipt.id}
                    </p>
                </div>
            </div>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">
            {receipt.c_name}
        </p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">
            {receipt.c_contact}
        </p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">
            {receipt.c_address}
        </p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">
            ₱ {receipt.total}
        </p>
    </td>
    <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
        <a href="/receipt/{receipt.id}" class="text-amber-600 cursor-pointer">View <i class="fa-regular fa-pen-to-square"></i></a>
    </td>
    <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
        <Modal label="{receipt.id}" checked={modalUpdateOpen}>
            <span slot="trigger" class="text-emerald-600 cursor-pointer">Edit <i class="fa-regular fa-pen-to-square"></i> </span>
            <div slot="heading">
                <h3 class="text-2xl mb-3">Edit {receipt.id}</h3>
                <p class="text-base font-normal text-gray-500 italic">
                    Are you sure you want to update this receipt?
                </p>
            </div>
            <div slot="actions" class="flex w-full">
                
                <form action="?/updateReceipt" method="POST" class="w-full">
                    <Input class="text-blue-600" type="text" name="c_name" id="c_name" label="Client Name" placeholder="Your Client's Name" i="fa-solid fa-user pr-3" is="color:#2563eb" value={receipt.c_name}/>
                    <Input class="text-blue-600" type="text" name="c_address" id="c_address" label="Client Shipping Address" placeholder="The Client's Address" i="fa-solid fa-map-location-dot pr-3" is="color:#2563eb" value={receipt.c_address}/>
                    <Input class="text-blue-600" type="text" name="c_contact" id="c_contact" label="Client Contact Information" placeholder="Your Client's Contacts" i="fa-solid fa-map-location-dot pr-3" is="color:#2563eb" value={receipt.c_contact}/>
                    <a href="/receipt/addReceipt/{receipt.r_id}" class="text-blue-600 underline hover:text-blue-400">Edit your Products here.</a>
                    <input type="hidden" name="id" value={receipt.id} />
                    <div class="flex justify-end gap-x-4 pr-5">
                        <label for="{receipt.id}" class="btn btn-ghost text-gray-500">Cancel</label>
                        <button class="btn btn-success hover:bg-emerald-300">Update</button>
                    </div>
                </form>
            </div>
        </Modal>
    </td>
    <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
        <Modal label="delete{receipt.id}" checked={modalDeleteOpen}>
            <span slot="trigger" class="text-red-500 cursor-pointer">Delete <i class="fa-regular fa-trash-can"></i> </span>
            <div slot="heading">
                <h3 class="text-2xl mb-3">Delete {receipt.id}</h3>
                <p class="text-base font-normal text-gray-500 italic">
                    Are you sure you want to delete this receipt?
                </p>
                <p class="text-base font-normal text-gray-500 italic">
                    Once deleted, it cannot be recovered again.
                </p>
            </div>
            <div slot="actions" class="flex w-full">
                <form action="?/deleteReceipt" method="POST" class="w-full">
                    <input type="hidden" name="id" value={receipt.id} />
                    <div class="flex justify-end gap-x-4 pr-5">
                        <label for="delete{receipt.id}" class="btn btn-ghost text-gray-500">Cancel</label>
                        <button class="btn btn-error hover:bg-rose-600">Delete</button>
                    </div>
                </form>
            </div>
        </Modal>
    </td>
</tr>