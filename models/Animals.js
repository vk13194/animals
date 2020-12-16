const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	postedBy: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	},
	likes: [
		{
		user:{
		type: Schema.Types.ObjectId,
		ref: 'user'
	}}],
	title: {
		type: String,
		required: true
	},
	body: {
		type: String
	},
	photo: {
        type: String,
        default:'no photo'
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Post', postSchema);
