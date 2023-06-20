import React from 'react'
import { THEME } from '../../Theme'
import SkeletonLoader from 'expo-skeleton-loader'
import { View } from 'react-native'

export const LoaderListItem = ({ size = 36, style }) => (
	<SkeletonLoader boneColor='#4D783D' highlightColor='#2F4925'>
		<SkeletonLoader.Container
			style={[
				{
					flex: 1,
					flexDirection: 'row',
					alignItems: 'center',
					backgroundColor: THEME.GREEN_LIGHT,
					paddingHorizontal: 20,
					paddingVertical: 14,
					borderRadius: 16,
					marginBottom: 10,
				},
				style,
			]}>
			<SkeletonLoader.Container
				style={{
					flex: 1,
				}}>
				<SkeletonLoader.Container
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					<SkeletonLoader.Container
						style={{
							flexDirection: 'row',
							alignItems: 'center',
						}}>
						<SkeletonLoader.Item
							style={{
								width: size,
								height: size,
								borderRadius: size / 2,
								marginRight: 20,
							}}
						/>
						<SkeletonLoader.Item style={{ width: 100, height: 20 }} />
					</SkeletonLoader.Container>
					<SkeletonLoader.Item style={{ width: 70, height: 20 }} />
				</SkeletonLoader.Container>
				<SkeletonLoader.Container
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 20,
						alignItems: 'center',
					}}>
					<SkeletonLoader.Item style={{ width: 70, height: 20 }} />
					<SkeletonLoader.Item style={{ width: 30, height: 20 }} />
				</SkeletonLoader.Container>
			</SkeletonLoader.Container>
		</SkeletonLoader.Container>
	</SkeletonLoader>
)
