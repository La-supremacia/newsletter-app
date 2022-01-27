import React, { useState } from 'react'
import {
	Text,
	Layer,
	Box,
	Button,
	Table,
	TableBody,
	TableRow,
	TableCell,
	Heading,
	grommet,
	Form,
	TextInput,
} from 'grommet'
import { deepMerge } from 'grommet/utils'
import { FormClose } from 'grommet-icons'

const ModalContactDetails = ({ datum, type }) => {
	const [open, setOpen] = useState(false)
	const [edit, setEdit] = useState(false)
	const onOpen = () => setOpen(true)
	const onClose = () => setOpen(undefined)
	const [name, setName] = useState(datum.name)
	const [email, setEmail] = useState(datum.email)
	const [lastname, setLastName] = useState(datum.lastName)
	const [telephone, setTelephone] = useState(datum.telephone)
	return (
		<div>
			<Text
				onClick={onOpen}
				style={{ fontWeight: type === 'name' ? 'bold' : 'normal' }}
				className="contact-pointer"
			>
				{datum[type]}
			</Text>
			{open && (
				<Layer
					style={{ border: edit ? '5px solid #81FCED' : '5px solid #5E21BC' }}
					onClickOutside={onClose}
					onEsc={onClose}
				>
					<Box
						pad="medium"
						gap="small"
						width={{ min: 'medium' }}
						height={{ min: 'small' }}
						fill
					>
						<Form
							onSubmit={(event) => console.log('Submit', event.value, event.touched)}
						>
							<div className="modal-contact-header">
								<Heading level={3} margin="none">
									{edit ? 'Edit Contact' : datum.name}
								</Heading>
								<Button
									alignSelf="end"
									icon={<FormClose />}
									onClick={() => {
										onClose()
										setEdit(false)
									}}
								/>
							</div>
							<div className="modal-contact-span-container"></div>
							<div className="modal-contact">
								<Table>
									<TableBody>
										<TableRow>
											<TableCell size="small">
												<strong>Name: </strong>
											</TableCell>
											{edit ? (
												<TableCell size="small">
													<TextInput
														onChange={(event) => setName(event.target.value)}
														name="name"
														value={name}
														className="add-new-label"
														placeholder="John"
														required
													/>
												</TableCell>
											) : (
												<TableCell size="small">{datum.name}</TableCell>
											)}
										</TableRow>
										<TableRow>
											<TableCell>
												<strong>Last Name: </strong>
											</TableCell>
											{edit ? (
												<TableCell size="small">
													<TextInput
														onChange={(event) => setLastName(event.target.value)}
														name="lastname"
														value={lastname}
														className="add-new-label"
														placeholder="Doe"
														required
													/>
												</TableCell>
											) : (
												<TableCell size="small">{datum.lastName}</TableCell>
											)}
										</TableRow>
										<TableRow>
											<TableCell>
												<strong>Email: </strong>
											</TableCell>
											{edit ? (
												<TableCell size="small">
													<TextInput
														name="email"
														onChange={(event) => setEmail(event.target.value)}
														className="add-new-label"
														type="email"
														value={email}
														required
														placeholder="johndoe@test.com"
													/>
												</TableCell>
											) : (
												<TableCell>{datum.email}</TableCell>
											)}
										</TableRow>
										<TableRow>
											<TableCell>
												<strong>Telephone: </strong>
											</TableCell>
											{edit ? (
												<TableCell size="small">
													<TextInput
														onChange={(event) => setTelephone(event.target.value)}
														name="telephone"
														type="number"
														required
														value={telephone}
														className="add-new-label"
													/>
												</TableCell>
											) : (
												<TableCell>{datum.telephone}</TableCell>
											)}
										</TableRow>
									</TableBody>
								</Table>
							</div>
							<div className="modal-contact-span-container"></div>
							<Box
								as="footer"
								gap="small"
								direction="row"
								align="center"
								justify="end"
								pad={{ top: 'medium', bottom: 'small' }}
							>
								{edit ? (
									<Button
										label={
											<Text color="white">
												<strong>Save</strong>
											</Text>
										}
										primary
										type="submit"
										color="#7D4CDB"
									/>
								) : (
									<Button
										label={
											<Text color="white">
												<strong>Edit</strong>
											</Text>
										}
										onClick={() => setEdit(!edit)}
										primary
										color="brand"
									/>
								)}
							</Box>
						</Form>
					</Box>
				</Layer>
			)}
		</div>
	)
}

export default ModalContactDetails
