import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import CodeBlocks from './CodeBlocks'
import MuiLink from '../Links/MuiLink'

const components = { code: CodeBlocks }

const headerTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

headerTags.forEach((tag) => {
	components[tag] = (props) => <Typography variant={tag} {...props} />
})

components.p = (props) => (
	<Typography {...props} style={{ padding: '0.5rem 0' }} />
)

components.img = (props) => (
	<img
		{...props}
		style={{
			width: '100%',
		}}
	/>
)

components.ul = (props) => (
	<List {...props} component='ul' style={{ listStyle: 'disc' }} />
)

components.ul = (props) => (
	<List {...props} component='ol' style={{ listStyle: 'decimal' }} />
)

components.li = ({ children, ...props }) => (
	<ListItem {...props} style={{ display: 'list-item' }}>
		<ListItemText primary={children} />
	</ListItem>
)

components.a = (props) => (
	<MuiLink
		MuiComponent={Typography}
		{...props}
		style={{ fontSize: 'inherit', color: '#3f51b5' }}
	/>
)

components.Iframe = ({ title, videoID }) => (
	<iframe
		title={title}
		src={`https://www.youtube.com/embed/${videoID}`}
		frameBorder='0'
		allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
		allowFullScreen
		style={{ width: '100%', height: '50vh' }}
	/>
)

export default components
