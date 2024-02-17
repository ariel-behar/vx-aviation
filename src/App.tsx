import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react/context/theme'

import { faPlane, faPhone, faChevronLeft, faChevronRight, faCircle, faCheck, faUser, faPaperPlane, faWrench, faXmark } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import './App.scss'

import router from './router/router'

import Loader from './components/Loader'
import { CourseModalProvider } from './context/CourseModalContext'
import { HelmetProvider } from 'react-helmet-async'

library.add(faPlane, faPhone, faChevronLeft, faChevronRight, faCircle, faCheck, faUser, faPaperPlane, faWrench, faXmark)

if (process.env.NODE_ENV === 'production') disableReactDevTools();

function App() {

	return (
		<>
			<HelmetProvider>
				<ThemeProvider>
					<Suspense fallback={<Loader />}>
						<CourseModalProvider>
							<RouterProvider router={router} />
						</CourseModalProvider>
					</Suspense>
				</ThemeProvider>
			</HelmetProvider>
		</>
	)
}

export default App
