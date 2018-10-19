var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SymSchema = new Schema({
	
	disease: String,
	symptoms: [String],
});

module.exports = mongoose.model('Symp', SymSchema);