<script>
    import { pesofy } from "$lib/utils"

    export let product

    var price = pesofy(product.prod_price)

</script>


<tr class="text-gray-700 dark:text-gray-100">
    <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{product.prod_name}</th>
    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{price}</td>
    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">sold {product.total_orders} times</td>
    <!-- <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      <div class="flex items-center">
        <span class="mr-2"></span>
        <div class="relative w-full">
          <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
            <div style="width: 70%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
          </div>
        </div>
      </div>
    </td> -->
  </tr>