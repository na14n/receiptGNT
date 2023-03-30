<script>
    import { Sidebar, PageTitle, PageHeader, ProductRow} from "$lib/components"

    export let data
</script>

<body class = "body bg-white dark:bg-[#0F172A] min-h-screen ">

    <Sidebar />

    <PageHeader header="My Profile" hidden="true"/>

    <div class="content not-printable ml-12 transform ease-in-out duration-500 pt-5 px-2 md:px-5">
        <nav class = "flex justify-between px-5 py-3 white-700  rounded-lg bg-slate-200 dark:bg-[#1E293B]">
            <ol class = "inline-flex items-center space-x-1 md:space-x-3">
                <li class = "inline-flex items-center">
                    <a href="/profile" class = "flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:slate-100 dark:hover:text-slate-300">
                        <i class="fa-solid fa-user pr-2" />
                        User
                    </a>
                </li>
            </ol>
            <ol class = "inline-flex items-center space-x-1 md:space-x-3">
                <li class = "inline-flex items-center text-sm font-medium text-blue-600  dark:slate-100 dark:hover:text-slate-300">
                    <button id="print" class="px-3 hover:text-sky-500"><i class="fa-solid fa-user-pen pr-2"/>Manage Profile</button>
                </li>
                <li class = "inline-flex items-center text-sm font-medium text-blue-600  dark:slate-100 dark:hover:text-slate-300">
                    <button id="print" class="px-3 hover:text-sky-500"><i class="fa-solid fa-user-gear pr-2"/>Manage Account</button>
                </li>
            </ol>
        </nav>
    </div>

    <div class = "mt-10 ml-12 transform ease-in-out duration-500 h-full flex-column px-10">
        <div  class="font-semibold text-s text-slate-400 dark:text-slate-200">
            Your Name
        </div>
        <div  class="font-bold pb-1 text-2xl uppercase text-gray-700 dark:text-slate-200">
            {data.user.name}
        </div>
    </div>
    <div class = "mt-10 ml-12 transform ease-in-out duration-500 h-full flex-column px-10">
        <div  class="font-semibold text-s text-slate-400 dark:text-slate-200">
            Your Email
        </div>
        <div  class="font-bold pb-1 text-2xl text-gray-700 dark:text-slate-200">
            {data.user.email}
        </div>
    </div>

    
    <div class = "mt-10 ml-12 transform ease-in-out duration-500 h-full flex-column px-10">
        <div  class="font-semibold text-s text-slate-400 dark:text-slate-200">
            Your Business Name
        </div>
        <div  class="font-bold pb-1 text-2xl text-gray-700 dark:text-slate-200">
            {data.business.b_name}
        </div>
    </div>
    <div class = "mt-10 ml-12 transform ease-in-out duration-500 h-full flex-column px-10">
        <div  class="font-semibold text-s text-slate-400 dark:text-slate-200">
            Your Business Name
        </div>
        <div  class="font-bold pb-1 text-2xl text-gray-700 dark:text-slate-200">
            {data.business.b_address}
        </div>
    </div>
    <div class = "mt-10 ml-12 transform ease-in-out duration-500 h-full flex-column px-10">
        <div  class="font-semibold text-s text-slate-400 dark:text-slate-200">
            Your Business Name
        </div>
        <div  class="font-bold pb-1 text-2xl text-gray-700 dark:text-slate-200">
            {data.business.b_contact}
        </div>
    </div>
            
            
        <div class = "grow h-full flex items-center justify-center"></div>
        <div class = "flex-none h-full text-center flex items-center justify-center"></div>


</body>