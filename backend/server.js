const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Model = require("./Models");

const apiCall = require("./lib");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//body parser (post requests)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = "mongodb+srv://baris:123456abcd@cluster0.jmbto.mongodb.net/mydb?retryWrites=true&w=majority"

// const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology : true }, () => {

	console.log("MongoDB database connection established successfully");

});



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.get("/:movie", (req, res) => {

	// res.send({
	// 	msg : 'here is the movie'
	// })

	const {movie} = req.params;

	Model.findOne({name : movie}, async (err, data) => {

		if(data == null)
		{
			// res.send({
			// 	msg : "film bulunamadi"
			// })
			// res.end();

			console.log("apicall henüz çağrılmadı")

			const obj = await apiCall(movie);

			console.log("apicall yukarıda çağrıldı")

			res.send(obj);
			res.end();

			// res.send({
			// 	msg : 'test'
			// })
			// res.end();

		}else
		{
			console.log("başarılı!!!");
			res.send(data);
			res.end();
		}


	})



})



app.post("/add", (req, res) => {

	console.log(req.body);

	const {name, image, nudity, violence, profanity, drugs, intense} = req.body;

	// console.log(name, image, nudity, violence, profanity, drugs, intense);

	const movie = {
		name,image,nudity,violence,profanity,drugs,intense
	}

	const newMovie = new Model(movie);

	newMovie.save()
	.then(() => res.json('Movie Added'))
	.catch(err => res.status(400).json('Error: ' + err));


	// const {username, password} = req.body;

	// const newUser = new Model({username, password});

	// newUser.save()
	// .then(() => res.json('User Added'))
	// .catch(err => res.status(400).json('Error: ' + err));


})

// app.get("/:name", (req, res) => {

// 	// console.log("queries : ", req.query);

// 	Model.findOne({username : req.params.name}, (err, data) => {

// 		console.log(data);

// 		// if(data == null)
// 		// {
// 		// 	res.json({
// 		// 		code : 'No such user exists'
// 		// 	})
// 		// 	res.end();
// 		// }
		
// 		res.send(data)

// 	})


// })


