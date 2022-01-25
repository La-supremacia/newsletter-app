import React from 'react'
import { Text } from 'grommet'

const ModalContactDetails = ({ datum, type }) => {
    
	return <div>
		<Text style={{ fontWeight: (type==="name") ? 'bold' :'normal'}} className="contact-pointer">
			{datum[type]}
		</Text>
    </div>
}

export default ModalContactDetails
