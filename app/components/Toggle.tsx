import { useContext } from 'react';
import { View, Switch, Text } from 'react-native';
import { imageContext } from '../(tabs)';
import styles from '../(tabs)/_styles';

export default function Toggle() {
	const { grayscale, setGrayscale } = useContext(imageContext);

	return (
		<View style={styles.toggleContainer}>
			<Switch
				value={grayscale}
				onValueChange={setGrayscale}
				trackColor={{ false: '#ccc', true: '#686868' }}
				thumbColor="white"
			/>
			<Text style={styles.toggleLabel}>Make photos grayscale</Text>
		</View>
	);
}