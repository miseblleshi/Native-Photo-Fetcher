import { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { imageContext } from '../(tabs)';
import styles from '../(tabs)/_styles';

export default function FetchPhotos() {
	const { setPhotoCount, photoCount, setPageNumber } = useContext(imageContext);

	const getNew = () => {
		setPhotoCount(4);
		let page: number;
		do {
			page = Math.floor(Math.random() * 100);
		} while (page === photoCount);
		setPageNumber(page);
	};

	return (
		<TouchableOpacity style={styles.specialButton} onPress={getNew} activeOpacity={0.85}>
			<Text style={styles.specialButtonText}>Fetch New Photos</Text>
		</TouchableOpacity>
	);
}