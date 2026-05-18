import { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { imageContext } from '../(tabs)';
import styles from '../(tabs)/_styles';
import Skeleton from './Skeleton';
import Photo from './Photo';

type PhotoData = {
	id: string;
	author: string;
	url: string;
	download_url: string;
};

async function getData(count: number, page: number): Promise<PhotoData[]> {
	try {
		const link = `https://picsum.photos/v2/list?page=${page}&limit=${count}`;
		const res = await fetch(link);
		return await res.json();
	} catch (err) {
		console.error(err);
		return [];
	}
}

export default function Photos() {
	const { photoCount, pageNumber } = useContext(imageContext);
	const [images, setImages] = useState<PhotoData[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		getData(photoCount, pageNumber).then(data => {
			setImages(data);
			setLoading(false);
		});
	}, [photoCount, pageNumber]);

	if (loading) {
		return (
			<View style={styles.photoGrid}>
				<Skeleton />
				<Skeleton />
				<Skeleton />
				<Skeleton />
			</View>
		);
	}

	return (
		<View style={styles.photoGrid}>
			{images.map(i => <Photo key={i.id} i={i} />)}
		</View>
	);
}