import { Header } from '../../Components/Header/index.jsx'
import { NewGameTable } from '../../Components/NewGameTable/index.jsx'
import { SideBar } from '../../Components/Sidebar/index.jsx'
import { Table } from '../../Components/Table/index.jsx'
import * as s from './styles.jsx'
export function Game() {
	return (
		<>
			<Header />
			<s.Main>
				<NewGameTable />
				<SideBar />
			</s.Main>
		</>
	)
}
