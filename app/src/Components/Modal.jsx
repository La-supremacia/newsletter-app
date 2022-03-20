import React from 'react'
import { Layer, Box, Button, Heading } from 'grommet'
import { FormClose } from 'grommet-icons'

const Modal = ({
	children,
	label = 'Add',
	icon,
	primary = true,
	title = 'Add Contact',
}) => {
	const [open, setOpen] = React.useState(false)
	const onOpen = () => setOpen(true)
	const onClose = () => setOpen(undefined)
	return (
		<div className="contacts-button-add">
			<Button label={label} icon={icon} onClick={onOpen} primary={primary} />
			{open && (
				<Layer
					onClickOutside={onClose}
					onEsc={onClose}
					style={{ border: '5px solid #81FCED' }}
				>
					<Box
						pad="medium"
						gap="small"
						width={{ min: 'medium' }}
						height={{ min: 'small' }}
						fill
					>
						<div className="modal-contact-header">
							<Heading level={3} margin="none">
								{title}
							</Heading>
							<Button alignSelf="end" icon={<FormClose />} onClick={onClose} />
						</div>
						<div className="modal-contact-span-container"></div>
						{children}
					</Box>
				</Layer>
			)}
		</div>
	)
}

export default Modal
