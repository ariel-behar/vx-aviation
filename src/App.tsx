import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react/context/theme'

import './App.scss'

import router from './router/routes'
import { Suspense } from 'react'
import Loader from './components/Loader'

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
