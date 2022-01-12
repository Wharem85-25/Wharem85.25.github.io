import { useEffect, useState } from "react";
import axios from 'axios';

const useGetGifs = (API)=> {
	const [gifs, setGifs] = useState([]);

	useEffect(async() => {
		const res = await axios(API);
		setGifs(res.data);
	}, []);
	return gifs;
};

export default useGetGifs;
