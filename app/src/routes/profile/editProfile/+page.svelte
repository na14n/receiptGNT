<script>
    import {PageHeader, Input} from "$lib/components"
    import {getImageUrl} from "$lib/utils"

    const showPreview = (event) => {
        const target = event.target
        const files = target.files

        if (files.length > 0) {
            const src = URL.createObjectURL(files[0])
            const preview = document.getElementById('avatar-preview')
            preview.src = src
        }
    }

    export let form
    export let data


</script>

<body>
    
    <PageHeader header="Edit Profile" hidden="true"/>

    <div class = "mt-10 ml-12 transform ease-in-out duration-500 w-1/4 h-full flex-column px-10">
        <div class="flex flex-col w-full h-full">
            <form action="?/updateProfile" method="POST" class="flex flex-col space-y-3 w-full" enctype="multipart/form-data">
                <div class="form-control w-full max-w-lg">
                    <label for="b_img" class="mb-2 text-sm text-gray-700 dark:text-gray-400">
                        <span class="font-semibold pl-2 pb-1"><i class="fa-solid fa-building pr-3 text-blue-600"></i>Business Logo</span>
                    </label>
                    <label for="b_img" class="avatar w-32 rounded-full hover:cursor-pointer" >
                        <div for="" class="absolute -bottom-0.5 -right-0.5 hover:cursor-pointer">
                            <span class="btn btn-circle btn-sm bg-blue-600 border-0 text-slate-50 hover:bg-blue-500 active:text-slate-700">
                                <i class="fa-solid fa-pen"></i>
                            </span>
                        </div>
                        <div class="w-32 rounded-full">
                            <img src={data.profile?.b_img ? getImageUrl(data.profile.collectionId, data.profile.id, data.profile.b_img) : `https://ui-avatars.com/api/?name=${data.profile.b_name}`  } alt="user avatar" id="avatar-preview"/>
                        </div> 
                    </label> 
                    <input type="file" name="b_img" id="b_img"  accept="image/*" hidden on:change={showPreview} />
                    {#if form?.errors?.b_img}
                        {#each form?.errors?.b_img as error}
                            <label for="b_img" class="label pt-4">
                                <span class="label-text-alt text-error">
                                    {error}
                                </span>
                            </label>
                        {/each}
                    {/if}
                </div>



                <Input class="text-blue-600" type="text" name="b_name" id="b_name" label="Business Name" placeholder="Your Business' Name" i="fa-solid fa-store pr-3" is="color:#2563eb" value={data.profile.b_name} errors={form?.errors?.b_name}/>

                <Input class="text-blue-600" type="text" name="b_address" id="b_address" label="Business Address" placeholder="Your Shipping Address" i="fa-solid fa-map-location pr-3" is="color:#2563eb" value={data.profile.b_address} errors={form?.errors?.b_address}/>

                <Input class="text-blue-600" type="text" name="b_contact" id="b_contact" label="Business Contact" placeholder="Your Contact Information" i="fa-solid fa-address-card pr-3" is="color:#2563eb" value={data.profile.b_contact} errors={form?.errors?.b_contact}/>



                <div class="py-10">
                    <button class="w-full px-3 py-2 font-medium text-white bg-blue-500 rounded-md focus:bg-blue-400 focus:outline-none">Update my Profile</button>
                </div>
            </form>
        </div>
    </div>

   


</body>