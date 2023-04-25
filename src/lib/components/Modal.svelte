<script>
    export let label
    export let checked
</script>

<label for={label}>
    <slot name="trigger"/>
</label>

<input type="checkbox" id={label} class="modal-toggle" {checked} />
<label for={label} class="modal modal-bottom sm:modal-middle w-full">
    <label for="" class="modal-box w-full bg-slate-200">
        <div class="font-bold text-xl text-center text-gray-700 mb-7">
            <slot name="heading"/>
        </div>
        <div class="my-2 w-full">
            <slot/>
        </div>
        <div class="modal-action w-full">
            <slot name="actions" />
        </div>
    </label>
</label>