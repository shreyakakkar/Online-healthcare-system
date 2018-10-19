var mongoose = require('mongoose');
var mongooses = require('mongooses');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var DoctorSchema = new Schema({

	name: {type: String, required: true},
 	username: {type: String, required: true, index:{unique: true}},
	password: {type: String, required: true, select: false},
	email: {type: String, 
			required: true, 
			unique: true,
			trim: true,
			match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
	specialisation: String,
	reg_no: {type: Number, required: true},
	address: {type: String, required: true},
	lat: Number,
	lng: Number,
	phone_no1: {type: Number, required: true},
	phone_no2: Number,
	

});

DoctorSchema.pre('save', function(next){
	var user = this;

	if(!user.isModified('password')) return next();

	bcrypt.hash(user.password, null, null, function(err, hash){
		if(err) return next(err);

		user.password = hash;
		next();

	});
});

DoctorSchema.methods.comparePassword = function(password){
	var user = this;
	return bcrypt.compareSync(password, user.password);
}

module.exports = mongoose.model('Doctor', DoctorSchema);
