import BlogModel from '../../../mongoose/BlogModel'
import connectDB from '../../../mongoose/connectDB'

const handler = async ({ method, query: { slug } }, res) => {
	try {
		await connectDB()

		if (method === 'GET') {
			const { totalViews } = await BlogModel.findOne({ slug }, 'totalViews')

			return res.status(200).json({ totalViews })
		}

		if (method === 'POST') {
			const update = await BlogModel.updateOne(
				{ slug },
				{
					$inc: {
						totalViews: 1,
					},
				}
			)

			if (update.nModified === 1) {
				return res.status(200).json({ success: true })
			}

			return res.status(400).json({ message: 'error happended' })
		}
	} catch (_) {
		res.end('error happened')
	}
}

export default handler
