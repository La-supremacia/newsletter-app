import React from 'react'
import {
	Text,
	Layer,
	Box,
	Button,
	Table,
	TableBody,
	TableRow,
	TableCell,
} from 'grommet'
import { FormClose } from 'grommet-icons'

const ModalContactDetails = ({ datum, type }) => {
	const [open, setOpen] = React.useState(false)
	const onOpen = () => setOpen(true)
	const onClose = () => setOpen(undefined)
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
					style={{ border: '5px solid #81FCED' }}
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
						<Button alignSelf="end" icon={<FormClose />} onClick={onClose} />
						<div className="modal-contact">
							<Table>
								<TableBody>
									<TableRow>
										<TableCell scope="row">
											<strong>Name: </strong>
										</TableCell>
										<TableCell>{datum.name}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell scope="row">
											<strong>Last Name: </strong>
										</TableCell>
										<TableCell>{datum.lastName}</TableCell>
									</TableRow>
								</TableBody>
							</Table>
							Last Name: {datum.lastName}
							Email: {datum.email}
							Telephone: {datum.telephone}
						</div>
					</Box>
				</Layer>
			)}
		</div>
	)
}

export default ModalContactDetails
