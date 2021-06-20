import React from 'react'
import Typography from '@material-ui/core/Typography'

import BlogPreviewLayout from '../../components/Layouts/BlogPreviewLayout'

const Query = () => {
	return (
		<>
			<Typography color='secondary' variant='h2' component='h1'>
				You have X search results based on the Query
			</Typography>

			<BlogPreviewLayout />
		</>
	)
}

export default Query
