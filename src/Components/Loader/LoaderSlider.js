import React from 'react'
import { THEME } from '../../Theme'
import SkeletonLoader from 'expo-skeleton-loader'
import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width

export const LoaderSlider = ({ style }) => (
	<SkeletonLoader
		style={{ flex: 1 }}
		boneColor={THEME.GREY_LIGHT}
		highlightColor={THEME.GREY_LIGHT_BG}>
		<SkeletonLoader.Container
			style={[{ flex: 1, flexDirection: 'row', alignItems: 'center' }, style]}>
			<SkeletonLoader.Item
				style={{
					width: width + 30,
					height: 205,
				}}
			/>
		</SkeletonLoader.Container>
	</SkeletonLoader>
)
