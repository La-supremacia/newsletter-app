import React from 'react'
import { Layer, Box, Text, Button } from 'grommet'
import { FormClose } from 'grommet-icons'

const Modal = () => {
	const [open, setOpen] = React.useState(false)
	const onOpen = () => setOpen(true)
	const onClose = () => setOpen(undefined)
	return (
		<div>
			<Button label="Open layer" onClick={onOpen} />
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
						<Text>Hi, I am a Layer!</Text>
					</Box>
				</Layer>
			)}
		</div>
	)
}

export default Modal
