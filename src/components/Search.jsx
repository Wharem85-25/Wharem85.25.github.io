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

