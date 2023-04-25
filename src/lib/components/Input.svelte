<script>
    export let value = ''
    export let placeholder = ''
    export let id
    export let label
    export let type = 'text'
    export let disable = false
    export let required = false
    export let i = ''
    export let is = ''

    export let errors
</script>

<div class="block mb-2 text-sm text-gray-700 dark:text-gray-400">
    <label for={id} class="label font-semibold pb-1">
        <span><i class="{i}" style="{is}"></i>{label}</span>
    </label>
    <input class="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 bg-slate-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            {type}
            {placeholder}
            {required} {disable}
            {id}
            name={id}
            {value}
    />
    {#if errors}
        {#each errors as error}
            <label for={id} class="label py-0 pt-1">
                <span class="label-text-alt text-error">
                    {error}
                </span>
            </label>
        {/each}
    {/if}
</div>