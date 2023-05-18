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
        //Get the record of the receipt


        const record = await locals.pb.collection('receipts').getFirstListItem('r_id ="'+params.receiptId+'"')
        //Get form fata
        const formData = Object.fromEntries(await request.formData())
        //Append record Id to the form data
        // formData.append('receipt', record.id)

        // const product = formData.get('product')
        // const qty = formData.get('qty')
        const prod_rec = await locals.pb.collection('products').getFirstListItem('id="' + formData.product + '"')
        const subtotal = prod_rec.prod_price*formData.qty
        // formData.append('subtotal', subtotal)
        console.log(formData);

        try {
         const exist =   await locals.pb.collection('receipt_products').getFirstListItem(undefined, {
                filter: `receipt="${record.id}" && product="${formData.product}"`
            })
        if(exist){
            const  uQty = parseInt(exist.qty) + parseInt(formData.qty)
            const uSubtotal = prod_rec.prod_price*uQty
            await locals.pb.collection('receipt_products').update(exist.id,{
                qty: `${uQty}`,
                subtotal: `${uSubtotal}`
            })
        }
        } catch (err) {
            if(err.status === 404 || 400){
                await locals.pb.collection('receipt_products').create({
                    qty: `${formData.qty}`,
                    product: `${formData.product}`,
                    receipt: `${record.id}`,
                    subtotal: `${subtotal}`
                })
            } else {
                console.log('Error: ', err);
                throw error(err.status, err.messsage)
            }
        }
        throw redirect (303, '/addReceipt/'+params.receiptId)
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
        throw redirect (303, '/app/receipt')
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
        const id = formData.get('id')
        const product = formData.get('product')
        const qty = formData.get('qty')
        const prod_rec = await locals.pb.collection('products').getFirstListItem('id="' + product + '"')
        const subtotal = prod_rec.prod_price*qty
        formData.append('subtotal', subtotal)
         try {
            console.log(formData);
            await locals.pb.collection('receipt_products').update(id, {"qty": qty, "subtotal": subtotal})
         } catch (err) {
            console.log('Error: ', err)
            throw error(err.status, err.message)
         }
        return{
            success: true,
        }
    }
}


