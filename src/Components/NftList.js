import { ScrollView } from 'react-native'
import { NftItem } from './NftItem'

export const NftList = ({ data }) => {
	return (
		<ScrollView style={{ marginBottom: 50 }}>
			{/* {data.map((n) => (
				<NftItem />
			))} */}
			<NftItem
				image='../../assets/nft-image.png'
				number='#1957'
				title='Bored Ape Yacht Club'
				priceEth={6.64}
				priceUsd='1.243.42'
			/>
			<NftItem
				image='../../assets/nft-image.png'
				number='#1957'
				title='Bored Ape Yacht Club'
				priceEth={6.64}
				priceUsd='1.243.42'
			/>
			<NftItem
				image='../../assets/nft-image.png'
				number='#1957'
				title='Bored Ape Yacht Club'
				priceEth={6.64}
				priceUsd='1.243.42'
			/>
			<NftItem
				image='../../assets/nft-image.png'
				number='#1957'
				title='Bored Ape Yacht Club'
				priceEth={6.64}
				priceUsd='1.243.42'
			/>
			<NftItem
				image='../../assets/nft-image.png'
				number='#1957'
				title='Bored Ape Yacht Club'
				priceEth={6.64}
				priceUsd='1.243.42'
			/>
			<NftItem
				image='../../assets/nft-image.png'
				number='#1957'
				title='Bored Ape Yacht Club'
				priceEth={6.64}
				priceUsd='1.243.42'
			/>
			<NftItem
				image='../../assets/nft-image.png'
				number='#1957'
				title='Bored Ape Yacht Club'
				priceEth={6.64}
				priceUsd='1.243.42'
			/>
			<NftItem
				image='../../assets/nft-image.png'
				number='#1957'
				title='Bored Ape Yacht Club'
				priceEth={6.64}
				priceUsd='1.243.42'
			/>
			<NftItem
				image='../../assets/nft-image.png'
				number='#1957'
				title='Bored Ape Yacht Club'
				priceEth={6.64}
				priceUsd='1.243.42'
			/>
		</ScrollView>
	)
}
