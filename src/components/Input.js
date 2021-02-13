import React, {useState, useEffect, useRef} from 'react';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

function Input() {

	const [loaded, setLoaded] = useState(false);
	const [user, setUser] = useState({});
	const [username, setUsername] = useState('');

	useEffect(() => {

		// fetch("http://localhost:5000/?name=barisayyildiz")
		// .then(res => res.json)
		// .then(data => {

		// 	const {username, password} = data;
			
		// 	console.log(data);

		// 	setUser({username, password})
		// 	setLoaded(true);

		// })

		fetch("http://localhost:5000/?name=barisayyildiz")
		.then(res => res.json())
		.then(data => {

			const {username, password} = data;

			// console.log({username, password});

			setLoaded(true);
			setUser({username, password});

		})

	}, [])

	const clickHandler = () => {

		let query = (username).split(" ").join("+")

		// window.location = `/?name=${username}`;

		console.log(window);
		window.location = `/${query}`;

		

	}



	return (
	
		<div>

			<input placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}></input>
			<button onClick={clickHandler}>Search</button>
	
			
		</div>



	)
}

export default Input
