import React from 'react'
import Image from 'next/image'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import MuiLink from '../Links/MuiLink'

const BlogPreview = () => {
	return (
		<Card>
			<CardHeader
				title={
					<MuiLink MuiComponent={Typography} href='/dfedfe' variant='h6'>
						why I love reactjs
					</MuiLink>
				}
				subheader={<>adfjiwsjrfsjfls</>}
			/>

			<MuiLink MuiComponent={CardMedia} href='/'>
				<Image
					src='/sample.jpg'
					height={1080}
					width={1920}
					layout='responsive'
					objectFit='cover'
				/>
			</MuiLink>

			<CardContent>
				Ipsum ipsa amet voluptates facere blanditiis Asperiores cumque recusandae
				dignissimos laboriosam reiciendis Voluptas corrupti officiis quidem tempore
				suscipit, excepturi Et aspernatur sint nemo nesciunt incidunt Voluptatum
				excepturi culpa quaerat aliquid ullam. Eaque repudiandae officiis nobis quis
				ut. Deleniti corrupti sit incidunt consequuntur suscipit. Natus illo natus
				similique quam dolores fugit.
			</CardContent>
		</Card>
	)
}

export default BlogPreview
