import React, { useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { THEME } from './../Theme'

export const WalletBottomSheet = React.forwardRef(
	({ index = -1, snapPoints, children }, ref) => {
		const handleSheetChanges = (index) => {
			if (index == 0) {
				// ref.current.close()
			}
		}
		const renderBackdrop = useCallback(
			(props) => (
				<BottomSheetBackdrop
					{...props}
					enableTouchThrough={true}
					disappearsOnIndex={-1}
					appearsOnIndex={0}
				/>
			),
			[]
		)
		return (
			<BottomSheet
				ref={ref}
				index={index}
				snapPoints={snapPoints}
				handleStyle={styles.line}
				handleIndicatorStyle={{ width: 64, height: 4 }}
				backgroundStyle={styles.sheetContainer}
				detached={true}
				enablePanDownToClose={true}
				onChange={handleSheetChanges}
				backdropComponent={renderBackdrop}>
				<View style={styles.contentContainer}>{children}</View>
			</BottomSheet>
		)
	}
)

const styles = StyleSheet.create({
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
