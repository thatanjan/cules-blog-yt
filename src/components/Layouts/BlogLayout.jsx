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
						<Typography variant='h6'>{totalViews}</Typography>
					</Grid>
				</Grid>
				Ipsum quo molestiae consequuntur laboriosam minima odio Fugiat quasi
				explicabo dicta eius commodi eaque Laborum laborum nulla eaque porro aut sit
				sint Nobis nesciunt tempore laudantium consequatur in. Culpa rem in quae
				atque voluptate. Doloremque eaque dolor impedit est dolore. Soluta nobis
				laboriosam rem iure molestias Nemo aspernatur aperiam maxime eum unde! Ipsa
				repellendus voluptate id officia culpa? Odit delectus est placeat tempora
				molestias veritatis? Accusamus possimus odit ullam ipsum recusandae Illo eum
				officia fuga atque nostrum reiciendis Neque sequi vero laborum corrupti
				saepe velit Laudantium labore doloremque assumenda dolor dolorem. Labore
				aperiam necessitatibus maiores debitis eum Quod illo unde odio ex
				accusantium Quibusdam nobis vitae quia aperiam rem. Illum nostrum a beatae
				corporis voluptatibus Maiores porro neque ab assumenda est expedita Eius ex
				dolore unde dignissimos doloribus vero. Eos doloremque iure necessitatibus
				aut libero pariatur Quae quas dignissimos impedit a consectetur deleniti.
				Rerum tempora voluptates dicta inventore minima reprehenderit expedita?
				Reprehenderit odit suscipit laborum sed eum. Ducimus cum voluptate velit quo
				explicabo. In odio magni et cumque voluptates, nemo ab delectus, id
				laboriosam? Dolorum accusantium dicta enim magni recusandae, est esse odit
				Omnis nesciunt qui commodi veritatis cupiditate? Officia veniam eos
				laboriosam voluptates debitis. Iusto deleniti accusantium accusantium
				maiores ad placeat Ducimus cum molestias eveniet aut dolore nostrum
				inventore Porro eveniet dolore quidem soluta accusamus aliquam Doloribus
				laborum dolores sint fuga illo. Aliquid quia vero facere repudiandae ipsum
				Ex voluptatem consectetur animi aut autem rerum beatae? Beatae quae deleniti
				dolor quos id. Magni quidem rerum suscipit nemo quis illum obcaecati Natus
				praesentium aliquid exercitationem aperiam maxime explicabo. Ad omnis ab
				iure omnis voluptatum? A repudiandae maiores corporis non veritatis. Impedit
				quibusdam nemo a aliquam neque quas debitis. Ipsa non consequuntur eum sunt
				tempora? Molestias esse expedita ab assumenda exercitationem Totam sunt
				pariatur nostrum odit adipisci illum At iste molestiae.
			</Grid>
		</Grid>
	)
}

export default BlogLayout
