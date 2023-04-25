<script>
    export let receipt

    const datetime  = new Date(receipt.updated);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = datetime.toLocaleDateString(undefined, options);
</script>

<li class="flex px-4">
    <div class="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3
        flex justify-center items-center">
        <i class="fa-solid fa-receipt"></i>
    </div>
    <div class="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
      <div class="flex-grow flex justify-between items-center">
    
        <div class="self-center flex gap-1">
                A receipt for
            <p class="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50" style="outline: none;">
                {receipt.c_name}
            </p> 
                from
            <p class="font-medium text-gray-800 dark:text-gray-50 " style="outline: none;">
                {dateString}
            </p>
                with a total of 
                <p class="font-medium text-gray-800 dark:text-gray-50 " style="outline: none;">
                 Php {receipt.total}
              </p>
        </div>
        <div class="flex-shrink-0 ml-2 mr-1">
          <a class="flex gap-1 items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500" href="/{receipt.id}" style="outline: none;">
            View
            <i class="fa-solid fa-circle-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  </li>