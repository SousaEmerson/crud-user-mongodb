const adapter = require('../adapter/user');

const get = async (req, res) => {

	const result = await adapter.get();

	return res.json(result);

}

const post = async (req, res) => {
	const {	body } = req
	try {
		const result =  await adapter.post(body)
		return res.json(result);
	} catch (err) {
		return res.json({ message: err.message })
	}
}

const put = async (req, res) => {
	const { id } = req.params
	const { body } = req
	const result = await adapter.put(id, body)
	return res.json(result)

}

const del  = async (req , res) => {
	const { id } = req.params
	const result = await adapter.del(id)
	return res.json(result)
}


module.exports = { get, post, put, del}; 