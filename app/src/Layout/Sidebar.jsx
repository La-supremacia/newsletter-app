import React, { useState } from 'react'
import { Box, Button, Layer, Text } from 'grommet'
import { Next, Previous } from 'grommet-icons'

const SidebarLayer = ({ onClose }) => (
	<Layer position="left" full="vertical" modal={false} plain={true}>
		<Box
			gap="large"
			height={{ min: '100%' }}
			background="neutral-2"
			pad={{ left: 'medium', right: 'large', vertical: 'medium' }}
		>
			<div className="sidebar-button-menu-container" onClick={onClose}>
				<Previous color="#fff" />
			</div>
			<Box pad={{ horizontal: 'medium', vertical: 'small' }}>
				<Text size="large">Title</Text>
			</Box>
			{['First', 'Second', 'Third'].map((name) => (
				<Button
					key={name}
					onClick={onClose}
					hoverIndicator={{ background: 'light-5' }}
				>
					<Box pad={{ horizontal: 'medium', vertical: 'small' }}>
						<Text size="large">{name}</Text>
					</Box>
				</Button>
			))}
		</Box>
	</Layer>
)

const Sidebar = () => {
	const [layerType, setLayerType] = useState(undefined)
	let layer
	if (layerType === 'Sidebar') {
		layer = <SidebarLayer onClose={() => setLayerType(undefined)} />
	}
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<Box key="Sidebar" margin="small">
				<div
					className="button-menu-container"
					onClick={() =>
						setLayerType(layerType === 'Sidebar' ? undefined : 'Sidebar')
					}
				>
					<Next color="#fff" />
				</div>
			</Box>
			{layer}
		</div>
	)
}

export default Sidebar
