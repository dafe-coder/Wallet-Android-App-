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
						stroke={fill ? fill : '#F9B446'}
						strokeWidth={1.5}
						strokeLinejoin='round'
					/>
				</Svg>
			)
		case 'check-left':
			return (
				<Svg
					width={10}
					height={18}
					viewBox='0 0 10 18'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<Path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M9.81.188a.653.653 0 00-.917 0L0 9l8.893 8.812a.653.653 0 00.917 0 .639.639 0 000-.91L1.835 9 9.81 1.097a.639.639 0 000-.909z'
						fill={fill ? fill : '#8B6917'}
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
		case 'history':
			return (
				<Svg
					width={28}
					height={28}
					viewBox='0 0 28 28'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<Path
						d='M21.551 19.486a9.333 9.333 0 111.764-4.9m0 0l1.75-1.75m-1.75 1.75l-1.75-1.75'
						stroke={fill}
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<Path
						d='M14 9.333V14l3.5 3.5'
						stroke={fill}
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</Svg>
			)
		case 'up':
			return (
				<Svg
					width={10}
					height={6}
					viewBox='0 0 10 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<Path
						d='M4.489.314c.126-.16.37-.16.496 0L9.07 5.489A.316.316 0 018.822 6H.652a.316.316 0 01-.248-.511L4.489.314z'
						fill='#27AE60'
					/>
				</Svg>
			)
		case 'down':
			return (
				<Svg
					width={10}
					height={6}
					viewBox='0 0 10 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<Path
						d='M4.985 5.686a.316.316 0 01-.496 0L.404.511A.316.316 0 01.652 0h8.17c.264 0 .411.304.248.511L4.985 5.686z'
						fill='#B61E1E'
					/>
				</Svg>
			)
		case 'pen':
			return (
				<Svg
					width={18}
					height={18}
					viewBox='0 0 18 18'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<Path
						d='M14.379 6.45l-9.415 9.415a2 2 0 01-1.022.547L1 17l.589-2.942a2 2 0 01.547-1.022l9.415-9.415m2.828 2.829l1.414-1.414a1 1 0 000-1.415L14.38 2.207a1 1 0 00-1.414 0L11.55 3.621m2.828 2.829L11.551 3.62'
						stroke='#8B6917'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</Svg>
			)
		case 'alert':
			return (
				<Svg
					width={26}
					height={26}
					viewBox='0 0 26 26'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<Path
						d='M13.009 24.05c6.282 0 11.375-5.093 11.375-11.375S19.29 1.3 13.009 1.3 1.634 6.393 1.634 12.675 6.727 24.05 13.009 24.05z'
						stroke='#B61E1E'
						strokeWidth={1.5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<Path
						d='M13.24 18.2V13M13.24 7.8h.013'
						stroke='#B61E1E'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</Svg>
			)
		case 'swap':
			return (
				<Svg
					width={22}
					height={21}
					viewBox='0 0 22 21'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<Path
						d='M6.188 16.055V3.805m0 0L1.375 8.569m4.813-4.764L11 8.569'
						stroke='#6A6351'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<Path
						d='M15.813 3.805v13.067m0 0l4.812-5.082m-4.813 5.082L11 11.79'
						stroke='#F9B446'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</Svg>
			)
		default:
			return <></>
	}
}
