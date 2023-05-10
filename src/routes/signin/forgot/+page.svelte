<script>
    import {enhance} from '$app/forms' 
    import {Input} from "$lib/components"
    import toast from "svelte-french-toast";

    export let form

    const submitReset = () => {
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

    let loading = false
</script>


<div class="flex items-center min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10">
            <div class="text-center">
                <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"><i class="fa-solid fa-unlock-keyhole p-2"></i>Forgot Password</h1>
                <p class="text-gray-500 dark:text-gray-600 italic">Enter your email to reset your password.</p>
            </div>
            <div class="m-7">
                <form action="?/forgot" method="POST" use:enhance={submitReset}> 

                    <div class="mb-7">
                        <Input class="text-blue-600" type="text" name="email" id="email" label="Email" placeholder="Your Email" i="fa-solid fa-envelope pr-3" is="color:#2563eb" errors={form?.errors?.email} disable={loading}/>
                    </div>

                    
                    <div class="mb-6">
                        <button class="w-full px-3 py-2 text-white bg-blue-600 rounded-md focus:bg-blue-400 focus:outline-none disabled:bg-blue-300" aria-disabled={loading}>Request password reset</button>
                    </div>

                    <p class="text-md text-center text-gray-600">Did you remember your password? <a href="/signin" class="text-blue-600 underline hover:text-blue-400 dark:focus:border-indigo-800">Sign in here.</a></p>
                </form>
                {#if form?.success}
                    <div class="mt-5 rounded-xl text-slate-50 bg-green-500 shadow-lg w-full max-w-md py-2">
                        <div class="flex items-center justify-center gap-3">
                        <i class="fa-solid fa-circle-check"></i>
                        <span>An email has been sent to reset your password.</span>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>