<script>
    import {Input} from "$lib/components"

    export let form
</script>

<div class="flex items-center min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10">
            <div class="text-center">
                <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"><i class="fa-regular fa-building p-2"></i>Business Profile Details</h1>
                <p class="text-gray-500 dark:text-gray-600 italic">Set up your Business profile</p>
            </div>
            <div class="m-7">
                <form action="?/createProfile" method="POST">
                    <div class="mb-7">
                        <Input class="text-blue-600" type="text" name="b_name" id="b_name" label="Business Name" placeholder="Your Business' Name" i="fa-solid fa-store pr-3" is="color:#2563eb" errors={form?.errors?.b_name}/>
                        <Input class="text-blue-600" type="text" name="b_address" id="b_address" label="Business Address" placeholder="Your Shipping Address" i="fa-solid fa-map-location pr-3" is="color:#2563eb" errors={form?.errors?.b_address}/>
                        <Input class="text-blue-600" type="text" name="b_contact" id="b_contact" label="Business Contact" placeholder="Your Contact Information" i="fa-solid fa-address-card pr-3" is="color:#2563eb" errors={form?.errors?.b_contact}/>
                    </div>
                    <div class="mb-6">
                        <button class="w-full px-3 py-2 text-white bg-blue-600 rounded-md focus:bg-blue-400 focus:outline-none">Create my Profile</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


<!-- Footer Mentions -->
<div class="fixed bottom-5 w-full text-center text-gray-400">
<p>Copyright ® Bytes 2023</p>
</div>
