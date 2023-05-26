import React from 'react'
import { WalletText } from './../UI/WalletText'

export const LoadingText = ({ delay = 500 }) => {
	const [dots, setDots] = React.useState('')
	const [dotsID, setDotsID] = React.useState(null)

	React.useEffect(() => {
		setDotsID(
			setInterval(() => {
				setDots((dots) => {
					clearInterval(dotsID)
					if (dots.length == 3) {
						return ''
					} else {
						return dots + '.'
					}
				})
			}, delay)
		)

		return () => clearInterval(dotsID)
	}, [])

	return (
		<WalletText fw='bold' size='sm' style={{ lineHeight: 17 }}>
			Loading{dots}
		</WalletText>
	)
}
