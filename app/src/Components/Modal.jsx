import React from 'react'
import { Layer, Box, Button } from 'grommet'
import { FormClose } from 'grommet-icons'

const Modal = ({children, label="Add",icon, primary=true}) => {
	const [open, setOpen] = React.useState(false)
	const onOpen = () => setOpen(true)
	const onClose = () => setOpen(undefined)
	return (
		<div className="contacts-button-add">
			<Button label={label} icon={icon} onClick={onOpen} primary={primary} />
			{open && (
				<Layer onClickOutside={onClose} onEsc={onClose}>
					<Box
						pad="medium"
						gap="small"
						width={{ min: 'medium' }}
						height={{ min: 'small' }}
						fill
					>
						<Button alignSelf="end" icon={<FormClose />} onClick={onClose} />
						{children}
					</Box>
				</Layer>
			)}
		</div>
	)
}

export default Modal
