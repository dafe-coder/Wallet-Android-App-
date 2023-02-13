import React, { useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { THEME } from './../Theme'
import { Portal, PortalHost } from '@gorhom/portal'
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
			<>
				<Portal>
					<BottomSheet
						ref={ref}
						index={index}
						snapPoints={snapPoints}
						handleIndicatorStyle={styles.line}
						backgroundStyle={styles.sheetContainer}
						detached={false}
						enablePanDownToClose={true}
						onChange={handleSheetChanges}
						stackBehavior='push'
						backdropComponent={renderBackdrop}>
						<View style={styles.contentContainer}>{children}</View>
					</BottomSheet>
				</Portal>
				<PortalHost name='custom_host' />
			</>
		)
	}
)

const styles = StyleSheet.create({
	line: {
		width: 64,
		height: 4,
		backgroundColor: '#9C94AC',
		borderRadius: 2.5,
	},
	contentContainer: {
		flex: 1,
		backgroundColor: THEME.WHITE,
		paddingTop: 40,
		paddingHorizontal: 16,
	},
	sheetContainer: {
		backgroundColor: THEME.WHITE,
		borderTopEndRadius: 10,
		borderTopLeftRadius: 10,
	},
})
