import { error, fail, redirect } from "@sveltejs/kit"
import { generateUsername, validateData, serializeNonPOJOs} from "$lib/utils"
import { registerSchema } from "$lib/schemas"


export const load = async ({locals}) => {
    if (locals.pb.authStore.isValid) {
        throw redirect(303, '/app/dashboard')
    }

    
}


export const actions = {
    register: async({ request, locals}) => {

        const body = await request.formData();

        const email = body.get('email');

    const {formData, errors} = await validateData(body, registerSchema)

    let username = generateUsername(formData.name.split(' ').join('').toLowerCase())
    

    if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            })

    }

    try {

        const existingUser = serializeNonPOJOs(await locals.pb.collection('emails').getFirstListItem(undefined, {
                    filter: `email = "${email}"`
                    }))

        if (existingUser) {
            const error = new Error('Entered email already in use.')
            error.code = 400
            throw error;
        } 
        
    } catch (err) {
        
        if(err.code === 400) {
            throw error(err.code, err.message)
        } else if(err.code === 404) {
            throw error(err.code, err.message)
        }
        else {
            try {
                await locals.pb.collection('users').create({username, ...formData })  
            } catch (err) {
                console.log('Error: ', err,);
                throw error(err.status, err.message);
            }

            await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
            throw redirect(303, '/signup/createBusinessProfile')
        }
        

    }


    }
}