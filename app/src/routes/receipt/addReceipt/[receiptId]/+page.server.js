import { error, redirect } from "@sveltejs/kit"
import {serializeNonPOJOs} from "$lib/utils"

export const load = async ({locals, params}) => {
    // const record = await locals.pb.collection('receipts').getFirstListItem('r_id ="'+params.r_id+'"')
    const record = await locals.pb.collection('receipts').getFirstListItem('r_id ="'+params.receiptId+'"')
    // console.log(record.id);

    const getReceiptProd = async (receiptId) => {
        try {
            const r_prod = serializeNonPOJOs(await locals.pb.collection('receipt_products').getFullList(undefined, {
                filter: 'receipt = "'+receiptId+'"', expand: 'product'
            }))
            // console.log(r_prod);
            return r_prod
        } catch (err) {
            console.log('Error: ',err);
            throw error(err.status, err.message)
        }
    }

    const getUserProds = async (userId) => {
        try {
            const products = serializeNonPOJOs(await locals.pb.collection('products').getFullList(undefined, {
                filter: 'user = "'+locals.user.id+'"'
            }))
            return products
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

    return {
        products: getReceiptProd(record.id),
        inventory: getUserProds(locals.user.id),
        total
    }

}



export const actions = {
    
    addProduct: async ({request, locals, params}) => {
        const record = await locals.pb.collection('receipts').getFirstListItem('r_id ="'+params.receiptId+'"')
        const formData = await request.formData()
        formData.append('receipt', record.id)
        const product = formData.get('product')
        const qty = formData.get('qty')
        const prod_rec = await locals.pb.collection('products').getFirstListItem('id="' + product + '"')
        const subtotal = prod_rec.prod_price*qty
        formData.append('subtotal', subtotal)
        try {
            // console.log(formData);
            await locals.pb.collection('receipt_products').create(formData)
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.messsage)
        }

        // throw redirect(303, '/products')
        throw redirect (303, '/receipt/addReceipt/'+params.receiptId)
    },

    saveProd: async({request, locals, params}) => {
        const record = await locals.pb.collection('receipts').getFirstListItem('r_id ="'+params.receiptId+'"')
        const formData = Object.fromEntries(await request.formData())
        try {
            await locals.pb.collection('receipts').update(record.id, formData)
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.messsage)
        }
        throw redirect (303, '/receipt')
    },

    deleteProduct: async ({request, locals}) => {
        const {id} = Object.fromEntries(await request.formData())
         try {
            await locals.pb.collection('receipt_products').delete(id)
         } catch (err) {
            console.log('Error: ', err)
            throw error(err.status, err.message)
         }
        return{
            success: true
        }
    },

    updateProduct: async ({request, locals, params}) => {
        const formData = await request.formData()
        // const record = await locals.pb.collection('receipts').getFirstListItem('r_id ="'+params.receiptId+'"')
        // formData.append('receipt', record.id)
        // console.log(formData);
        const id = formData.get('id')
        const product = formData.get('product')
        const qty = formData.get('qty')
        const prod_rec = await locals.pb.collection('products').getFirstListItem('id="' + product + '"')
        const subtotal = prod_rec.prod_price*qty
        // console.log("SUBTOTAL IS: ", subtotal);
        formData.append('subtotal', subtotal)
         try {
            console.log(id);
            // await locals.pb.collection('receipt_products').update(id, formData)
            
         } catch (err) {
            console.log('Error: ', err)
            throw error(err.status, err.message)
         }

        // const record = await locals.pb.collection('receipts').getFirstListItem('r_id ="'+params.receiptId+'"')
        // const list = await locals.pb.collection('receipt_products').getFullList(undefined, {
        //     filter: 'receipt = "'+record.id+'"', expand: 'product'
        // })
        // const subtotals = list.map(item => item.subtotal)
        // const total = subtotals.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return{
            success: true,
        }
    }
}


