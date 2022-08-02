import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthContext from './Contexts/Auth.context.jsx'
import { Home } from './Pages/Home/index.js'

//reset css
// import './css/reset.css'
// import './css/global.css'

export default function App() {
	return (
		<>
			<BrowserRouter>
				<AuthContext.Provider value={{}}>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</AuthContext.Provider>
			</BrowserRouter>
		</>
	)
}
