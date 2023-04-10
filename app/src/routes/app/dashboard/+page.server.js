import { error, fail, redirect } from "@sveltejs/kit"
import { serializeNonPOJOs } from "$lib/utils"

export const load = async ({locals, params}) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/')
    }
    if (locals.user.have_profile === false) {
        throw redirect(303, '/signup/createBusinessProfile')
    }
}