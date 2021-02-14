import React, {useState, useEffect, useRef} from 'react';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

import { Input } from 'antd';

import 'antd/dist/antd.css';

const { Search } = Input;


function UserInput() {

	const [loaded, setLoaded] = useState(false);
	const [movie, setMovie] = useState({});


	// const clickHandler = () => {

	// 	let arr = (movie).split(" ");

	// 	arr = arr.map(s => s.charAt(0).toUpperCase() + s.slice(1));

	// 	let query = arr.join("+");


	// 	// let query = (movie).split(" ").join("+")

	// 	console.log(query);

	// 	// window.location = `/?name=${username}`;

	// 	window.location = `/${query}`;

	// }

	const onSearch = (value) => {

		let arr = (value).split(" ");

		arr = arr.map(s => s.charAt(0).toUpperCase() + s.slice(1));

		let query = arr.join("+");

		window.location = `/${query}`;

	}



	return (
	
		<div style={{marginTop : '5vh',
		width : '50%',
		margin : '10vh auto',
		fontSize : '1.3rem',
		fontFamily: 'Work Sans'}}>

			<h1>Cringe-o-Meter</h1>

			{/* <input placeholder="Search for a movie" onChange={(e) => setMovie(e.target.value)} style={{fontSize : '2rem'}}></input>
			<button onClick={clickHandler} style={{fontSize : '2rem'}}>Search</button> */}

			<Search
				placeholder="Search for a movie"
				allowClear
				enterButton="Search"
				size="large"
				onSearch={onSearch}
			/>

			
		</div>



	)
}

export default UserInput
