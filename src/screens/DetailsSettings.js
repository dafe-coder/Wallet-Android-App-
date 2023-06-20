import React from 'react'
import {
	View,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	TouchableWithoutFeedback,
} from 'react-native'
import { Header } from './../Components/Header'
import { WalletText } from './../Components/UI/WalletText'
import { THEME } from '../Theme'
import { SvgIcon } from './../Components/svg/svg'
import { useDispatch, useSelector } from 'react-redux'
import {
	setCustomSlippage,
	setDeadline,
	setSlippage,
} from '../store/slices/transactionSlice'

export const DetailsSettings = () => {
	const dispatch = useDispatch()
	const slippageInpRef = React.useRef()
	const [open, setOpen] = React.useState(false)
	const [openTwo, setOpenTwo] = React.useState(false)
	const { deadline, slippage, slippageCustom } = useSelector(
		(state) => state.transaction
	)
	const [slippageCustomValue, setSlippageCustomValue] =
		React.useState(slippageCustom)
	const [showTextSlippage, setShowTextSlippage] = React.useState(false)

	React.useEffect(() => {
		if (+slippageCustomValue < 45) {
			setShowTextSlippage(false)
			dispatch(setCustomSlippage(slippageCustomValue))
		} else {
			setShowTextSlippage(true)
		}
	}, [slippageCustomValue])

	const closeAll = (item) => {
		setOpen(false)
		setOpenTwo(false)
		if (item == 'one') {
			setOpen(true)
		} else if (item == 'two') {
			setOpenTwo(true)
		}
	}

	const chooseSlippage = (count) => {
		dispatch(setCustomSlippage(''))
		dispatch(setSlippage(count))
		slippageInpRef?.current?.blur()
	}

	return (
		<TouchableWithoutFeedback onPressIn={closeAll}>
			<View style={{ flex: 1, paddingHorizontal: 24 }}>
				<Header page='all' title='Transaction Settings' />
				<View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<WalletText fw='bold'>Slippage tolerance</WalletText>
						<TouchableOpacity
							activeOpacity={0.7}
							onPress={() => closeAll('one')}>
							<SvgIcon type='question' style={{ marginLeft: 5 }} />
						</TouchableOpacity>
						<View
							style={[
								styles.body,
								open ? { display: 'flex' } : { display: 'none' },
							]}>
							<WalletText size='xs'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consequuntur, officiis.
							</WalletText>
						</View>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 20 }}>
						<TouchableOpacity
							style={[
								styles.chooseItem,
								slippage == 2 &&
									slippageCustom == '' && {
										borderWidth: 1,
										borderColor: THEME.WHITE,
									},
							]}
							activeOpacity={0.7}
							onPress={() => chooseSlippage(2)}>
							<WalletText size='xs'>2%</WalletText>
						</TouchableOpacity>
						<TouchableOpacity
							style={[
								styles.chooseItem,
								slippage == 3 &&
									slippageCustom === '' && {
										borderWidth: 1,
										borderColor: THEME.WHITE,
									},
							]}
							activeOpacity={0.7}
							onPress={() => chooseSlippage(3)}>
							<WalletText size='xs'>3%</WalletText>
						</TouchableOpacity>
						<TextInput
							ref={slippageInpRef}
							style={[
								styles.inp,
								slippageCustom !== '' && {
									borderWidth: 1,
									borderColor: THEME.WHITE,
								},
							]}
							placeholder='Custom'
							placeholderTextColor={THEME.WHITE}
							keyboardType='numeric'
							textAlign='center'
							value={slippageCustom}
							maxLength={2}
							onChangeText={setSlippageCustomValue}
						/>
					</View>
					{showTextSlippage && (
						<View
							style={{
								marginTop: 15,
								flexDirection: 'row',
								alignItems: 'center',
							}}>
							<SvgIcon type='info' style={{ marginRight: 10 }} />
							<WalletText size='xs'>
								You may receive 45% less with this level of slippage tolerance
							</WalletText>
						</View>
					)}
				</View>
				<View style={{ marginTop: 30 }}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<WalletText fw='bold'>Transaction deadline</WalletText>
						<TouchableOpacity
							onPress={() => closeAll('two')}
							activeOpacity={0.7}>
							<SvgIcon type='question' style={{ marginLeft: 5 }} />
						</TouchableOpacity>
						<View
							style={[
								styles.body,
								openTwo ? { display: 'flex' } : { display: 'none' },
							]}>
							<WalletText size='xs'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consequuntur, officiis.
							</WalletText>
						</View>
					</View>
					<View
						style={{
							flexDirection: 'row',
							marginTop: 20,
							alignItems: 'center',
						}}>
						<TextInput
							style={styles.inp}
							placeholder='0'
							placeholderTextColor={THEME.WHITE}
							keyboardType='numeric'
							textAlign='center'
							value={deadline}
							onChangeText={(text) => dispatch(setDeadline(text))}
							maxLength={2}
						/>
						<WalletText size='xs' style={{ marginLeft: 10 }}>
							min
						</WalletText>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	chooseItem: {
		backgroundColor: THEME.GREEN_LIGHT,
		justifyContent: 'center',
		width: 75,
		alignItems: 'center',
		borderRadius: 10,
		paddingVertical: 5,
		marginRight: 10,
	},
	inp: {
		backgroundColor: THEME.GREEN_LIGHT,
		width: 75,
		padding: 0,
		borderRadius: 10,
		fontSize: 12,
		textAlign: 'center',
		flex: 1,
		maxWidth: 75,
		color: THEME.WHITE,
	},
	body: {
		position: 'absolute',
		backgroundColor: THEME.GREEN_LIGHT,
		padding: 20,
		width: 250,
		borderRadius: 16,
		top: 35,
		left: 0,
		zIndex: 1,
		display: 'none',
	},
})
