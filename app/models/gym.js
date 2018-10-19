var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var GymSchema = new Schema({

	name: String,
	city: String,
	charges: Number,
	description: String,
	phoneNo: Number,
	address: String,
	lat: Number,
	lng: Number,
	username: { type:String, required: true, index:{unique: true}},
	password: { type:String, required: true, select: false}
});


GymSchema.pre('save', function(next){
	var gym = this;

	if(!gym.isModified('password')) return next();

	bcrypt.hash(gym.password, null, null, function(err, hash){
		if(err) return next(err);

		gym.password = hash;
		next();

	});
});

GymSchema.methods.comparePassword = function(password){
	var gym = this;
	return bcrypt.compareSync(password, gym.password);
}

module.exports = mongoose.model('Gym', GymSchema);
