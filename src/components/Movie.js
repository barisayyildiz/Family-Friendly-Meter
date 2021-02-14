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

	let { id } = useParams();

	useEffect(() => {

		let arr = id.split("+");
		arr = arr.map(s => s.charAt(0).toUpperCase() + s.slice(1))
		
		console.log("arr : ", arr)


		axios.get(`https://floating-thicket-22821.herokuapp.com/${id}`)
		.then(res => {

			const {data} = res;

			setMovie(data);

			console.log(data);
			
			setLoaded(true);
		})




	},[])


	return (
		<div class={`container ${loaded ? 'loaded' : 'not-loaded'}`}>
			{
				loaded ? 
				
				<>

					<img src={movie.image}></img>

					<Dropdown data={movie}></Dropdown>

					{/* <div class="info">

						<div>
							<p style={{fontStyle : 'bold', fontSize : '1.5rem'}}>Sex and Nudity</p>
							<p>{movie.nudity.none} found none</p>
							<p>{movie.nudity.mild} found mild</p>
							<p>{movie.nudity.moderate} found moderate</p>
							<p>{movie.nudity.severe} found severe</p>
							{
								movie.nudity_notes.map(i => <p>{i}</p>)
							}
						</div>

						<hr></hr>

						<div>
							<p style={{fontStyle : 'bold', fontSize : '1.5rem'}}>Violence and Gore</p>
							<p>{movie.violence.none} found none</p>
							<p>{movie.violence.mild} found mild</p>
							<p>{movie.violence.moderate} found moderate</p>
							<p>{movie.violence.severe} found severe</p>
							{
								movie.violence_notes.map(i => <p>{i}</p>)
							}
						</div>

						<hr></hr>

						<div>
							<p style={{fontStyle : 'bold', fontSize : '1.5rem'}}>Profanity</p>
							<p>{movie.profanity.none} found none</p>
							<p>{movie.profanity.mild} found mild</p>
							<p>{movie.profanity.moderate} found moderate</p>
							<p>{movie.profanity.severe} found severe</p>
							{
								movie.profanity_notes.map(i => <p>{i}</p>)
							}
						</div>

						<hr></hr>

						<div>
							<p style={{fontStyle : 'bold', fontSize : '1.5rem'}}>Alcohol, Drugs and Smoking</p>
							<p>{movie.drugs.none} found none</p>
							<p>{movie.drugs.mild} found mild</p>
							<p>{movie.drugs.moderate} found moderate</p>
							<p>{movie.drugs.severe} found severe</p>
							{
								movie.drugs_notes.map(i => <p>{i}</p>)
							}
						</div>

						<hr></hr>

						<div>
							<p style={{fontStyle : 'bold', fontSize : '1.5rem'}}>Frightening and Intense Scenes</p>
							<p>{movie.intense.none} found none</p>
							<p>{movie.intense.mild} found mild</p>
							<p>{movie.intense.moderate} found moderate</p>
							<p>{movie.intense.severe} found severe</p>
							{
								movie.intense_notes.map(i => <p>{i}</p>)
							}
						</div>

						<hr></hr>

					</div> */}



				</>

				: <p>Loading...</p>

			}
		</div>
	)
}

export default Movie
