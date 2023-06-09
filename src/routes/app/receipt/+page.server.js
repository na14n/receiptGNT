import { error, fail, redirect } from "@sveltejs/kit"
import {serializeNonPOJOs} from "$lib/utils"
import { validateData} from "$lib/utils"
import { updateReceiptSchema } from "$lib/schemas"


export const load = async ({locals}) => {

    const getReceipts = async (sellerId) => {
        try {
            const receipts = serializeNonPOJOs(await locals.pb.collection('receipts').getFullList(undefined, {
                filter: 'user = "'+sellerId+'"'
            }))
            return receipts
        } catch (err) {
            console.log('Error: ',err);
            throw error(err.status, err.message)
        }
    }

    return {
        receipts: getReceipts(locals.user.id),
    }

}

export const actions = {
    deleteReceipt: async ({request, locals}) => {
        const {id} = Object.fromEntries(await request.formData())
         try {
            await locals.pb.collection('receipts').delete(id)
         } catch (err) {
            console.log('Error: ', err)
            throw error(err.status, err.message)
         }
        return{
            success: true
        }
    },

    updateReceipt: async ({request, locals}) => {
        const {formData, errors} = await validateData(await request.formData(), updateReceiptSchema)
        
        if (errors) {
                return fail(400, {
                    data: formData,
                    errors: errors.fieldErrors
                })
    
        }

         try {
            // console.log(formData);
            await locals.pb.collection('receipts').update(formData.id, formData)
         } catch (err) {
            console.log('Error: ', err)
            throw error(err.status, err.message)
         }
        return{
            success: true
        }
    }
    
}
