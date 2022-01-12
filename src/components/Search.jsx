import React, { useState } from "react";
import Gifs from '../containers/Gifs';

import SearchButton from '../assets/icons/search-icon.svg'
import '../assets/styles/Search.css';


const Search = () => {
	const [toggle, setToggle] = useState(true);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	return (
		<div className="header">
			<div className="search">
				<input id="search" placeholder="Search GIPHY" type="text" className="letter"></input>
				<button className="button">
					<img src={SearchButton} className="image" onClick={handleToggle}/>
				</button>
			</div>
			{toggle && <Gifs />}
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
