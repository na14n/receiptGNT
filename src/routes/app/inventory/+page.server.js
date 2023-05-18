import { error, fail, redirect } from "@sveltejs/kit"
import {serializeNonPOJOs} from "$lib/utils"
import { validateData} from "$lib/utils"
import { updateProdSchema } from "$lib/schemas"

export const load = async ({locals}) => {
    if ((!locals.pb.authStore.isValid) && (locals.user.have_profile == false) ){
        throw redirect(303, '/app/dashboard')
    }

    const getUserProds = async (userId) => {
        try {
            const products = serializeNonPOJOs(await locals.pb.collection('products').getFullList(undefined, {
                filter: 'user = "'+userId+'"'
            }))
            let date = products.map(x => x.created)

            return products
        } catch (err) {
            console.log('Error: ',err);
            throw error(err.status, err.message)
        }
    }

    return {
        products: getUserProds(locals.user.id)
    }

}

export const actions = {
    deleteProduct: async ({request, locals}) => {
        const {id} = Object.fromEntries(await request.formData())
         try {
            await locals.pb.collection('products').delete(id)
         } catch (err) {
            console.log('Error: ', err)
            throw error(err.status, err.message)
         }
        return{
            success: true
        }
    },

    updateProduct: async ({request, locals}) => {
        const {formData, errors} = await validateData(await request.formData(), updateProdSchema)

        if (errors) {
            return fail(400, {
                data: formData,
                errors: errors.fieldErrors
            })

    }

         try {
            await locals.pb.collection('products').update(formData.id, formData)
         } catch (err) {
            console.log('Error: ', err)
            throw error(err.status, err.message)
         }
        return{
            success: true
        }
    }
    
}
