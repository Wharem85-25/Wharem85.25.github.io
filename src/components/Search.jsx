import React from 'react';
import SearchButton from '../assets/icons/search-icon.svg';
import '../assets/styles/Search.css';

const Search = () => {
	return (
		<div className="header">
			<div className="search">
				<input placeholder="Search GIPHY" type="text" className="letter"></input>
				<div className="button">
					<img src={SearchButton} className="image"></img>
				</div>
			</div>
		</div>
	);
};

export default Search;
