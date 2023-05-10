<script>
    import {enhance} from '$app/forms' 
    import {Input} from "$lib/components"
	import toast from "svelte-french-toast";

    export let form

    let loading = false


    const submitLogin = () => {
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
                <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"><i class="fa-regular fa-user p-2"></i>Sign in</h1>
                <p class="text-gray-500 dark:text-gray-600 italic">Sign in to access your account.</p>
            </div>
            <div class="m-7">
                <form action="?/login" method="POST" use:enhance={submitLogin}> 

                    <div class="mb-7">
                        <Input class="text-blue-600" type="text" name="email" id="email" label="Email" placeholder="Your Email" i="fa-solid fa-envelope pr-3" is="color:#2563eb" errors={form?.errors?.email} disable={loading}/>
                        <Input class="text-blue-600" type="password" name="password" id="password" label="Password" placeholder="Your Password" i="fa-solid fa-key pr-3" is="color:#2563eb" errors={form?.errors?.password} disable={loading}/>
                    </div>

                    
                    <div class="mb-6">
                        <button class="w-full px-3 py-2 text-white bg-blue-600 rounded-md focus:bg-blue-400 focus:outline-none disabled:bg-blue-300" disabled={loading}>Sign in</button>
                    </div>

                    <p class="text-md text-center text-gray-600">Don't have an account yet? <a href="/signup" class="text-blue-600 underline hover:text-blue-400 dark:focus:border-indigo-800" aria-disabled={loading}>Sign up</a>.</p>

                    <p class="mt-4 text-md text-center text-gray-600">Or perhaps you forgot your password?<a href="/signup/forgot" class="text-blue-600 underline hover:text-blue-400 dark:focus:border-indigo-800" aria-disabled={loading}>Reset it here.</a></p>
                </form>
            </div>
        </div>
    </div>
</div>


