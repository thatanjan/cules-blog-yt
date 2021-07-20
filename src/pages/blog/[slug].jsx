import React, { useEffect } from 'react'
import axios from 'axios'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import connectDB from '../../mongoose/connectDB'
import BlogModel from '../../mongoose/BlogModel'

import BlogLayout from '../../components/Layouts/BlogLayout'
import MDXComponents from '../../components/MDX/MDXComponents'

import useApiSwr from '../../hooks/useApiSWR'

const Blog = ({ blog, slug, serializedBlog }) => {
	const { data, mutate } = useApiSwr(`/api/views/${slug}`)

	useEffect(() => {
		;(async () => {
			try {
				await axios.post(`/api/views/${slug}`)

				mutate()
			} catch (e) {}
		})()
	}, [])

	return (
		<>
			<BlogLayout
				{...{ ...blog, totalViews: data ? data.totalViews : blog.totalViews }}
			>
				<MDXRemote {...serializedBlog} components={MDXComponents} />
			</BlogLayout>
		</>
	)
}

export const getStaticPaths = async () => {
	await connectDB()

	const allSlugs = await BlogModel.find({}, 'slug')

	const paths = allSlugs.map((slug) => ({
		params: {
			slug: slug.slug,
		},
	}))

	console.log(paths)

	return { paths, fallback: false }
}

export const getStaticProps = async ({ params: { slug } }) => {
	await connectDB()

	const blogDocument = await BlogModel.findOne(
		{ slug },
		'-slug -customID -_id -__v'
	)

	const blog = blogDocument.toObject()

	blog.createdAt = blog.createdAt.toDateString()

	const serializedBlog = await serialize(blog.content)

	return { props: { blog, slug, serializedBlog } }
}

export default Blog
