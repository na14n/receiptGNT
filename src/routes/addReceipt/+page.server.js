import { error, redirect, fail } from "@sveltejs/kit"
import { generateReceiptId } from "$lib/utils"
import { validateData} from "$lib/utils"
import { createReceiptSchema } from "$lib/schemas"

export const load = async ({locals}) => {
    if ((!locals.pb.authStore.isValid && locals.user.have_profile === false))  {
        throw redirect(303, '/signin')
    }

}

export const actions = {
    createReceipt: async ({request, locals}) => {
        const {formData, errors} = await validateData(await request.formData(), createReceiptSchema)
        
        if (errors) {
                return fail(400, {
                    data: formData,
                    errors: errors.fieldErrors
                })
    
        }



        let user = locals.user.id
        let r_id = generateReceiptId(formData.c_name.split(' ').join('').toLowerCase())
        
        try {
            await locals.pb.collection('receipts').create({"user": user, "r_id": r_id, ...formData})
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.messsage)
        }
        
        
        throw redirect(303, '/addReceipt/'+r_id)
    }
}