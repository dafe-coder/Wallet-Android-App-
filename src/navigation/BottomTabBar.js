import React from 'react'
import { SvgIconNav } from '../Components/svg/svgNav'
import { WalletText } from '../Components/UI'
import { Dimensions, View, TouchableOpacity, StyleSheet } from 'react-native'
import { THEME } from '../Theme'
import { SvgIcon } from './../Components/svg/svg'

const width = Dimensions.get('window').width

export function MyTabBar({ state, descriptors, navigation }) {
	return (
		<View style={styles.wrap}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key]
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name

				const isFocused = state.index === index
				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					})

					if (!isFocused && !event.defaultPrevented) {
						// The `merge: true` option makes sure that the params inside the tab screen are preserved
						navigation.navigate({ name: route.name, merge: true })
					}
				}

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					})
				}
				const initSvgType = (label) => {
					switch (label) {
						case 'Add Cash':
							return 'buy'
						case 'Settings account':
							return 'cog'
						default:
							return label.toLowerCase()
					}
				}

				return (
					<TouchableOpacity
						accessibilityRole='button'
						accessibilityLabel={options.tabBarAccessibilityLabel}
						accessibilityState={isFocused ? { selected: true } : {}}
						activeOpacity={1}
						key={index.toString()}
						testID={options.tabBarTestID}
						onLongPress={onLongPress}
						onPress={onPress}>
						<View style={[styles.item]}>
							<SvgIconNav
								type={
									isFocused
										? initSvgType(label) + '-filled'
										: initSvgType(label)
								}
								fill={isFocused ? '#000' : '#9C9DA8'}
							/>
							{isFocused && (
								<SvgIconNav style={{ marginTop: 8 }} type='circle' />
							)}
						</View>
					</TouchableOpacity>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 80,
		height: 44,
		borderRadius: 50,
	},
	circle: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: THEME.VIOLET,
	},
	wrap: {
		width: '100.3%',
		paddingTop: 15,
		paddingBottom: 18,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		bottom: -2,
		left: -1,
		position: 'absolute',
		backgroundColor: THEME.PRIMARY,
	},
	polygon: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		top: 0,
		width: '100%',
	},
})
