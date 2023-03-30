const { randomBytes } = await import('node:crypto')

export const serializeNonPOJOs = (obj) => {
    return structuredClone(obj)
}

export const generateUsername = (name) => {
    const id = randomBytes(2).toString('hex')
    return `${name.slice(0,5)}${id}`
}

export const generateReceiptId = (name) => {
    const id = randomBytes(2).toString('hex')
    return `${name.slice(0,8)}${id}`
}

export const validateData = async (formData, schema) => {
    const body = Object.fromEntries(formData)

    try {
        const data = schema.parse(body);
        return {
            formData: data,
            errors: null
        };
    } catch (err) {
        console.log('Error: ', err);
        const errors = err.flatten()
        return{
            formData: body,
            errors
        };
    }   
}
