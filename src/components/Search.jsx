import React, { useState } from "react";
import Body from '../containers/Body';
// import { GiphyFetch } from '@giphy/js-fetch-api';
// import { Grid } from '@giphy/react-components'
// import ResizeObserver from "react-resize-observer";

import SearchButton from '../assets/icons/search-icon.svg'
import '../assets/styles/Search.css';

// const giphyFetch = new GiphyFetch("ntvHS8Vuzcbz5X5E4Ija4o2pFODP5BIh");
// const search = document.getElementById('search').value;

// function SearchGif({onGifClick}) {
// 	const fetchGifs = (offset) =>
// 	giphyFetch.search(search, { offset, limit: 10 });
// 	const [width, setWidth] = useState(window.innerWidth);
// 	return(
// 		<>
// 			<Grid
// 				onGifClick={onGifClick}
// 				fetchGifs={fetchGifs}
// 				width={width}
// 				columns={3}
// 				gutter={6}
// 			/>
// 			<ResizeObserver
// 				onResize={({width}) => {
// 					setWidth(width);
// 				}}
// 			/>
// 		</>
// 	);
// }



const Search = () => {
	const [toggleGif, setToggleGif] = useState(true);

	const handleToggle = () => {
		setToggleGif(!toggleGif);
	}

	return (
		<div className="header">
			<div className="search">
				<input id="search" placeholder="Search GIPHY" type="text" className="letter"></input>
				<button className="button">
					<img src={SearchButton} className="image" onClick={handleToggle}/>
				</button>
			</div>
			{toggleGif && <Body/>}
		</div>
	);
};

export default Search;

// function SearchGif({onGifClick}) {
// 	const search = document.getElementById('search').value;
// 	const fetchGifs = (offset) =>
// 	giphyFetch.search(search, { offset, limit: 10 });
// 	const [width, setWidth] = useState(window.innerWidth);
// 	return(
// 		<>
// 			<Grid
// 				onGifClick={onGifClick}
// 				fetchGifs={fetchGifs}
// 				width={width}
// 				columns={3}
// 				gutter={6}
// 			/>
// 			<ResizeObserver
// 				onResize={({width}) => {
// 					setWidth(width);
// 				}}
// 			/>
// 		</>
// 	);
// }
