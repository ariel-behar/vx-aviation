import BottomFooter from "./BottomFooter"
import TopFooter from "./TopFooter"

function Footer() {
    return (
        <footer className="bg-custom-gradient font-font2">
            <div className='container mx-auto py-5 '>
                <TopFooter />

                <BottomFooter />
            </div>
        </footer>
    )
}

export default Footer