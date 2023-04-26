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
        console.log(email);

    const {formData, errors} = await validateData(body, registerSchema)

    let username = generateUsername(formData.name.split(' ').join('').toLowerCase())
    

    if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            })

    }

    const existingUser =  serializeNonPOJOs(await locals.pb.collection('emails').getFirstListItem(undefined, {
        filter: `email = "${email}"`
    }))


    try {

        if (existingUser){
            const error = new Error('Entred email already in use.')
            error.status = 400
            throw error;
            // throw new error(400, 'Entred email already in use.');
        } else {
            await locals.pb.collection('users').create({username, ...formData })  
        }
        
        
    } catch (err) {
        console.log('Error: ', err,);
        throw error(err.status, err.message);
    }
        await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
        throw redirect(303, '/signup/createBusinessProfile')
    }
}