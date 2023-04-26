<script>
    import {PageHeader, Input, Modal} from "$lib/components"

    export let data
    export let form

    let emailModalOpen = false;
    
</script>

<body>
    
    <PageHeader header="Account Settings" hidden="true"/>
    
    <div class = "mt-10 ml-12 transform ease-in-out duration-500 flex-column px-10">
        <div  class="font-semibold text-s text-slate-500 dark:text-slate-200">
            Your Account Id
        </div>
        <div  class="font-bold pb-1 text-m text-gray-700 dark:text-slate-200">
            {data.user.id}
        </div>
    </div>
    <div class = "mt-10 ml-12 transform ease-in-out duration-500 w-full h-full flex-column px-10">
        <div  class="font-semibold text-sm text-slate-400 dark:text-slate-200">
            Your Email
        </div>
        <div  class="font-bold pb-1 text-m text-gray-700 dark:text-slate-200">
            {data.user.email}
        </div>
    </div>

    <div class="mt-3 ml-12 flex-column px-10">
        <Modal label="emailChange" checked={emailModalOpen}>
            <span slot="trigger" class="w-full font-medium text-blue-600 rounded-md cursor-pointer underline focus:bg-blue-400 focus:outline-none">Change Email<i class="fa-regular fa-pen-to-square pl-2 text-underline"></i> </span>
            <div slot="heading">
                <h3 class="text-2xl mb-3">Change Email</h3>
                <p class="text-base font-normal text-gray-500 italic">
                    Please enter your new email here.
                </p>
            </div>
            <div slot="actions" class="flex w-full">
                <form action="?/changeEmail" method="POST" class="w-full">
                    <Input class="text-blue-600" type="text" name="email" id="email" label="Email" placeholder="email@email.com" i="fa-solid fa-envelope pr-2" is="color:#2563eb" errors={form?.errors?.email}/>
                    <input type="hidden" name="id" placeholder="Enter your new email here." />
                    <div class="flex justify-end gap-x-4 pr-5">
                        <label for="emailChange" class="btn btn-ghost text-gray-500">Cancel</label>
                        <button class="btn btn-success hover:bg-emerald-300">Update</button>
                    </div>
                </form>
            </div>
        </Modal>
        <div  class="font-medium mt-1 w-1/3 text-sm opacity-50 text-orange-600 dark:text-slate-200">
            *** You will need to log out your account before cofirming the email change. Errors are guaranteed to be experienced without logging out before and after the email change confirmation.
        </div>
    </div>
    

    <div class = "mt-10 ml-12 transform ease-in-out duration-500 flex-column px-10">
        <form action="?/changePassword" method="POST" class="w-1/4">
            <div  class="font-semibold text-s text-slate-500 dark:text-slate-200">
                Change Password
            </div>
            <div  class=" pb-1 text-m text-gray-700 w-2/3 dark:text-slate-200">
                <Input class="text-blue-600" type="password" name="oldPassword" id="oldPassword" label="Old Password" placeholder="Enter your Old Password" i="fa-solid fa-lock pr-2" is="color:#2563eb" errors={form?.errors?.oldPassword}/>
            </div>
            <div  class="pb-1 text-m text-gray-700 w-2/3 dark:text-slate-200">
                <Input class="text-blue-600" type="password" name="password" id="password" label="New Password" placeholder="Enter your New Password" i="fa-solid fa-key pr-2" is="color:#2563eb" errors={form?.errors?.password}/>
            </div>
            <div  class=" pb-1 text-m text-gray-700 w-2/3 dark:text-slate-200">
                <Input class="text-blue-600" type="password" name="passwordConfirm" id="passwordConfirm" label="Confirm New Password" placeholder="Confirm your New Password" i="fa-solid fa-key pr-2" is="color:#2563eb" errors={form?.errors?.passwordOld}/>
            </div>
            <div class="flex gap-x-4 pt-5">
                <button class="btn bg-blue-600 border-0 hover:bg-blue-400 text-white">Change PAssword</button>
            </div>
            <div  class="font-medium mt-3 w-full text-sm opacity-50 text-orange-600 dark:text-slate-200">
                *** You will be logged out after a successful password change. Please log in again with your new password.
            </div>
        </form>
      
        
    </div>

    


</body>