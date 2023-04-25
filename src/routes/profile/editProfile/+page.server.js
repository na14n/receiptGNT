import { error, fail, redirect } from "@sveltejs/kit"
import { validateData, serializeNonPOJOs} from "$lib/utils"
import { businessProfileSchema } from "$lib/schemas"
import { serialize } from 'object-to-formdata'

export const load = async ({locals}) => {
    if ((!locals.pb.authStore.isValid) && (locals.user.have_profile === true)){
        throw redirect(303, '/app/dashboard')
    }

    const profile = serializeNonPOJOs(await locals.pb.collection('business_profile').getFirstListItem('user ="'+locals.user.id+'"'))

    return {
        profile
    }

}

export const actions = {


    updateProfile: async ({ request, locals}) => {

        const body = await request.formData();

        const user = locals.user.id

        const thumb = body.get('b_img');

        if (thumb.size === 0) {
            body.delete('b_img')
        }

        const {formData, errors} = await validateData(body, businessProfileSchema)
        const { b_img, ...rest} = formData


        if (errors) {
            return fail(400, {
                data: rest,
                errors: errors.fieldErrors 
            });
        }

        try {
            const x = await locals.pb.collection('business_profile').getFirstListItem(`user = "${user}"`)
            const y = x.id;
            const name = x.b_name;
            const avatar = x.b_img;
   
            const {b_name, b_img} = await locals.pb.collection('business_profile').update(y, serialize(formData))

            
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.messsage)
        }

        throw redirect(303, '/profile/editProfile')
    }

    // updateProfile: async ({request, locals}) => {

    //     let data = await request.formData() 
    //     const user = locals.user.id
    //     const userAvatar = data.get('b_img')

    //     if(userAvatar.size === 0) {
    //         data.delete('b_img')
    //     }

    //     try{
    //         const x = await locals.pb.collection('business_profile').getFirstListItem(`user = "${user}"`)
    //         const y = x.id
    //         const { b_img } = await locals.pb.collection('business_profile').update(y, data)

    //         var a = b_img
    //     } catch (err) {
    //         console.log('Error: ', err);
    //         throw error(400, 'Something went wrong')
    //     }

    //     return {
    //         success: true
    //     };
    // }


}