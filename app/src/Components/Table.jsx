import React from 'react'
import { DataTable, Box } from 'grommet'

const Table = ({ columns, data }) => (
	<Box align="center">
		<DataTable
			sortable="true"
			step={5}
			columns={columns}
			data={data}
			size="medium"
			paginate
		/>
	</Box>
)

export default Table
