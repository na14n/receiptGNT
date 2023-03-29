import { z } from "zod"

export const loginSchema = z.object({
    email: z
    .string({required_error: "Username is required"})
    .email( {message: 'Email must be a valid email.'}),
    password: z.string({required_error: 'Password is required'})
    .min(1, {message: 'Please enter a Password'})
})

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
        .regex(/^[a-zA-Z\s]*$/, {message: 'Name can only contain letters and spaces'})
        .min(2, {message: 'Name must be at least 2 characters.'})
        .max(16, {message: 'Name must be less than 16 characters.'})
        .trim(),
    b_address: z
        .string({required_error: 'Address is required'})
        .regex(/^[a-zA-Z0-9\s.\-,]+$/, {message: 'Address can only contain alphanumeric characters, spaces, dashes, and commas'})
        .min(2, {message: 'Address must be at least 2 characters.'})
        .max(64, {message: 'Address must be less than 64 characters.'})
        .trim(),
    b_contact: z
        .string({required_error: 'Contact Information is required'})
        .regex(/^[a-zA-Z0-9\s.\-@]*$/, {message: 'Contact Information can only contain alphanumeric characters, spaces, dashes, or asperand(@) for emails'})
        .min(2, {message: 'Contact Information must be at least 2 characters.'})
        .max(16, {message: 'Contact Information must be less than 16 characters.'})
        .trim(),
})