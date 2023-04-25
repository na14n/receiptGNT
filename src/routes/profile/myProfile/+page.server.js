import { error, redirect } from "@sveltejs/kit"
import {serializeNonPOJOs} from "$lib/utils"

export const load = async ({locals}) => {

    const user = serializeNonPOJOs(await locals.pb.collection('users').getFirstListItem('id ="'+locals.user.id+'"'))
    const business = serializeNonPOJOs(await locals.pb.collection('business_profile').getFirstListItem('user ="'+locals.user.id+'"'))

    return{
        user,
        business
    }
}