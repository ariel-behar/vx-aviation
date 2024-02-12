import { useRef } from 'react';

import flightSchoolVideo from '../../../assets/video/flight-school-video.mp4';
import flightSchoolPoster from '../../../assets/video/flight-school-poster.jpg'

function BackgroundVideo() {
    const videoRef = useRef<null | HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current != null) {
            videoRef.current.play();
        }
    };

    return (
        <>
            <button className='hidden' onClick={handlePlay}>Play Video</button>

            <video
                poster={flightSchoolPoster}
                ref={videoRef}
                className='object-cover w-full h-full absolute top-0 left-0 z-0'
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={flightSchoolVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </>
    )
}

export default BackgroundVideo