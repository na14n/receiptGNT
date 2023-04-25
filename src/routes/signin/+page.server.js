import { error, fail, redirect } from "@sveltejs/kit"
import { validateData } from "$lib/utils"
import { loginSchema } from "$lib/schemas"

export const load = async ({locals, params}) => {
    if (locals.pb.authStore.isValid) {
        throw redirect(303, '/app/dashboard')
    }
}

export const actions = {
    
    login: async({ request, locals}) => {
    // const body = Object.fromEntries(await request.formData())
    const {formData, errors} = await validateData(await request.formData(), loginSchema)
    

    if (errors) {
        return fail(400, {
            data: formData,
            errors: errors.fieldErrors
        })
    }


    try {
        await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
    } catch (err) {
        console.log('Error: ', err);
        // throw error(500, 'Something went wrong while logging in');
        throw error(err.status, err.message);
    }

    throw redirect(303, '/app/dashboard')

    }
}




