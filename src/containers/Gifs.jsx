import React, {useState} from 'react'
import { Gif } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components'
import ResizeObserver from "react-resize-observer";

import '../assets/styles/Body.css';
const { config } = require('../codigo');

const giphyFetch = new GiphyFetch(config.apiKey);

const Gifs = () => {
  function SearchGif({onGifClick}) {
		const search = document.getElementById('search').value;
		const fetchGifs = (offset) =>
		giphyFetch.search(search || "cats", { offset, limit: 10 });
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

	const [modalGif, setModalGif] = useState();
	return (
		<section className="container">
			<SearchGif
        onGifClick={(gif, e) => {
          console.log("gif", gif);
          e.preventDefault();
          setModalGif(gif);
        }}
      />
			{modalGif && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0, 0, 0, .8)"
          }}
          onClick={(e) => {
            e.preventDefault();
            setModalGif(undefined);
          }}
        >
          <Gif gif={modalGif} width={200} />
        </div>
      )}
		</section>
	);
};

export default Gifs;
