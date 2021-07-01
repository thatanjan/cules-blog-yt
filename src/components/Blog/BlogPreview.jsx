import React from 'react'
import Image from 'next/image'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import MuiLink from '../Links/MuiLink'

const BlogPreview = ({
	title,
	createdAt,
	description,
	slug,
	totalViews,
	banner,
	readingTime,
}) => {
	const href = `/blog/${slug}`
	return (
		<Card>
			<CardHeader
				title={
					<MuiLink MuiComponent={Typography} href={href} variant='h6'>
						{title}
					</MuiLink>
				}
				subheader={
					<>
						{createdAt}, {totalViews}, {readingTime}
					</>
				}
			/>

			<MuiLink MuiComponent={CardMedia} href={href}>
				<Image
					src={banner}
					height={1080}
					width={1920}
					layout='responsive'
					objectFit='cover'
				/>
			</MuiLink>

			<CardContent>{description}</CardContent>
		</Card>
	)
}

export default BlogPreview
