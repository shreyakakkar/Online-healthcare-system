var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GymTrialSchema = new Schema({

	user_id : { type: Schema.Types.ObjectId, ref:'User'},
	gym_id : { type: Schema.Types.ObjectId, ref:'Gym'},
	date : String,
	time : String,
	username : String
});

module.exports = mongoose.model('GymTrial', GymTrialSchema);