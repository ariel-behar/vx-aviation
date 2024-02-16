import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react/context/theme'

import { faPlane, faPhone, faChevronLeft, faChevronRight, faCircle, faCheck, faUser, faPaperPlane, faWrench, faXmark } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import './App.scss'

import router from './router/router'

import Loader from './components/Loader'
import { CourseModalProvider } from './context/CourseModalContext'

library.add(faPlane, faPhone, faChevronLeft, faChevronRight, faCircle, faCheck, faUser, faPaperPlane, faWrench, faXmark)

function App() {

	return (
		<>
			<ThemeProvider>
				<Suspense fallback={<Loader />}>
					<CourseModalProvider>
						<RouterProvider router={router} />
					</CourseModalProvider>
				</Suspense>
			</ThemeProvider>
		</>
	)
}

export default App
