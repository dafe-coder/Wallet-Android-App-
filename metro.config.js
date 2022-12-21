// module.exports = {
// 	resolver: {
// 		extraNodeModules: {
// 			stream: require.resolve('readable-stream'),
// 		},
// 	},
// }
module.exports = {
	resolver: {
		extraNodeModules: require('node-libs-react-native'),
	},
}
