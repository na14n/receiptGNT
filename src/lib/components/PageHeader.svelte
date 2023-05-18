<script>
    export let header
    export let hidden = ''
    export let name = ''
    export let link = ''
</script>

<div class = "w-full flex-column bg-white dark:bg-[#0F172A] items-center justify-center pt-3">
    <div class = "logo ml-12 text-xl text-gray-700 dark:text-slate-200 font-semibold  transform ease-in-out duration-500 h-full flex justify-between px-10">
        <p class="font-medium text-m">{header}</p>
        <span>
            <a href={link} hidden={hidden}>
                <button  type="submit" class="rounded-md bg-blue-600 text-center font-semibold text-slate-100 text-sm w-28 h-10">   
                    {name}
                </button>
            </a>
        </span>
    </div>
    <!-- SPACER -->
    <div class = "grow h-full flex items-center justify-center"></div>
    <div class = "flex-none h-full text-center flex items-center justify-center"></div>
</div>