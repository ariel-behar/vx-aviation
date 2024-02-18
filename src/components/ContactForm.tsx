import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { DevTool } from '@hookform/devtools'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@material-tailwind/react/components/Button'
import contactFormSchema from '../validations/contactFormSchema'

interface FormValues {
    name: string
    phone: string
}

interface Props {
    handleSubmissionSuccess: () => void

}

function ContactForm({
    handleSubmissionSuccess
}: Props) {

    const { register, control, handleSubmit, formState: { errors, isDirty, isValid, isSubmitting } } = useForm<FormValues>({
        mode: 'onTouched',
        resolver: yupResolver(contactFormSchema),
        defaultValues: {
            name: '',
            phone: ''
        }
    })

    // Change phone number input to type="tel" or "number"

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        await new Promise(resolve => setTimeout(() => {
            handleSubmissionSuccess()
        }, 1000));

    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='flex flex-row items-center'>
                    <div className='w-10'>
                        <FontAwesomeIcon icon="user" size='xl' />
                    </div>
                    <div className='w-full'>
                        <input {...register('name')} type="text" name="name" id="name" placeholder='Your Name' autoComplete='off' required />
                        {errors.name && <p className='text-red-300'>{errors.name?.message}</p>}
                    </div>
                </div>

                <div className='flex flex-row items-center'>
                    <div className='w-10'>
                        <FontAwesomeIcon icon="phone" size='xl' className='mr-2' />
                    </div>
                    <div className='w-full'>
                        <input {...register('phone')} type="text" name="phone" id="phone" placeholder='Your Phone' autoComplete='off' required />
                        {errors.phone && <p className='text-red-300'>{errors.phone?.message}</p>}
                    </div>
                </div>

                <fieldset className='mt-5' >
                    <legend className='text-center my-3' >Which programs are you interested in?</legend>
                    <div className='flex flex-row justify-center lg:gap-20'>
                        <div>
                            <div className='flex items-center'>
                                <input type="checkbox" name="private-pilot" id="private-pilot" className='mr-2' />
                                <label htmlFor="private-pilot">Private Pilot</label>
                            </div>
                            <div className='flex items-center'>
                                <input type="checkbox" name="instrument-rating" id="instrument-rating" className='mr-2' />
                                <label htmlFor="instrument-rating">Instrument Rating</label>
                            </div>
                            <div className='flex items-center'>
                                <input type="checkbox" name="multi-engine-rating" id="multi-engine-rating" className='mr-2' />
                                <label htmlFor="multi-engine-rating">Multi-Engine Rating</label>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center'>
                                <input type="checkbox" name="commercial-rating" id="commercial-rating" className='mr-2' />
                                <label htmlFor="commercial-rating">Commercial Rating</label>
                            </div>
                            <div className='flex items-center'>
                                <input type="checkbox" name="flight-instructor" id="flight-instructor" className='mr-2' />
                                <label htmlFor="flight-instructor">Flight Instructor</label>
                            </div>
                            <div className='flex items-center'>
                                <input type="checkbox" name="pilot-currency-rating" id="pilot-currency-rating" className='mr-2' />
                                <label htmlFor="pilot-currency-rating">Pilot Currency Rating</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset className='mt-5'>
                    <legend className='text-center mb-3' >Between what hours should we contact you?</legend>
                    <div className='flex justify-center lg:gap-5'>
                        <div className='flex items-center'>
                            <input type="checkbox" name="9AM-12PM" id="9AM-12PM" className='mr-2' />
                            <label htmlFor="9AM-12PM">9AM-12PM</label>
                        </div>
                        <div className='flex items-center'>
                            <input type="checkbox" name="12PM-3PM" id="12PM-3PM" className='mr-2' />
                            <label htmlFor="12PM-3PM">12PM-3PM</label>
                        </div>
                        <div className='flex items-center'>
                            <input type="checkbox" name="3PM-7PM" id="3PM-7PM" className='mr-2' />
                            <label htmlFor="3PM-7PM">3PM-7PM</label>
                        </div>
                    </div>
                </fieldset>
                <div className='text-center mt-10'>
                    <Button type='submit' className='uppercase bg-primary mx-auto font-light rounded-md' disabled={!(isDirty && isValid) || isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send"} <FontAwesomeIcon icon="paper-plane" className='ml-2' size="xl" />
                    </Button>
                </div>
            </form>
            {
                process.env.NODE_ENV !== 'production' && <DevTool control={control} styles={{ button: { transform: 'scale(2)', top: '10px', right: '10px' } }} />
            }
        </>
    )
}

export default ContactForm