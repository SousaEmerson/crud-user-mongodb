const User = require('../model/user');
const uuid = require('uuid');

const get = async () => {

	return await User.find();
}

const post = async (body) => {
	if (!body.name || !body.email ) {
		throw new Error('name and email are required');
	}

	const newUser = new User({
		_id: uuid.v4(),
		name: body.name,
		email: body.email	
	})


	await newUser.save();
	return { message: 'user has been successfuly created'};
}

const put = async (id, body) => {
	await User.findOneAndUpdate({ _id: id }, body )
	return { message: 'user has been successfuly updated'};
}

const del = async (id) => {
	await User.findOneAndDelete({ _id: id })
	return { message: 'user has been successfuly deleted'}
}





module.exports = { get, post, put, del };