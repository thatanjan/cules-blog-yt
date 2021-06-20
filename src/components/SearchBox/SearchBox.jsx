import React, { useState } from 'react'
import { useRouter } from 'next/router'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const SearchBox = () => {
	const label = 'Search Blog'

	const [queryText, setQueryText] = useState('')

	const { push } = useRouter()

	const handleSubmit = (event) => {
		const convertedQueryString = queryText.trim().replace(/\s/g, '+')

		const redirectPath = `/search/${convertedQueryString}`

		push(redirectPath)

		event.preventDefault()
	}

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				label={label}
				placeholder={label}
				fullWidth
				margin='normal'
				value={queryText}
				onChange={(event) => setQueryText(event.target.value)}
			/>

			<Button
				type='submit'
				color='secondary'
				variant='contained'
				disabled={!queryText}
			>
				Search
			</Button>
		</form>
	)
}

export default SearchBox
