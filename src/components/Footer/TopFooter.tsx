import vxAviationLogo from '../../assets/img/logos/vx-aviation-logo-small.png'


function TopFooter() {
    return (
        <>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 sm:col-span-8 flex flex-row items-center justify-around px-2 lg:px-0 pb-5 lg:pb-0'>
                    <img src={vxAviationLogo} alt="Vx Aviation Logo" loading='lazy' className='max-h-[70px] lg:max-h-none' />
                    <h3 className='text-xl lg:text-3xl text-center'>
                        "Fly V<sub>x</sub> Aviation: <span className='uppercase'>soaring dreams, skilled wings"</span>
                    </h3>
                </div>
                <div className='col-span-12 sm:col-span-4 border-t-2 sm:border-t-0 sm:border-l-2 border-white pl-5 pb-5 pt-3 lg:pt-0 text-center'>
                    <h5 className='text-white uppercase mb-1 lg:mb-2 text-xl lg:text-lg'>Useful Sites</h5>
                    <ul>
                        <li className='text-primary hover:text-green-600'>
                            <a href="https://skyvector.com/" target="_blank">Sky Vector</a>
                        </li>
                        <li className='text-primary hover:text-green-600'>
                            <a href="http://www.airnav.com/" target="_blank">Air Nav</a>
                        </li>
                        <li className='text-primary hover:text-green-600'>
                            <a href="http://aviationweather.gov/" target="_blank">Aviation Weather</a>
                        </li>
                        <li className='text-primary hover:text-green-600'>
                            <a href="https://www.faa.gov/" target="_blank">Federal Aviation Administration</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TopFooter