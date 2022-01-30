import React, { useState } from 'react'
import Header from '../Layout/Header'
import Sidebar from '../Layout/Sidebar'
import Footer from '../Layout/Footer'
import Table from '../Components/Table'
import Modal from '../Components/Modal'
import AddNewContact from '../Components/AddNewContact'
import { Text, Box, CheckBox, Select } from 'grommet'
import { Add } from 'grommet-icons'
import ModalContactDetails from '../Components/ModalContactDetails'

const Option = React.memo(({ value, selected }) => (
	<Box direction="row" gap="small" align="center" pad="xsmall">
		<CheckBox tabIndex="-1" checked={selected} onChange={() => {}} />
		{value}
	</Box>
))

const dummyOptions = [
	'ANA',
	'PAULA',
	'LUISA',
	'CAROLINA',
	'PAMELA',
	'CARLOS',
	'JAVIER',
	'VICTORIA',
]

console.log(dummyOptions)

const Contacts = () => {
	const [selected, setSelected] = useState([0, 1, 2, 6])
	const [options, setOptions] = useState(dummyOptions)
	const [show, setShow] = useState(5)
	console.log(selected)
	const columns = [
		{
			property: 'name',
			header: (
				<Text color="brand" style={{ fontWeight: 'bold' }}>
					Names
				</Text>
			),
			primary: true,
			render: (datum) => {
				return (
					<>
						<ModalContactDetails
							type={'name'}
							datum={datum}
							datumName={datum.name}
							datumLastName={datum.lastName}
							datumTelephone={datum.telephone}
							datumEmail={datum.email}
						/>
					</>
				)
			},
		},
		{
			property: 'lastName',
			header: (
				<Text color="brand" style={{ fontWeight: 'bold' }}>
					Last Name
				</Text>
			),
			render: (datum) => {
				return (
					<>
						<ModalContactDetails
							type={'lastName'}
							datum={datum}
							datumName={datum.name}
							datumLastName={datum.lastName}
							datumTelephone={datum.telephone}
							datumEmail={datum.email}
						/>
					</>
				)
			},
		},
		{
			property: 'email',
			header: (
				<Text color="brand" style={{ fontWeight: 'bold' }}>
					Email
				</Text>
			),
			render: (datum) => {
				return (
					<>
						<ModalContactDetails
							type={'email'}
							datum={datum}
							datumName={datum.name}
							datumLastName={datum.lastName}
							datumTelephone={datum.telephone}
							datumEmail={datum.email}
						/>
					</>
				)
			},
		},
		{
			property: 'telephone',
			header: (
				<Text color="brand" style={{ fontWeight: 'bold' }}>
					Telephone
				</Text>
			),
			render: (datum) => {
				return (
					<>
						<ModalContactDetails
							type={'telephone'}
							datum={datum}
							datumName={datum.name}
							datumLastName={datum.lastName}
							datumTelephone={datum.telephone}
							datumEmail={datum.email}
						/>
					</>
				)
			},
		},
		{
			property: 'campaign',
			header: (
				<Text color="brand" style={{ fontWeight: 'bold' }}>
					Campaign
				</Text>
			),
			render: (datum) => {
				console.log('datum', datum)
				return (
					<Box fill align="center" justify="start" pad="xsmall">
						<Select
							multiple
							closeOnChange={false}
							placeholder="select an option..."
							selected={selected}
							options={options}
							dropHeight="medium"
							onClose={() =>
								setOptions(
									options.sort((p1, p2) => {
										const p1Exists = selected.includes(p1)
										const p2Exists = selected.includes(p2)

										if (!p1Exists && p2Exists) {
											return 1
										}
										if (p1Exists && !p2Exists) {
											return -1
										}
										return p1.localeCompare(p2, undefined, {
											numeric: true,
											sensitivity: 'base',
										})
									})
								)
							}
							onChange={({ selected: nextSelected }) => {
								setSelected(nextSelected)
							}}
						>
							{(option, index) => (
								<Option value={option} selected={selected.indexOf(index) !== -1} />
							)}
						</Select>
					</Box>
				)
			},
		},
	]
	const DATA = [
		{
			name: 'GingerBread',
			lastName: '356',
			email: '16',
			telephone: '49',
			percent: 25,
			campaign: [1, 2, 3],
		},
		{
			name: 'Frozen Yoghurt',
			lastName: '159',
			email: '6',
			telephone: '24',
			percent: 72,
			campaign: [1, 2, 3],
		},
		{
			name: ' Vanilla Ice Cream',
			lastName: '205',
			email: '32',
			telephone: '43',
			percent: 31,
			campaign: [1, 2, 3],
		},
		{
			name: 'Chicken',
			lastName: '150',
			email: '10',
			telephone: '12',
			percent: 95,
			campaign: [1, 2, 3],
		},
		{
			name: 'Soda',
			lastName: '160',
			email: '0',
			telephone: '41',
			percent: 10,
			campaign: [1, 2, 3],
		},
		{
			name: 'Apple Juice',
			lastName: '210',
			email: '0',
			telephone: '28',
			percent: 40,
			campaign: [1, 2, 3],
		},
		{
			name: 'GingerBread',
			lastName: '356',
			email: '16',
			telephone: '49',
			percent: 25,
			campaign: [1, 2, 3],
		},
		{
			name: 'Frozen Yoghurt',
			lastName: '159',
			email: '6',
			telephone: '24',
			percent: 72,
			campaign: [1, 2, 3],
		},
		{
			name: ' Vanilla Ice Cream',
			lastName: '205',
			email: '32',
			telephone: '43',
			percent: 31,
			campaign: [1, 2, 3],
		},
		{
			name: 'Chicken',
			lastName: '150',
			email: '10',
			telephone: '12',
			percent: 95,
			campaign: [1, 2, 3],
		},
		{
			name: 'Soda',
			lastName: '160',
			email: '0',
			telephone: '41',
			percent: 10,
			campaign: [1, 2, 3],
		},
		{
			name: 'Apple Juice',
			lastName: '210',
			email: '0',
			telephone: '28',
			percent: 40,
			campaign: [1, 2, 3],
		},
	]
	return (
		<>
			<Header />
			<Sidebar />
			<main className="contacts-main">
				<div className="contacts-title-container">
					<h2 style={{ fontWeight: '400' }} className="general-title">
						My Contacts
					</h2>
				</div>
				<div className="contacts-barup">
					<div className="contacts-show">
						<h3 style={{ fontWeight: '400' }}>Show: </h3>
						<div className="contacts-show-select-container">
							<Select
								style={{ width: '40px' }}
								options={[5, 10, 20, 50, 100]}
								value={show}
								onChange={({ option }) => setShow(option)}
							/>
						</div>
					</div>
					<Modal icon={<Add />} label={'New Contact'}>
						<AddNewContact />
					</Modal>
				</div>
				<div className="contact-table-container">
					<Table columns={columns} data={DATA} show={show} />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Contacts
