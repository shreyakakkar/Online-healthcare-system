var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var YogaSchema = new Schema({

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


YogaSchema.pre('save', function(next){
	var yoga = this;

	if(!yoga.isModified('password')) return next();

	bcrypt.hash(yoga.password, null, null, function(err, hash){
		if(err) return next(err);

		yoga.password = hash;
		next();

	});
});

YogaSchema.methods.comparePassword = function(password){
	var yoga = this;
	return bcrypt.compareSync(password, yoga.password);
}

module.exports = mongoose.model('Yoga', YogaSchema);
