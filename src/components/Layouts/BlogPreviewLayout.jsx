import React from 'react'
import Grid from '@material-ui/core/Grid'

import BlogPreview from '../Blog/BlogPreview'

const BlogPreviewLayout = () => {
	return (
		<Grid container spacing={4}>
			{Array(20)
				.fill(0)
				.map(() => (
					<Grid item xs={4}>
						<BlogPreview />
					</Grid>
				))}
		</Grid>
	)
}

export default BlogPreviewLayout
