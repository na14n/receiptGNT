import { error, redirect } from "@sveltejs/kit"
import {serializeNonPOJOs} from "$lib/utils"


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