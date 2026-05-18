import { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import styles, { PHOTO_WIDTH, PHOTO_HEIGHT } from '../(tabs)/_styles';
import { imageContext } from '../(tabs)';

type PhotoData = {
	id: string;
	author: string;
	url: string;
	download_url: string;
};

export default function Photo({ i }: { i: PhotoData }) {
	const { grayscale } = useContext(imageContext);
	let link = `https://picsum.photos/id/${i.id}/${Math.round(PHOTO_WIDTH)}/${PHOTO_HEIGHT}`;
	if (grayscale) link += '?grayscale';

	return (
		<View style={styles.photo}>
			<Image
				source={{ uri: link }}
				style={styles.photoImage}
				resizeMode="cover"
			/>
			<View style={styles.photoInfo}>
				<Text style={styles.photoAuthor}>{i.author}</Text>
				<Text style={styles.photoUrl} numberOfLines={1}>{i.url}</Text>
			</View>
		</View>
	);
}