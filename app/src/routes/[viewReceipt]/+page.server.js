import { error, redirect } from "@sveltejs/kit"
import {serializeNonPOJOs} from "$lib/utils"

export const load = async ({locals, params}) => {

    const user = serializeNonPOJOs(await locals.pb.collection('business_profile').getFirstListItem('user ="'+locals.user.id+'"'))
    const record = serializeNonPOJOs(await locals.pb.collection('receipts').getFirstListItem('id ="'+params.viewReceipt+'"'))

    const getReceiptProd = async (receiptId) => {
        try {
            const r_prod = serializeNonPOJOs(await locals.pb.collection('receipt_products').getFullList(undefined, {
                filter: 'receipt = "'+receiptId+'"', expand: 'product'
            }))

            return r_prod
        } catch (err) {
            console.log('Error: ',err);
            throw error(err.status, err.message)
        }
    }

    const list = await locals.pb.collection('receipt_products').getFullList(undefined, {
        filter: 'receipt = "'+record.id+'"', expand: 'product'
    })
    const subtotals = list.map(item => item.subtotal)
    const total = subtotals.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return{
        user,
        record,
        products: getReceiptProd(record.id),
        total
    }
}