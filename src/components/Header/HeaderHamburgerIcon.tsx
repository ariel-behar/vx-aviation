import IconButton from "@material-tailwind/react/components/IconButton"

interface Props {
    openNav: boolean
    toggleNavHandler: (close?: boolean) => void
}

function HeaderHamburgerIcon({
    openNav,
    toggleNavHandler
}: Props) {
    return (
        <>
            <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
                ripple={false}
                onClick={() => toggleNavHandler()}
            >
                {openNav ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="#2E7D32"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="#2E7D32"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                )}
            </IconButton>
        </>
    )
}

export default HeaderHamburgerIcon