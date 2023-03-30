import { error, redirect } from "@sveltejs/kit"
import { generateReceiptId } from "$lib/utils"

export const load = async ({locals}) => {
    if ((!locals.pb.authStore.isValid && locals.user.have_profile === false))  {
        throw redirect(303, '/dashboard')
    }

}

export const actions = {
    createReceipt: async ({request, locals}) => {
        const formData = Object.fromEntries(await request.formData())

        let user = locals.user.id
        let r_id = generateReceiptId(formData.c_name.split(' ').join('').toLowerCase())
        
        try {
            console.log(user);
            console.log(r_id);
            console.log(formData);
            await locals.pb.collection('receipts').create({"user": user, "r_id": r_id, ...formData})
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.messsage)
        }
        
        
        throw redirect(303, '/receipt/addReceipt/'+r_id)
    }
}