import React, { useState } from 'react'
import Header from '../Layout/Header'
import Sidebar from '../Layout/Sidebar'
import Footer from '../Layout/Footer'
import Table from '../Components/Table'
import { Text, Box, CheckBox, Select } from 'grommet'

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
		},
		{
			property: 'Calories',
			header: (
				<Text color="brand" style={{ fontWeight: 'bold' }}>
					Last Name
				</Text>
			),
		},
		{
			property: 'Fat',
			header: (
				<Text color="brand" style={{ fontWeight: 'bold' }}>
					Telephone
				</Text>
			),
		},
		{
			property: 'Carbs',
			header: (
				<Text color="brand" style={{ fontWeight: 'bold' }}>
					Email
				</Text>
			),
		},
		{
			property: 'campaign',
			header: (
				<Text color="brand" style={{ fontWeight: 'bold' }}>
					Campaign
				</Text>
			),
			render: () => (
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
			),
		},
	]
	const DATA = [
		{
			name: 'GingerBread',
			Calories: '356',
			Fat: '16',
			Carbs: '49',
			percent: 25,
			campaign: [1, 2, 3],
		},
		{
			name: 'Frozen Yoghurt',
			Calories: '159',
			Fat: '6',
			Carbs: '24',
			percent: 72,
			campaign: [1, 2, 3],
		},
		{
			name: ' Vanilla Ice Cream',
			Calories: '205',
			Fat: '32',
			Carbs: '43',
			percent: 31,
			campaign: [1, 2, 3],
		},
		{
			name: 'Chicken',
			Calories: '150',
			Fat: '10',
			Carbs: '12',
			percent: 95,
			campaign: [1, 2, 3],
		},
		{
			name: 'Soda',
			Calories: '160',
			Fat: '0',
			Carbs: '41',
			percent: 10,
			campaign: [1, 2, 3],
		},
		{
			name: 'Apple Juice',
			Calories: '210',
			Fat: '0',
			Carbs: '28',
			percent: 40,
			campaign: [1, 2, 3],
		},
		{
			name: 'GingerBread',
			Calories: '356',
			Fat: '16',
			Carbs: '49',
			percent: 25,
			campaign: [1, 2, 3],
		},
		{
			name: 'Frozen Yoghurt',
			Calories: '159',
			Fat: '6',
			Carbs: '24',
			percent: 72,
			campaign: [1, 2, 3],
		},
		{
			name: ' Vanilla Ice Cream',
			Calories: '205',
			Fat: '32',
			Carbs: '43',
			percent: 31,
			campaign: [1, 2, 3],
		},
		{
			name: 'Chicken',
			Calories: '150',
			Fat: '10',
			Carbs: '12',
			percent: 95,
			campaign: [1, 2, 3],
		},
		{
			name: 'Soda',
			Calories: '160',
			Fat: '0',
			Carbs: '41',
			percent: 10,
			campaign: [1, 2, 3],
		},
		{
			name: 'Apple Juice',
			Calories: '210',
			Fat: '0',
			Carbs: '28',
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
				<div className="contact-table-container">
					<Table columns={columns} data={DATA} />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Contacts
