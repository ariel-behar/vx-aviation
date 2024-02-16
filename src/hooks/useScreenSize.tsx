import { useState, useEffect } from 'react';

function useScreenSize() {
    const [screenSize, setScreenSize] = useState<"xs" | "sm" | "md" | "lg" | "xl" | "2xl">();

    useEffect(() => {
        function handleResize() {
            let windowWidth: number = window.innerWidth;

            let screenSizeValue: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

            if (windowWidth < 640) {
                screenSizeValue = 'xs';
            } else if (windowWidth >= 640 && windowWidth < 768) {
                screenSizeValue = 'sm';
            } else if (windowWidth >= 768 && windowWidth < 1024) {
                screenSizeValue = 'md';
            } else if (windowWidth >= 1024 && windowWidth < 1280) {
                screenSizeValue = 'lg';
            } else if (windowWidth >= 1280 && windowWidth < 1536) {
                screenSizeValue = 'xl';
            } else {
                screenSizeValue = '2xl';
            }

            setScreenSize(screenSizeValue);
        }

        handleResize(); // Call handleResize initially

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return screenSize;
}

export default useScreenSize;