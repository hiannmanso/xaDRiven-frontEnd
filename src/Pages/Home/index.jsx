import { Header } from '../../Components/Header/index.jsx'
import { ModalConvites } from '../../Components/ModalConvites/index.jsx'
import { ModalListOnlines } from '../../Components/ModalListOnlines/index.jsx'
import { Table } from '../../Components/Table/index.jsx'

export function Home() {
	return (
		<>
			<Header />
			<ModalListOnlines />
			<ModalConvites />
			<Table />
		</>
	)
}
