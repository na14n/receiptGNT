<script>
    import {enhance} from '$app/forms' 
    import toast from "svelte-french-toast";
    import {Input} from "$lib/components"

    export let form

    let loading = false
    const submitRegister = () => {
        loading =  true
        return async ({ result, update}) => {
            switch (result.type) {
                case 'success':
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
</script>

<div class="flex items-center min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10">
            <div class="text-center">
                <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"><i class="fa-regular fa-square-plus p-2"></i>Create Receipt</h1>
                <p class="text-gray-500 dark:text-gray-600 italic">Create a new receipt here.</p>
            </div>
            <div class="m-7">
                <form action="?/createReceipt" method="POST" use:enhance={submitRegister}>
                    <div class="mb-7">
                        <Input class="text-blue-600" type="text" name="c_name" id="c_name" label="Client Name" placeholder="Your Client's Name" i="fa-solid fa-user pr-3" is="color:#2563eb" errors="" disable={loading}/>
                        <Input class="text-blue-600" type="text" name="c_address" id="c_address" label="Client Address" placeholder="The Client's Address" i="fa-solid fa-map-location-dot pr-3" is="color:#2563eb" errors="" disable={loading}/>
                        <Input class="text-blue-600" type="text" name="c_contact" id="c_contact" label="Client Contact Information" placeholder="Your Client's Contact Information" i="fa-solid fa-id-card pr-3" is="color:#2563eb" errors="" disable={loading}/>
                    </div>
                    <div class="mb-6">
                        <button class="w-full px-3 py-2 text-white bg-blue-600 rounded-md focus:bg-blue-400 focus:outline-none" disabled={loading}>Create Receipt</button>
                    </div>
                </form>
                <p class="text-md text-center text-gray-600">Don't want to create a receipt yet? Click here to <a href="/app/receipt" class="text-blue-600 underline hover:text-blue-400 dark:focus:border-indigo-800" aria-disabled={loading}>go back</a>.</p>
            </div>
        </div>
    </div>
</div>