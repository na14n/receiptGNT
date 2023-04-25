<script>
    import {Modal, Input} from "$lib/components"

    let modalUpdateOpen
    let modalDeleteOpen
    export let product 
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
</tr>