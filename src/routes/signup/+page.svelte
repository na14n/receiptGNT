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
                <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"><i class="fa-regular fa-user p-2"></i>Sign Up</h1>
                <p class="text-gray-500 dark:text-gray-600 italic">Register to have an account</p>
            </div>
            <div class="m-7">
                <form action="?/register" method="POST" use:enhance={submitRegister}>
                    <div class="mb-7">
                        <Input class="text-blue-600" type="text" name="name" id="name" label="Name" placeholder="Your Name" i="fa-solid fa-user pr-3" is="color:#2563eb" errors={form?.errors?.name} disable={loading}/>
                        <Input class="text-blue-600" type="text" name="email" id="email" label="Email" placeholder="Your Email" i="fa-solid fa-envelope pr-3" is="color:#2563eb" errors={form?.errors?.email} disable={loading}/>
                        <Input class="text-blue-600" type="password" name="password" id="password" label="Password" placeholder="Your Password" i="fa-solid fa-key pr-3" is="color:#2563eb" errors={form?.errors?.password} disable={loading}/>
                        <Input class="text-blue-600" type="password" name="passwordConfirm" id="passwordConfirm" label="Confirm Password" placeholder="Please Confirm your Password" i="fa-solid fa-key pr-3" is="color:#2563eb" errors={form?.errors?.passwordConfirm} disable={loading}/>
                    </div>
                    <div class="mb-6">
                        <button class="w-full px-3 py-2 text-white bg-blue-600 rounded-md focus:bg-blue-400 focus:outline-none disabled:bg-blue-300" disabled={loading}>Sign Up</button>
                    </div>
                    <div class=" text-md flex justify-center items-center pb-7">
                        <p class="text-md text-center text-gray-600">Already have an account? <a href="/signin" class="text-blue-600 underline hover:text-blue-400 dark:focus:border-indigo-800">Sign in</a>.</p>
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
