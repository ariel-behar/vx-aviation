import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "@material-tailwind/react";

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
