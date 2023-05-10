import { redirect } from "@sveltejs/kit"
import { userProducts } from "../../stores/store.js"

export const load = async ({locals}) => {

    if(!locals.pb.authStore.isValid) {
        throw redirect(303, '/signin')
    } else {
        throw redirect('303', '/app/dashboard')
    }

}