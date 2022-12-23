import { useEffect, useRef } from 'react'

export const usePrev = (value) => {
	const refContainer = useRef(value)

	useEffect(() => {
		refContainer.current = value
	}, [value])

	return refContainer.current
}
