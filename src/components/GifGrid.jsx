import GifItem from './GifItem';
import UseFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
	const { images, isLoading } = UseFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>

			{isLoading && <h2>Cargando...</h2>}

			<div className="card-grid">
				{images.map(image => (
					<GifItem key={image.id} title={image.title} url={image.url} />
				))}
			</div>
		</>
	);
};

export default GifGrid;
