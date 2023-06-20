import React from 'react'
import { THEME } from '../../Theme'
import SkeletonLoader from 'expo-skeleton-loader'
import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width

export const LoaderBuy = ({ style }) => (
	<SkeletonLoader style={[style]} boneColor='#4D783D' highlightColor='#2F4925'>
		<SkeletonLoader.Container
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				backgroundColor: THEME.GREEN_LIGHT,
				borderRadius: 16,
				marginBottom: 10,
				paddingHorizontal: 20,
				paddingVertical: 16,
			}}>
			<SkeletonLoader.Item
				style={{
					height: 25,
					width: 25,
					borderRadius: 50,
				}}
			/>
			<SkeletonLoader.Item
				style={{
					height: 18,
					borderRadius: 4,
					width: 74,
					marginLeft: 15,
				}}
			/>
		</SkeletonLoader.Container>
		<SkeletonLoader.Container style={{ alignItems: 'center', marginTop: 14 }}>
			<SkeletonLoader.Item
				style={{ width: 140, height: 16, borderRadius: 4 }}
			/>
		</SkeletonLoader.Container>
	</SkeletonLoader>
)
