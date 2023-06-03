import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

const UseFetchGifs = category => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getGifs(category).then(newImages => setImages(newImages));
		setIsLoading(false);
	}, []);
	return {
		images,
		isLoading
	};
};

export default UseFetchGifs;
