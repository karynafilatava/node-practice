var remove = function(todoList, title) {

	//finds index of record with given title
	var index = todoList.findIndex(function(todo) {
		return todo.title.toLowerCase() === title.toLowerCase();
	});

	//throws error if there's no such record, otherwise - removes record
	if (index === -1) {
		throw new Error('\nThere\'s no such record in the todo-list.');
	} else {
		todoList.splice(index, 1);
	}
}

module.exports = remove;