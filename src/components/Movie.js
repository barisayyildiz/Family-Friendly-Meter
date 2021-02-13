import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import axios from 'axios';

function Movie() {

	const [loaded, setLoaded] = useState(false);
	const [movie, setMovie] = useState({});

	let { id } = useParams();

	useEffect(() => {

		axios.get(`http://localhost:5000/${id}`)
		.then(res => {

			const {data} = res;

			setMovie(data);

			console.log(data);
			
			setLoaded(true);
		})




	},[])


	return (
		<div>
			{
				loaded ? 
				
				<>

					<div>
						<p style={{fontStyle : 'bold', fontSize : '1.5rem'}}>Sex and Nudity</p>
						<p>{movie.nudity.none} found none</p>
						<p>{movie.nudity.mild} found mild</p>
						<p>{movie.nudity.moderate} found moderate</p>
						<p>{movie.nudity.severe} found severe</p>
					</div>

					<div>
						<p style={{fontStyle : 'bold', fontSize : '1.5rem'}}>Violence and Gore</p>
						<p>{movie.violence.none} found none</p>
						<p>{movie.violence.mild} found mild</p>
						<p>{movie.violence.moderate} found moderate</p>
						<p>{movie.violence.severe} found severe</p>
					</div>

					<div>
						<p style={{fontStyle : 'bold', fontSize : '1.5rem'}}>Profanity</p>
						<p>{movie.profanity.none} found none</p>
						<p>{movie.profanity.mild} found mild</p>
						<p>{movie.profanity.moderate} found moderate</p>
						<p>{movie.profanity.severe} found severe</p>
					</div>

					<div>
						<p style={{fontStyle : 'bold', fontSize : '1.5rem'}}>Alcohol, Drugs and Smoking</p>
						<p>{movie.drugs.none} found none</p>
						<p>{movie.drugs.mild} found mild</p>
						<p>{movie.drugs.moderate} found moderate</p>
						<p>{movie.drugs.severe} found severe</p>
					</div>

					<div>
						<p style={{fontStyle : 'bold', fontSize : '1.5rem'}}>Frightening and Intense Scenes</p>
						<p>{movie.intense.none} found none</p>
						<p>{movie.intense.mild} found mild</p>
						<p>{movie.intense.moderate} found moderate</p>
						<p>{movie.intense.severe} found severe</p>
					</div>



				</>

				: <p>Loading...</p>

			}
		</div>
	)
}

export default Movie
