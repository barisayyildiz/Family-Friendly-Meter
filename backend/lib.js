const got = require("got");
const jsdom = require("jsdom");
const fetch = require("node-fetch");

// let fightClub = 'tt0137523';
// let wonderWoman = 'tt0451279';
// let imdbId = wonderWoman;


// let name = 'Fight+Club';
// let apiKey = '976e02f';


function promiseApiCall(name)
{
	return new Promise( async (resolve, reject) => {

		console.log("qweqweqw");

		let url = `http://www.omdbapi.com/?apikey=${'976e02f'}&t=${name}&plot=short`;

		try
		{
			let res = await fetch(url);
			let data = await res.json();

			const {imdbID} = data;

			console.log("dfgdfgdfg");


			try
			{
				obj = await promiseWebScrapping(imdbID);

				resolve(obj);

			}catch(e)
			{
				reject(e);
			}
		
		}catch(e)
		{
			reject(e);
		}

	})
} 


function promiseWebScrapping(imdbID)
{
	return new Promise( async (resolve, reject) => {

		const url = `https://www.imdb.com/title/${imdbID}/parentalguide`;

		try
		{
			let res = await got(url);

			let pagedom = new jsdom.JSDOM(res.body.toString());

			let arr = pagedom.window.document.querySelectorAll(".advisory-severity-vote__vote-button-container");


			const obj = {
				"nudity" : {

					"none" : parseInt( arr[0].children[0].lastElementChild.innerHTML ),
					"mild" : parseInt( arr[0].children[1].lastElementChild.innerHTML ),
					"moderate" : parseInt( arr[0].children[2].lastElementChild.innerHTML ),
					"severe" : parseInt( arr[0].children[3].lastElementChild.innerHTML )

				},
				"violence" : {

					"none" : parseInt( arr[1].children[0].lastElementChild.innerHTML ),
					"mild" : parseInt( arr[1].children[1].lastElementChild.innerHTML ),
					"moderate" : parseInt( arr[1].children[2].lastElementChild.innerHTML ),
					"severe" : parseInt( arr[1].children[3].lastElementChild.innerHTML )

				},
				"profanity" : {

					"none" : parseInt( arr[2].children[0].lastElementChild.innerHTML ),
					"mild" : parseInt( arr[2].children[1].lastElementChild.innerHTML ),
					"moderate" : parseInt( arr[2].children[2].lastElementChild.innerHTML ),
					"severe" : parseInt( arr[2].children[3].lastElementChild.innerHTML )

				},
				"drugs" : {

					"none" : parseInt( arr[3].children[0].lastElementChild.innerHTML ),
					"mild" : parseInt( arr[3].children[1].lastElementChild.innerHTML ),
					"moderate" : parseInt( arr[3].children[2].lastElementChild.innerHTML ),
					"severe" : parseInt( arr[3].children[3].lastElementChild.innerHTML )

				},
				"intense" : {

					"none" : parseInt( arr[4].children[0].lastElementChild.innerHTML ),
					"mild" : parseInt( arr[4].children[1].lastElementChild.innerHTML ),
					"moderate" : parseInt( arr[4].children[2].lastElementChild.innerHTML ),
					"severe" : parseInt( arr[4].children[3].lastElementChild.innerHTML )

				}
				
			}

			// console.log(obj);

			resolve(obj);

		}catch(e)
		{

			reject(e);

		}

		


	})
}



// apiCall(name, apiKey);

module.exports = promiseApiCall;


// TMDB
// d4abc07452f123e817af415515cc818e

// OMDB
// 976e02f

// fight club
// tt0137523


// class
// .advisory-severity-vote__vote-button-container

