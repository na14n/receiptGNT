<script>
    import {Input} from "$lib/components"

    export let form
</script>

<div class="flex items-center min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10">
            <div class="text-center">
                <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"><i class="fa-regular fa-user p-2"></i>Sign Up</h1>
                <p class="text-gray-500 dark:text-gray-600 italic">Register to have an account</p>
            </div>
            <div class="m-7">
                <form action="?/addProd" method="POST">
                    <div class="mb-7">
                        <Input class="text-blue-600" type="text" name="prod_name" id="prod_name" label="Product Name" placeholder="Your Product's Name" i="fa-solid fa-user pr-3" is="color:#2563eb" errors={form?.errors?.prod_name}/>
                        <Input class="text-blue-600" type="text" name="prod_price" id="prod_price" label="Product Price" placeholder="The Product's Price" i="fa-solid fa-envelope pr-3" is="color:#2563eb" errors={form?.errors?.prod_price}/>
                    </div>
                    <div class="mb-6">
                        <button class="w-full px-3 py-2 text-white bg-blue-600 rounded-md focus:bg-blue-400 focus:outline-none">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>