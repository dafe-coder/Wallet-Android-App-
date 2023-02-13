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
			<View style={styles.polygon}>
				<View style={styles.leftWhiteBlock} />
				<SvgIcon width={width} type='polygon-nav' />
				<View style={styles.rightWhiteBlock} />
			</View>
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

				const initLabel = (label) => {
					switch (label) {
						case 'Nft':
							return 'NFTs'
						case 'Wallet':
							return 'Coins'
						case 'TransactionPage':
							return 'Activity'
						default:
							return label
					}
				}
				const initSvgType = (label) => {
					switch (label) {
						case 'Nft':
							return 'bar'
						case 'TransactionPage':
							return 'activity'
						case 'Account':
							return 'man'
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
							{label == 'Swap' ? (
								<View
									style={[styles.mainBtn, { position: 'absolute', top: -43 }]}>
									<SvgIconNav type='swap' width={22} height={24} />
								</View>
							) : (
								<SvgIconNav
									height='20'
									type={initSvgType(label)}
									fill={isFocused ? THEME.VIOLET : ''}
								/>
							)}
							<WalletText
								style={[
									{ marginTop: 5 },
									label == 'Swap' ? { marginTop: 25 } : {},
									label == 'Account'
										? {
												minWidth: width / 7,
												height: 23,
										  }
										: {},
									isFocused ? { color: '#632DBC' } : { color: '#BDA5E4' },
								]}>
								{initLabel(label)}
							</WalletText>
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
		width: 58,
	},
	wrap: {
		width: '100.3%',
		paddingTop: 15,
		paddingBottom: 18,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		bottom: -1,
		left: -1,
		position: 'absolute',
		backgroundColor: 'transparent',
	},
	polygon: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		top: 0,
		width: '100%',
	},
	mainBtn: {
		width: 56,
		height: 56,
		backgroundColor: '#8247E5',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		// elevation: 24,
		// shadowColor: THEME.VIOLET,
		// overflow: 'hidden',
	},
	leftWhiteBlock: {
		width: '10%',
		height: '100%',
		backgroundColor: THEME.WHITE,
		position: 'absolute',
		bottom: 0,
		left: 0,
		top: 0,
	},
	rightWhiteBlock: {
		width: '10%',
		height: '100%',
		backgroundColor: THEME.WHITE,
		position: 'absolute',
		bottom: 0,
		right: 0,
		top: 0,
	},
})
