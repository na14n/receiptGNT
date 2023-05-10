import { error, fail, redirect } from "@sveltejs/kit"
import { validateData } from "$lib/utils"
import { emailSchema } from "$lib/schemas"

export const load = async ({locals, params}) => {
    if (locals.pb.authStore.isValid) {
        throw redirect(303, '/app/dashboard')
    }
}

export const actions = {
    
    forgot: async({ request, locals}) => {
    const {formData, errors} = await validateData(await request.formData(), emailSchema)
    

    if (errors) {
        return fail(400, {
            data: formData,
            errors: errors.fieldErrors
        })
    }


    try {
        await locals.pb.collection('users').requestPasswordReset(formData.email);
        return {
            success: true
        }
    } catch (err) {
        console.log('Error: ', err);
        // throw error(500, 'Something went wrong while logging in');
        throw error(err.status, err.message);
    }
    }
}




