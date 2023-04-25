import { error, fail, redirect } from "@sveltejs/kit"
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

export const getWeekNumber = ()=> {
    const now = new Date();
    const onejan = new Date(now.getFullYear(), 0, 1);
    const millisecsInDay = 86400000;
    const weekNumber = Math.ceil(((now - onejan) / millisecsInDay + onejan.getDay() + 1) / 7);
    return weekNumber;
  }

export const getDate = (dateTime) => {
    
    var datetime = new Date();

    datetime.setDate(datetime.getDate() - dateTime);

    var day = datetime.getDate()
    var month = datetime.getMonth() + 1;
    var year = datetime.getFullYear();

    const dateString = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}` + ' 16:00:00'

    return dateString;
}

export const stringifyDate = (dateTime) => {

    const datetime  = new Date(dateTime);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = datetime.toLocaleDateString(undefined, options);

    return dateString;
}

export const pesofy = (money) => {

    const moneyString = money.toLocaleString('en-US', { style: 'currency', currency: 'PHP', currencyDisplay: 'symbol', currencySign: 'accounting' });

    return moneyString;
}

export const getImageUrl = (collectionId, recordId, fileName, size = '0x0') => {
    return `http://127.0.0.1:8090/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`
}