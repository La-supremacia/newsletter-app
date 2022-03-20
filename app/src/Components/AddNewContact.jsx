import React, { useState } from 'react'
import {
	Button,
	Text,
	grommet,
	Box,
	Form,
	FormField,
	TextInput,
	Grommet,
} from 'grommet'
import { deepMerge } from 'grommet/utils'

const AddNewContact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [lastname, setLastName] = useState('')
	const [telephone, setTelephone] = useState('')
	const customTheme = deepMerge(grommet, {
		formField: {
			border: {
				error: {
					color: 'border',
				},
				color: 'border',
				side: 'all',
			},
			disabled: {
				background: {
					color: undefined,
				},
				border: {
					color: 'status-disabled',
				},
				label: {
					color: 'status-disabled',
				},
			},
			error: {
				background: {
					color: { light: '#FF404033', dark: '#FF40404D' },
				},
				size: 'xsmall',
				color: 'text-weak',
				margin: {
					start: 'none',
				},
			},
			help: {
				size: 'xsmall',
				color: 'text-weak',
				margin: {
					start: 'none',
					bottom: 'xsmall',
				},
			},
			info: {
				size: 'xsmall',
				color: 'text-weak',
				margin: {
					start: 'none',
				},
			},
			label: {
				size: 'xsmall',
				color: 'text-weak',
				margin: {
					horizontal: 'none',
				},
			},
			round: '4px',
		},
	})

	return (
		<Grommet theme={customTheme}>
			<Form
				className="add-new-contact-form"
				onSubmit={(event) => console.log('Submit', event.value, event.touched)}
			>
				<FormField label="Name">
					<TextInput
						onChange={(event) => setName(event.target.value)}
						name="name"
						className="add-new-label"
						placeholder="John"
						required
					/>
				</FormField>
				<FormField label="Last Name">
					<TextInput
						onChange={(event) => setLastName(event.target.value)}
						name="lastname"
						className="add-new-label"
						placeholder="Doe"
						required
					/>
				</FormField>
				<FormField label="Email">
					<TextInput
						name="email"
						onChange={(event) => setEmail(event.target.value)}
						className="add-new-label"
						type="email"
						required
						placeholder="johndoe@test.com"
					/>
				</FormField>
				<FormField label="Telephone">
					<TextInput
						onChange={(event) => setTelephone(event.target.value)}
						name="telephone"
						type="number"
						required
						className="add-new-label"
					/>
				</FormField>
				<Box
					as="footer"
					gap="small"
					direction="row"
					align="center"
					justify="end"
					pad={{ top: 'medium', bottom: 'small' }}
				>
					<Button
						label={
							<Text color="white">
								<strong>Save</strong>
							</Text>
						}
						type="submit"
						primary
						color="#7D4CDB"
					/>
				</Box>
			</Form>
		</Grommet>
	)
}

export default AddNewContact
