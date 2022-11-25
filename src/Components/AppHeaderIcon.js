import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { THEME } from './../Theme'

export const AppHeaderIcon = (props) => (
	<HeaderButton
		{...props}
		iconSize={24}
		color={THEME.PRIMARY}
		IconComponent={Ionicons}
	/>
)
