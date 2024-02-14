import airplaneRepair from '../assets/img/airplane-repair.jpg'

function MaintenanceServicesView() {
	return (
		<div className="mt-[10vh] h-[55vh] bg-no-repeat bg-cover bg-fixed relative" style={{ backgroundImage: `url(${airplaneRepair})` }}>
			<div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center'>
				<h2 className='uppercase text-white text-5xl'>Maintenance and Services</h2>
			</div>
		</div>
	)
}

export default MaintenanceServicesView