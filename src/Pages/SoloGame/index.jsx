import { Header } from '../../Components/Header/index.jsx'
import { Table } from '../../Components/Table/index.jsx'
import { SideBarSoloGame } from '../../Components/SideBarSoloGame/index.jsx'
import { ModalConvites } from './../../Components/ModalConvites/index.jsx'
import { ModalListOnlines } from './../../Components/ModalListOnlines/index.jsx'
import * as s from './styles.jsx'
export function SoloGame() {
	return (
		<>
			<Header />
			<s.Main>
				<Table />
				<SideBarSoloGame />
			</s.Main>
			<ModalConvites />
			<ModalListOnlines />
		</>
	)
}
