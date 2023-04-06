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
        <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0099ff" fill-opacity="1" d="M0,128L40,144C80,160,160,192,240,213.3C320,235,400,245,480,224C560,203,640,149,720,154.7C800,160,880,224,960,245.3C1040,267,1120,245,1200,234.7C1280,224,1360,224,1400,224L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg></div>

</body>