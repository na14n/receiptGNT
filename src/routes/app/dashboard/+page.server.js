import { error, fail, redirect } from "@sveltejs/kit"
import { serializeNonPOJOs, getDate, stringifyDate, getWeekNumber, pesofy,} from "$lib/utils"

export const load = async ({locals, params}) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/')
    }
    if (locals.user.have_profile === false) {
        throw redirect(303, '/signup/createBusinessProfile')
    }

    
    const today = getDate(1);
    const weeknum = getWeekNumber();


    const getReceipts = async (sellerId) => {
        try {
            const todayreceipts = serializeNonPOJOs(await locals.pb.collection('receipts').getList(1, 200, {
                filter: `user = "${sellerId}"` + '&&' +
                        `created >= "${today}"`
            }))
            const recentreceipts = serializeNonPOJOs(await locals.pb.collection('receipts').getList(1, 200, {
                filter: `user = "${sellerId}"` + '&&' +
                        `created <= "${today}"`
            }))
            return {
                today: todayreceipts,
                recent: recentreceipts
            }
        } catch (err) {
            return {
                today: [],
                recent: []
            }
        }
    }

    const getWeeklySales = async (sellerId) => {
        try {
            const weekly = serializeNonPOJOs(await locals.pb.collection('weekly_sales').getFirstListItem(undefined, {
                filter: `user = "${sellerId}"` + '&&' + `week = "${weeknum}"`
            }))
            const weeklysales = pesofy(weekly.weekly_sales)
            const weekdate = stringifyDate(weekly.week_start_date)
            return {weeklysales: weeklysales, weekdate: weekdate}
        } catch (error) {
            return {weeklysales: pesofy(0), weekdate: stringifyDate(getDate(7))}
        }
    }

    const getProducts = async (sellerId)  => {

        try {
            const topProducts = serializeNonPOJOs(await locals.pb.collection('total_orders').getFullList(undefined, {
                sort: '-total_orders' ,
                filter: 
                    `user = "${sellerId}"`
            }))
            const topProduct = serializeNonPOJOs(await locals.pb.collection('total_orders').getFirstListItem(`user = "${sellerId}"`, {
                sort: '-total_orders',            
            }))
            const leastProduct = serializeNonPOJOs(await locals.pb.collection('total_orders').getFirstListItem(`user = "${sellerId}"`, {
                sort: 'total_orders',            
            }))
            return{
                list: topProducts,
                top: topProduct,
                least: leastProduct,
            }
        } catch (error) {
            return{
                list: [],
                top: {prod_name: 'None'},
                least: {prod_name: 'None'},
            }
        }

    }

   
    return {
        receipts: getReceipts(locals.user.id),
        weeklysales: getWeeklySales(locals.user.id),
        products: getProducts(locals.user.id)
    }

}