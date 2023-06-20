import React from 'react'
import { THEME } from '../../Theme'
import SkeletonLoader from 'expo-skeleton-loader'
import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width

export const LoaderCardRestore = ({ style }) => (
	<SkeletonLoader
		style={[style, { marginTop: 25 }]}
		boneColor='#4D783D'
		highlightColor='#2F4925'>
		<SkeletonLoader.Container
			style={{
				backgroundColor: THEME.GREEN_LIGHT,
				borderRadius: 16,
				marginBottom: 10,
				paddingHorizontal: 20,
				paddingVertical: 18,
			}}>
			<SkeletonLoader.Item
				style={{
					height: 18,
					borderRadius: 4,
					width: 74,
				}}
			/>
			<SkeletonLoader.Item
				style={{
					height: 18,
					borderRadius: 4,
					width: '100%',
					marginTop: 12,
				}}
			/>
			<SkeletonLoader.Item
				style={{ width: 140, height: 16, borderRadius: 4, marginTop: 12 }}
			/>
		</SkeletonLoader.Container>
	</SkeletonLoader>
)
