import Svg, { G, Path } from 'react-native-svg'

export const SvgIcon = ({ type, fill = '', ...props }) => {
	switch (type) {
		case 'search':
			return (
				<Svg
					viewBox='0 0 19 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<G opacity={0.6}>
						<Path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M14.913 8.206a6.706 6.706 0 11-13.413 0 6.706 6.706 0 0113.413 0zm-1.732 6.527a8.206 8.206 0 111.104-1.014l.008.01 3.54 3.89a.763.763 0 01-.041 1.068.737.737 0 01-1.052-.043l-3.54-3.89a.884.884 0 01-.019-.02z'
							fill='#F9B446'
						/>
					</G>
				</Svg>
			)
		case 'check':
			return (
				<Svg
					width={13}
					height={8}
					viewBox='0 0 13 8'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<Path
						d='M12.022 1.157l-4.95 4.95a1 1 0 01-1.414 0l-4.95-4.95'
						stroke='#F9B446'
						strokeWidth={1.5}
						strokeLinejoin='round'
					/>
				</Svg>
			)
		case 'copy':
			return (
				<Svg
					width={24}
					height={24}
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<Path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M15 11.615C15 9.066 13.21 7 11 7H6c-2.21 0-4 2.066-4 4.615v5.77C2 19.934 3.79 22 6 22h5c2.21 0 4-2.066 4-4.615v-5.77zm-4-2.307c1.105 0 2 1.033 2 2.307v5.77c0 1.274-.895 2.307-2 2.307H6c-1.105 0-2-1.033-2-2.307v-5.77c0-1.274.895-2.307 2-2.307h5z'
						fill={fill != '' ? fill : '#6A6351'}
					/>
					<Path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M22 4.615C22 2.066 20.21 0 18 0h-5c-2.21 0-4 2.066-4 4.615v.24c0 .638.448 1.155 1 1.155s1-.517 1-1.154v-.24c0-1.275.895-2.308 2-2.308h5c1.105 0 2 1.033 2 2.307v5.77c0 1.274-.895 2.307-2 2.307h-.208c-.553 0-1 .517-1 1.154 0 .637.447 1.154 1 1.154H18c2.21 0 4-2.066 4-4.615v-5.77z'
						fill={fill != '' ? fill : '#6A6351'}
					/>
				</Svg>
			)
		default:
			return <></>
	}
}
