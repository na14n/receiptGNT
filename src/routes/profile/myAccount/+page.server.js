import { error, fail, redirect } from "@sveltejs/kit"
import {serializeNonPOJOs, validateData} from "$lib/utils"
import { emailSchema, passwordSchema } from "$lib/schemas"

export const load = async ({locals}) => {

    const user = serializeNonPOJOs(await locals.pb.collection('users').getFirstListItem('id ="'+locals.user.id+'"'))
    const business = serializeNonPOJOs(await locals.pb.collection('business_profile').getFirstListItem('user ="'+locals.user.id+'"'))

    return{
        user,
        business
    }
}

export const actions = {
    
    changeEmail: async ({request, locals}) => {

        const {formData, errors} = await validateData(await request.formData(), emailSchema)
        
    
        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            })
        }
        
        try {
            if (locals.user.email === formData.email){
                const error = new Error('Entred email already in use.')
                error.status = 400
                throw error;
            } else {
                await locals.pb.collection('users').requestEmailChange(formData.email);
            }
        } catch (err) {
            throw error(err.status, err.message);
        }

        return {
            success: true
        }


    },

    changePassword: async ({request, locals}) => {

        const {formData, errors} = await validateData(await request.formData(), passwordSchema)
        
    
        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            })
        }
        
        try {
                await locals.pb.collection('users').update(locals.user.id, formData);
                locals.pb.authStore.clear()
        } catch (err) {
            throw error(err.status, err.message);
        }

        throw redirect(303, '/signin')

    }


}