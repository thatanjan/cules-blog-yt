import readingTime from 'reading-time'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

import connectDB from '../mongoose/connectDB'
import BlogModel from '../mongoose/BlogModel'

import BlogPreviewLayout from '../components/Layouts/BlogPreviewLayout'

export default function Home() {
	return (
		<>
			<BlogPreviewLayout />
		</>
	)
}

export const getStaticProps = async () => {
	await connectDB()

	const root = process.cwd()

	const allBlogFileNames = fs.readdirSync(path.join(root, 'src', 'blogs'))

	const fileDatas = allBlogFileNames.map((fileName) => {
		const fileData = fs.readFileSync(
			path.join(root, 'src', 'blogs', fileName),
			'utf8'
		)

		const matterData = matter(fileData)

		const slug = fileName.replace('.mdx', '')

		const { data } = matterData

		data.slug = slug

		return matterData
	})

	const updateBlogPromise = fileDatas.map((fileData) => {
		const { data, content } = fileData

		return BlogModel.updateOne(
			{ customID: data.customID },
			{
				$set: {
					...data,
					content,
					readingTime: readingTime(content).text,
				},
			},
			{
				upsert: true,
				setDefaultsOnInsert: true,
			}
		)
	})

	await Promise.all(updateBlogPromise)

	return {
		props: {},
	}
}
