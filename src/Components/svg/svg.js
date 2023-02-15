import Svg, { G, Path, ClipPath, Defs, Rect, Circle } from 'react-native-svg'

export const SvgIcon = ({ type, fill = '', ...props }) => {
	switch (type) {
		case 'logo-text':
			return (
				<Svg
					width={311}
					height={74}
					viewBox='0 0 311 74'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='Welcome\xE2\x80\xA8toPolygon'
					{...props}>
					<Path
						d='M0 58.8007H14.8558V41.5639H24.8946C37.9288 41.5639 46.3484 33.4956 46.3484 20.9042V20.8227C46.3484 8.23128 37.9288 0 24.8946 0H0V58.8007ZM21.3324 11.4504C27.6067 11.4504 31.3307 14.7104 31.3307 20.8227V20.9042C31.3307 27.0165 27.6067 30.3172 21.3324 30.3172H14.8558V11.4504H21.3324Z'
						fill='#632DBC'
					/>
					<Path
						d='M72.0526 59.7379C85.9369 59.7379 94.5994 51.3029 94.5994 36.6333V36.5518C94.5994 22.0859 85.775 13.4879 72.0526 13.4879C58.3707 13.4879 49.5058 22.1674 49.5058 36.5518V36.6333C49.5058 51.2621 58.0873 59.7379 72.0526 59.7379ZM72.0931 48.7764C67.1141 48.7764 64.0782 44.457 64.0782 36.6333V36.5518C64.0782 28.891 67.1951 24.4493 72.0526 24.4493C76.9101 24.4493 80.0674 28.891 80.0674 36.5518V36.6333C80.0674 44.4163 76.991 48.7764 72.0931 48.7764Z'
						fill='#632DBC'
					/>
					<Path
						d='M100.388 58.8007H114.758V0H100.388V58.8007Z'
						fill='#632DBC'
					/>
					<Path
						d='M130.18 73.2665C140.907 73.2665 147.87 70.0881 151.472 58.5969L165.519 14.4251H150.379L142.526 47.9615H142.162L134.269 14.4251H118.401L133.581 58.8007L133.257 59.7379C132.528 61.6938 130.869 62.6311 127.833 62.6311C125.606 62.6311 123.906 62.3866 122.975 62.1828V72.6553C124.594 72.9405 127.347 73.2665 130.18 73.2665Z'
						fill='#632DBC'
					/>
					<Path
						d='M188.996 74C202.881 74 211.543 67.2357 211.543 57.5374V14.4251H197.214V22.0859H196.89C194.704 16.7478 189.968 13.4879 183.734 13.4879C172.602 13.4879 166.085 21.6377 166.085 35.9813V36.022C166.085 49.7544 172.521 57.6597 183.532 57.6597C189.927 57.6597 194.785 54.848 196.93 50.3249H197.214V57.7004C197.214 61.6938 194.461 64.3833 189.077 64.3833C184.544 64.3833 181.832 62.5088 181.143 60.7974L181.022 60.5529H167.178L167.219 60.9196C168.19 68.3359 176.245 74 188.996 74ZM188.956 47.6355C183.896 47.6355 180.658 43.3976 180.658 36.4295V36.3888C180.658 29.4207 183.936 25.2643 188.956 25.2643C193.975 25.2643 197.295 29.4207 197.295 36.4295V36.4703C197.295 43.4383 194.016 47.6355 188.956 47.6355Z'
						fill='#632DBC'
					/>
					<Path
						d='M239.717 59.7379C253.601 59.7379 262.263 51.3029 262.263 36.6333V36.5518C262.263 22.0859 253.439 13.4879 239.717 13.4879C226.035 13.4879 217.17 22.1674 217.17 36.5518V36.6333C217.17 51.2621 225.751 59.7379 239.717 59.7379ZM239.757 48.7764C234.778 48.7764 231.742 44.457 231.742 36.6333V36.5518C231.742 28.891 234.859 24.4493 239.717 24.4493C244.574 24.4493 247.731 28.891 247.731 36.5518V36.6333C247.731 44.4163 244.655 48.7764 239.757 48.7764Z'
						fill='#632DBC'
					/>
					<Path
						d='M267.809 58.8007H282.179V33.6178C282.179 28.6872 285.012 25.2643 289.587 25.2643C294.282 25.2643 296.67 28.239 296.67 33.3326V58.8007H311V30.2357C311 19.7225 305.535 13.4879 295.861 13.4879C289.182 13.4879 284.648 16.6663 282.462 22.2489H282.179V14.4251H267.809V58.8007Z'
						fill='#632DBC'
					/>
				</Svg>
			)
		case 'logo':
			return (
				<Svg
					width={112}
					height={86}
					viewBox='0 0 112 86'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<G clipPath='url(#clip0_142_14212)' className='Logo_polygon'>
						<G className='Group 44319'>
							<G className='Group 44320'>
								<G className='Group 44322'>
									<G className='Vector 1230'>
										<Path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M30.8217 48.2962V31.8771L17.4463 25.6161V40.7361L30.8217 48.2962Z'
											fill='white'
										/>
										<Path
											d='M17.4463 25.6161L30.8217 31.8771L43.0341 25.6161L30.8217 19.2191L17.4463 25.6161Z'
											fill='#DACEF0'
										/>
									</G>
									<Path
										d='M30.8213 31.8709L43.0337 25.616V41.1703L30.8213 48.2961V31.8709Z'
										fill='#9667E5'
										className='Rectangle 14103'
									/>
								</G>
								<G className='Group 44323'>
									<Path
										d='M27.1123 55.0825C29.4445 56.2421 32.0683 56.2421 34.109 55.0825V67.5485C31.7767 68.7081 29.153 68.7081 27.1123 67.5485L3.49836 53.9229C1.16612 52.4733 0 50.154 0 47.8348V20.5835C0 18.2642 1.16612 15.9449 3.49836 14.7853L27.4038 0.869723C29.736 -0.289908 32.3598 -0.289908 34.4005 0.869723L34.109 13.6257C31.7767 12.466 29.153 12.466 27.1123 13.6257L14.5765 20.8734C12.2443 22.3229 11.0781 24.6422 11.0781 26.9614V41.4568C11.0781 44.066 12.5358 46.3852 14.5765 47.5449L27.1123 55.0825Z'
										fill='#DACEF0'
										className='Vector'
									/>
									<Path
										d='M47.2799 20.8729L33.4049 13.2704L33.4049 0.289561L58.3581 14.495C60.6903 15.9445 61.8564 18.2638 61.8564 20.583L61.8564 47.8344C61.8564 50.1536 60.6903 52.4729 58.3581 53.6325L34.4526 67.5481C32.1204 68.7077 29.4967 68.8852 27.456 67.7255L27.4559 55.2774C29.744 56.1926 32.7035 55.9518 34.7442 54.7921L47.28 47.5444C49.6122 46.0949 50.7783 43.7756 50.7783 41.4564L50.7783 26.961C50.7783 24.3518 49.3207 22.0326 47.2799 20.8729Z'
										fill='#9667E5'
										className='Vector_2'
									/>
								</G>
							</G>
							<G className='Group 44321'>
								<Path
									d='M100.922 44.3505C100.922 41.7414 99.4642 39.4221 97.4235 38.2625L84.8877 30.6453L84.8877 18.0432L108.502 31.8845C110.834 33.334 112 35.6533 112 37.9726L112 65.2239C112 67.5432 110.834 69.8624 108.502 71.0221L84.8877 85.3054C82.5555 86.465 79.3761 85.3592 77.3354 84.1996L77.793 71.8442C79.6235 73.217 82.8267 73.6746 84.8877 72.1817L97.4235 64.934C99.7558 63.4845 100.922 61.1652 100.922 58.8459L100.922 44.3505Z'
									fill='#DACEF0'
									className='Vector_3'
								/>
								<Path
									d='M78.3642 30.7249C80.6965 29.5653 83.3202 29.5653 85.3609 30.7249L85.3609 24.4919L85.3609 18.2474C82.8268 16.9316 80.4049 17.0992 78.3642 18.2589L54.7503 31.8845C52.4181 33.3341 51.2519 35.6533 51.2519 37.9726L51.252 65.2239C51.252 67.5432 52.4181 69.8624 54.7503 71.0221L78.6558 84.9376C80.988 86.0973 82.6965 86.0973 84.7373 84.9376L84.6572 72.302C83.9535 73.3374 80.4049 73.3413 78.3642 72.1817L65.8284 64.934C63.4962 63.4845 62.3301 61.1652 62.3301 58.8459L62.3301 44.3506C62.3301 41.7414 63.7877 39.4221 65.8284 38.2625L78.3642 30.7249Z'
									fill='#9667E5'
									className='Vector_4'
								/>
								<G className='Group 44324'>
									<G className='Vector 1230_2'>
										<Path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M82.9311 65.6859V49.2668L69.5557 43.0058V58.1259L82.9311 65.6859Z'
											fill='#9667E5'
										/>
										<Path
											d='M69.5557 43.0058L82.9311 49.2668L95.1435 43.0058L82.9311 36.6089L69.5557 43.0058Z'
											fill='#DACEF0'
										/>
									</G>
									<Path
										d='M82.9316 49.2606L95.144 43.0056V58.0208L82.9316 65.6857V49.2606Z'
										fill='white'
										className='Rectangle 14103_2'
									/>
								</G>
							</G>
						</G>
					</G>
					<Defs>
						<ClipPath className='clip0_142_14212'>
							<Rect width={112} height={86} fill='white' />
						</ClipPath>
					</Defs>
				</Svg>
			)
		case 'search':
			return (
				<Svg
					width={19}
					height={19}
					viewBox='0 0 19 19'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<Path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M14.9126 8.20632C14.9126 11.9101 11.9101 14.9126 8.20632 14.9126C4.50252 14.9126 1.5 11.9101 1.5 8.20632C1.5 4.50252 4.50252 1.5 8.20632 1.5C11.9101 1.5 14.9126 4.50252 14.9126 8.20632ZM13.1811 14.7333C11.8009 15.7869 10.0767 16.4126 8.20632 16.4126C3.67409 16.4126 0 12.7385 0 8.20632C0 3.67409 3.67409 0 8.20632 0C12.7385 0 16.4126 3.67409 16.4126 8.20632C16.4126 10.3287 15.6069 12.2629 14.2847 13.7198C14.2874 13.7227 14.2902 13.7257 14.2929 13.7286L17.8334 17.6189C18.1124 17.9255 18.0937 18.4035 17.7916 18.6866C17.4896 18.9697 17.0186 18.9507 16.7396 18.6442L13.1991 14.7539C13.193 14.7471 13.187 14.7403 13.1811 14.7333Z'
						fill='#8247E5'
						className='Union'
					/>
				</Svg>
			)
		case 'polygon-nav':
			return (
				<Svg
					width={375}
					height={79}
					viewBox='0 0 375 79'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<G filter='url(#filter0_d_419_8651)' className='Base'>
						<Path
							d='M0 10C0 4.47715 4.47715 0 10 0H125.269C134.618 0 143.5 4.08871 149.579 11.1914L163.168 27.0665C176.116 42.1947 199.59 41.9488 212.219 26.5527L224.398 11.7052C230.476 4.29546 239.556 0 249.139 0H365C370.523 0 375 4.47715 375 10V97H0V10Z'
							fill='white'
						/>
					</G>
				</Svg>
			)
		case 'arrow-right':
			return (
				<Svg
					width={10}
					height={16}
					viewBox='0 0 10 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<Path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M0.190015 15.8326C0.443368 16.0558 0.854135 16.0558 1.10749 15.8326L10 8L1.10749 0.167367C0.854134 -0.0557897 0.443367 -0.0557897 0.190013 0.167367C-0.0633399 0.390525 -0.0633399 0.752333 0.190014 0.97549L8.16505 8L0.190015 15.0245C-0.0633386 15.2477 -0.0633386 15.6095 0.190015 15.8326Z'
						fill={fill ? fill : '#ECE9F2'}
					/>
				</Svg>
			)
		case 'lockBig':
			return (
				<Svg
					width={57}
					height={78}
					viewBox='0 0 57 78'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='Group'
					{...props}>
					<Path
						d='M25.9607 0.118553C21.0079 0.756653 16.7691 2.7773 13.1988 6.25645C9.55249 9.79639 7.37991 14.1111 6.69624 19.1096C6.54431 20.2946 6.48354 22.6647 6.48354 28.4532V36.2167L5.5112 36.3838C2.97399 36.8244 0.907771 38.6476 0.239287 41.0632C-0.0797623 42.1875 -0.0797623 71.8439 0.239287 72.9681C0.877385 75.2774 2.92842 77.1614 5.25292 77.6019C6.37719 77.8146 50.6491 77.8146 51.7733 77.6019C53.5205 77.2677 55.1461 76.1282 56.0577 74.5938C57.0452 72.9529 56.9997 73.7126 56.9997 57.0157C56.9997 40.3188 57.0452 41.0784 56.0577 39.4376C55.0854 37.7968 53.4749 36.7181 51.5151 36.3838L50.5427 36.2167V28.4532C50.5427 19.0336 50.3908 17.6207 49.0842 14.1415C46.8509 8.21633 41.7461 3.26347 35.7297 1.21244C32.8127 0.209709 28.8018 -0.230881 25.9607 0.118553ZM30.7161 2.71653C35.3347 3.26347 39.3304 5.25373 42.5665 8.64173C44.5416 10.6928 45.9697 13.0476 46.8661 15.6912C47.8536 18.6082 47.8536 18.5323 47.9144 27.7999L47.9751 36.2775H46.0001H44.025L43.9794 27.7999C43.9187 19.6413 43.9187 19.2919 43.5996 18.1524C42.7944 15.3266 41.4878 13.078 39.4672 11.0422C37.4009 8.99117 35.1828 7.71497 32.2506 6.90974C31.2175 6.62109 30.6249 6.57551 28.5131 6.57551C26.4013 6.57551 25.8088 6.62109 24.7757 6.90974C21.8435 7.71497 19.6253 8.99117 17.5591 11.0422C15.5385 13.078 14.2319 15.3266 13.4267 18.1524C13.1076 19.2919 13.1076 19.6413 13.0468 27.7999L13.0013 36.2775H11.0262H9.05112L9.1119 27.7999C9.17267 18.5323 9.17267 18.6082 10.1602 15.6912C12.4999 8.80885 18.5922 3.79522 25.8544 2.7773C27.6168 2.53421 29.0145 2.50383 30.7161 2.71653ZM31.9771 9.52291C36.6869 10.8903 40.2116 14.6733 41.1839 19.4438C41.3815 20.4162 41.427 21.9051 41.427 28.4532V36.2775H28.5131H15.5992V28.4532C15.5992 21.9051 15.6448 20.4162 15.8423 19.4438C16.921 14.1415 20.9775 10.2522 26.5381 9.17348C27.4952 8.99117 30.8832 9.20387 31.9771 9.52291ZM51.9557 39.1641C52.8672 39.5135 53.5357 40.1364 54.0675 41.1392L54.4169 41.8229V57.0157V72.2085L54.0371 72.9529C53.5509 73.8949 52.6545 74.6545 51.6974 74.9432C50.5579 75.2774 6.46834 75.2774 5.32888 74.9432C4.37173 74.6545 3.47536 73.8949 2.98919 72.9529L2.60937 72.2085V57.0157V41.8229L2.97399 41.1088C3.46017 40.1668 4.14384 39.5287 5.05541 39.1641C5.78467 38.8906 6.48354 38.8754 28.4676 38.8603C50.7706 38.8603 51.1504 38.8603 51.9557 39.1641Z'
						fill='#9667E5'
						className='Vector'
					/>
					<Path
						d='M27.4046 46.7606C26.2499 46.9581 24.8522 47.7025 23.9558 48.5837C21.4946 51.0602 21.449 55.1166 23.8647 57.6083L24.5332 58.2919L24.5787 61.3153C24.6395 64.3235 24.6395 64.3387 25.0953 65.2351C26.5234 68.0305 30.5039 68.0305 31.9321 65.2351C32.3878 64.3387 32.3878 64.3235 32.4486 61.3153L32.4942 58.2919L33.1627 57.6083C36.7634 53.9012 34.6212 47.5962 29.486 46.7606C28.4833 46.5935 28.4377 46.5935 27.4046 46.7606ZM30.0178 49.5864C31.4459 50.179 32.3423 51.5311 32.3423 53.096C32.3423 54.357 31.9169 55.2078 30.8534 56.1497L29.957 56.9246L29.881 60.3885C29.8051 64.1412 29.7443 64.3994 28.9391 64.6729C28.6656 64.7793 28.3617 64.7793 28.0883 64.6729C27.2831 64.3994 27.2223 64.1412 27.1463 60.3885L27.0704 56.9246L26.174 56.1497C25.1105 55.2078 24.6851 54.357 24.6851 53.0808C24.6851 50.3613 27.4654 48.5381 30.0178 49.5864Z'
						fill='#9C94AC'
						className='Vector_2'
					/>
				</Svg>
			)
		case 'check-with-box':
			return (
				<Svg
					xmlns='http://www.w3.org/2000/svg'
					width={33}
					height={32}
					fill='none'
					viewBox='0 0 33 32'
					{...props}>
					<Rect
						width={30}
						height={30}
						x={1.5}
						y={0.875}
						stroke='#632DBC'
						strokeWidth={1.5}
						rx={5}
					/>
					<Path
						stroke='#632DBC'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={1.5}
						d='M11.75 17.125l3.75 3.75 7.5-7.5'
					/>
				</Svg>
			)
		case 'swap-horizontal':
			return (
				<Svg
					width={21}
					height={22}
					viewBox='0 0 21 22'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<G
						clipPath='url(#clip0_77_11598)'
						className='Top Bars_assets / Icon_Excange'>
						<Path
							d='M16.0547 15.8125L3.80469 15.8125M3.80469 15.8125L8.56858 20.625M3.80469 15.8125L8.56858 11'
							stroke='#9C94AC'
							strokeWidth={2}
							strokeLinecap='round'
							strokeLinejoin='round'
							className='Vector'
						/>
						<Path
							d='M3.80443 6.1875L16.8711 6.1875M16.8711 6.1875L11.7896 1.375M16.8711 6.1875L11.7896 11'
							stroke='#632DBC'
							strokeWidth={2}
							strokeLinecap='round'
							strokeLinejoin='round'
							className='Vector_2'
						/>
					</G>
					<Defs>
						<ClipPath className='clip0_77_11598'>
							<Rect
								width={22}
								height={21}
								fill='white'
								transform='translate(0 22) rotate(-90)'
							/>
						</ClipPath>
					</Defs>
				</Svg>
			)
		case 'qr-camera':
			return (
				<Svg
					xmlns='http://www.w3.org/2000/svg'
					width={22}
					height={22}
					fill='none'
					viewBox='0 0 22 22'
					{...props}>
					<Path
						fill='#9667E5'
						fillRule='evenodd'
						d='M3.14.155A4.016 4.016 0 001.171 1.34C.239 2.36-.026 3.337.022 5.573l.027 1.32.904.028.905.029V5.308c.002-1.516.02-1.679.231-2.134.246-.527.698-.97 1.208-1.184.213-.09.756-.132 1.687-.132h1.372V0L5.01.006c-.847.004-1.54.06-1.872.149zm13.287.774v.929h.995c1.167 0 1.637.171 2.166.79.476.555.554.94.554 2.717v1.577H22V5.5c-.002-2.337-.238-3.182-1.167-4.164C19.948.4 18.901 0 17.335 0h-.908v.929zM4.79 7.04v2.249h4.5V4.79h-4.5v2.25zm5.671-1.662v.586h1.076V4.791h-1.076v.587zm2.25 1.662v2.249h4.497V4.79H12.71v2.25zm-4.499 0v1.173H5.867V5.867h2.346V7.04zm7.92 0v1.173h-2.346V5.867h2.346V7.04zM10.44 8.727l-.027 1.686-.562.03-.562.029v1.066h1.173v1.075h1.076v1.174h-1.076v3.324h1.069l.028-1.1.028-1.1.562-.03.562-.029v-2.239h1.173v-1.075h1.076v-1.076h-1.173v1.076H12.71v-1.066l-.562-.03-.562-.029-.027-1.686-.027-1.687h-1.066l-.027 1.687zm1.098 2.224v.587h-1.076v-1.174h1.076v.587zM4.79 11v.538h1.173v-1.076H4.791V11zm2.249 0v.538h1.173v-1.076H7.04V11zm8.996 0v.538h1.173v-1.076h-1.173V11zm-1.097 1.736l-.028 1.1-.562.029-.562.03v1.065H12.71v2.151h2.249v-1.094l-.538.034-.538.033V14.96h2.249v-1.173h1.076V12.71h-1.076v-1.074h-1.166l-.027 1.1zM4.79 14.96v2.249h4.5V12.71h-4.5v2.249zm3.422 0v1.173H5.867v-2.346h2.346v1.173zM.001 16.304c0 .847.045 1.826.1 2.176a4.137 4.137 0 003.317 3.421c.286.055 1.064.099 1.729.099h1.209v-1.858H4.969c-1.596 0-1.984-.12-2.558-.79-.482-.564-.553-.93-.553-2.863v-1.725H0v1.54zm20.14.245c0 1.666-.016 1.817-.23 2.277-.455.978-1.1 1.316-2.503 1.316h-.981V22h.908c1.566 0 2.613-.4 3.498-1.336.93-.983 1.162-1.86 1.165-4.408L22 14.764h-1.858v1.785zm-4.04-.448c-.036.036-.065.3-.065.586v.522h1.173v-1.173h-.522c-.286 0-.55.029-.586.065z'
						clipRule='evenodd'
					/>
				</Svg>
			)
		case 'wallet':
			return (
				<Svg
					xmlns='http://www.w3.org/2000/svg'
					width={78}
					height={78}
					fill='none'
					viewBox='0 0 78 78'
					{...props}>
					<Path
						stroke='#FBFBFB'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M4.037 59.408h11.784v4.715h7.857M4.012 35.838H14.25v-6.286h6.286m-1.572 20.433H34.68m-30.667 0h14.952H4.012zm14.952 0v-9.429h6.286l-6.286 9.429z'
					/>
					<Path
						stroke='#FBFBFB'
						strokeWidth={2}
						d='M33.108 42.128a1.571 1.571 0 010-3.143M33.107 42.128a1.571 1.571 0 100-3.143m9.423-7.862a1.572 1.572 0 110-3.143m0 3.143a1.571 1.571 0 000-3.143M31.536 65.69a1.571 1.571 0 010-3.142m0 3.142a1.571 1.571 0 100-3.142'
					/>
					<Path
						stroke='#FBFBFB'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M59.822 38.98v-9.428h-9.429m11 28.286v6.286H48.822'
					/>
					<Path
						stroke='#F9B446'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M70.036 57.838v6.285a9.428 9.428 0 01-9.429 9.429H13.464a9.428 9.428 0 01-9.428-9.429v-33a9.429 9.429 0 019.428-9.428h47.143a9.428 9.428 0 019.429 9.428v7.857'
					/>
					<Path
						stroke='#F9B446'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M60.607 21.695l-7.32-14.64a4.713 4.713 0 00-6.326-2.109L13.464 21.695M70.56 57.838c1.11 0 2.177-.398 2.962-1.105.787-.707 1.228-1.667 1.228-2.667V42.752c0-1-.441-1.96-1.228-2.667-.785-.707-1.851-1.105-2.963-1.105H60.083c-2.778 0-5.443.994-7.407 2.762-1.965 1.768-3.07 4.167-3.07 6.667s1.105 4.899 3.07 6.667c1.964 1.768 4.629 2.762 7.407 2.762H70.56z'
					/>
					<Path
						stroke='#F9B446'
						strokeWidth={2}
						d='M59.822 49.587a1.179 1.179 0 010-2.356m.001 2.356a1.179 1.179 0 000-2.356'
					/>
					<Circle cx={62} cy={22} r={12} fill='#F9B446' />
					<Path
						stroke='#FBFBFB'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M57.917 22l2.917 2.917 5.833-5.834'
					/>
				</Svg>
			)
		case 'bar':
			return (
				<Svg
					xmlns='http://www.w3.org/2000/svg'
					width={24}
					height={24}
					fill='none'
					viewBox='0 0 24 24'
					{...props}>
					<Path
						fill='#9C94AC'
						fillRule='evenodd'
						d='M2 7a5 5 0 015-5h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7zm5-3a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7z'
						clipRule='evenodd'
					/>
					<Path
						fill='#9C94AC'
						fillRule='evenodd'
						d='M14 8a1 1 0 01-1 1H8a1 1 0 010-2h5a1 1 0 011 1zm-2 8a1 1 0 01-1 1H8a1 1 0 110-2h3a1 1 0 011 1zm5-4a1 1 0 01-1 1H8a1 1 0 110-2h8a1 1 0 011 1z'
						clipRule='evenodd'
					/>
				</Svg>
			)
		case 'lock':
			return (
				<Svg
					xmlns='http://www.w3.org/2000/svg'
					width={20}
					height={20}
					fill='none'
					viewBox='0 0 20 20'
					{...props}>
					<Path
						fill='#473664'
						fillRule='evenodd'
						d='M6.545 5.62c.983-.096 2.13-.134 3.464-.134 1.336 0 2.482.038 3.465.134-.124-.904-.52-1.56-1.032-2.015-.639-.568-1.52-.873-2.433-.873-.913 0-1.793.305-2.432.873-.511.455-.908 1.11-1.032 2.015zm8.964.344c-.066-1.645-.725-2.953-1.738-3.853-1.05-.934-2.422-1.38-3.762-1.38-1.339 0-2.71.446-3.761 1.38-1.013.9-1.672 2.208-1.738 3.853C1.73 6.709 1 8.472 1 12.243 1 17.807 2.59 19 10.01 19c7.419 0 9.01-1.193 9.01-6.757 0-3.771-.731-5.534-3.511-6.28zM3 12.243c0 2.765.444 3.507.923 3.865.304.229.847.474 1.878.646 1.027.171 2.387.246 4.208.246 1.822 0 3.182-.075 4.21-.246 1.03-.172 1.573-.417 1.878-.646.478-.358.922-1.1.922-3.865s-.444-3.507-.922-3.865c-.305-.23-.848-.474-1.879-.646-1.027-.172-2.387-.246-4.209-.246-1.82 0-3.18.074-4.208.246-1.031.172-1.574.417-1.878.646-.479.358-.923 1.1-.923 3.865z'
						clipRule='evenodd'
					/>
					<Circle
						r={1}
						stroke='#473664'
						strokeWidth={2}
						transform='matrix(-1 0 0 1 10 12)'
					/>
				</Svg>
			)
		case 'warning':
			return (
				<Svg
					xmlns='http://www.w3.org/2000/svg'
					width={24}
					height={24}
					fill='none'
					viewBox='0 0 24 24'
					{...props}>
					<Path
						stroke='#473664'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M12 7v6m9-1a9 9 0 11-18 0 9 9 0 0118 0z'
					/>
					<Circle cx={12} cy={16.5} r={1} fill='#473664' />
				</Svg>
			)
		case 'eye-slash':
			return (
				<Svg
					xmlns='http://www.w3.org/2000/svg'
					width={24}
					height={24}
					fill='none'
					viewBox='0 0 24 24'
					{...props}>
					<Path
						fill='#473664'
						fillRule='evenodd'
						d='M12 7c-.283 0-.565.023-.844.067a1 1 0 01-.311-1.975A7.42 7.42 0 0112 5c2.11 0 4.006.927 5.51 2.009 1.51 1.087 2.71 2.391 3.45 3.29a2.66 2.66 0 010 3.402c-.331.403-.752.882-1.248 1.386a1 1 0 01-1.424-1.404c.447-.454.828-.889 1.128-1.253a.66.66 0 000-.86c-.68-.826-1.756-1.989-3.075-2.938C15.014 7.678 13.526 7 12.001 7zM7.908 8.458c-1.431.977-2.6 2.233-3.324 3.112a.66.66 0 000 .86c.68.826 1.756 1.989 3.075 2.938C8.986 16.322 10.474 17 12 17c1.317 0 2.608-.504 3.797-1.263l1.076 1.686C15.491 18.305 13.827 19 12 19c-2.11 0-4.006-.927-5.509-2.009-1.51-1.087-2.71-2.391-3.45-3.29a2.66 2.66 0 010-3.402c.784-.954 2.09-2.368 3.74-3.493l1.127 1.652z'
						clipRule='evenodd'
					/>
					<Path
						fill='#473664'
						fillRule='evenodd'
						d='M5.205 4.205a.7.7 0 01.99 0l12.6 12.6a.7.7 0 01-.99.99l-12.6-12.6a.7.7 0 010-.99zm3.638 7.605a1 1 0 011.225.707 2 2 0 001.414 1.415 1 1 0 01-.518 1.932 4 4 0 01-2.828-2.829 1 1 0 01.707-1.225z'
						clipRule='evenodd'
					/>
				</Svg>
			)
		case 'password':
			return (
				<Svg
					xmlns='http://www.w3.org/2000/svg'
					width={24}
					height={24}
					fill='none'
					viewBox='0 0 24 24'
					{...props}>
					<Path
						stroke='#473664'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M9 17.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm0 0h6.125M19 20v-2.25a.25.25 0 00-.25-.25m-3.625 0h3.625m-3.625 0V20m3.625-2.5'
					/>
					<Circle cx={7.5} cy={7.5} r={1.5} fill='#473664' />
					<Circle cx={12} cy={7.5} r={1.5} fill='#473664' />
					<Circle cx={16.5} cy={7.5} r={1.5} fill='#473664' />
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
						stroke={fill ? fill : '#9667E5'}
						strokeWidth={1.5}
						strokeLinejoin='round'
					/>
				</Svg>
			)
		case 'nft':
			return (
				<Svg
					width={80}
					height={80}
					viewBox='0 0 80 80'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='Group'
					{...props}>
					<Path
						d='M4.8433 0.25C2.57767 0.859375 0.82767 2.64062 0.23392 4.9375C0.0151702 5.78125 -0.000454757 9.65625 0.0307952 40.4062L0.0776702 74.9219L0.437045 75.7812C1.1558 77.5469 2.45267 78.8438 4.2183 79.5625L5.07767 79.9219H30.8589H56.6402L57.6714 79.5469C58.687 79.1875 58.7339 79.1875 59.3589 79.4375C60.187 79.7656 61.7652 79.75 62.5933 79.4062C63.6558 78.9688 77.7964 70.75 78.437 70.2031C78.7652 69.9062 79.2339 69.2812 79.4839 68.7812L79.9214 67.8906V58.4375V48.9844L79.4995 48.125C79.2652 47.6562 78.8433 47.0469 78.562 46.7656C78.2808 46.5 76.3277 45.2812 74.2339 44.0781C72.1245 42.8594 70.3433 41.8125 70.2808 41.75C70.2027 41.6719 71.9527 37.75 74.1558 33.0312C79.3433 21.9375 79.4995 21.5781 79.6714 20.5156C79.8433 19.3594 79.6402 17.8438 79.1402 16.7656C78.7339 15.8594 77.562 14.5156 76.7183 13.9844C76.4214 13.7969 72.9683 12.1562 69.0464 10.3281L61.9214 7L61.8277 6.03125C61.5933 3.48438 60.0464 1.42188 57.6558 0.4375L56.7964 0.078125L31.2495 0.046875C9.12455 0.015625 5.5933 0.046875 4.8433 0.25ZM57.3745 2.39062C58.3745 2.89062 59.1089 3.64062 59.5933 4.67188C59.9214 5.39062 59.9214 5.5 59.9683 21.3438L59.9995 37.2969L59.5308 37.4062C59.2652 37.4531 58.3277 37.9219 57.437 38.4375C56.5464 38.9531 55.7808 39.375 55.7339 39.375C55.6714 39.375 55.6245 33.7031 55.6245 26.75C55.6245 14.8438 55.6089 14.1094 55.3277 13.5156C54.9839 12.7656 54.6402 12.4375 53.8589 12.1094C53.3589 11.9062 50.7027 11.875 30.9058 11.875C9.51517 11.875 8.48392 11.8906 7.89017 12.1719C7.14017 12.5156 6.81205 12.8594 6.48392 13.6406C6.2808 14.1406 6.24955 16.4219 6.24955 32.8125C6.24955 49.2031 6.2808 51.4844 6.48392 51.9844C6.81205 52.7656 7.14017 53.1094 7.89017 53.4531C8.48392 53.7344 9.3433 53.75 25.2027 53.75H41.8745V56.875V60H24.3745C7.07767 60 6.87455 60 6.56205 60.3125C6.17142 60.7031 6.17142 61.1719 6.56205 61.5625C6.87455 61.875 7.07767 61.875 24.3745 61.875H41.8745V64.6875V67.5H24.3745C7.07767 67.5 6.87455 67.5 6.56205 67.8125C6.17142 68.2031 6.17142 68.6719 6.56205 69.0625C6.87455 69.375 7.07767 69.375 24.7495 69.375H42.6245L43.2183 69.9688C43.8589 70.5938 43.9839 70.6719 51.6245 75.0781C55.187 77.1406 56.3745 77.8906 56.2027 78C56.062 78.0625 44.6402 78.1094 30.6714 78.0938L5.39017 78.0469L4.49955 77.6094C3.49955 77.1094 2.76517 76.3594 2.2808 75.3281L1.95267 74.6094L1.9058 40.4688C1.87455 16.0938 1.9058 6.09375 2.0308 5.53125C2.37455 3.95312 3.48392 2.70312 5.04642 2.15625C5.81205 1.89062 7.18705 1.89062 31.1714 1.92188L56.4839 1.95312L57.3745 2.39062ZM69.7339 12.7188C72.812 14.1406 75.5933 15.5 75.937 15.7188C77.6245 16.8438 78.3589 19.4375 77.5152 21.3438C75.8902 25 68.4995 40.625 68.3745 40.625C68.2964 40.625 66.9995 39.9219 65.5152 39.0625C64.0308 38.2031 62.5933 37.4531 62.3433 37.3906L61.8745 37.2969V23.1875V9.07812L63.0152 9.59375C63.6245 9.875 66.6558 11.2812 69.7339 12.7188ZM53.437 14.0625C53.7495 14.375 53.7495 14.5781 53.7495 27.4688V40.5625L48.8745 43.375C45.5777 45.2656 43.7652 46.4062 43.2652 46.8906C42.2964 47.8438 41.8745 48.9688 41.8745 50.625V51.875H25.312C8.95267 51.875 8.74955 51.875 8.43705 51.5625C8.12455 51.25 8.12455 51.0469 8.12455 32.8125C8.12455 14.5781 8.12455 14.375 8.43705 14.0625C8.74955 13.75 8.95267 13.75 30.937 13.75C52.9214 13.75 53.1245 13.75 53.437 14.0625ZM69.2183 43.3438C73.2183 45.6562 76.7183 47.7188 77.0152 47.9375C77.2964 48.1406 77.6714 48.6094 77.8277 48.9688C78.0933 49.5625 78.1245 50.1562 78.1245 58.4375C78.1245 66.7188 78.0933 67.3125 77.8277 67.9062C77.6714 68.2656 77.2964 68.7344 77.0152 68.9375C76.7183 69.1562 73.2183 71.2188 69.2183 73.5312L61.9527 77.7344H60.937H59.9214L52.6558 73.5312C48.6558 71.2188 45.1558 69.1562 44.8589 68.9375C44.5777 68.7344 44.2027 68.2656 44.0464 67.9062C43.7808 67.3125 43.7495 66.7188 43.7495 58.4375C43.7495 50.2031 43.7808 49.5625 44.0464 48.9844C44.2027 48.6406 44.4683 48.2344 44.6245 48.0938C44.7808 47.9531 47.1089 46.5781 49.7652 45.0312C52.437 43.5 55.7652 41.5781 57.187 40.75C58.6089 39.9375 59.8745 39.2188 59.9995 39.1719C60.1245 39.1094 60.6245 39.0938 61.0933 39.1094C61.9058 39.1562 62.3902 39.4062 69.2183 43.3438Z'
						fill='#9667E5'
						className='Vector'
					/>
					<Path
						d='M6.5625 6.5625C6.39062 6.73438 6.25 7.01562 6.25 7.1875C6.25 7.35938 6.39062 7.64062 6.5625 7.8125C6.85938 8.10938 7.07812 8.125 14.375 8.125C21.6719 8.125 21.8906 8.10938 22.1875 7.8125C22.3594 7.64062 22.5 7.35938 22.5 7.1875C22.5 7.01562 22.3594 6.73438 22.1875 6.5625C21.8906 6.26562 21.6719 6.25 14.375 6.25C7.07812 6.25 6.85938 6.26562 6.5625 6.5625Z'
						fill='#9C94AC'
						className='Vector_2'
					/>
					<Path
						d='M29.7651 18.7344C29.4214 18.8906 29.0307 19.1562 28.8901 19.3125C28.7495 19.4688 27.1714 22.1406 25.3745 25.2344C22.5464 30.1406 22.1245 30.9531 22.062 31.6562C21.9995 32.5 22.3432 33.4219 22.9057 33.9219C23.0776 34.0625 24.7182 35.0469 26.562 36.1094C29.9057 38.0312 29.9214 38.0312 30.937 38.0469H31.9526L35.312 36.1094C37.1557 35.0469 38.7964 34.0625 38.9682 33.9219C39.5307 33.4219 39.8745 32.5 39.812 31.6562C39.7495 30.9531 39.3276 30.1406 36.4995 25.2344C34.7026 22.1406 33.1245 19.4688 32.9839 19.3125C32.6245 18.8906 31.5776 18.4375 30.937 18.4375C30.6401 18.4375 30.1089 18.5781 29.7651 18.7344ZM31.5307 20.5781C32.0307 21.0469 37.9682 31.4844 37.9682 31.9375C37.9682 32.4219 37.8745 32.4688 34.0307 34.6719C32.4995 35.5469 31.1245 36.25 30.9682 36.25C30.7026 36.25 24.6401 32.9062 24.1089 32.4844C23.9995 32.3906 23.9057 32.1406 23.9057 31.9219C23.9057 31.5469 29.8432 21.0938 30.3589 20.5938C30.7026 20.2344 31.1245 20.2344 31.5307 20.5781Z'
						fill='#9C94AC'
						className='Vector_3'
					/>
					<Path
						d='M22.4835 36.5469C21.9522 37.0781 21.8741 37.8281 22.296 38.4375C22.4366 38.6562 24.0304 40.6094 25.8429 42.7969C29.3116 46.9844 29.7022 47.3438 30.9366 47.3438C32.1866 47.3438 32.5772 46.9844 36.0304 42.7969C37.8272 40.6094 39.421 38.6562 39.5772 38.4375C40.2491 37.4688 39.5304 36.0938 38.3429 36.0938C37.8741 36.0938 37.171 36.4688 34.5304 38.125C32.7647 39.2344 31.1397 40.1562 30.9522 40.1562C30.7491 40.1562 29.1241 39.2344 27.3429 38.125C23.6866 35.8281 23.3272 35.7188 22.4835 36.5469ZM28.9835 41.3594C29.921 41.9375 30.171 42.0312 30.9366 42.0312C31.7804 42.0312 31.9366 41.9688 34.1866 40.5625C35.4991 39.75 36.5616 39.1094 36.5616 39.1562C36.5616 39.1875 35.3897 40.625 33.9679 42.3438C31.7022 45.0781 31.3272 45.4688 30.9366 45.4688C30.546 45.4688 30.171 45.0781 27.9054 42.3438C26.4835 40.625 25.3116 39.1875 25.3116 39.1406C25.3116 39.0938 25.8897 39.4219 26.6085 39.875C27.3116 40.3125 28.3741 40.9844 28.9835 41.3594Z'
						fill='#9C94AC'
						className='Vector_4'
					/>
					<Path
						d='M48.125 53.125C47.8281 53.4219 47.8125 53.6406 47.8125 58.4375C47.8125 63.2344 47.8281 63.4531 48.125 63.75C48.5 64.125 48.8906 64.1406 49.3125 63.8438C49.5781 63.6406 49.6094 63.3594 49.6875 60.4531L49.7656 57.2813L51.625 60.375C52.6406 62.0781 53.6094 63.6094 53.7656 63.7656C54.1562 64.1563 54.6094 64.1406 55 63.75C55.2969 63.4531 55.3125 63.2344 55.3125 58.4375C55.3125 53.6406 55.2969 53.4219 55 53.125C54.8281 52.9531 54.5469 52.8125 54.375 52.8125C54.2031 52.8125 53.9219 52.9531 53.75 53.125C53.4531 53.4219 53.4375 53.6406 53.4375 56.5938V59.7656L51.4688 56.4844C50.3906 54.6719 49.3906 53.1094 49.25 53C48.8906 52.7188 48.4844 52.7656 48.125 53.125Z'
						fill='#9C94AC'
						className='Vector_5'
					/>
					<Path
						d='M57.5 53.125C57.2031 53.4219 57.1875 53.6406 57.1875 58.4375C57.1875 63.2344 57.2031 63.4531 57.5 63.75C57.6719 63.9219 57.9531 64.0625 58.125 64.0625C58.2969 64.0625 58.5781 63.9219 58.75 63.75C59.0312 63.4688 59.0625 63.2344 59.0625 61.5625V59.6875H61.25C63.2344 59.6875 63.4688 59.6562 63.75 59.375C63.9219 59.2031 64.0625 58.9219 64.0625 58.75C64.0625 58.5781 63.9219 58.2969 63.75 58.125C63.4688 57.8438 63.2344 57.8125 61.25 57.8125H59.0625V56.25V54.6875H61.5625C63.8594 54.6875 64.0938 54.6562 64.375 54.375C64.5469 54.2031 64.6875 53.9219 64.6875 53.75C64.6875 53.5781 64.5469 53.2969 64.375 53.125C64.0781 52.8281 63.8594 52.8125 60.9375 52.8125C58.0156 52.8125 57.7969 52.8281 57.5 53.125Z'
						fill='#9C94AC'
						className='Vector_6'
					/>
					<Path
						d='M66.875 53.125C66.7031 53.2969 66.5625 53.5781 66.5625 53.75C66.5625 54.3906 67.0938 54.6875 68.2812 54.6875H69.375V59.0625C69.375 63.2344 69.3906 63.4531 69.6875 63.75C70.0781 64.1406 70.5469 64.1406 70.9375 63.75C71.2344 63.4531 71.25 63.2344 71.25 59.0625V54.6875H72.3438C73.5312 54.6875 74.0625 54.3906 74.0625 53.75C74.0625 53.5781 73.9219 53.2969 73.75 53.125C73.4531 52.8281 73.2344 52.8125 70.3125 52.8125C67.3906 52.8125 67.1719 52.8281 66.875 53.125Z'
						fill='#9C94AC'
						className='Vector_7'
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
					width={24}
					height={24}
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='Icon_Edit'
					{...props}>
					<Path
						d='M18.4721 16.7023C17.3398 18.2608 15.6831 19.3584 13.8064 19.7934C11.9297 20.2284 9.95909 19.9716 8.25656 19.0701C6.55404 18.1687 5.23397 16.6832 4.53889 14.8865C3.84381 13.0898 3.82039 11.1027 4.47295 9.29011C5.12551 7.47756 6.41021 5.96135 8.09103 5.02005C9.77184 4.07875 11.7359 3.77558 13.6223 4.16623C15.5087 4.55689 17.1908 5.61514 18.3596 7.14656C19.5283 8.67797 20.1052 10.5797 19.9842 12.5023M19.9842 12.5023L21.4842 11.0023M19.9842 12.5023L18.4842 11.0023'
						stroke='#9667E5'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
						className='Ellipse 105'
					/>
					<Path
						d='M12 8V12L15 15'
						stroke='#9667E5'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
						className='Vector 153'
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
						fill='#E54747'
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
						stroke='#9667E5'
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
						stroke='#E54747'
						strokeWidth={1.5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<Path
						d='M13.24 18.2V13M13.24 7.8h.013'
						stroke='#E54747'
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
					className='TopBars_assets/Icon_Excange'
					{...props}>
					<Path
						d='M6.1875 16.0547L6.1875 3.80469M6.1875 3.80469L1.375 8.56858M6.1875 3.80469L11 8.56858'
						stroke='#9C94AC'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
						className='Vector'
					/>
					<Path
						d='M15.8125 3.80492L15.8125 16.8716M15.8125 16.8716L20.625 11.7901M15.8125 16.8716L11 11.7901'
						stroke='#632DBC'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
						className='Vector_2'
					/>
				</Svg>
			)
		case 'info':
			return (
				<Svg
					width={25}
					height={24}
					viewBox='0 0 25 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<Path
						d='M12.508 22.2c5.799 0 10.5-4.701 10.5-10.5s-4.701-10.5-10.5-10.5c-5.8 0-10.5 4.701-10.5 10.5s4.7 10.5 10.5 10.5z'
						stroke={fill ? fill : '#E54747'}
						strokeWidth={1.5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<Path
						d='M12.723 16.8V12M12.723 7.2h.012'
						stroke={fill ? fill : '#E54747'}
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</Svg>
			)
		case 'share':
			return (
				<Svg
					width={24}
					height={24}
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<Path
						d='M16 7l-4-4-4 4M12 3v12'
						stroke={fill ? fill : '#8B6917'}
						strokeWidth={1.5}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<Path
						d='M19 13v5a3 3 0 01-3 3H8a3 3 0 01-3-3v-5'
						stroke={fill ? fill : '#8B6917'}
						strokeWidth={1.5}
						strokeLinecap='round'
					/>
				</Svg>
			)
		case 'check-box':
			return (
				<Svg
					width={20}
					height={20}
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}>
					<Rect
						x={0.5}
						y={0.5}
						width={19}
						height={19}
						rx={4.5}
						stroke='#DACEF0'
						className='Rectangle 1219'
					/>
				</Svg>
			)

		case 'check-box-checked':
			return (
				<Svg
					width={20}
					height={20}
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='CheckBox\\\\Checked+iCon'
					{...props}>
					<Rect
						x={0.5}
						y={0.5}
						width={19}
						height={19}
						rx={4.5}
						stroke='#BDA5E4'
						className='Rectangle 1219'
					/>
					<Path
						d='M14.9195 7.80401C14.8615 7.96794 14.7736 8.11811 14.661 8.24593L9.95793 13.5795C9.7344 13.8326 9.42685 13.9829 9.10068 13.9986C8.77452 14.0143 8.45546 13.8941 8.21136 13.6635L5.39027 10.9967C5.15439 10.7584 5.01485 10.4319 5.00112 10.0862C4.98739 9.74056 5.10055 9.40273 5.3167 9.14413C5.53285 8.88553 5.83506 8.72641 6.15949 8.70038C6.48392 8.67435 6.80515 8.78345 7.05534 9.00463L8.96491 10.8087L12.8304 6.42186C12.943 6.29403 13.0782 6.19105 13.2283 6.11879C13.3783 6.04653 13.5403 6.0064 13.7049 6.00071C13.8696 5.99501 14.0336 6.02385 14.1878 6.08559C14.3419 6.14733 14.4831 6.24075 14.6033 6.36052C14.7235 6.48029 14.8204 6.62406 14.8883 6.78364C14.9563 6.94321 14.994 7.11545 14.9993 7.29052C15.0047 7.4656 14.9776 7.64008 14.9195 7.80401Z'
						fill='#632DBC'
						className='Vector'
					/>
				</Svg>
			)

		default:
			return <></>
	}
}
