import { useState } from "react";
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components'
import ResizeObserver from "react-resize-observer";

const giphyFetch = new GiphyFetch("ntvHS8Vuzcbz5X5E4Ija4o2pFODP5BIh");

function SearchGif({onGifClick}) {
	const search = document.getElementById('search').value;
	const fetchGifs = (offset) =>
	giphyFetch.search(search, { offset, limit: 10 });
	const [width, setWidth] = useState(window.innerWidth);
	return(
		<>
			<Grid
				onGifClick={onGifClick}
				fetchGifs={fetchGifs}
				width={width}
				columns={3}
				gutter={6}
			/>
			<ResizeObserver
				onResize={({width}) => {
					setWidth(width);
				}}
			/>
		</>
	);
}

export default SearchGif;
