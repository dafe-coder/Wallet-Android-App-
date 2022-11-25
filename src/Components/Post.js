import React from 'react'
import {
	Text,
	View,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
} from 'react-native'

export const Post = ({ item, onOpen }) => {
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(item)}>
			<View style={styles.post}>
				<ImageBackground style={styles.image} source={{ uri: item.img }}>
					<View style={styles.textWrap}>
						<Text style={styles.title}>
							{new Date(item.date).toLocaleDateString()}
						</Text>
					</View>
				</ImageBackground>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	post: {
		marginBottom: 15,
		overflow: 'hidden',
		height: 200,
	},
	image: {
		width: '100%',
		height: 200,
	},
	textWrap: {
		backgroundColor: 'rgba(0,0,0, .5)',
		paddingVertical: 5,
		alignItems: 'center',
		width: '100%',
	},
	title: {
		color: '#fff',
		fontFamily: 'ub-regular',
	},
})
