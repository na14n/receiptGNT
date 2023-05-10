import { z } from "zod"

export const loginSchema = z.object({
    email: z
    .string({required_error: "Username is required"})
    .email( {message: 'Email must be a valid email.'}),
    password: z.string({required_error: 'Password is required'})
    .min(1, {message: 'Please enter a Password'})
})

const imageTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'image/svg+xml',
    'image/gif'
]

export const registerSchema = z.object({
    name: z
        .string({required_error: 'Name is required'})
        .regex(/^[a-zA-Z\s]*$/, {message: 'Name can only contain letters and spaces'})
        .min(2, {message: 'Name must be at least 2 characters.'})
        .max(16, {message: 'Name must be less than 16 characters.'})
        .trim(),
    email: z
        .string({required_error: 'Email is required'})
        .email( {message: 'Email must be a valid email.'}),
    password: z
        .string({required_error: 'Password is required'})
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
            message: 'Password must have a minimum of eight characters, at least one letter and one number.'
        }),
    passwordConfirm: z
        .string({required_error: 'Confirm Password is required'})
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
            message: 'Confirm Password must have a minimum of eight characters, at least one letter and one number.'
        })
}).superRefine(({passwordConfirm, password}, ctx) => {
    if (passwordConfirm !== password) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Password and Confirm Password must match.',
            path: ['password']
        })
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Password and Confirm Password must match.',
            path: ['passwordConfirm']
        })
    }
})

export const businessProfileSchema = z.object({
    b_name: z
        .string({required_error: 'Name is required'})
        .regex(/^[a-zA-Z0-9\s.\-,@]+$/, {message: 'Name can only contain letters and spaces'})
        .min(2, {message: 'Name must be at least 2 characters.'})
        .max(16, {message: 'Name must be less than 16 characters.'})
        .trim(),
    b_address: z
        .string({required_error: 'Address is required'})
        .regex(/^[a-zA-Z0-9\s.\-,@]+$/, {message: 'Address can only contain alphanumeric characters, spaces, dashes, and commas'})
        .min(2, {message: 'Address must be at least 2 characters.'})
        .max(64, {message: 'Address must be less than 64 characters.'})
        .trim(),
    b_contact: z
        .string({required_error: 'Contact Information is required'})
        .regex(/^[a-zA-Z0-9\s.\-,@]+$/, {message: 'Contact Information can only contain alphanumeric characters, spaces, dashes, or asperand(@) for emails'})
        .min(2, {message: 'Contact Information must be at least 2 characters.'})
        .max(32, {message: 'Contact Information must be less than 16 characters.'})
        .trim(),
    b_img: z 
        .instanceof(Blob)
        .optional()
        .superRefine((val, ctx) => {
            if (val) {
                if (val.size > 5000000) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'File must be less than 5mb'
                    });
                }

                if(!imageTypes.includes(val.type)) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: 'Unsupported File Type. Please upload jpeg, jpg, png, or webp files only.'
                    });
                }
                 
            }

        })
})

export const addProdSchema = z.object({
    prod_name: z
        .string({required_error: 'Name is required'})
        .regex(/^[a-zA-Z\s]*$/, {message: 'Name can only contain letters and spaces'})
        .min(2, {message: 'Name must be at least 2 characters.'})
        .max(32, {message: 'Name must be less than 32 characters.'})
        .trim(),
    prod_price: z
        .string({required_error: 'Price is required'})
        .regex(/^[0-9]+$/, {message: 'Price can only contain numbers.'})
        .min(1, {message: 'Please enter a valid Price'})
        .max(6, {message: 'The Price must be less than a million pesos.'})
        .trim()
})

export const emailSchema = z.object({
    email: z
        .string({required_error: 'Email is required'})
        .email( {message: 'Email must be a valid email.'}),
})

export const passwordSchema = z.object({
    password: z
        .string({required_error: 'Password is required'})
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
            message: 'Password must have a minimum of eight characters, at least one letter and one number.'
        }),
    passwordConfirm: z
        .string({required_error: 'Confirm Password is required'})
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
            message: 'Confirm Password must have a minimum of eight characters, at least one letter and one number.'
        }),
    oldPassword: z
        .string({required_error: 'Confirm Password is required'})
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
            message: 'Confirm Password must have a minimum of eight characters, at least one letter and one number.'
        })
})