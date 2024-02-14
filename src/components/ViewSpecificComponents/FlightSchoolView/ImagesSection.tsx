import uniqid from 'uniqid'
import airplaneFlying from '../../../assets/img/airplane-flying.jpg'
import cockpit from '../../../assets/img/cockpit.jpg'
import pilotEpaulettes from '../../../assets/img/pilot-epaulettes.jpg'

interface Image {
    imgSrc: string
    alt: string
}

const images: Image[] = [
    {
        imgSrc: pilotEpaulettes,
        alt: "Pilot Epaulettes"
    },
    {
        imgSrc: cockpit,
        alt: "Cockpit"
    },
    {
        imgSrc: airplaneFlying,
        alt: "Airplane flying"
    }
]

function ImagesSection() {
    return (
        <section className="grid grid-cols-3">
            {
                images.map(({ imgSrc, alt }: Image) => (
                    <div className='relative' key={uniqid()}>
                        <img src={imgSrc} alt={alt} />
                        <div className='absolute top-0 left-0 w-full h-full bg-black/30' />
                    </div>
                ))
            }
        </section>
    )
}

export default ImagesSection