const mongoose = require('mongoose');


const SectionSchema = new mongoose.Schema({

	none : {
		type : Number,
		required: true
	},
	mild : {
		type : Number,
		required: true
	},
	moderate : {
		type : Number,
		required: true
	},
	severe : {
		type : Number,
		required: true
	}

})


const MovieSchema = new mongoose.Schema({

	name: {
    type: String,
    required: true
	},

	image : {
		type : String,
		required: true
	},

	nudity : SectionSchema,
	violence : SectionSchema,
	profanity : SectionSchema,
	drugs : SectionSchema,
	intense : SectionSchema

})

let movieModel = mongoose.model('testCollection', MovieSchema, 'testCollection');

module.exports = movieModel;
