import { error, fail, redirect } from "@sveltejs/kit"
import { generateUsername, validateData} from "$lib/utils"
import { registerSchema } from "$lib/schemas"


export const load = async ({locals}) => {
    if (locals.pb.authStore.isValid) {
        throw redirect(303, '/dashboard')
    }
}


export const actions = {
    register: async({ request, locals}) => {
        // const body = Object.fromEntries(await request.formData())
        // console.log(body.username+randomBytes(5).toString('hex'));
        // body.append('business_id', body.username+randomBytes(5).toString('hex'))

    const {formData, errors} = await validateData(await request.formData(), registerSchema)

    let username = generateUsername(formData.name.split(' ').join('').toLowerCase())
    

    if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            })

    }


    try {
        await locals.pb.collection('users').create({username, ...formData })
    } catch (err) {
        console.log('Error: ', err);
        throw error(err.status, err.message);
    }
        await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
        throw redirect(303, '/signup/createBusinessProfile')
    }
}