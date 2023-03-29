<script>
    export let title = ''
    export let link = ''
    export let i = ''
</script>

<nav class = "flex px-5 py-3 white-700  rounded-lg bg-slate-300 dark:bg-[#1E293B]">
    <ol class = "inline-flex items-center space-x-1 md:space-x-3">
        <li class = "inline-flex items-center">
            <a href={link} class = "flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:slate-100 dark:hover:text-slate-300">
                <i class={i}/>
                {title}
            </a>
        </li>
    </ol>
</nav>