import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import axios from 'axios';

import '../style/movie.css';

import Dropdown from './Dropdown';

function Movie() {

	const [loaded, setLoaded] = useState(false);
	const [movie, setMovie] = useState({});
	const [error, setError] = useState(false);
	const [options, setOptions] = useState([]);

	let { id } = useParams();

	useEffect(() => {

		let arr = id.split("+");
		arr = arr.map(s => s.charAt(0).toUpperCase() + s.slice(1))


		axios.get(`https://floating-thicket-22821.herokuapp.com/${id}`)
		.then(res => {

			const {data} = res;

			setMovie(data);
			
			setLoaded(true);
		})
		.catch(e => {
	
			// console.error("error : ", e);
			
			setError(true);
	
		})

	},[])


	return (
		
		<div className={`container ${loaded ? 'loaded' : 'not-loaded'}`}>
			{
				loaded ? 
				
				<>

					<img src={movie.image}></img>

					<Dropdown data={movie}></Dropdown>

				</>

				: 
				
				error ? 
				
				<>
					<h1 style={{fontSize : '2.5rem', marginTop : '10vh'}}>Movie not found 😭</h1>
				</>

				:
				<>
					<p>Loading...</p>
				</>


			}
 

		</div>
	)
}

export default Movie
