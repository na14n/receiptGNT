<script>
	import { PageHeader } from '$lib/components';
	import { getImageUrl } from '$lib/utils';

	export let data;
</script>

<body>
	<PageHeader header="My Profile" hidden="true" />
	<div class="mt-10 ml-12 transform ease-in-out duration-500 h-full flex-column px-10">
		<img
			class="w-28 rounded-full"
			src={data.business?.b_img
				? getImageUrl(data.business.collectionId, data.business.id, data.business.b_img)
				: `https://ui-avatars.com/api/?name=${data.business.b_name}`}
			alt="user avatar"
			id="avatar-preview"
		/>
	</div>
	<div class="mt-10 ml-12 transform ease-in-out duration-500 h-full flex-column px-10">
		<div class="font-semibold text-s text-slate-400 dark:text-slate-200">Your Name</div>
		<div class="font-bold pb-1 text-2xl uppercase text-gray-700 dark:text-slate-200">
			{data.user.name}
		</div>
	</div>
	<div class="mt-10 ml-12 transform ease-in-out duration-500 h-full flex-column px-10">
		<div class="font-semibold text-s text-slate-400 dark:text-slate-200">Your Email</div>
		<div class="font-bold pb-1 text-2xl text-gray-700 dark:text-slate-200">
			{data.user.email}
		</div>
	</div>

	<div class="mt-10 ml-12 transform ease-in-out duration-500 h-full flex-column px-10">
		<div class="font-semibold text-s text-slate-400 dark:text-slate-200">Your Business Name</div>
		<div class="font-bold pb-1 text-2xl text-gray-700 dark:text-slate-200">
			{data.business.b_name}
		</div>
	</div>
	<div class="mt-10 ml-12 transform ease-in-out duration-500 h-full flex-column px-10">
		<div class="font-semibold text-s text-slate-400 dark:text-slate-200">Your Business Address</div>
		<div class="font-bold pb-1 text-2xl text-gray-700 dark:text-slate-200">
			{data.business.b_address}
		</div>
	</div>
	<div class="mt-10 ml-12 transform ease-in-out duration-500 h-full flex-column px-10">
		<div class="font-semibold text-s text-slate-400 dark:text-slate-200">
			Your Business Contact Information
		</div>
		<div class="font-bold pb-1 text-2xl text-gray-700 dark:text-slate-200">
			{data.business.b_contact}
		</div>
	</div>
</body>
