import React from 'react'
import Grid from '@material-ui/core/Grid'

import BlogPreview from '../Blog/BlogPreview'

const BlogPreviewLayout = ({ allBlogs }) => {
	return (
		<Grid container spacing={4}>
			{allBlogs.map((blog) => (
				<Grid item xs={4}>
					<BlogPreview {...blog} />
				</Grid>
			))}
		</Grid>
	)
}

export default BlogPreviewLayout
