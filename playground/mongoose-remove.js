const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*Todo.remove({}).then((result) => {
	console.log(result);
}); */

Todo.findByIdAndRemove({ _id: '5d2b9c27a8bfdfd824b03f3c'}).then((todo) => {
	console.log(todo);
});