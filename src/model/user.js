const mongoose = require('mongoose');

const userSchema = mongoose.Schema({ 
	_id: { type: String },
	name: {type: String },
	email: { type: String}
}, { 
	_id: false,
	versionKey: false
})

module.exports = mongoose.model('User', userSchema );