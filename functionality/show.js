var show = function(todoList, title) {
	//throw error if file is empty
	if (todoList.length === 0) {
		throw new Error('\nTodo-list is empty!');
	}

	//if title is not given - show all records, otherwise - one record
	if (title === undefined) {
		todoList.forEach(function(todo, index) {
			console.log(`[${index+1}]: ${todo.title}\n\t ${todo.body}`);
		});
	} else {

		//finds record with given title
		var requestedTodo = todoList.find(
			function(todo) {
				return todo.title.toLowerCase() === title.toLowerCase();	
				}	
		);

		//shows record if record exists - otherwise throws error
		if (requestedTodo) {
			console.log(`${requestedTodo.title}: ${requestedTodo.body}`);
		} else {
			throw new Error('\nThere\'s no such record in the todo-list.');
		}
	}
};

module.exports = show;