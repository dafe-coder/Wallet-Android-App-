import React from 'react'
import { THEME } from '../../Theme'
import SkeletonLoader from 'expo-skeleton-loader'
import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width

export const LoaderCard = ({ style }) => (
	<SkeletonLoader
		style={{ flex: 1, borderRadius: 5 }}
		boneColor={THEME.BROWN_DARK}
		highlightColor={THEME.BROWN}>
		<SkeletonLoader.Container
			style={[
				{
					flex: 1,
					flexDirection: 'row',
					alignItems: 'center',
					borderRadius: 5,
				},
				style,
			]}>
			<SkeletonLoader.Item
				style={{
					width: width,
					height: 72,
					borderRadius: 5,
				}}
			/>
		</SkeletonLoader.Container>
	</SkeletonLoader>
)
