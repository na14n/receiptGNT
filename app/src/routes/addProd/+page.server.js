import { error, fail, redirect } from "@sveltejs/kit"
import { validateData} from "$lib/utils"
import { addProdSchema } from "$lib/schemas"


export const load = async ({locals}) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/signin')
    }
}


export const actions = {
    addProd: async({ request, locals}) => {
        // const body = Object.fromEntries(await request.formData())
        // console.log(body.username+randomBytes(5).toString('hex'));
        // body.append('business_id', body.username+randomBytes(5).toString('hex'))

    const {formData, errors} = await validateData(await request.formData(), addProdSchema)

    const user = locals.user.id
    
    if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            })

    }

    try {
        await locals.pb.collection('products').create({user, ...formData })
    } catch (err) {
        // console.log('Error: ', err);
        throw error(err.status, err.message);
    }

        throw redirect(303, '/app/inventory')
    }
}