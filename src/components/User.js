import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import axios from 'axios';

function User() {

	const [loaded, setLoaded] = useState(false);
	const [user, setUser] = useState({});

	let { id } = useParams();

	useEffect(() => {

		axios.get(`http://localhost:5000/${id}`)
		.then(res => {

			const {data} = res;

			console.log(data);

		})

		
		

		// axios.post("http://localhost:5000/add", {

		// 		name : "fightclub",
		// 		image : "placeholder",
		// 		nudity : {
		// 			none : 3,
		// 			mild : 12,
		// 			moderate : 230,
		// 			severe : 345
		// 		},
		// 		violence : {
		// 			none : 3,
		// 			mild : 12,
		// 			moderate : 999,
		// 			severe : 345
		// 		},
		// 		profanity : {
		// 			none : 233,
		// 			mild : 12,
		// 			moderate : 230,
		// 			severe : 345
		// 		},
		// 		drugs : {
		// 			none : 3,
		// 			mild : 3546,
		// 			moderate : 230,
		// 			severe : 345
		// 		},
		// 		intense : {
		// 			none : 3,
		// 			mild : 23423,
		// 			moderate : 230,
		// 			severe : 345
		// 		}
		// 	})
		// 	.then(res => console.log(res))


		setLoaded(true);



	},[])


	return (
		<div>
			{
				loaded ? <p>POSTED!!!</p> : <p>loading...</p>

			}
		</div>
	)
}

export default User
