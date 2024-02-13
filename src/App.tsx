import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react/context/theme'

import './App.scss'

import router from './router/routes'

function App() {

	return (
		<>
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		</>
	)
}

export default App
