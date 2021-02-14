const got = require("got");
const jsdom = require("jsdom");
const fetch = require("node-fetch");

require('dotenv').config();

function promiseApiCall(name)
{
	return new Promise( async (resolve, reject) => {

		let url = `http://www.omdbapi.com/?apikey=${process.env.KEY}&t=${name}&plot=short`;

		try
		{
			let res = await fetch(url);
			let data = await res.json();

			const {imdbID, Year, Poster} = data;

			console.log("Data : ", data);


			try
			{
				obj = await promiseWebScrapping(imdbID);

				obj = {...obj, name, image : Poster};

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


			const guide = {
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

			let warnings = {
				"nudity_notes" : [],
				"violence_notes" : [],
				"profanity_notes" : [],
				"drugs_notes" : [],
				"intense_notes" : []
			}

			ul = pagedom.window.document.querySelectorAll("ul.ipl-zebra-list");
			
			nudity_notes = ul[0].querySelectorAll("li.ipl-zebra-list__item");
			violence_notes = ul[1].querySelectorAll("li.ipl-zebra-list__item");
			profanity_notes = ul[2].querySelectorAll("li.ipl-zebra-list__item");
			drugs_notes = ul[3].querySelectorAll("li.ipl-zebra-list__item");
			intense_notes = ul[4].querySelectorAll("li.ipl-zebra-list__item");
			
			// clearing textContent
			nudity_notes.forEach(i => warnings.nudity_notes.push((i.textContent.replace(/[\n\r]+|[\s]{2,}/g, "")).replace("Edit","")))
			violence_notes.forEach(i => warnings.violence_notes.push((i.textContent.replace(/[\n\r]+|[\s]{2,}/g, "")).replace("Edit","")))
			profanity_notes.forEach(i => warnings.profanity_notes.push((i.textContent.replace(/[\n\r]+|[\s]{2,}/g, "")).replace("Edit","")))
			drugs_notes.forEach(i => warnings.drugs_notes.push((i.textContent.replace(/[\n\r]+|[\s]{2,}/g, "")).replace("Edit","")))
			intense_notes.forEach(i => warnings.intense_notes.push((i.textContent.replace(/[\n\r]+|[\s]{2,}/g, "")).replace("Edit","")))



			let obj = {...guide, ...warnings}


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

