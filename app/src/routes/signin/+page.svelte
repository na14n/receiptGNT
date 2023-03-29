<script>
    import {Input} from "$lib/components"

    export let form
</script>


<div class="flex items-center min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10">
            <div class="text-center">
                <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"><i class="fa-regular fa-user p-2"></i>Sign in</h1>
                <p class="text-gray-500 dark:text-gray-600 italic">Sign in to access your account.</p>
            </div>
            <div class="m-7">
                <form action="?/login" method="POST">

                    <div class="mb-7">
                        <Input class="text-blue-600" type="text" name="email" id="email" label="Email" placeholder="Your Email" i="fa-solid fa-envelope pr-3" is="color:#2563eb" errors={form?.errors?.email}/>
                        <Input class="text-blue-600" type="password" name="password" id="password" label="Password" placeholder="Your Password" i="fa-solid fa-key pr-3" is="color:#2563eb" errors={form?.errors?.password}/>
                    </div>

                    
                    <div class="mb-6">
                        <button class="w-full px-3 py-2 text-white bg-blue-600 rounded-md focus:bg-blue-400 focus:outline-none">Sign in</button>
                    </div>

                    <p class="text-md text-center text-gray-600">Don't have an account yet? <a href="/signup" class="text-blue-600 underline hover:text-blue-400 dark:focus:border-indigo-800">Sign up</a>.</p>
                </form>
            </div>
        </div>
    </div>
</div>


