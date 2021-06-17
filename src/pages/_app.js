import { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import AppBar from '../components/AppBar/AppBar'

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return (
		<>
			<CssBaseline />
			<AppBar />
			<Component {...pageProps} />{' '}
		</>
	)
}

export default MyApp
