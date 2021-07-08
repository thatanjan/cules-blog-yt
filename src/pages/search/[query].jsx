import React from 'react'
import Typography from '@material-ui/core/Typography'

import BlogPreviewLayout from '../../components/Layouts/BlogPreviewLayout'

import BlogModel from '../../mongoose/BlogModel'
import connectDB from '../../mongoose/connectDB'

const Query = ({ allBlogs }) => {
	return (
		<>
			<Typography color='secondary' variant='h2' component='h1'>
				You have X search results based on the Query
			</Typography>

			<BlogPreviewLayout allBlogs={allBlogs} />
		</>
	)
}

export const getServerSideProps = async ({ query: { query } }) => {
	await connectDB()

	const queryString = query.replace(/\+/g, ' ').trim()

	const project = {
		_id: 0,
		__v: 0,
		content: 0,
	}

	const result = await BlogModel.find(
		{
			$text: {
				$search: queryString,
			},
		},
		project
	).sort({ score: { $meta: 'textScore' } })

	const allBlogs = result.map((blog) => {
		blog = blog.toObject()
		blog.createdAt = blog.createdAt.toDateString()

		return blog
	})

	return { props: { allBlogs } }
}

export default Query
