import React, { useCallback, useMemo, useRef, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { AccountCard } from '../../Components'
import { AccountListMenu } from './../../Components'
import BottomSheet from '@gorhom/bottom-sheet'
import { AddAccount, SelectAccount } from './../../Components/modal'
import { THEME } from './../../Theme'

export const AccountScreen = () => {
	const [currentLink, setCurrentLink] = useState('')
	const [showOverlay, setShowOverlay] = useState('none')

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
		<View style={styles.wrap}>
			<View style={[styles.overlay, { display: showOverlay }]} />

			<View
				style={{
					paddingHorizontal: 16,
				}}>
				<AccountCard />
			</View>
			<AccountListMenu onPress={handlePresentPress} />
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
					{currentLink == 'Add Account' ? <AddAccount /> : <SelectAccount />}
				</View>
			</BottomSheet>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		paddingTop: 30,
	},
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
