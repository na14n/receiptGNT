import { error, fail, redirect } from "@sveltejs/kit"
import { validateData} from "$lib/utils"
import { businessProfileSchema } from "$lib/schemas"
// export const load = async ({locals}) => {
//     if ((!locals.pb.authStore.isValid) && (locals.user.have_profile === true)){
//         throw redirect(303, '/dashboard')
//     }

// }

export const actions = {
    createProfile: async ({request, locals}) => {

        const {formData, errors} = await validateData(await request.formData(), businessProfileSchema)

        // const formData = Object.fromEntries(await request.formData())
        const user = locals.user.id

        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            })
    }

        try {
            await locals.pb.collection('business_profile').create({user, ...formData})
            await locals.pb.collection('users').update(locals.user.id, {have_profile: true})
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.messsage)
        }

        throw redirect(303, '/dashboard')
    }
}