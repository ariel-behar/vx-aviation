import * as yup from 'yup';

const contactFormShape = {
    name: yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(30, 'Name must be at most 30 characters')
        .required('Name is required'),
    phone: yup.string()
        .matches(/^[0-9]+$/, 'Phone number must contain only digits')
        .min(6, 'Phone number must be at least 6 characters')
        .max(12, 'Phone number must be at most 12 characters')
        .required('Phone number is required')
}

const contactFormSchema = yup.object().shape(contactFormShape)

export default contactFormSchema;