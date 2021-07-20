import useSWR from 'swr'
import axios from 'axios'

const fetcher = async (url) => {
	const { data } = await axios.get(url)

	return data
}

const useApiSwr = (url) => useSWR(url, fetcher)

export default useApiSwr
