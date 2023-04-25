import { error, redirect } from "@sveltejs/kit"
import {serializeNonPOJOs} from "$lib/utils"

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
            // var pop = date[1].slice(0, date[1].indexOf(' '))

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
        const formData = Object.fromEntries(await request.formData())
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
