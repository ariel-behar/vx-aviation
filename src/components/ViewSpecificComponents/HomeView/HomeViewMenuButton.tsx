import { Link as RouterLink } from 'react-router-dom'

interface Props {
    path: string
    title: string
}

function HomeViewMenuButton({
    path,
    title
}: Props) {
    return (
        <RouterLink to={path}>
            <button
                type='button'
                className='bg-customGreen text-white uppercase px-12 rounded-full min-h-[68px] lg:max-w-[190px] leading-5'
            >
                {title}
            </button>
        </RouterLink>
    )
}

export default HomeViewMenuButton