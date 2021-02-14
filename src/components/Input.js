import React, {useState, useEffect, useRef} from 'react';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

function Input() {

	const [loaded, setLoaded] = useState(false);
	const [movie, setMovie] = useState({});


	const clickHandler = () => {

		let arr = (movie).split(" ");

		arr = arr.map(s => s.charAt(0).toUpperCase() + s.slice(1));

		let query = arr.join("+");


		// let query = (movie).split(" ").join("+")

		console.log(query);

		// window.location = `/?name=${username}`;

		window.location = `/${query}`;

	}



	return (
	
		<div style={{marginTop : '5vh'}}>

			<input placeholder="Search for a movie" onChange={(e) => setMovie(e.target.value)} style={{fontSize : '2rem'}}></input>
			<button onClick={clickHandler} style={{fontSize : '2rem'}}>Search</button>
	
			
		</div>



	)
}

export default Input
