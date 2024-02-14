import { Link as ScrollLink } from 'react-scroll'

function SideMenu() {
    return (
        <aside className="hidden lg:block fixed left-0 top-[30%] z-20 bg-tertiary opacity-50 py-2 px-4 rounded-r-xl hover:opacity-90 transition-all ease-in-out duration-200">
                <ul className="uppercase text-primary">
                    <li className="my-3">
                        <ScrollLink className='cursor-pointer' to="who-we-are-section" smooth={true} offset={-100} duration={500}>About</ScrollLink>
                    </li>
                    <li className="my-3">
                        <ScrollLink className='cursor-pointer' to="courses-section" smooth={true} offset={-100} duration={500}>Courses</ScrollLink>
                    </li>
                    <li className="my-3">
                        <ScrollLink className='cursor-pointer' to="why-choose-us-section" smooth={true} offset={-100} duration={500}>Why Us</ScrollLink>
                    </li>
                    <li className="my-3">
                        <ScrollLink className='cursor-pointer' to="contact-section" smooth={true} offset={-100} duration={500}>Contact</ScrollLink>
                    </li>
                </ul>
        </aside>
    )
}

export default SideMenu