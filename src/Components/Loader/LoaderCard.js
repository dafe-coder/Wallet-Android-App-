import React from 'react'
import { THEME } from '../../Theme'
import SkeletonLoader from 'expo-skeleton-loader'
import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width

export const LoaderCard = ({ style }) => (
	<SkeletonLoader
		style={[
			{ height: 126, borderRadius: 24, width: '100%', overflow: 'hidden' },
			style,
		]}
		boneColor={THEME.GREY}
		highlightColor='#1D1C2D'>
		<SkeletonLoader.Container
			style={[
				{
					flex: 1,
					flexDirection: 'row',
					alignItems: 'center',
					borderRadius: 24,
				},
			]}>
			<SkeletonLoader.Item
				style={{
					borderRadius: 24,
				}}
			/>
		</SkeletonLoader.Container>
	</SkeletonLoader>
)
