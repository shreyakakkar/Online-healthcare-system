var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Don = new Schema({
	name : String,
	age : String,
	bloodGroup : String,
	mobNo: String,
	//state: String,
	city: String,
	//address: String,
	//status: {type : String, default :'active'}
	lastdonated: String
	// lastdon: Date("<YYYY-mm-dd>")
	//username and password n name bhi wahi se lenge fir .... logged in user hi hoga donor bhi
	// so id ki refrence banani padegi
});

// Don.pre('save', function(next){
// 	var don = this;
// 	don.lastdon= new Date(don.lastdonated);
// 	});

//check that last donated date k karan state->active ya not active hogi

module.exports = mongoose.model('donor', Don);