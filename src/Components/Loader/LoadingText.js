import React from 'react'
import { WalletText } from './../UI/WalletText'
import { WalletTitle } from '../UI'

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
		<WalletTitle
			color='white'
			fw='bold'
			style={{ position: 'absolute', bottom: 40 }}>
			Loading{dots}
		</WalletTitle>
	)
}
