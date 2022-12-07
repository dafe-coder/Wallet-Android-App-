import React, { useCallback, useMemo, useRef, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import { THEME } from '../../Theme'
import { SettingsListMenu } from '../../Components'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ConnectsApp, ChangeCurrentNetwork } from '../../Components/modal'
import { AccountCard } from './../../Components'

export const SettingsScreen = () => {
	const [showOverlay, setShowOverlay] = useState('none')
	const [currentLink, setCurrentLink] = useState('')
	// ref
	const bottomSheetRef = useRef(null)

	// variables
	const snapPoints = useMemo(() => ['1%', '55%'], [])

	// callbacks
	function handlePresentPress(title) {
		bottomSheetRef.current.expand()
		setShowOverlay('flex')
		setCurrentLink(title)
	}
	const handleSheetChanges = useCallback((index) => {
		if (index == 0) {
			bottomSheetRef.current.close()
			setShowOverlay('none')
		}
	}, [])
	return (
		<GestureHandlerRootView style={{ flex: 1, paddingTop: 29 }}>
			<View style={{ paddingHorizontal: 16 }}>
				<AccountCard />
			</View>
			<SettingsListMenu openCurrentNetwork={handlePresentPress} />
			<View style={[styles.overlay, { display: showOverlay }]} />
			<BottomSheet
				ref={bottomSheetRef}
				index={-1}
				snapPoints={snapPoints}
				handleStyle={styles.line}
				handleIndicatorStyle={{ width: 64, height: 4 }}
				backgroundStyle={styles.sheetContainer}
				detached={true}
				onChange={handleSheetChanges}>
				<View style={styles.contentContainer}>
					{currentLink == 'Connected Apps' ? (
						<ConnectsApp />
					) : (
						<ChangeCurrentNetwork />
					)}
				</View>
			</BottomSheet>
		</GestureHandlerRootView>
	)
}

const styles = StyleSheet.create({
	overlay: {
		display: 'none',
		opacity: 0.5,
		backgroundColor: THEME.PRIMARY,
		position: 'absolute',
		bottom: 0,
		height: '100%',
		width: '100%',
		left: 0,
		zIndex: 0,
	},
	contentContainer: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: THEME.BROWN_DARK,
		paddingTop: 40,
	},
	sheetContainer: {
		backgroundColor: THEME.BROWN_DARK,
		borderRadius: 10,
	},
})
