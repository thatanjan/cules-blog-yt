import { Schema, model, models } from 'mongoose'

const requiredStringType = {
	type: String,
	required: true,
}

const schema = new Schema({
	title: { ...requiredStringType, text: true },
	slug: requiredStringType,
	description: requiredStringType,
	banner: requiredStringType,
	altText: requiredStringType,
	content: requiredStringType,
	readingTime: requiredStringType,
	customID: requiredStringType,
	createdAt: {
		type: Date,
		default: Date.now,
	},

	totalViews: {
		type: Number,
		default: 0,
	},
})

export default models.blog || model('blog', schema)
