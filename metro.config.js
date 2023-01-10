// module.exports = {
// 	resolver: {
// 		extraNodeModules: require('node-libs-react-native'),
// 		stream: require.resolve('readable-stream'),
// 		crypto: require.resolve('crypto-browserify'),
// 		RNRandomBytes: require.resolve('react-native-randombytes'),
// 	},
// }

// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')

module.exports = (async () => {
	const config = await getDefaultConfig(__dirname)
	const { resolver } = config

	config.resolver = {
		...resolver,
		extraNodeModules: require('node-libs-react-native'),
		stream: require.resolve('readable-stream'),
		crypto: require.resolve('crypto-browserify'),
		RNRandomBytes: require.resolve('react-native-randombytes'),
	}

	return config
})()
