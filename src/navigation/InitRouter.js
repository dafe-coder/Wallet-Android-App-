import React from 'react'
import { NativeRouter } from 'react-router-native'
import { WalletRoutes } from './Navigator'
import { useSelector } from 'react-redux'

export const InitRouter = () => {
	const { dataUser } = useSelector((state) => state.storage)
	const { login } = useSelector((state) => state.wallet)

	return (
		<NativeRouter
			initialEntries={[
				dataUser !== null && !login
					? '/welcome-back'
					: dataUser !== null && login
					? '/wallet'
					: '/',
			]}>
			<WalletRoutes />
		</NativeRouter>
	)
}
