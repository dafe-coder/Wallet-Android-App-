import React from 'react'
import { THEME } from '../../Theme'
import SkeletonLoader from 'expo-skeleton-loader'

export const LoaderListItem = ({ size = 36, style }) => (
	<SkeletonLoader boneColor={THEME.BROWN_DARK} highlightColor={THEME.BROWN}>
		<SkeletonLoader.Container
			style={[{ flex: 1, flexDirection: 'row', alignItems: 'center' }, style]}>
			<SkeletonLoader.Item
				style={{
					width: size,
					height: size,
					borderRadius: size / 2,
					marginRight: 20,
				}}
			/>
			<SkeletonLoader.Container
				style={{
					flexDirection: 'row',
					flex: 1,
					justifyContent: 'space-between',
				}}>
				<SkeletonLoader.Container>
					<SkeletonLoader.Item
						style={{ width: 50, height: 20, marginBottom: 8 }}
					/>
					<SkeletonLoader.Item style={{ width: 70, height: 20 }} />
				</SkeletonLoader.Container>
				<SkeletonLoader.Container style={{ alignItems: 'flex-end' }}>
					<SkeletonLoader.Item
						style={{ width: 100, height: 20, marginBottom: 8 }}
					/>
					<SkeletonLoader.Item style={{ width: 30, height: 20 }} />
				</SkeletonLoader.Container>
			</SkeletonLoader.Container>
		</SkeletonLoader.Container>
	</SkeletonLoader>
)
