import React, {useState, useEffect, useRef} from 'react';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

import { Input, AutoComplete } from 'antd';

import 'antd/dist/antd.css';

import '../style/input.css';

import axios from 'axios';


const { Search } = Input;


function UserInput() {

	const [loaded, setLoaded] = useState(false);
	const [movie, setMovie] = useState({});
	const [options, setOptions] = useState([]);


	const onSearch = (value) => {

		let arr = (value).split(" ");

		arr = arr.map(s => s[0].toUpperCase() + s.slice(1).toLowerCase());

		let query = arr.join("+");

		// window.location = `/${query}`;

		window.location = `/Family-Friendly-Meter/#/${query}`;

	}

	const getResults = (value) => {

		axios.get(`http://localhost:5000/search?name=${value}`)
		.then(res => {

			let {data} = res;

			console.log(data, data.length);

			data = data.map(movie => movie.name.split("+").join(" "))

			console.log(data, data.length)

			let value = [];
			
			for(let i=0; i<data.length; i++)
			{
				value.push({
					label : (
						<a href={ "http://localhost:3000/Family-Friendly-Meter/#/" + data[i].split(" ").join("+") }
						style={{display : "block",
						width : "100%"}}
						>
							{data[i]}</a>
					)
				})
			}

			setOptions(value);


		})

	}



	return (
	
		<div className="inputWrapper">

			<h1>Family-Friendly-Meter</h1>

			<AutoComplete style={{
				width : '100%'
			}}
			
			options = {options}

			onSearch={(value) => getResults(value)}

			
			>

				<Search
					placeholder="Search for a movie"
					allowClear
					enterButton="Search"
					size="large"
					onSearch={onSearch}
					
				/>
			
			</AutoComplete>

			
		</div>



	)
}

export default UserInput
