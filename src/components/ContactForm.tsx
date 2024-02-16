import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@material-tailwind/react/components/Button'

function ContactForm() {
    return (
        <form>
            <div className='flex flex-row items-center'>
                <div className='w-10'>
                    <FontAwesomeIcon icon="user" size='xl' />
                </div>

                <input type="text" name="name" id="name" placeholder='Your Name' autoComplete='off' required />
            </div>

            <div className='flex flex-row items-center'>
                <div className='w-10'>
                    <FontAwesomeIcon icon="phone" size='xl' className='mr-2' />
                </div>
                <input type="text" name="phone" id="phone" placeholder='Your Phone' autoComplete='off' required />
            </div>

            <div className='mt-5 lg:mt-0'>
                <h6 className='text-center my-3' >Which programs are you interested in?</h6>
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
            </div>
            <div className='mt-5 lg:mt-0'>
                <h6 className='text-center my-3' >Between what hours should we contact you?</h6>
                <div className='flex justify-center lg:gap-5'>
                    <div className='flex items-center'>
                        <input type="checkbox" name="time-frame-9AM-12PM" id="time-frame-9AM-12PM" className='mr-2' />
                        <label htmlFor="time-frame-9AM-12PM">9AM-12PM</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" name="time-frame-12PM-3PM" id="time-frame-12PM-3PM" className='mr-2' />
                        <label htmlFor="time-frame-12PM-3PM">12PM-3PM</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" name="time-frame-3PM-7PM" id="time-frame-3PM-7PM" className='mr-2' />
                        <label htmlFor="time-frame-3PM-7PM">3PM-7PM</label>
                    </div>
                </div>
            </div>
            <div className='text-center mt-10'>
                <Button type='submit' className='uppercase bg-primary mx-auto font-light rounded-md'>Send <FontAwesomeIcon icon="paper-plane" className='ml-2' size="xl" /></Button>
            </div>
        </form>
    )
}

export default ContactForm