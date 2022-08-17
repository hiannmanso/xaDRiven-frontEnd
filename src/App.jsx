import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthContext from './Contexts/Auth.context.jsx'
import { Game } from './Pages/Game/index.jsx'
import { Home } from './Pages/Home/index.jsx'
import { SignIN } from './Pages/SignIN/index.jsx'
import { SignUP } from './Pages/SignUP/index.jsx'
import { SoloGame } from './Pages/SoloGame/index.jsx'

//reset css
// import './css/reset.css'
// import './css/global.css'

export default function App() {
	const [url, setUrl] = useState('http://localhost:5000')
	const [displayModalListOnline, setDisplayModalListOnline] = useState('none')
	const [displayModalConvistes, setDisplayModalConvistes] = useState('none')
	const [convites, setConvites] = useState()
	const [tokengame, setTokengame] = useState()
	const [moves, setMoves] = useState([])
	return (
		<>
			<BrowserRouter>
				<AuthContext.Provider
					value={{
						url,
						displayModalListOnline,
						setDisplayModalListOnline,
						displayModalConvistes,
						setDisplayModalConvistes,
						convites,
						setConvites,
						tokengame,
						setTokengame,
						moves,
						setMoves,
					}}
				>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/sign-in' element={<SignIN />} />
						<Route path='/sign-up' element={<SignUP />} />
						<Route path='/game/:tokenGAME' element={<Game />} />
						<Route path='/sologame' element={<SoloGame />} />
					</Routes>
				</AuthContext.Provider>
			</BrowserRouter>
		</>
	)
}
