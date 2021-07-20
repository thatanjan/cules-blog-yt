import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'next/image'

const useStyles = makeStyles({
	bannerStyle: {
		margin: '3rem 0 ',
	},

	paddingBottom: {
		paddingBottom: '1rem',
	},
})

const BlogLayout = ({
	banner,
	title,
	createdAt,
	description,
	totalViews,
	readingTime,
	children,
}) => {
	const { bannerStyle, paddingBottom } = useStyles()
	return (
		<Grid container justify='center'>
			<Grid item xs={8}>
				<div className={bannerStyle}>
					<Image
						src={banner}
						layout='responsive'
						height={1080}
						width={1920}
						objectFit='cover'
					/>
				</div>
				<Typography
					variant='h3'
					component='h1'
					align='center'
					className={paddingBottom}
				>
					{title}
				</Typography>
				<Grid container className={paddingBottom} justify='space-evenly'>
					<Grid item>
						<Typography variant='h6'>{createdAt}</Typography>
					</Grid>
					<Grid item>
						<Typography variant='h6'>{readingTime}</Typography>
					</Grid>
					<Grid item>
						<Typography variant='h6'>{totalViews} views</Typography>
					</Grid>
				</Grid>
				{children}
			</Grid>
		</Grid>
	)
}

export default BlogLayout
