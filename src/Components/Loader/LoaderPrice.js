import React from 'react'
import { THEME } from '../../Theme'
import SkeletonLoader from 'expo-skeleton-loader'
import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width

export const LoaderPrice = ({ style }) => (
	<SkeletonLoader style={[style]} boneColor='#4D783D' highlightColor='#2F4925'>
		<SkeletonLoader.Container style={{ alignItems: 'center' }}>
			<SkeletonLoader.Item
				style={{
					height: 23,
					borderRadius: 4,
					width: 140,
				}}
			/>
			<SkeletonLoader.Item
				style={{
					marginTop: 10,
					height: 23,
					borderRadius: 4,
					width: 224,
				}}
			/>
		</SkeletonLoader.Container>
	</SkeletonLoader>
)
