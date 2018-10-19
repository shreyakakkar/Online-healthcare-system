var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MedSchema = new Schema({
	name:String,
	company:String,
	tabstrip:Number,
	pricetab:Number,
	pricestrip:Number,
	usage:[String],
	maindrug:String
});

module.exports = mongoose.model('Medi', MedSchema);