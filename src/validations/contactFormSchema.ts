import * as yup from 'yup';

const contactFormShape = {
    name: yup.string()
        .required('Name is required'),
    phone: yup.string()
        .matches(/^[0-9]+$/, 'Phone number must contain only digits')
        .min(6, 'Phone number must be at least 6 characters')
        .max(12, 'Phone number must be at most 12 characters')
        .required('Phone number is required'),
    courses: yup.array()
        .of(yup.string())
        .min(1, 'Please select at least one program')
        .required('Please select at least one program'),
    contactHours: yup.array()
        .of(yup.string())
        .min(1, 'Please select at least one contact hour time frame ')
        .required('Please select at least one contact hour time frame'),
}

const contactFormSchema = yup.object().shape(contactFormShape)

export default contactFormSchema;