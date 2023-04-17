<script>
    import {PageHeader} from "$lib/components"

    const showPreview = (event) => {
        const target = event.target
        const files = target.files

        if (files.length > 0) {
            const src = URL.createObjectURL(files[0])
            const preview = document.getElementById('avatar-preview')
            preview.src = src
        }
    }

</script>

<body>
    
    <PageHeader header="Edit Profile" hidden="true"/>

    <div class = "mt-10 ml-12 transform ease-in-out duration-500 h-full flex-column px-10">
        <div class="flex flex-col w-full h-full">
            <form action="" class="flex flex-col space-y-3 w-full">
                <div class="form-control w-full max-w-lg">
                    <label for="avatar" class="label font-medium pb-1">
                        <span class="label-text text-xl mb-2 text-slate-700">Business Logo</span>
                    </label>
                    <label for="avatar" class="avatar w-32 rounded-full hover:cursor-pointer" >
                        <div for="" class="absolute -bottom-0.5 -right-0.5 hover:cursor-pointer">
                            <span class="btn btn-circle btn-sm bg-blue-600 border-0 text-slate-50 hover:bg-blue-500 active:text-slate-700">
                                <i class="fa-solid fa-pen"></i>
                            </span>
                        </div>
                        <div class="w-32 rounded-full">
                            <img src="https://picsum.photos/150/150" alt="user avatar" id="avatar-preview"/>
                        </div>
                    </label>
                    <input type="file" name="avatar" id="avatar" value="" accept="image/*" hidden on:change={showPreview} />
                </div>
            </form>
        </div>
    </div>

   


</body>