import React from 'react'
import { DataTable, Box } from 'grommet'

const Table = ({ columns, data, show = 5 }) => (
	<Box align="center">
		<DataTable
			sortable="true"
			step={show}
			columns={columns}
			data={data}
			size="medium"
			paginate
		/>
	</Box>
)

export default Table
