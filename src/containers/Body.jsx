import React, {useState} from 'react'
import useGetGifs from '../hooks/useGetGifs';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid, Gif } from '@giphy/react-components'
import ResizeObserver from "react-resize-observer";
import '../assets/styles/Body.css';

const giphyFetch = new GiphyFetch("ntvHS8Vuzcbz5X5E4Ija4o2pFODP5BIh");

function GridDemo({onGifClick}) {
	const fetchGifs = (offset) =>
	giphyFetch.trending({ offset, limit: 10 });
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


const Body = () => {
	const [modalGif, setModalGif] = useState();

	return (
		<section className="container">
			<GridDemo
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

export default Body;
