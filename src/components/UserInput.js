import React, {useState, useEffect, useRef} from 'react';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

import { Input } from 'antd';

import 'antd/dist/antd.css';

import '../style/input.css';

const { Search } = Input;


function UserInput() {

	const [loaded, setLoaded] = useState(false);
	const [movie, setMovie] = useState({});


	const onSearch = (value) => {

		let arr = (value).split(" ");

		arr = arr.map(s => s[0].toUpperCase() + s.slice(1).toLowerCase());

		let query = arr.join("+");

		// window.location = `/${query}`;

		window.location = `/Family-Friendly-Meter/#/${query}`;

	}



	return (
	
		<div className="inputWrapper">

			<h1>Family-Friendly-Meter</h1>

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
