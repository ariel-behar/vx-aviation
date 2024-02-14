import vxAviationLogo from '../../assets/img/logos/vx-aviation-logo-small.png'


function TopFooter() {
    return (
        <>
            <div className='grid grid-cols-12'>
                <div className='col-span-8 flex flex-row items-center justify-around'>
                    <img src={vxAviationLogo} alt="Vx Aviation Logo" loading='lazy' />
                    <h3>
                        "Fly V<sub>x</sub> Aviation: <span className='uppercase'>soaring dreams, skilled wings"</span></h3>
                </div>
                <div className='col-span-4 border-l-2 border-white pl-5 pb-5'>
                    <h5 className='text-white uppercase mb-2'>Useful Sites</h5>
                    <ul>
                        <li className='text-primary hover:text-green-600'>
                            <a href="#https://skyvector.com/" target="_blank">Sky Vector</a>
                        </li>
                        <li className='text-primary hover:text-green-600'>
                            <a href="#http://www.airnav.com/" target="_blank">Air Nav</a>
                        </li>
                        <li className='text-primary hover:text-green-600'>
                            <a href="http://aviationweather.gov/" target="_blank">Aviation Weather</a>
                        </li>
                        <li className='text-primary hover:text-green-600'>
                            <a href="#https://www.faa.gov/" target="_blank">Federal Aviation Administration</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TopFooter