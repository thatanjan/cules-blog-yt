import React from 'react'
import NextLink from 'next/link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	linkStyle: {
		color: 'inherit',
		textDecoration: 'none',
		cursor: 'pointer',

		'&:hover': {
			textDecoration: 'initial',
			color: theme.palette.secondary.main,
		},
	},
}))

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
	const { as, href, ...other } = props

	return (
		<NextLink href={href} as={as}>
			<a ref={ref} {...other} />
		</NextLink>
	)
})

function Link(props) {
	const { linkStyle } = useStyles()
	const {
		MuiComponent,
		href,
		activeClassName = 'active',
		className: classNameProps,
		innerRef,
		...other
	} = props

	return (
		<MuiComponent
			component={NextComposed}
			className={linkStyle}
			ref={innerRef}
			href={href}
			{...other}
		/>
	)
}

export default React.forwardRef((props, ref) => (
	<Link {...props} innerRef={ref} />
))
