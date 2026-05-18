import { createContext, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './_styles';
import Toggle from '../components/Toggle';
import FetchPhotos from '../components/FetchPhotos';
import Photos from '../components/Photos';
import MorePhotos from '../components/MorePhotos';

type ImageContextType = {
	grayscale: boolean;
	setGrayscale: (v: boolean) => void;
	photoCount: number;
	setPhotoCount: React.Dispatch<React.SetStateAction<number>>;
	pageNumber: number;
	setPageNumber: (v: number) => void;
};

export const imageContext = createContext<ImageContextType>({} as ImageContextType);

export default function HomeScreen() {
	const [grayscale, setGrayscale] = useState(false);
	const [photoCount, setPhotoCount] = useState(4);
	const [pageNumber, setPageNumber] = useState(Math.floor(Math.random() * 100));

	return (
		<imageContext.Provider value={{ grayscale, setGrayscale, photoCount, setPhotoCount, pageNumber, setPageNumber }}>
			<ScrollView style={styles.container} contentContainerStyle={styles.content}>
				<Text style={styles.title}>Photo Fetcher</Text>
				<View style={styles.headerRow}>
					<Toggle />
					<FetchPhotos />
				</View>
				<Photos />
				<MorePhotos />
			</ScrollView>
		</imageContext.Provider>
	);
}