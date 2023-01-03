module.exports = {
	resolver: {
		extraNodeModules: require('node-libs-react-native'),
		stream: require.resolve('readable-stream'),
		crypto: require.resolve('crypto-browserify'),
		RNRandomBytes: require.resolve('react-native-randombytes'),
	},
}
