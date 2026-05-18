import { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { imageContext } from '../(tabs)';
import styles from '../(tabs)/_styles';

export default function MorePhotos() {
	const { setPhotoCount } = useContext(imageContext);

	return (
		<TouchableOpacity
			style={[styles.specialButton, styles.morePhotosButton]}
			onPress={() => setPhotoCount(prev => prev + 4)}
			activeOpacity={0.85}
		>
			<Text style={styles.specialButtonText}>More Photos</Text>
		</TouchableOpacity>
	);
}