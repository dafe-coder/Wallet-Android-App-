import Svg, { G, Path } from 'react-native-svg'

export const SvgIcon = ({ type, ...props }) => {
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
	}
}
