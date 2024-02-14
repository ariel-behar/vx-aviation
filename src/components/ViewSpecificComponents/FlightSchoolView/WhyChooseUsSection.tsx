import uniqid from "uniqid"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Reason = string

const reasonsList: Reason[] = [
    "25 years of experience",
    "FAA certified",
    "One on one personal attention",
    "Learn from an actual airline pilot",
    "Excellent track record",
    "At your pace flight instruction",
    "Competitive pricing",
    "Multiple locations covering the entire Bay Area"
]


function WhyChooseUsSection() {
    return (
        <section id="why-choose-us-section" className="container mx-auto py-10 px-5">
            <h3 className="uppercase text-center mb-10">Why Choose Us</h3>

            <div className="grid grid-cols-12 gap-5" >
                <div className="col-span-6 col-start-2">
                    <p className="indent-10 text-justify mb-2">Believe it or not, we at Vx Aviation understand that choosing a flight school/instructor is not an easy task. It may seem this way at first however once you are a few lessons into your training there maybe some personality conflicts that start to arise. Wouldn’t it be nice to avoid this?</p>
                    <p className="indent-10 text-justify mb-2">Most flight schools that you go into will just automatically assign you a flight instructor without any thought to the learning process. Let’s face it, you will learn more from someone you get along with opposed to someone you can’t stand. With the cost of training being as high as it is, you could be out thousands of dollars before you realize that this may have been a mistake.</p>
                    <p className="indent-10 text-justify mb-2">At Vx aviation we pride ourselves by providing top notch instructors that are doing this because they love to teach, not because they are trying to build their resumes for the airlines. This is a quality that we possess that our competition does not. Even if after you meet us you decide to go with another company, we will always be there to answer your questions you may have going forward. That’s just who we are.</p>
                </div>

                <div className="col-span-5">
                    <ul>
                        {
                            reasonsList.map(rating => (
                                <li key={uniqid()} className='my-3 text-xl'>
                                    <FontAwesomeIcon icon="check" color="#2E7D32" size="xl" className='mr-3' />
                                    {rating}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUsSection