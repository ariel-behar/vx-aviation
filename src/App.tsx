import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react/context/theme'

import { faPlane, faPhone, faChevronLeft, faChevronRight, faCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import './App.scss'

import router from './router/router'

import Loader from './components/Loader'

library.add(faPlane, faPhone, faChevronLeft, faChevronRight, faCircle, faCheck )

function App() {

	return (
		<>
			<ThemeProvider>
				<Suspense fallback={<Loader />}>
					<RouterProvider router={router} />
				</Suspense>
			</ThemeProvider>
		</>
	)
}

export default App
